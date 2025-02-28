"use client";
import { Heading, Box, Flex, Text } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box className="container" style={{ "--navbar-height": "6rem" } as React.CSSProperties}>
      <nav className="bg-gray-900 w-full fixed h-[var(--navbar-height)]">
        <Flex className="">
          <Heading className="">
            There will be a navigation bar here.
          </Heading>
          <Box className="flex-grow"/>
          <Text>Hello, there</Text>
        </Flex>
      </nav>
      <Box className="pb-[var(--navbar-height)]" />
    </Box>
  );
}
