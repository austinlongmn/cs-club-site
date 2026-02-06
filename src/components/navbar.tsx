"use client";
import Image from "@/components/image";
import Link from "next/link";
import CSCLogo from "@/svg/csc-logo.svg";
import MenuButtonIcon from "@/svg/navbar-menu-icon.svg";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";

interface Page {
  description: string;
  route: string;
}

const pages: Page[] = [
  { description: "Home", route: "/" },
  { description: "Students", route: "/students" },
  { description: "Alumni", route: "/alumni" },
  { description: "Competition Scores", route: "/competition-scores" },
  { description: "About", route: "/about" },
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

          {/* DESKTOP MENU ITEMS */}
          <div className="flex items-center gap-4">
            {pages.map((page, index) => {
              const isActive = pathname === page.route;

              return (
                <Link
                  href={page.route}
                  key={index}
                  className={`group relative hidden justify-items-center ${
                    index >= lg_num_items
                      ? ""
                      : index >= md_num_items
                        ? "lg:inline-grid"
                        : index >= sm_num_items
                          ? "md:inline-grid"
                          : "sm:inline-grid"
                  }`}
                >
                  {/* Desktop Ghost Text */}
                  <span
                    className="invisible col-start-1 row-start-1 font-bold"
                    aria-hidden="true"
                    style={{ transform: "scale(1.1)" }}
                  >
                    {page.description}
                  </span>

                  {/* Desktop Animated Text */}
                  <motion.span
                    initial={false}
                    animate={{
                      scale: isActive ? 1.1 : 1,
                    }}
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                      mass: 1,
                    }}
                    style={{
                      paintOrder: "stroke fill",
                    }}
                    className={`col-start-1 row-start-1 origin-center font-normal`}
                  >
                    {page.description}
                  </motion.span>
                </Link>
              );
            })}
          </div>

          {/* MENU BUTTON & DROPDOWN CONTAINER */}
          <div className="relative flex items-center">
            <button
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
              className="z-50 p-2" // Added padding for easier clicking
            >
              <motion.div animate={{ rotate: menuOpen ? 45 : 0 }}>
                <Image
                  src={MenuButtonIcon}
                  alt="Menu bar icon"
                  className="h-auto w-5 hover:scale-115"
                />
              </motion.div>
            </button>

            {/* DROPDOWN MENU */}
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="bg-background absolute top-full right-0 mt-2 w-56 origin-top-right overflow-hidden rounded-xl border p-4 shadow-xl"
                >
                  <div className="flex flex-col items-start gap-4">
                    {pages.map((page, index) => {
                      const isActive = pathname === page.route;

                      return (
                        <Link
                          key={index}
                          href={page.route}
                          onClick={() => setMenuOpen(false)}
                          className="group inline-grid w-full"
                        >
                          {/* Mobile Ghost Text */}
                          <span
                            className="invisible col-start-1 row-start-1 origin-left font-bold"
                            aria-hidden="true"
                            style={{ transform: "scale(1.1)" }}
                          >
                            {page.description}
                          </span>

                          {/* Mobile Animated Text */}
                          <motion.span
                            initial={false}
                            animate={{
                              scale: isActive ? 1.1 : 1,
                            }}
                            whileHover={{
                              scale: 1.1,
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 30,
                              mass: 1,
                            }}
                            style={{
                              paintOrder: "stroke fill",
                            }}
                            className="col-start-1 row-start-1 origin-left font-normal"
                          >
                            {page.description}
                          </motion.span>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>
      <div className="pb-[var(--navbar-height)]" />
    </div>
  );
}
