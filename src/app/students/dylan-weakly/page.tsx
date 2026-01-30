import Image from "@/components/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dylan Weakly - UNW CS Club",
  description:
    "This is the official site of University of Northwestern - St. Paul's very own Computer Science Club.",
};

export default function Dylan() {
  return (
    <div className="container mx-auto my-10 flex max-w-175 flex-col items-center space-y-10 rounded-3xl bg-neutral-800 p-6 text-center text-white backdrop-blur-lg">
      <h1 className="text-4xl font-bold">Dylan Weakly</h1>
      <p className="text-3xl">
        Thank you for visiting this website!<br></br>Dylan is busy working on
        other projects.<br></br>Visit Dylan&apos;s website by clicking the logo
        below.
      </p>
      <Link
        href="https://dylanweakly.dev"
        className="mt-1 inline-block transition-transform duration-300 hover:scale-110"
      >
        <Image
          src="/images/dylan/logo.jpg"
          width={1920}
          height={1080}
          alt="Dylan"
          className="h-100 w-auto md:mx-auto md:h-100"
        />
      </Link>
    </div>
  );
}
