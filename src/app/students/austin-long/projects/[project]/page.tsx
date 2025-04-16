import { notFound } from "next/navigation";
import "./styles.css";
import { getProject } from "../../lib/projects-md";

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
        className="project-contents"
      ></div>
    </div>
  );
}
