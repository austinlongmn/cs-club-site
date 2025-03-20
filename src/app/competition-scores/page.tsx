import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Competition Scores - UNW CS Club",
  description:
    "This is the official site of University of Northwestern " +
    "- St.Paul's very own Computer Science Club.",
};

export default function Home() {
  return (
    <div className="pb-20">
      <h1 className="pt-10 pb-10 text-5xl font-bold">
        Programming Competition Scores
      </h1>
      <hr />
      <h2 className="pt-10 text-3xl">February 2025 Programming Competition</h2>
      <p className="pt-10 text-lg" >Top 3 Winners:</p>
      <p className="text-lg" >Henry Getz, Breyon Gunn, Carter Cook</p>

      <Image
        className="pt-10 shadow-md transition-transform duration-300 hover:scale-102"
        width={400}
        height={1200}
        src="/images/competition-scores/feb25-prog-comp.png"
        alt="February 2025 Programming Competition Scores"
      />
    </div>
  );
}
