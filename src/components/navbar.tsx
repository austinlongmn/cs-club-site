"use client";
import { Box, Flex } from "@chakra-ui/react";
import { Link } from "@/components/ui/link";
import Image from "next/image"; //"@/components/ui/image";
import CSCLogo from "@/svg/csc-logo.svg";

// Pages:
// - Home
// - Students
// - Featured projects
// - About

export default function Navbar() {
  return (
    <Box
      className="container"
      style={{ "--navbar-height": "6rem" } as React.CSSProperties}
    >
      <nav className="bg-gray-900 w-full top-0 left-0 fixed h-[var(--navbar-height)]">
        <Flex className="gap-4 max-w-6xl mx-auto sm:px-4">
          <Flex>
            <Image
              src={CSCLogo}
              alt="CSC Logo"
              width={929}
              height={630}
              className="h-[var(--navbar-height)] w-auto p-2 "
            />
          </Flex>
          <Box className="flex-grow" />
          <Flex className="gap-4">
            <Link href="/" className="text-white">
              Home
            </Link>
            <Link href="/students" className="text-white">
              Students
            </Link>
          </Flex>
        </Flex>
      </nav>
      <Box className="pb-[var(--navbar-height)]" />
    </Box>
  );
}

// Later links:
// <Link href="/featured-projects" className="text-white">
//   Featured Projects
// </Link>
// <Link href="/about" className="text-white">
//   About
// </Link>
