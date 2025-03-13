import type { Metadata } from "next";
import { Box, Heading, Text, VStack, Container, Flex } from "@chakra-ui/react";
import { Image } from "@/components/ui/image";
import { Button } from "@/components/ui/button";
import { RiMailLine } from "react-icons/ri";

export const metadata: Metadata = {
  title: "UNW CS Club - Dylan Weakly",
  description: "Dylan Weakly's site for the UNWSP CS Club",
};

export default function Dylan() {
  return (
    <Container bg="black">
      <Flex justifyContent="center" alignItems="center">
        <Heading size="3xl" color="white" py="5">
          Dylan Weakly
        </Heading>
      </Flex>
      <Box
        p={10}
        maxW="600px"
        mx="auto"
        bg="white"
        borderWidth="3px"
        borderColor="#16C2FF"
        shadow="md"
        rounded="3xl"
      >
        <VStack align="start">
          <Button variant="surface" color="white" bg="black">
            <RiMailLine />
            Email Dylan
          </Button>

          <Text fontSize="md" color="black" py="2">
            I am currently a sophomore Computer Science major with a
            Cybersecurity minor. I am currently learning web development with
            basic HTML, CSS, and JavaScript as well as learning the React
            framework.
          </Text>
          <Text fontSize="md" color="black" py="0" textAlign="right">
            Some of my interests outside of Computer Science include going on
            hikes with my family (yeah, shocking!), checking out cool cars, and
            serving on the production team at my church.
          </Text>
          <Text fontSize="md" color="black" py="5">
            For Systems Analysis and Design class here at Northwestern, I worked
            together with Isaac Grosser who has since graduated to provide
            Atkinson Refinishing Services with some great invoicing options to
            improve efficiency of the company.
          </Text>

          <Image
            width="2592"
            height="3840"
            src="/images/dylan/atkinson-poster.png"
            alt="Systems A & D Photo"
          />
        </VStack>
      </Box>
    </Container>
  );
}
