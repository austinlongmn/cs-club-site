import { notFound } from "next/navigation";
import { getProject } from "../../lib/projects-md";

const typographyStyles = `
  prose
  prose-zinc
  prose-invert
  prose-a:text-blue-500
  prose-a:hover:text-blue-400
  prose-code:font-(family-name:--font-jetbrains-mono)
  max-w-none
`;

export default async function Page({
  params,
}: {
  params: Promise<{ project: string }>;
}) {
  const { project } = await params;

  const projectData = await getProject(project);

  if (projectData == null) {
    notFound();
  }

  return (
    <div className="p-5">
      <h1 className="pb-5 font-(family-name:--font-jetbrains-mono) text-3xl sm:text-5xl">
        {projectData.metadata.title ?? "[No Title]"}
      </h1>
      {projectData.metadata.description && (
        <p className="pb-4 text-zinc-400">{projectData.metadata.description}</p>
      )}
      <div
        dangerouslySetInnerHTML={{ __html: projectData.sanitizedContent }}
        className={typographyStyles}
      ></div>
    </div>
  );
}
