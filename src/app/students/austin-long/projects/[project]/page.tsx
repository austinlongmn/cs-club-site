import { notFound } from "next/navigation";
import { getProject, Project } from "../../lib/projects-md";
import Skeleton from "react-loading-skeleton";
import { Suspense } from "react";

const typographyStyles = `
  prose
  prose-zinc
  prose-invert
  prose-a:text-blue-500
  prose-a:hover:text-blue-400
  prose-code:!font-jetbrains-mono
  prose-code:before:content-['']
  prose-code:after:content-['']
  prose-code:bg-zinc-900
  prose-code:px-1
  prose-code:py-px
  prose-code:rounded-sm
  max-w-none
`;

export default function Page({
  params,
}: {
  params: Promise<{ project: string }>;
}) {
  return (
    <Suspense fallback={<ProjectDisplaySkeleton />}>
      <ProjectDisplayPage pageData={params} />
    </Suspense>
  );
}

async function ProjectDisplayPage({
  pageData,
}: {
  pageData: Promise<{ project: string }>;
}) {
  const projectData = await getProject((await pageData).project);

  if (projectData == null) {
    notFound();
  }

  return <ProjectDisplay project={projectData} />;
}

function ProjectDisplaySkeleton() {
  return <ProjectDisplay project={null} />;
}

function ProjectDisplay({ project }: { project: Project | null }) {
  return (
    <div className="p-5">
      <h1 className="font-jetbrains-mono pb-5 text-3xl sm:text-5xl">
        {project == null ? (
          <Skeleton />
        ) : (
          (project.metadata.title ?? "[No Title]")
        )}
      </h1>
      <p className="pb-4 text-zinc-400">
        {project == null ? (
          <Skeleton />
        ) : (
          project.metadata.description && project.metadata.description
        )}
      </p>
      <div
        dangerouslySetInnerHTML={
          project != null ? { __html: project.sanitizedContent } : undefined
        }
        className={typographyStyles}
      >
        {project == null ? (
          <>
            <p>
              <Skeleton count={5} />
            </p>
            <p>
              <Skeleton count={5} />
            </p>
            <p>
              <Skeleton count={5} />
            </p>
          </>
        ) : undefined}
      </div>
    </div>
  );
}
