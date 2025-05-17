import type { Metadata } from "next";
import Image from "@/components/image";
import Link from "next/link";
import CSCLogo from "@/svg/csc-logo.svg";

export const metadata: Metadata = {
  title: "Alumni - UNW CS Club",
  description:
    "This is the official site of University of Northwestern " +
    "- St.Paul's very own Computer Science Club.",
};

const students = [
  { id: "breyon-gunn", name: "Breyon Gunn, Spring 2025 Graduate" },
  { id: "carter-leitch", name: "Carter Leitch, Spring 2025 Graduate" },
];

export default function Alumni() {
  return (
    <div className="flex flex-col gap-5 pt-15">
      <div className="flex flex-row justify-between">
        <div>
          <h1 className="text-5xl font-bold">Our Alumni</h1>
          <ul className="pt-20 text-2xl text-gray-300">
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
        <div className="max-w-125 text-xl text-gray-300">
          <p className="text-right leading-8 font-semibold">
            We value our Northwestern alumni and appreciate their effort in the
            Computer Science Club. We want to continue to recognize them for
            their effort in the workforce after graduating.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center pt-30">
        <div className="max-w-250 text-center text-lg">
          <p className="font-semibold">
            Go therefore and make disciples of all nations, baptizing them in
            the name of the Father and of the Son and of the Holy Spirit,
            teaching them to observe all that I have commanded you. And behild,
            I am with you always, to the end of the age.
          </p>
          <p className="pt-3 text-gray-300">Matthew 28:19-20</p>
        </div>
        <div className="flex flex-col items-center justify-center pt-15">
          <Link
            href="/students"
            className="rounded-2xl bg-[#d0623b] px-5 py-3 text-xl font-semibold shadow-xl shadow-[#42261b] transition hover:scale-105"
          >
            Check out our current students
          </Link>
          <Image
            src={CSCLogo}
            alt="CSC Logo"
            width={600}
            height={600}
            className="pb-10"
          />
        </div>
      </div>
    </div>
  );
}
