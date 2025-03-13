import { Image as ChakraImage } from "@chakra-ui/react";
import { default as NextImage, ImageProps as NextImageProps } from "next/image";

interface ImagePropsExtra {
  chakraHeight?: string;
  chakraWidth?: string;
}

type ImageProps = NextImageProps & ImagePropsExtra;

export function Image(props: ImageProps) {
  const { chakraHeight, chakraWidth, ...rest } = props;
  return (
    <ChakraImage height={chakraHeight} width={chakraWidth} asChild>
      <NextImage {...rest} />
    </ChakraImage>
  );
}
