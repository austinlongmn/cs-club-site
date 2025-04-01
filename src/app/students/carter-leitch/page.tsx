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
  {
    name: "Project 4",
    description: "Description 4",
    tech: "Tech 4",
  },
  {
    name: "Project 5",
    description: "Description 5",
    tech: "Tech 5",
  },
  {
    name: "Project 6",
    description: "Description 6",
    tech: "Tech 6",
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
        <LittleHeader text="Major Projects" />
        <div>
        <ul className="grid grid-cols-3 gap-4 justify-center" style={{gridTemplateColumns: "repeat(auto-fit, 200px)"}}>
        {majorProjects.map((project) => (
              <li key={project.name} className="flex justify-center w-45">
                <FlipTile
                  frontText={project.name}
                  backText={project.description}
                  frontStyle="text-lg"
                  backStyle="text-sm"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="m-5">
        <LittleHeader text="Minor Projects" />
        <div>
          <ul className="grid grid-cols-3 gap-4 justify-center" style={{gridTemplateColumns: "repeat(auto-fit, 200px)"}}>
            {minorProjects.map((project) => (
              <li key={project.name} className="flex justify-center w-45">
                <FlipTile
                  frontText={project.name}
                  backText={project.description}
                  frontStyle="text-lg"
                  backStyle="text-sm"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
