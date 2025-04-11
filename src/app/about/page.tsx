import type { Metadata } from "next";
import Image from "next/image";
import CSCLogo from "@/svg/csc-logo.svg";

export const metadata: Metadata = {
  title: "About - UNW CS Club",
  description:
    "This is the official site of University of Northwestern " +
    "- St.Paul's very own Computer Science Club.",
};

export default function About() {
  return (
    <div className="pb-20">
      <div className="flex flex-row justify-between">
        <div className="flex max-w-100 items-center justify-center text-center">
          <h1 className="text-3xl">
            We are the Computer Science Club from the University of
            Northwestern-St. Paul in Roseville, Minnesota.
          </h1>
        </div>
        <div>
          <Image
            src={CSCLogo}
            alt="CSC Logo"
            width={700}
            height={500}
            className="pt-10"
          />
        </div>
      </div>
      <div className="flex flex-row items-center justify-evenly">
        <div className="flex items-center justify-center">
          <Image
            src="/images/general/club-fall24.png"
            alt="CSC Members in Fall 2024"
            width={600}
            height={600}
            className="pt-10"
          />
        </div>
        <div className="flex max-w-100 flex-col items-center justify-center">
          <h1 className="text-center text-2xl">Current CSC Members:</h1>
          <h1 className="pt-5 text-center text-2xl">
            From left to right: Josie Mellick, Dylan Weakly, Andrew Hayes,
            Austin Long, Trenton Gibson (Alumni), Breyon Gunn, Josiah Paul.
          </h1>
        </div>
      </div>
    </div>
  );
}

// **IMPORTANT**
// We need to update the image on this page and the home page ASAP when Austin returns so we have up-to-date members only.
// We should take one to include Breyon until he graduates and then one without him to update it once he graduates.
// Should we have a page for images of past CSC members for each year???
