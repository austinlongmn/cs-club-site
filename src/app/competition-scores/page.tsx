import type { Metadata } from "next";
import { Feb2025Competition } from "./components/feb-25-programming-competition";
import { Apr2025Competition } from "./components/apr-25-programming-competition";
import { May2025Competition } from "./components/may-25-programming-competition";

export const metadata: Metadata = {
  title: "Competition Scores - UNW CS Club",
  description:
    "This is the official site of University of Northwestern " +
    "- St. Paul's Computer Science Club.",
};

export default function Home() {
  return (
    <div className="px-5 pt-10 pb-10">
      <h1 className="border-b-4 border-[#1377bd] pb-10 text-center text-3xl font-bold md:text-5xl">
        Programming Competition Scores
      </h1>
      <div>
        <Feb2025Competition />
        <Apr2025Competition />
        <May2025Competition />
      </div>
    </div>
  );
}
