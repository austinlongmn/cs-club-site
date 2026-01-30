import Image from "@/components/image";
import type { Metadata } from "next";
import { NavGrid } from "./components/nav-grid";

export const metadata: Metadata = {
  title: "Home - UNW CS Club",
  description:
    "This is the official site of University of Northwestern " +
    "- St. Paul's Computer Science Club.",
};

export default function Home() {
  return (
    <div className="p-10">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <div className="flex items-center justify-center">
        <Image
          className="w-50 items-center rounded-lg shadow-md transition-transform duration-300 md:w-80"
          width={300}
          height={300}
          src="/images/general/csc-logo.png"
          alt="CS Club Logo"
        />
      </div>
      <h1 className="mt-10 text-center text-3xl md:text-5xl">
        We are the Computer Science Club of the University of Northwestern - St.
        Paul
      </h1>
      <div>
        <NavGrid />
      </div>
      <div className="mt-20 flex items-center justify-center">
        <Image
          className="w-100 items-center rounded-lg shadow-md transition-transform duration-300 md:w-200"
          width={9000}
          height={300}
          src="/images/general/club-fall25.jpeg"
          alt="CS Club Members in Fall 2025"
        />
      </div>
      <h1 className="mt-5 text-center text-lg text-neutral-300 md:text-xl">
        Fall 2025 Club Members
      </h1>
    </div>
  );
}
