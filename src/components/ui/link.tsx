// This file was not added by Chakra-UI
import NextLink from "next/link";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";

export function Link(props: LinkProps) {
  return <ChakraLink as={NextLink} colorPalette="blue" {...props} />;
}
