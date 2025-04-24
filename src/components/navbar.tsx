"use client";
import Image from "@/components/image";
import Link from "next/link";
import CSCLogo from "@/svg/csc-logo.svg";
import MenuButtonIcon from "@/svg/navbar-menu-icon.svg";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";

// Pages:
// - Home
// - Students
// - Alumni
// - Competition Scores
// - Featured Projects
// - About

interface Page {
  description: string;
  route: string;
}

const pages: Page[] = [
  {
    description: "Home",
    route: "/",
  },
  {
    description: "Students",
    route: "/students",
  },
  {
    description: "Alumni",
    route: "/alumni",
  },
  {
    description: "Competition Scores",
    route: "/competition-scores",
  },
  {
    description: "About",
    route: "/about",
  },
];

const lg_num_items = 7;
const md_num_items = 4;
const sm_num_items = 2;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div
      className="container"
      style={{ "--navbar-height": "6rem" } as React.CSSProperties}
    >
      <nav className="border-foreground fixed top-0 left-0 z-50 h-[var(--navbar-height)] w-full border-b backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl gap-4 px-5">
          <Link href="/" className="flex">
            <Image
              src={CSCLogo}
              alt="CSC Logo"
              width={929}
              height={630}
              className="h-[var(--navbar-height)] w-auto py-4"
            />
          </Link>
          <div className="grow" />
          <div className="flex items-center gap-4">
            {pages.map((page, index) => {
              return (
                <Link
                  href={page.route}
                  key={index}
                  className={`hidden transition-all duration-100 ${
                    index >= lg_num_items
                      ? ""
                      : index >= md_num_items
                        ? "lg:inline"
                        : index >= sm_num_items
                          ? "md:inline"
                          : "sm:inline"
                  } ${pathname == page.route ? "font-bold" : "hover:font-bold"}`}
                >
                  {page.description}
                </Link>
              );
            })}
          </div>
          <button
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <motion.div animate={{ rotate: menuOpen ? 45 : 0 }}>
              <Image
                src={MenuButtonIcon}
                alt="Menu bar icon"
                className="h-auto w-5 hover:scale-115"
              />
            </motion.div>
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            exit={{ opacity: 0, scale: 1.1, transition: { type: "easeInOut" } }}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { type: "easeInOut" },
            }}
            className="bg-background fixed top-0 left-0 z-49 h-screen w-screen"
          >
            <div className="pb-[var(--navbar-height)]" />
            <div className="mx-auto max-w-6xl p-6 text-2xl">
              {pages.map((page, index) => {
                return (
                  <Link
                    className={`block ${pathname == page.route ? "font-bold" : "transition-all duration-100 hover:font-bold"}`}
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                    href={page.route}
                    key={index}
                  >
                    {page.description}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="pb-[var(--navbar-height)]" />
    </div>
  );
}
