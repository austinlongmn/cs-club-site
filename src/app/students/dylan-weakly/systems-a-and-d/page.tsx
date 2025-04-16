import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dylan's SAAD Project - UNW CS Club",
  description:
    "This is the official site of University of Northwestern " +
    "- St.Paul's very own Computer Science Club.",
};

export default function SystemsProject() {
  return (
    <div className="max-w-8xl mx-auto mt-10 mb-10 flex flex-col items-center justify-center rounded-3xl border-8 border-[#b15900] bg-neutral-800 p-10 text-white shadow-xl backdrop-blur-lg transition-all duration-500">
      <div className="pt-5 text-center sm:mr-20 sm:ml-20">
        <h1 className="border-b border-[#b15900] pb-5 text-4xl font-bold">
          Dylan&apos;s Systems Analysis and Design Project
        </h1>
        <p className="mt-10 text-xl">
          In Fall 2024, I collaborated with Northwestern alumnus Isaac Grosser
          to identify and address a business inefficiency at Atkinson
          Refinishing Services. Through a comprehensive analysis of their
          operations, we discovered that the company was still relying on
          paper-based processes to manage invoices—an approach that hindered
          efficiency and scalability. Initially, our team proposed the
          development of a custom invoicing platform tailored to the
          company&apos;s specific needs. However, due to time constraints, we
          pivoted toward identifying and evaluating existing electronic
          invoicing solutions that could offer immediate value and mobile
          compatibility.
        </p>
        <p className="mt-10 text-xl">
          Our research led us to two viable mobile invoicing platforms:
          QuickBooks and Square. We delivered a detailed report to Atkinson
          Refinishing Services outlining the features, advantages, and
          implementation considerations of each solution. These recommendations
          aimed to enhance the company&apos;s operational efficiency and
          organization by transitioning from a manual invoicing process to a
          modern, digital system.
        </p>
      </div>
      <div>
        <Image
          className="mt-10 rounded-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0px_0px_20px_5px_rgba(255,255,255,0.3)]"
          width={400}
          height={1000}
          src="/images/dylan/atkinson-poster.png"
          alt="Systems A&#39;D Poster"
        />
      </div>
      <p className="mt-5 max-w-100 text-center font-bold text-neutral-500 italic">
        Legal Note: This poster may not be redistributed or reused without
        written consent of the creators.
      </p>
      <Link
        href="/students/dylan-weakly"
        className="mt-5 rounded-2xl bg-[#b15900] px-5 py-3 font-semibold hover:bg-[#683400]"
      >
        Back to Dylan&apos;s Page
      </Link>
    </div>
  );
}
