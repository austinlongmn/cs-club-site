import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CSCLogo from "@/svg/csc-logo.svg";

export const metadata: Metadata = {
  title: "Alumni - UNW CS Club",
  description:
    "This is the official site of University of Northwestern " +
    "- St.Paul's very own Computer Science Club.",
};

export default function Alumni() {
  const paragraphStyle = "text-3xl text-center";

  return (
    <div className="flex flex-col items-center justify-center gap-5 bg-gray-900 pt-20 md:pt-30">
      <p className={paragraphStyle}>
        There are currently no active alumni pages.
      </p>
      <p className={paragraphStyle}>
        Check back in Summer 2025 to see the most recent Alumni.
      </p>
      <Link
        href="/students"
        className="text-center text-2xl underline decoration-[#d0623b]"
      >
        Instead, check out our current students!
      </Link>
      <Image
        src={CSCLogo}
        alt="CSC Logo"
        width={800}
        height={600}
        className="mt-10"
      />
    </div>
  );
}
