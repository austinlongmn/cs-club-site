import { Button } from "@/components/ui/button";
import { Box, Text, VStack } from "@chakra-ui/react";
import * as motion from "motion/react-client";

export default function Home() {
  return (
    <VStack>
      <p className="text-4xl">Hello world</p>
      <Button>Click me</Button>
      <Button variant="outline">ABC</Button>
      <Box asChild bg="red.500" width={200} height={200} padding={10} rounded={8}>
        <motion.div
          whileHover={{
            scale: 10,
            rotate: 360,
            backgroundColor: "rgb(0,100,0)",
            transition: { duration: 0.5 }
          }}>
          <Text>Hover me and see what happens...</Text>
          </motion.div>
      </Box>
    </VStack>
  );
}

// <Box asChild height="40px" width="40px" bg="red.500">
// </Box>
