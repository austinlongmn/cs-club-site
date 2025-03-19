import {
  Box,
  Heading,
  Text,
  VStack,
  Flex,
  List,
  Image,
} from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { RiMailLine } from "react-icons/ri";

export default function Dylan() {

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      transition="background 0.5s ease"
    >
      <Flex justifyContent="space-between" width="100%" p={5}>
        <Heading size="5xl" color="white">
          Dylan Weakly
        </Heading>
      </Flex>

        <Box
          p={10}
          maxW="900px"
          mx="auto"
          backdropFilter="blur(10px)"
          borderWidth="5px"
          borderColor="#16C2FF"
          shadow="xl"
          rounded="3xl"
          color="white"
        >
          <VStack align="center">
            <Button variant="surface" colorScheme="blue" fontSize="2xl">
              <RiMailLine />
              Email Dylan
            </Button>
            <Text fontSize="sm" textAlign="center">
              Developer Website Coming Soon
            </Text>

            <Text fontSize="md" py="4">
              I am currently a sophomore Computer Science major with a
              Cybersecurity minor. I am currently learning web development with
              basic HTML, CSS, and JavaScript as well as learning the React
              framework.
            </Text>

            <Text fontSize="md" py="3" textAlign="right">
              Some of my interests outside of Computer Science include going on
              hikes with my family (yeah, shocking!), checking out cool cars,
              and serving on the production team at my church.
            </Text>

            <Text fontSize="md" py="3">
              For Systems Analysis and Design class here at Northwestern, I
              worked together with Isaac Grosser who has since graduated to
              provide Atkinson Refinishing Services with some great invoicing
              options to improve efficiency of the company.
            </Text>

            <Text fontSize="lg" textAlign="center" py="4">
              My Favorite Projects
            </Text>
            <List.Root>
              <List.Item>
                Systems Analysis and Design Project (featured Below)
              </List.Item>
              <List.Item>More to come...</List.Item>
            </List.Root>

            <Image
              width="2592"
              height="3840"
              src="/images/dylan/atkinson-poster.png"
              alt="Systems A & D Photo"
              style={{ borderRadius: "0.5rem" }}
              shadow="md"
              transition="transform 0.3s ease"
              _hover={{ transform: "scale(1.05)" }}
            />
          </VStack>
        </Box>
    </Box>
  );
}
