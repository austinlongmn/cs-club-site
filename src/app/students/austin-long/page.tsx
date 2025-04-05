import Image from "next/image";
import profilePic from "@/../public/images/austin/headshot.jpeg";

import { getAllProjects, ProjectMetadata } from "./lib/projects-md";
import { JSX } from "react";
import Link from "next/link";

interface ProjectPreviewProps {
  project: ProjectMetadata;
  reverse?: boolean;
}

function ProjectPreview({ project, reverse }: ProjectPreviewProps) {
  return (
    <div
      className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} mb-10 rounded-md bg-zinc-950 p-4 md:min-h-64 md:rounded-xl md:p-10`}
    >
      <div className="flex grow flex-col md:min-h-64">
        <h3
          className="text-xl md:text-2xl"
          style={{ fontFamily: "var(--font-jetbrains-mono)" }}
        >
          {project.title}
        </h3>
        <p className="grow">{project.description}</p>
        {project.route && (
          <Link href={`/students/austin-long/projects${project.route}`}>
            Learn More
          </Link>
        )}
      </div>
      {project.thumbnailURL && (
        <div className={`pt-10 md:pt-0 ${reverse ? "md:pr-6" : "md:pl-6"}`}>
          <div className="relative mx-auto h-64 w-64">
            <Image
              fill
              src={project.thumbnailURL}
              alt={`Thumbnail for ${project.title}`}
              className="rounded-md bg-black object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}

function Heading2({ children }: { children: JSX.Element | string }) {
  return (
    <h2 className="pb-4 font-(family-name:--font-jetbrains-mono) text-2xl md:text-4xl">
      {children}
    </h2>
  );
}

export default async function Page() {
  const projects = await getAllProjects();
  return (
    <div className="p-6">
      <div className="flex flex-col-reverse gap-3 pb-6 md:flex-row">
        <div className="grow">
          <h1 className="pb-6 font-(family-name:--font-jetbrains-mono) text-4xl md:text-6xl">
            Austin Long
          </h1>
          <p>
            Do laborum officia eiusmod aliquip irure laboris magna adipisicing
            id cupidatat incididunt voluptate. Nulla amet do sit ut commodo
            magna magna anim elit sit occaecat ullamco cillum laborum. Pariatur
            ullamco esse dolore. Consequat deserunt ea esse ex labore aliquip
            cillum elit amet sunt cillum. Exercitation dolore occaecat ad sunt
            veniam aliqua nostrud cupidatat aliquip consequat Lorem culpa non.
            Deserunt quis proident ad velit. Do laborum officia eiusmod aliquip
            irure laboris magna adipisicing id cupidatat incididunt voluptate.
            Nulla amet do sit ut commodo magna magna anim elit sit occaecat
            ullamco cillum laborum. Pariatur ullamco esse dolore. Consequat
            deserunt ea esse ex labore aliquip cillum elit amet sunt cillum.
            Exercitation dolore occaecat ad sunt veniam aliqua nostrud cupidatat
            aliquip consequat Lorem culpa non. Deserunt quis proident ad velit.
          </p>
        </div>
        <Image
          src={profilePic}
          alt="A headshot of Austin"
          className="mx-auto h-64 w-auto rounded-md md:h-84"
        />
      </div>
      <Heading2>Projects</Heading2>
      {projects.map((project, index) => {
        return (
          <ProjectPreview
            project={project}
            key={index}
            reverse={index % 2 == 0}
          />
        );
      })}
    </div>
  );
}
