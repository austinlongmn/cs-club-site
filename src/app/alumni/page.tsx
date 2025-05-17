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
  { id: "ethan-reed", name: "Ethan Reed, Spring 2025 PSEO Graduate" },
];

export default function Alumni() {
  return (
    <div className="flex flex-col gap-5 px-5 pt-15">
      <div className="flex flex-col justify-between md:flex-row">
        <div>
          <h1 className="text-center text-5xl font-bold md:text-left">
            Our Alumni
          </h1>
          <ul className="pt-5 text-xl text-gray-300 md:pt-20 md:text-2xl">
            {students.map((student) => (
              <li
                className="mt-3 text-center transition-colors duration-500 ease-in-out hover:font-bold hover:text-white md:text-left"
                key={student.id}
              >
                <Link href={`/alumni/${student.id}`}>{student.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="max-w-125 text-lg text-gray-300 md:text-xl">
          <p className="pt-10 text-center leading-8 font-semibold md:pt-0 md:text-right">
            We value our Northwestern alumni and appreciate their effort in the
            Computer Science Club. We want to continue to recognize them for
            their effort in the workforce after graduating.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center pt-5 md:pt-30">
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
            className="text-md rounded-2xl bg-[#d0623b] px-5 py-3 font-semibold shadow-xl shadow-[#42261b] transition hover:scale-105 md:text-xl"
          >
            Check out our current students
          </Link>
          <Image
            src={CSCLogo}
            alt="CSC Logo"
            width={600}
            height={600}
            className="pt-5 pb-10"
          />
        </div>
      </div>
    </div>
  );
}
