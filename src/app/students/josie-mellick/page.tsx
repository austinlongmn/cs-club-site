"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  type ProjectKey = "jackLinks" | "unreal";

  const [expanded, setExpanded] = useState<Record<ProjectKey, boolean>>({
    jackLinks: false,
    unreal: false,
  });
  
  const [zoomed, setZoomed] = useState<Record<ProjectKey, boolean>>({
    jackLinks: false,
    unreal: false,
  });
  
  const toggleProject = (key: ProjectKey) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  
  const toggleZoom = (key: ProjectKey) => {
    setZoomed((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div>
      {/* Main content container */}
      <div className="flex flex-col items-center justify-center">
        <div style={{ height: 40, width: 1 }}></div>

        {/* Name and headshot section */}
        <div className="flex items-center space-x-6">
          {/* Headshot */}
          <Image
            className="rounded-lg"
            width={300}
            height={300}
            src="/images/josie/Headshot.png"
            alt="Mellick Headshot"
          />

          {/* Name and contact info */}
          <div className="text-center">
            <h1 className="text-7xl text-white">Josie Mellick</h1>
            <p className="text-white">University of Northwestern - St. Paul</p>
            <Link
              href="https://www.linkedin.com/in/josie-mellick-60b430327?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BXxqV4ocSQjyo4ZAktwkKvQ%3D%3D"
              className="text-blue-400 hover:underline"
            >
              LinkedIn
            </Link>
            {" ------ "}
            <Link
              href="https://github.com/JosieMellick"
              className="text-blue-400 hover:underline"
            >
              GitHub
            </Link>
          </div>
        </div>

        <div style={{ height: 40, width: 1 }}></div>

        {/* Bio section */}
        <div className="mx-auto max-w-3xl rounded-lg bg-gray-900 p-4 shadow">
          <h2 className="py-4 text-left text-2xl text-white">About Me</h2>
          <p className="text-md py-4 text-left text-white">
            My name is Josie Mellick and I have a passion for programming.
            I&apos;m currently a sophomore computer science student at UNW. My
            experience is primarily with Python, Java, and C++.
          </p>
          <p className="text-md py-4 text-left text-white">
            My main interest is in video game programming. I am currently
            learning C++ and Unreal Engine to get familiar with how games are
            made, and I look forward to growing in this area.
          </p>
          <p className="text-md py-4 text-left text-white">
            Outside of computer science, I enjoy playing the guitar and I&apos;m
            on Northwestern&apos;s flag football team.
          </p>
        </div>

        {/* Projects section */}
        <h1 className="py-6 text-center text-5xl text-white">Projects</h1>

        {/* Jack Links Project */}
        <div className="mx-auto max-w-3xl rounded-lg bg-gray-900 p-4 shadow mb-6">
          <h2
            onClick={() => toggleProject("jackLinks")}
            className="py-4 text-left text-2xl text-white cursor-pointer hover:text-blue-400 transition-colors duration-200"
          >
            ▸ Offloading Automation for Jack Links
          </h2>

          {expanded.jackLinks && (
            <div className="pt-2">
              <p className="text-md py-4 text-left text-white">
                A partner and I designed and created a script to automate the
                multi-step offboarding process. We designed it to work with the
                pre-existing Microsoft Entra system. This project was completed
                for UNW&apos;s Systems Analysis & Design class. The poster we
                made for this project is shown below.
              </p>

              <div className="flex flex-col items-center justify-center">
                <div
                  onClick={() => toggleZoom("jackLinks")}
                  className="cursor-pointer transition-all duration-300 ease-in-out"
                >
                  <Image
                    className="rounded-lg"
                    width={zoomed.jackLinks ? 900 : 260}
                    height={zoomed.jackLinks ? 700 : 200}
                    src="/images/josie/JackLinksProject.png"
                    alt="Systems A&D Poster"
                  />
                  <p className="mt-2 text-sm text-gray-400">
                    {zoomed.jackLinks ? "Click to shrink" : "Click to enlarge"}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Unreal Engine Project */}
        <div className="mx-auto max-w-3xl rounded-lg bg-gray-900 p-4 shadow mb-6">
          <h2
            onClick={() => toggleProject("unreal")}
            className="py-4 text-left text-2xl text-white cursor-pointer hover:text-blue-400 transition-colors duration-200"
          >
            ▸ Cowboy Game Demo (In-Progress)
          </h2>

          {expanded.unreal && (
            <div className="pt-2">
              <p className="text-md py-4 text-left text-white">
                I am currently in the process of learning how to use Unreal
                Engine. This is a very basic project I made to test out Unreal's
                physics and shooting mechanics. I also experimented with
                importing assets including meshes, sounds, and textures. This
                was created for a programming competition where the prompt was
                to make a cowboy-themed game within an hour and a half time
                limit. A demo for this project can be found below.
              </p>
              <div className="flex flex-col items-center justify-center">
                <video
                controls
                className="rounded-lg shadow my-4"
                width={800}>
                <source src="/images/josie/Cowboy Game 2.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          )}
        </div>

        {/* Footer note */}
        <h2 className="py-6 text-center text-2xl text-white">
          More to come...
        </h2>
      </div>
    </div>
  );
}
