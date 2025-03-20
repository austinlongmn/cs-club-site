import { RiMailLine } from "react-icons/ri";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dylan Weakly - UNW CS Club",
  description:
    "This is the official site of University of Northwestern " +
    "- St.Paul's very own Computer Science Club.",
};

export default function Dylan() {
  return (
    <div className="flex flex-col items-center justify-center transition-all duration-500">
      <div className="flex justify-between p-5">
        <h1 className="text-center text-5xl text-white">Dylan Weakly</h1>
      </div>

      <div className="mx-auto max-w-4xl rounded-3xl border-5 border-[#428ad1] p-10 text-white shadow-xl backdrop-blur-lg">
        <div className="flex flex-col items-center">
          <button className="flex items-center gap-2 rounded-lg bg-[#428ad1] px-6 py-3 text-2xl text-white hover:bg-blue-700 hover:font-bold">
            <RiMailLine />
            Email Dylan
          </button>
          <p className="mt-5 text-center text-sm">
            Developer Website Coming Soon
          </p>

          <p className="text-md py-4 text-left">
            I am currently a sophomore Computer Science major with a
            Cybersecurity minor. I am currently learning web development with
            basic HTML, CSS, and JavaScript as well as learning the React
            framework.
          </p>

          <p className="text-md py-3 text-right">
            Some of my interests outside of Computer Science include going on
            hikes with my family (yeah, shocking!), checking out cool cars, and
            serving on the production team at church.
          </p>

          <p className="text-md py-3 text-left">
            For Systems Analysis and Design class here at Northwestern, I worked
            together with Isaac Grosser who has since graduated to provide
            Atkinson Refinishing Services with some great invoicing options to
            improve efficiency of the company.
          </p>

          <h2 className="py-4 text-center text-lg">My Favorite Projects</h2>
          <ul className="list-inside list-disc">
            <li>Systems Analysis and Design Project (featured Below)</li>
            <li>More to come...</li>
          </ul>

          <Image
            className="mt-10 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            width={1300}
            height={1000}
            src="/images/dylan/atkinson-poster.png"
            alt="Systems A&amp;D Poster"
          />
        </div>
      </div>
    </div>
  );
}
