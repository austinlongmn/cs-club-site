import type { Metadata } from "next";
import Image from "@/components/image";
import CSCLogo from "@/svg/csc-logo.svg";

function BibleVerse({
  reference,
  children,
}: {
  reference: string;
  children: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold text-gray-200">{children}</h1>
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
    <div className="px-5 pb-20 md:px-0">
      <div className="flex flex-col justify-between pt-10 md:flex-row">
        <div className="flex items-center justify-center text-center">
          <h1 className="text-3xl font-semibold md:text-6xl">About Us</h1>
        </div>
        <div>
          <Image src={CSCLogo} alt="CSC Logo" className="mx-auto w-100" />
        </div>
      </div>
      <div className="pt-5 pb-5 text-center">
        <BibleVerse reference="Hebrews 10:23">
          Let us hold fast the confession of our hope without wavering, for he
          who promised is faithful.
        </BibleVerse>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 border-t border-neutral-700 pt-10 text-center text-lg text-gray-300 md:text-xl">
        <h1 className="text-2xl text-white md:text-3xl">
          We are the Computer Science Club from the University of
          Northwestern-St. Paul in Roseville, Minnesota.
        </h1>
        <p>
          We are dedicated to fostering a community of innovation and
          collaboration in computer science. We aim to empower students of all
          skill levels through collaborative projects and mentorship while
          promoting the development of technical skills and critical thinking.
          Our goal is to inspire and prepare members for future leadership in
          technology.
        </p>
        <p>
          We advance our problem-solving and critical thinking skills through
          club meetings, programming and hacking competitions, as well as club
          events.
        </p>
      </div>
      <div className="flex flex-col items-center justify-between pt-5 md:flex-row">
        <div className="flex items-center justify-center px-10 pt-10 md:px-0">
          <Image
            src="/images/general/club-fall24.png"
            alt="CSC Members in Fall 2024"
            className="w-150 transform rounded-md transition duration-1000 hover:scale-110"
            width={5000}
            height={3000}
          />
        </div>
        <div className="flex flex-col items-center justify-between">
          <h1 className="pt-10 text-center text-2xl font-semibold md:pt-0">
            Pictured Club Members
          </h1>
          <h1 className="max-w-125 pt-5 text-center text-2xl text-gray-300">
            From left to right: Josie Mellick, Dylan Weakly, Andrew Hayes,
            Austin Long, Trenton Gibson (Alumni), Breyon Gunn (Alumni), Josiah
            Paul.
          </h1>
        </div>
      </div>
    </div>
  );
}
