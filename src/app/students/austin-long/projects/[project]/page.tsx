import { permanentRedirect } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ project: string }>;
}) {
  permanentRedirect(
    `https://austinlong.dev/projects/${(await params).project}`
  );
}
