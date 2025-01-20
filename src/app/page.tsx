import { Button } from "@/components/ui/button";
import { VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <VStack>
      <p className="text-4xl">Hello world</p>
      <Button>Click me</Button>
      <Button variant="outline">ABC</Button>
    </VStack>
  );
}
