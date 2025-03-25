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
    <div className="mx-auto mt-10 flex max-w-4xl flex-col items-center justify-center rounded-4xl border-8 border-[#428ad1] p-10 text-white shadow-xl backdrop-blur-lg transition-all duration-500">
      <div className="flex w-full items-center justify-center px-10">
        <div className="group relative items-center">
          <Image
            className="group-hover:shadow-[0px_0px_20px_5px_rgba(255, 255, 255, 0.8)] rounded-full transition-all duration-300 ease-in-out group-hover:scale-105"
            src="/images/dylan/dylan.jpg"
            width={200}
            height={200}
            alt="Dylan Weakly"
          />
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center gap-2 md:mt-5">
        <h1 className="text-4xl font-bold">Dylan Weakly</h1>
        <h3 className="text-3xl">Sophomore at UNW</h3>
      </div>

      <p className="pt-5 text-sm md:pt-5">
        Personal Website Coming Soon...
      </p>

      <p className="mt-10 text-center text-lg">
        I am a sophomore Computer Science student with a Cybersecurity minor. I
        enjoy programming with Python, TypeScript, and also with the React web
        framework, which is being used to make this website. I am currently
        learning programming with C++. The skills I have learned in software
        development allow me to practice my problem solving and critical
        thinking skills while navigating challenges that may arise.
      </p>

      <p className="py-3 pb-10 text-center text-lg">
        Some of my interests outside of Computer Science include going hiking
        with my family at state parks and local parks, checking out cars at car
        shows, and serving on the production team at church.
      </p>
      <div className="flex w-full flex-col items-center justify-evenly border-t border-[#428ad1] pt-10 pb-10 md:flex-row">
        <h2 className="max-w-40 py-4 text-center text-3xl font-bold">
          Classes I have Taken at UNW
        </h2>
        <ul className="list-inside list-disc text-center text-lg">
          <li>Principles of Computing</li>
          <li>Python Programming</li>
          <li>Systems Analysis and Design</li>
          <li>Programming I - Java</li>
          <li>Programming II - Mobile App Development</li>
          <li>C Programming Langauge</li>
          <li>Discrete Mathematics</li>
          <li>Database Management I</li>
        </ul>
      </div>

      <div className="flex w-full flex-col items-center justify-evenly border-t border-[#428ad1] pt-10 pb-10 md:flex-row md:pb-0">
        <h2 className="max-w-30 py-4 text-center text-3xl font-bold">
          My Favorite Projects
        </h2>
        <ul className="max-w-85 list-inside list-disc text-center text-lg">
          <li>Systems Analysis and Design Project (featured Below)</li>
          <li>
            Halloween Trick or Treating Tracker with SQLite and Tkinter in
            Python
          </li>
        </ul>
      </div>

      <Image
        className="mt-5 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
        width={400}
        height={1000}
        src="/images/dylan/atkinson-poster.png"
        alt="Systems A&amp;D Poster"
      />
    </div>
  );
}
