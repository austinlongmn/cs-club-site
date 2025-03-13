import { Image as ChakraImage } from "@chakra-ui/react";
import { default as NextImage, ImageProps } from "next/image";

export function Image(props: ImageProps) {
  return (
    <ChakraImage asChild>
      <NextImage {...props} />
    </ChakraImage>
  );
}
