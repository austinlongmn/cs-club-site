import Image from "@/components/image";
import Link from "next/link";
import type { Metadata } from "next";
import { CourseList, FavoriteProjects } from "./components";

export const metadata: Metadata = {
  title: "Dylan Weakly - UNW CS Club",
  description:
    "This is the official site of University of Northwestern - St. Paul's very own Computer Science Club.",
};

export default function Dylan() {
  return (
    <div className="container mx-auto my-10 flex flex-col items-center space-y-10 rounded-3xl bg-neutral-800 p-6 text-white backdrop-blur-lg">
      <div className="flex flex-col items-center space-y-6 text-center md:flex-row md:space-y-0 md:space-x-30 md:text-left">
        <Image
          className="transform rounded-full shadow-lg transition-transform group-hover:scale-105"
          src="/images/dylan/dylan.jpg"
          width={200}
          height={200}
          alt="Dylan Weakly"
        />
        <div>
          <h1 className="text-4xl font-bold">Dylan Weakly</h1>
          <h2 className="mt-2 text-2xl">Junior at UNW</h2>
          <Link
            href="https://linkedin.com/in/dylan-weakly/"
            className="mt-1 inline-block text-lg hover:text-[#428ad1] hover:underline"
          >
            Connect on LinkedIn
          </Link>
        </div>
      </div>

      <div className="max-w-4xl space-y-6 text-center text-lg">
        <p>
          I am a junior at the University of Northwestern - St. Paul, majoring
          in Computer Science with a minor in Cybersecurity. I am passionate
          about leveraging the skills God has given me to create thoughtful,
          efficient software solutions. My programming experience spans multiple
          languages and frameworks, including Python, TypeScript, C++, Java, and
          React—the latter of which I used to help develop this website.
        </p>
        <p>
          Since April 2025, I have served as a Technical Support Specialist in
          the university&apos;s Information Technology department. This role has
          allowed me to further strengthen my problem-solving and critical
          thinking abilities by assisting users with a wide range of technical
          issues.
        </p>
        <p>
          Some of my interests outside of Computer Science include going hiking
          with my family at state parks, attending car shows, and serving on the
          production team at church.
        </p>
      </div>

      <CourseList />
      <FavoriteProjects />
    </div>
  );
}
