import Image from "@/components/image";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      {/* Main Parent Div */}
      <div className="p-7">
        {/* Image and Name Headers div*/}
        <div className="mx-auto flex max-w-screen-md items-center justify-center gap-x-30">
          <div className="mb-7">
            <Image
              width="300"
              height="300"
              className="rounded-lg"
              src="/images/joshua/headShot.png"
              alt="A photo of Joshua Sherrard"
            />
          </div>
          <div className="-mt-5 flex flex-col items-center justify-center">
            <h1 className="text-7xl">Joshua</h1>
            <h1 className="text-7xl">Sherrard</h1>
            <p className="mb-3 text-lg">
              University of Northwestern - St. Paul
            </p>
            {/* Github and linked in links/images */}
            <div className="flex">
              {/* Find Me On text:  <p className="text-lg mr-6"> Find Me On </p>*/}
              <Link
                href="https://github.com/Sneakpanda"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  width="35"
                  height="35"
                  className=""
                  src="/images/joshua/github-mark-white.png"
                  alt="GitHub Logo"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/joshua-sherrard-649696340/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-6"
              >
                <Image
                  width="40"
                  height="35"
                  className=""
                  src="/images/joshua/LI-In-Bug.png"
                  alt="Linked-In Logo"
                />
              </Link>
            </div>
          </div>
        </div>
        {/* About me */}
        <div className="mx-auto mt-12 max-w-[52rem] flex-col justify-between rounded-lg bg-[#18212F] p-4">
          <h2 className="mb-6 text-center text-5xl font-semibold">
            {" "}
            About Me{" "}
          </h2>
          <div className="flex">
            <p className="w-1/2 pr-2 text-lg">
              Greetings, My name is Joshua Sherrard!
              <br />I am a freshman at the University of Northwestern - St. Paul
              and I am <b>Majoring in Computer Science and Cyber Security.</b>
              <br />I love playing video games and that is how I discovered my
              passion for technology. It wasn&apos;t until I took a game
              development class in highschool that I found my passion for
              coding.
            </p>
            <p className="w-1/2 pl-2 text-lg">
              I have experience in <b>Lua, Python and Java </b>
              but I am most experienced with Lua as that is what I have been
              using to develop my game development projects. I have been
              developing games as a hobby for about 2 years and I have made
              things like a fully playable roulette game, an audio file player
              for your PC, and incremental games. Read more about those down
              below.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-[52rem] flex-col justify-between rounded-lg bg-[#18212F] p-5">
          <h2 className="text-center text-5xl font-semibold"> My Projects </h2>
        </div>
        {/* PROJECTS */}
        {/* PROJECT 1 */}
        <div className="mx-auto mt-10 flex max-w-[52rem] flex-col items-center justify-between rounded-lg bg-[#18212F] p-5">
          <h3 className="text-center text-4xl font-semibold"> Square Game </h3>
          <h4 className="text-center text-lg">
            {" "}
            Made with Lua in the Love2d Framework{" "}
          </h4>
          <p className="p-4">
            {" "}
            Square Game is an Idle/Incremental game similar to Cookie Clicker. I
            have been actively working on Square Game since 12/25/24 and I was
            inspired for the idea after trying to make a square simply bounce
            around and collect dots. After completing the simulation I decided
            to keep adding to it and to make it a game.
          </p>
          <p className="p-4">
            I have been advertising Square Game on TikTok and Instagram since
            April 2025, and I have managed to amass <b>2,463 followers </b>
            across both platforms, as well as <b>1,623 wishlists</b> for the
            game in anticipation of its release. I plan to release a free demo
            for Square Game in early October to hopefully encourage more
            wishlists and I plan to release Square Game for purchase this year
            with many post-release updates.
          </p>
          <Image
            width="700"
            height="700"
            className="rounded-2xl"
            src="/images/joshua/squareGameGIF.gif"
            alt="Square Game Gameplay GIF"
            unoptimized
          />
          <iframe
            className="mt-6"
            src="https://store.steampowered.com/widget/3696110/"
            width="746"
            height="190"
          ></iframe>
        </div>
        {/* PROJECT 2 */}
        <div className="mx-auto mt-10 flex max-w-[52rem] flex-col items-center justify-between rounded-lg bg-[#18212F] p-5">
          <h3 className="text-center text-4xl font-semibold"> Lu[Idle] </h3>
          <h4 className="text-center text-lg">
            {" "}
            Made with Lua in the Love2d Framework.{" "}
          </h4>
          <p className="p-4">
            {" "}
            Lu[Idle] is an Idle/Incremental game very similar to Cookie Clicker
            and it is my very first video game I created. I started working on
            it as the final project for my in Intro to Game Development class I
            took in my junior year of highschool and after the class ended I
            decided to continue working on Lu[Idle]. The premise of the game is
            that you are &quot;coding&quot; video games to then publish and use
            your earnings to make better video games.
          </p>
          <p className="p-4">
            There was only about 6 months that I was actually developing
            Lu[Idle] and after releasing the game onto Steam for $0.99, I sold
            118 units and it made a gross income of $101. After taxes and
            Steam&apos;s 30% cut, I made a little over $50. I then made Lu[Idle]
            free to play after realising that I didn&apos;t need the money that
            it would be making me and I would rather just have more people be
            able to play the game. In total it was played by 2,006 unique users
            and 520 of which have had the game open for over 10 hours. I
            eventually stopped working on Lu[Idle] because I lacked motivation
            to work on it. As it was my first ever game I designed, the coding
            was super bad and poorly orginized so that made working on it even
            harder. I am proud of the success of Lu[Idle] and for what it is, I
            am happy to see that 65% of the 29 reviews, it has on Steam, are
            positive. Feel free to try it out, it&apos;s free!
          </p>
          <Image
            width="700"
            height="700"
            className="rounded-2xl"
            src="/images/joshua/Lu[Idle]GIF.gif"
            alt="Lu[Idle] Gameplay GIF"
            unoptimized
          />
          <iframe
            className="mt-6"
            src="https://store.steampowered.com/widget/3127870/"
            width="746"
            height="190"
          ></iframe>
        </div>
        {/* PROJECT 3 */}
        <div className="mx-auto mt-10 flex max-w-[52rem] flex-col items-center justify-between rounded-lg bg-[#18212F] p-5">
          <h3 className="text-center text-4xl font-semibold"> WheelBound </h3>
          <h4 className="text-center text-lg">
            {" "}
            Made with Lua in the Love2d Framework.{" "}
          </h4>
          <p className="p-4">
            WheelBound is the game of Roulette turned into a program that you
            can play for fun. There is zero real money involved and you always
            start the game with $1000 to use as you please. You can switch chips
            with the 1, 2, and 3 keys to switch between 5, 10, and 100
            respectively and then hit space to spin the wheel. WheelBound was
            originally going to be a Roulette Rogue Like. But I gave up, as
            turning roulette into a Rogue Like posed too many challenges to be
            worth the time it would take me.
          </p>
          <Image
            width="700"
            height="700"
            className="rounded-2xl"
            src="/images/joshua/wheelBoundGIF.gif"
            alt="WheelBound Gameplay GIF"
            unoptimized
          />
          <iframe
            className="mt-6"
            frameBorder="0"
            src="https://itch.io/embed/3244806?border_width=0&amp;bg_color=000000&amp;fg_color=ffffff&amp;border_color=000000"
            width="750"
            height="165"
          >
            <Link href="https://sneak-panda.itch.io/wheel-bound">
              Wheel Bound by Sneakpanda
            </Link>
          </iframe>
        </div>
        {/* PROJECT 4 */}
        <div className="mx-auto mt-10 flex max-w-[52rem] flex-col items-center justify-between rounded-lg bg-[#18212F] p-5">
          <h3 className="text-center text-4xl font-semibold">
            {" "}
            The SoundBack{" "}
          </h3>
          <h4 className="text-center text-lg">
            {" "}
            Made with Lua in the Love2d Framework.{" "}
          </h4>
          <p className="p-4">
            The SoundBack is pretty much an MP3 player except for a few key
            features. When you open the app you wont be able to do anything
            until you drag and drop an audio file into it. You will then be able
            to toggle whether it is playing or not and change the volume. You
            are also able to play multiple audios at a time and they will loop
            infinitly. But dont worry, if you close the game, your audio files
            will save in the app.
          </p>
          <Image
            width="700"
            height="700"
            className="rounded-2xl"
            src="/images/joshua/soundBackGIF.gif"
            alt="SoundBack Gameplay GIF"
            unoptimized
          />
          <iframe
            className="mt-6"
            frameBorder="0"
            src="https://itch.io/embed/3314769?border_width=0&amp;bg_color=000000&amp;fg_color=eeeeee&amp;link_color=fa5c5c&amp;border_color=000000"
            width="750"
            height="165"
          >
            <Link href="https://sneak-panda.itch.io/the-soundback">
              The SoundBack by Sneakpanda
            </Link>
          </iframe>
        </div>
      </div>
    </div>
  );
}
