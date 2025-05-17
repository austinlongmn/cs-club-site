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
          width={5000}
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
      <div>
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
    </div>
  );
}
