import type { Metadata } from "next";
import Image from "next/image";
import CSCLogo from "@/svg/csc-logo.svg";
import ClubFall2024 from "@/../public/images/general/club-fall24.png";

function BibleVerse({
  reference,
  children,
}: {
  reference: string;
  children: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-gray-200">{children}</h1>
      <h2 className="text-xl font-semibold text-gray-400">{reference}</h2>
    </div>
  );
}

export const metadata: Metadata = {
  title: "About - UNW CS Club",
  description:
    "This is the official site of University of Northwestern " +
    "- St.Paul's very own Computer Science Club.",
};

export default function About() {
  return (
    <div className="px- pb-20">
      <div className="flex flex-col justify-between md:flex-row">
        <div className="flex items-center justify-center text-center">
          <h1 className="text-3xl">
            We are the Computer Science Club from the University of
            Northwestern-St. Paul in Roseville, Minnesota.
          </h1>
        </div>
        <div>
          <Image src={CSCLogo} alt="CSC Logo" className="mx-auto pt-10" />
        </div>
      </div>
      <div className="py-10">
        <BibleVerse reference="Hebrews 10:23">
          Let us hold fast the confession of our hope without wavering, for he
          who promised is faithful.
        </BibleVerse>
      </div>
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="flex items-center justify-center pt-10">
          <Image
            src={ClubFall2024}
            alt="CSC Members in Fall 2024"
            className="w-300 rounded-md"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
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
