import Image from "next/image";
import Link from "next/link";
import React from "react";
import FlipTile from "./clientComponents";

const me = {
  name: "Carter Leitch",
};

const minorProjects = [
  {
    name: "Blackjack",
    description: "Console-based C++ program for playing blackjack. Uses C++.",
    tech: "Tech 1",
  },
  {
    name: "Political Triangle Quiz",
    description:
      "Quiz for mapping your political views. Uses C#, Windows Forms, and .NET.",
    tech: "Tech 2",
  },
];

const majorProjects = [
  {
    name: "CoolBibleVerses.Cool",
    description:
      "Website for organizing your favorite Bible verses. Uses ASP.NET Core, C#, and a relational database.",
    tech: "Tech 1",
  },
  {
    name: "Reimbursement Web App",
    description:
      "Web app for managing reimbursements. Uses Python, JustPy, and SQLite.",
    tech: "Tech 2",
  },
  {
    name: "System A&D Project",
    description:
      "Analyzed and designed new reimbursement system for Five Oaks church. Used UML, ERD, and Agile principles.",
    tech: "Tech 3",
  },
  {
    name: "Frog Bot",
    description: "Multi-purpose Discord bot. Uses Python and Discord.py.",
    tech: "Tech 4",
  },
  {
    name: "CRM Database",
    description:
      "Senior Capstone project to augment DefineTheBox CRM to add new functionality. Used Dyanmics 365 and database design principles.",
    tech: "Tech 4",
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
      <div className="mx-auto w-7/8 rounded-2xl bg-neutral-900 p-5">
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
            tincidunt, nunc nec ultricies ultricies, nunc nunc ultricies nunc,
            nec ultricies nunc nunc nec. Nullam tincidunt, nunc nec ultricies
            ultricies, nunc nunc ultricies nunc, nec ultricies nunc nunc nec.
            Nullam tincidunt, nunc nec ultricies ultricies, nunc nunc ultricies
            nunc, nec ultricies
          </p>
        </div>

        <div className="text-center">
          <LittleHeader text="Major Projects" />
          <div>
            <ul
              className="grid grid-cols-3 justify-center gap-4"
              style={{ gridTemplateColumns: "repeat(auto-fit, 200px)" }}
            >
              {majorProjects.map((project) => (
                <li key={project.name} className="flex w-45 justify-center">
                  <FlipTile
                    frontText={project.name}
                    backText={project.description}
                    frontStyle="text-base"
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
            <ul
              className="grid grid-cols-3 justify-center gap-4"
              style={{ gridTemplateColumns: "repeat(auto-fit, 200px)" }}
            >
              {minorProjects.map((project) => (
                <li key={project.name} className="flex w-45 justify-center">
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
      </div>
    </>
  );
}
