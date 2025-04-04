import { notFound } from "next/navigation";
import DOMPurify from "isomorphic-dompurify";

import "./styles.css"

export default async function Page({
  params,
}: {
  params: Promise<{ project: string }>;
}) {
  const { project } = await params;

  if (!project.match(/^[A-Za-z-]+$/)) {
    notFound();
  }

  const cdnBasename = "https://projects-md.cdn.austinlong.dev";
  const htmlResponsePromise = fetch(`${cdnBasename}/${project}.html`);
  const metadataResponsePromise = fetch(
    `${cdnBasename}/${project}.metadata.json`
  );

  const htmlResponse = await htmlResponsePromise;
  const metadataResponse = await metadataResponsePromise;

  if (htmlResponse.status == 404) {
    notFound();
  }

  const unsafeContentPromise = htmlResponse.text();
  const metadataPromise = metadataResponse.json();

  const unsafeContent = await unsafeContentPromise;
  const metadata = await metadataPromise;

  const sanitizedContent = DOMPurify.sanitize(unsafeContent);

  return (
    <div>
      <h1>{metadata.title ?? "[No Title]"}</h1>
      <div dangerouslySetInnerHTML={{ __html: sanitizedContent }}></div>
    </div>
  );
}
