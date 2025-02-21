import { Image } from "@/components/ui/image";
import { Link } from "@/components/ui/link";
import { Code, Heading, List, Text } from "@chakra-ui/react";

export default function Page() {
  return (
    <>
      <Heading>Austin Long</Heading>
      <Text>I am a software developer.</Text>
      <Text>Here are some projects I have worked on.</Text>
      <List.Root>
        <List.Item>
          My <Link href="https://austinlong.dev">Personal Website</Link>
        </List.Item>
        <List.Item>
          The Last Crewman
        </List.Item>
        <List.Item>
          <Code>zderad</Code>
        </List.Item>
        <List.Item>
          <Code>ptsched</Code>
        </List.Item>
      </List.Root>

	  <Text>I Like using Neovim.</Text>
	  <Image src="/images/austin/neovim-mark.svg" alt="Neovim logo" width="100" height="100"/>
    </>
  );
}
