import Image from "next/image";
import { FlipTile, HoverImage } from "./client-components";
import {
  LittleHeader,
  GitHubButton,
  LinkedInButton,
  BigRainbowText,
} from "./components";
import { me, majorProjects, minorProjects } from "./data";

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
            Hello, I am Carter Leitch. I am a Computer Science major with an
            Applied Mathematics minor. I am passionate about software
            development, and most of my projects involve web development. In
            addition to software development and programming in general, I also
            enjoy database design and data analysis.
            <br />
            I have worked with many programming languages, including C, C++,
            Java, JavaScript, Python, and C#. I would say I like Python and C#
            the most, and I especially enjoy working with the .NET framework.
            <br />
            Outside of programming and software development, I enjoy playing
            video games, reading, playing pickleball, and rock climbing. Over
            the past few years, I have also enjoyed traveling quite a bit. I
            have been to{" "}
            <HoverImage
              text={"Panama"}
              imagePath={"/images/carter/panam1.jpg"}
            />
            ,{" "}
            <HoverImage
              text={"Canada"}
              imagePath={"/images/carter/canada1.jpg"}
            />
            ,{" "}
            <HoverImage
              text={"Japan"}
              imagePath={"/images/carter/japan1.jpg"}
            />
            , and{" "}
            <HoverImage
              text={"all around the U.S."}
              imagePath={"/images/carter/america2.jpg"}
            />
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
