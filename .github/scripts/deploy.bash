#!/bin/bash
set -e
app_dir="$(mktemp -d)/app-staging"
mkdir $app_dir

identity_file=$(mktemp)
chmod 600 "$identity_file"

echo "$SSH_PRIVATE_KEY" > $identity_file
printf '%s\n' "$(cat $identity_file | tr -s '\n')" > $identity_file

function delete_tmp_file {
	rm $identity_file
	rm -rf $app_dir
}
trap delete_tmp_file EXIT

if [[ ! "`cat $identity_file`" ]]; then
	echo "Empty private key"
	exit 1
else
	echo "Private key is in-place."
fi

cp -r \
	.next \
	next.config.ts \
	package-lock.json \
	package.json \
	public \
	server.js \
	$app_dir

function remote_cmd {
	ssh -T -p $WEBSERVER_SSH_PORT -i "$identity_file" -o IdentitiesOnly=yes -o BatchMode=yes $WEBSERVER_SSH_USER@$WEBSERVER_SSH_HOST $@ | \
		awk '{print "\033[36mRemote: " $0 "\033[0m"}'
}

echo "Connecting to remote..."
remote_cmd << EOF
	set -e
	echo "Getting ready to receive..."
	mkdir ~/app-staging
	cd ~/app
	cp -r \
		.next \
		next.config.ts \
		package-lock.json \
		package.json \
		public \
		server.js \
		~/app-staging
EOF

echo "Copying app to remote..."
rsync -r -e "ssh -p $WEBSERVER_SSH_PORT -i \"$identity_file\" -o IdentitiesOnly=yes -o BatchMode=yes" --del $app_dir $WEBSERVER_SSH_USER@$WEBSERVER_SSH_HOST:~

echo "Connecting to remote..."
remote_cmd << EOF
	set -e
	echo "Backing up old app..."
	cp -r ~/app ~/app.bck
	echo "Stopping app..."
	cloudlinux-selector stop --json --interpreter nodejs --app-root ~/app
	echo "Moving app into place..."
	rm -rf ~/app
	mv ~/app-staging ~/app
	echo "Starting app..."
	cloudlinux-selector start --json --interpreter nodejs --app-root ~/app || \
		(mv ~/app.bck ~/app && \
		echo "ERROR: FAILED TO START SERVER. REVERTING TO LAST VERSION." && \
		cloudlinux-selector start --json --interpreter nodejs --app-root ~/app \
		&& exit 1)
	echo "Deleting backup..."
	rm -rf app.bck
EOF

echo "Done."
