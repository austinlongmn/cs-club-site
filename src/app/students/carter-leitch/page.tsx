import Image from "next/image";
import Link from "next/link";
import React from "react";
import FlipTile from "./clientComponents";

const me = {
  name: "Carter Leitch",
};

const minorProjects = [
  {
    name: "Project 1",
    description: "Description 1",
    tech: "Tech 1",
  },
  {
    name: "Project 2",
    description: "Description 2",
    tech: "Tech 2",
  },
  {
    name: "Project 3",
    description: "Description 3",
    tech: "Tech 3",
  },
];

const majorProjects = [
  {
    name: "Project 1",
    description: "Description 1",
    tech: "Tech 1",
  },
  {
    name: "Project 2",
    description: "Description 2",
    tech: "Tech 2",
  },
  {
    name: "Project 3",
    description: "Description 3",
    tech: "Tech 3",
  },
];

function BigHeader({ text }: { text: string }) {
  return (
    <h1 className="m-10 justify-center text-center text-5xl text-white">
      {text}
    </h1>
  );
}

function LittleHeader({ text }: { text: string }) {
  return (
    <h1 className="m-5 justify-center text-center text-3xl text-white">
      {text}
    </h1>
  );
}

function GitHubButton() {
  return (
    <Link href="https://github.com/cartrleitch" target="_blank">
      <Image
        className="mt-3 mr-4 hover:cursor-pointer hover:opacity-50"
        src="/images/carter/GitHubLogo.png"
        alt="Profile photo of Carter Leitch"
        width={50}
        height={50}
      />
    </Link>
  );
}

function LinkedInButton() {
  return (
    <Link href="https://www.linkedin.com/in/carter-leitch/" target="_blank">
      <Image
        className="mt-3 hover:cursor-pointer hover:opacity-50"
        src="/images/carter/LinkedIn_icon.svg"
        alt="Profile photo of Carter Leitch"
        width={50}
        height={50}
      />
    </Link>
  );
}

export default function Page() {
  return (
    <>
      <div>
        <BigHeader text={me.name} />
        <div className="flex justify-center">
          <Image
            className="border-2 border-blue-800 shadow-md transition-transform duration-300 hover:scale-105"
            src="/images/carter/crtrltch.jpg"
            alt="Profile photo of Carter Leitch"
            width={250}
            height={200}
          />
        </div>
        <div className="flex justify-center">
          <GitHubButton />
          <LinkedInButton />
        </div>
      </div>
      <div>
        <LittleHeader text={"About Me"} />
        <p className="text-center text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          tincidunt, nunc nec ultricies ultricies, nunc nunc ultricies nunc, nec
          ultricies nunc nunc nec. Nullam tincidunt, nunc nec ultricies
          ultricies, nunc nunc ultricies nunc, nec ultricies nunc nunc nec.
          Nullam tincidunt, nunc nec ultricies ultricies, nunc nunc ultricies
          nunc, nec ultricies
        </p>
      </div>

      <div className="text-center">
        <LittleHeader text={"Major Projects"} />
        <ul>
          {majorProjects.map((project) => (
            <li key={project.name} className="m-5">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p>{project.tech}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center">
        <LittleHeader text={"Minor Projects"} />
        <ul>
          {minorProjects.map((project) => (
            <li key={project.name} className="m-5">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p>{project.tech}</p>
            </li>
          ))}
        </ul>
      </div>
      <p> <FlipTile frontText="Cool Bible Verses" backText="A website for storing your favorite Bible verses, uses ASP.NET, C#, and .NET" frontStyle="text-lg" backStyle="text-sm"/></p>
    </>
  );
}
