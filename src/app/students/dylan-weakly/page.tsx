import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dylan Weakly - UNW CS Club",
  description:
    "This is the official site of University of Northwestern " +
    "- St.Paul's very own Computer Science Club.",
};

export default function Dylan() {
  const courses = [
    { title: "Principles of Computing" },
    { title: "Python Programming" },
    { title: "Systems Analysis and Design" },
    { title: "Programming I - Java" },
    { title: "Programming II - Mobile App Development" },
    { title: "C Programming Language" },
    { title: "Discrete Mathematics" },
    { title: "Database Management I" },
    { title: "More to come..." },
  ];

  return (
    <div className="max-w-8xl mx-auto mt-5 mb-10 flex flex-col items-center justify-center rounded-3xl border-8 border-[#428ad1] bg-neutral-800 p-10 text-white shadow-xl backdrop-blur-lg transition-all duration-500">
      <div className="flex w-full flex-col items-center justify-evenly px-10 md:flex-row md:items-center md:gap-10">
        <div className="group relative mb-6 md:mb-0">
          <Image
            className="rounded-full shadow-[0px_0px_15px_3px_rgba(66,138,209,0.8)] transition-all duration-300 ease-in-out"
            src="/images/dylan/dylan.jpg"
            width={200}
            height={200}
            alt="Dylan Weakly"
          />
        </div>
        <div className="flex flex-col items-center gap-2 text-center md:items-start md:text-left">
          <h1 className="text-3xl font-bold md:text-4xl">Dylan Weakly</h1>
          <h3 className="text-2xl md:text-3xl">Sophomore at UNW</h3>
        </div>
      </div>

      <p className="mt-15 text-center text-lg">
        I am a sophomore at the University of Northwestern - St. Paul, majoring
        in Computer Science with a minor in Cybersecurity. I am passionate about
        leveraging the skills God has given me to create thoughtful, efficient
        software solutions. My programming experience spans multiple languages
        and frameworks, including Python, TypeScript, C++, Java, and React—the
        latter of which I used to help develop this website.
      </p>
      <p className="mt-10 text-center text-lg sm:mt-3">
        Since April 2025, I have also served as a Technical Support Specialist
        in the university&apos;s Information Technology department. This role
        has allowed me to further strengthen my problem-solving and critical
        thinking abilities by assisting users with a wide range of technical
        issues. Through both my academic work and professional experience, I
        continue to grow as a developer committed to excellence, adaptability,
        and service.
      </p>

      <p className="mt-10 pb-10 text-center text-lg sm:mt-3">
        Some of my interests outside of Computer Science include going hiking
        with my family at state parks and local parks, checking out cars at car
        shows, and serving on the production team at church.
      </p>

      <div className="flex w-full flex-col items-center justify-evenly border-t border-[#428ad1] pt-5 pb-10">
        <h2 className="py-4 pb-10 text-center text-3xl font-bold">
          Classes I have Taken at UNW
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="flex items-center justify-center text-center text-lg"
            >
              {course.title}
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center border-t border-[#428ad1] pt-5 pb-10">
        <h2 className="flex py-4 text-center text-3xl font-bold">
          My Favorite Projects
        </h2>
      </div>
      <div className="flex w-full flex-col items-center justify-evenly gap-10 px-4 md:w-2/3 md:flex-row">
        <div className="h-50 w-60 rounded-lg bg-neutral-500 p-4 text-center text-2xl shadow-md md:h-50 md:w-70">
          Systems Analysis and Design Project
          <div className="mt-5 rounded-2xl bg-[#428ad1] py-5 font-semibold hover:cursor-pointer hover:bg-[#683400]">
            <Link href="dylan-weakly/systems-a-and-d">View Project</Link>
          </div>
        </div>
        <div className="h-58 w-60 rounded-lg bg-neutral-500 p-4 text-center text-2xl shadow-md md:h-50 md:w-70">
          <h1 className="max-w-80">Python Haloween Trick-or-Treating App</h1>
          <div className="mt-5 rounded-2xl bg-[#428ad1] py-5 font-semibold hover:cursor-not-allowed">
            View Project
          </div>
        </div>
      </div>
    </div>
  );
}
