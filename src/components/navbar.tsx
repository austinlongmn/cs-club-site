"use client";
import Image from "next/image";
import Link from "next/link";
import CSCLogo from "@/svg/csc-logo.svg";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

// Pages:
// - Home
// - Students
// - Featured projects
// - About

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <div
      className="container"
      style={{ "--navbar-height": "6rem" } as React.CSSProperties}
    >
      <nav className="border-foreground fixed top-0 left-0 z-50 h-[var(--navbar-height)] w-full border-b backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl gap-4 sm:px-4">
          <Link href="/" className="flex">
            <Image
              src={CSCLogo}
              alt="CSC Logo"
              width={929}
              height={630}
              className="h-[var(--navbar-height)] w-auto p-2"
            />
          </Link>
          <div className="grow" />
          <div className="flex items-center gap-4">
            <Link href="/" className="text-white">
              Home
            </Link>
            <Link href="/students" className="text-white">
              Students
            </Link>
            <Link href="/competition-scores" className="text-white">
              Competition Scores
            </Link>
          </div>
          <button
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            Toggle Menu
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.div exit={{ y: -1000 }} className="bg-background fixed top-0 left-0 z-49 h-screen w-screen"></motion.div>
        )}
      </AnimatePresence>
      <div className="pb-[var(--navbar-height)]" />
    </div>
  );
}
