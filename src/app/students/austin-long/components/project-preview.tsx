import Link from "next/link";
import {
  cdnBasename,
  getAllProjects,
  ProjectMetadata,
} from "../lib/projects-md";
import Image from "@/components/image";
import Skeleton from "react-loading-skeleton";

interface ProjectPreviewProps {
  project: ProjectMetadata | null;
  reverse?: boolean;
}

function ProjectPreview({ project, reverse }: ProjectPreviewProps) {
  return (
    <div
      className={`flex flex-col ${reverse ? "sm:flex-row-reverse" : "sm:flex-row"} mb-10 rounded-sm bg-zinc-950 p-4 sm:min-h-64 sm:rounded-xl sm:p-10`}
    >
      <div className="flex grow flex-col sm:min-h-64">
        <h3
          className="text-xl sm:text-2xl"
          style={{ fontFamily: "var(--font-jetbrains-mono)" }}
        >
          {project?.title ?? <Skeleton />}
        </h3>
        <p className="grow">{project?.description ?? <Skeleton count={5} />}</p>
        {project == null ? (
          <Skeleton />
        ) : (
          project.route && (
            <Link href={`/students/austin-long/projects${project.route}`}>
              Learn More
            </Link>
          )
        )}
      </div>
      {!(project && !project.thumbnailURL) && (
        <div className={`pt-10 sm:pt-0 ${reverse ? "sm:pr-6" : "sm:pl-6"}`}>
          <div className="relative mx-auto h-64 w-64">
            {project == null ? (
              <Skeleton className="h-full" />
            ) : (
              <Image
                fill
                sizes=""
                src={cdnBasename + project.thumbnailURL}
                alt={`Thumbnail for ${project.title}`}
                className="rounded-md bg-black object-contain"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export function ProjectsListSkeleton() {
  return <ProjectPreviewList projects={[null, null, null]} />;
}

function ProjectPreviewList({
  projects,
}: {
  projects: (ProjectMetadata | null)[];
}) {
  return (
    <>
      {projects.map((project, index) => {
        return (
          <ProjectPreview
            project={project}
            key={index}
            reverse={index % 2 == 0}
          />
        );
      })}
    </>
  );
}

export async function ProjectsList() {
  const projects = await getAllProjects();
  return <ProjectPreviewList projects={projects} />;
}
