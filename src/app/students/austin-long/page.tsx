import Image from "@/components/image";

import {
  getAllProjects,
  ProjectMetadata,
  cdnBasename,
} from "./lib/projects-md";
import { JSX } from "react";
import Link from "next/link";

interface ProjectPreviewProps {
  project: ProjectMetadata;
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
        <div className={`pt-10 sm:pt-0 ${reverse ? "sm:pr-6" : "sm:pl-6"}`}>
          <div className="relative mx-auto h-64 w-64">
            <Image
              fill
              sizes=""
              src={cdnBasename + project.thumbnailURL}
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
    <h2 className="pb-4 font-(family-name:--font-jetbrains-mono) text-2xl sm:text-4xl">
      {children}
    </h2>
  );
}

export default async function Page() {
  const projects = await getAllProjects();
  return (
    <div className="p-6">
      <div className="flex flex-col-reverse gap-3 pb-6 sm:flex-row">
        <div className="grow">
          <h1 className="pb-6 font-(family-name:--font-jetbrains-mono) text-4xl sm:text-5xl md:text-6xl">
            Austin Long
          </h1>
          <p>
            Hello, my name is Austin Long. I am a software developer who loves
            using my gifts, talents and abilities to serve Christ. I{" "}
            <em>love</em> programming and enjoy learning new languages and
            solving problems. I especially enjoy automation and finding creative
            ways to follow the{" "}
            <Link href="https://en.wikipedia.org/wiki/Don%27t_repeat_yourself">
              DRY principle
            </Link>
            . Check out some of my featured projects below, or check out more{" "}
            <Link href="/students/austin-long/projects">here</Link>. One of my
            favorite programming tools to use is Neovim, a fork of Vim. I enjoy
            the keyboard-first experience, and, of course, shaving those
            precious milliseconds off the startup time.
          </p>
        </div>
        <Image
          src="/images/austin/headshot.jpeg"
          width={668}
          height={668}
          alt="A headshot of Austin"
          className="mx-auto h-52 w-auto rounded-md md:h-72"
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
