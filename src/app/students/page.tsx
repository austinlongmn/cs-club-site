import { Metadata } from "next";
import React from "react";
import Link from "next/link";
import CSCLogo from "@/svg/csc-logo.svg";
import Image from "@/components/image";

export const metadata: Metadata = {
  title: "Students - UNW CS Club",
  description:
    "This is the official site of University of Northwestern " +
    "- St.Paul's very own Computer Science Club.",
};

const students = [
  {
    id: "daniel-deutsch",
    name: "Daniel Deutsch",
    img: "/images/general/defaultUser.png",
  },
  {
    id: "andrew-hayes",
    name: "Andrew Hayes",
    img: "/images/andrew/ahayeswatermark.jpg",
  },
  {
    id: "mcalvin-juasemai",
    name: "McAlvin Juasemai",
    img: "/images/general/defaultUser.png",
  },
  {
    id: "austin-long",
    name: "Austin Long",
    img: "/images/austin/headshot.jpeg",
  },
  {
    id: "josie-mellick",
    name: "Josie Mellick",
    img: "/images/josie/Headshot.png",
  },
  {
    id: "josiah-paul",
    name: "Josiah Paul",
    img: "/images/general/defaultUser.png",
  },
  { id: "dylan-weakly", name: "Dylan Weakly", img: "/images/dylan/logo.jpg" },
  {
    id: "mason-colacicco",
    name: "Mason Colacicco",
    img: "/images/general/defaultUser.png",
  },
  {
    id: "joshua-sherrard",
    name: "Joshua Sherrard",
    img: "/images/joshua/headshot.png",
  },
];

const StudentsPage: React.FC = () => {
  return (
    <div className="mt-10 flex flex-col items-center pb-10">
      {/* Header Section: Title and Logo */}
      <div className="flex w-full flex-col items-center justify-between border-b border-gray-700 pb-10 md:flex-row md:items-center">
        <h1 className="text-5xl font-bold">Our Students</h1>
        <Image
          src={CSCLogo}
          alt="Computer Science Club Logo"
          className="mt-5 w-40 md:mt-0"
          width={160}
          height={50}
        />
      </div>

      {/* Grid Section */}
      <div className="mt-10 grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {students.map((student) => (
          <Link
            href={`/students/${student.id}`}
            key={student.id}
            className="group flex flex-col items-center rounded-xl bg-white/5 p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-xl"
          >
            {/* Image Placeholder */}
            {/* Replace this div with an <Image /> component when you have photos */}
            {student.img ? (
              <Image
                src={student.img}
                alt={`${student.name}'s profile picture`}
                className="mb-4 h-40 w-40 rounded-full object-cover shadow-inner"
                width={160}
                height={160}
              />
            ) : (
              <div className="mb-4 flex h-40 w-40 items-center justify-center rounded-full bg-gray-700 text-gray-400 shadow-inner">
                <span className="text-sm font-medium"></span>
              </div>
            )}

            {/* Student Name */}
            <h2 className="text-center text-xl font-semibold text-gray-200 transition-colors group-hover:text-white">
              {student.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StudentsPage;
