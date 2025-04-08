import Image from "next/image";
import { FlipTile, HoverImage } from "./client-components";
import { BigHeader, LittleHeader, GitHubButton, LinkedInButton, BigRainbowText } from "./components";
import { me, majorProjects, minorProjects, aboutMeText } from "./data";

export default function Page() {
  return (
    <>
      <div className="mx-auto w-7/8 rounded-2xl bg-neutral-900 p-5">
        <div>
          <BigRainbowText text={me.name} />
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
            {aboutMeText}
            <br />
            <HoverImage text={"Test"} imagePath={"/images/carter/crtrltch.jpg"} />
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
