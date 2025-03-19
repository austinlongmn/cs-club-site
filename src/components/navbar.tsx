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
      <nav className="border-foreground fixed top-0 left-0 z-50 h-[var(--navbar-height)] w-full border-b backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl gap-4 sm:px-4">
          <div className="flex">
            <Image
              src={CSCLogo}
              alt="CSC Logo"
              width={929}
              height={630}
              className="h-[var(--navbar-height)] w-auto p-2"
            />
          </div>
          <div className="grow" />
          <div className="flex gap-4">
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
