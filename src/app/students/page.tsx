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
  { id: "daniel-deutsch", name: "Daniel Deutsch" },
  { id: "andrew-hayes", name: "Andrew Hayes" },
  { id: "austin-long", name: "Austin Long" },
  { id: "josie-mellick", name: "Josie Mellick" },
  { id: "josiah-paul", name: "Josiah Paul" },
  { id: "dylan-weakly", name: "Dylan Weakly" },
  { id: "mason-colacicco", name: "Mason Colacicco" },
];

const StudentsPage: React.FC = () => {
  return (
    <div className="mt-10 flex flex-col items-center justify-between md:flex-row md:items-start">
      <div>
        <h1 className="text-5xl font-bold">Our Students</h1>
        <ul className="pt-5 text-center text-2xl text-gray-300 md:text-left">
          {students.map((student) => (
            <li
              className="mt-3 transition-colors duration-500 ease-in-out hover:font-bold hover:text-white"
              key={student.id}
            >
              <Link href={`/students/${student.id}`}>{student.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Image
          src={CSCLogo}
          alt="Computer Science Club Logo"
          className="mt-5 w-100 md:mt-20"
          width={300}
          height={100}
        />
      </div>
    </div>
  );
};

export default StudentsPage;
