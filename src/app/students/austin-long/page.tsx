import Image from "@/components/image";

import { JSX, Suspense } from "react";
import Link from "next/link";
import {
  ProjectsList,
  ProjectsListSkeleton,
} from "./components/project-preview";

function Heading2({ children }: { children: JSX.Element | string }) {
  return (
    <h2 className="pb-4 font-(family-name:--font-jetbrains-mono) text-2xl sm:text-4xl">
      {children}
    </h2>
  );
}

export default async function Page() {
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
      <Suspense fallback={<ProjectsListSkeleton />}>
        <ProjectsList />
      </Suspense>
    </div>
  );
}
