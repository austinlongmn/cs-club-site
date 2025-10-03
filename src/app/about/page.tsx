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
      <div className="mt-10 flex flex-row items-center justify-center">
        <div className="flex items-center justify-center">
          <Image
            src="/images/general/club-fall24.png"
            alt="Our Club Members"
            className="rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            width={700}
            height={300}
          />
        </div>
        <div>
          <Image
            src="/images/general/activate.jpg"
            alt="Our Club Members"
            className="rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            width={530}
            height={300}
          />
        </div>
      </div>
      <div className="flex flex-row items-center justify-center">
        <div className="flex items-center justify-center">
          <Image
            src="/images/general/timberwolves.jpg"
            alt="CS Club Event at Target Center"
            className="rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            width={540}
            height={300}
          />
        </div>
        <div>
          <Image
            src="/images/general/bonfire.JPG"
            alt="Spring 2025 CS Club Bonfire"
            className="rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            width={540}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
