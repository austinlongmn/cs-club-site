"use client";
import Image from "next/image";
import Link from "next/link";
import CSCLogo from "@/svg/csc-logo.svg";

// Pages:
// - Home
// - Students
// - Featured projects
// - About

export default function Navbar() {
  return (
    <div
      className="container"
      style={{ "--navbar-height": "6rem" } as React.CSSProperties}
    >
      <nav className="bg-gray-900 w-full top-0 left-0 fixed h-[var(--navbar-height)] z-50">
        <div className="flex gap-4 max-w-6xl mx-auto sm:px-4">
          <div className="flex">
            <Image
              src={CSCLogo}
              alt="CSC Logo"
              width={929}
              height={630}
              className="h-[var(--navbar-height)] w-auto p-2 "
            />
          </div>
          <div className="grow" />
          <div className="gap-4 flex">
            <Link href="/" className="text-white">
              Home
            </Link>
            <Link href="/students" className="text-white">
              Students
            </Link>
          </div>
        </div>
      </nav>
      <div className="pb-[var(--navbar-height)]" />
    </div>
  );
}

// Later links:
// <Link href="/featured-projects" className="text-white">
//   Featured Projects
// </Link>
// <Link href="/about" className="text-white">
//   About
// </Link>
