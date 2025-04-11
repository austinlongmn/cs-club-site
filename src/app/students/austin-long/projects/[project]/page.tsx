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
    <div className="pt-5 pb-5">
      <h1>{projectData.metadata.title ?? "[No Title]"}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: projectData.sanitizedContent }}
      ></div>
    </div>
  );
}
