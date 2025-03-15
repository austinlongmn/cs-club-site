import { notFound } from "next/navigation";
import DOMPurify from "isomorphic-dompurify";
import { Box, Heading } from "@chakra-ui/react";

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
    <Box>
      <Heading as="h1">{metadata.title ?? "[No Title]"}</Heading>
      <div dangerouslySetInnerHTML={{ __html: sanitizedContent }}></div>
    </Box>
  );
}
