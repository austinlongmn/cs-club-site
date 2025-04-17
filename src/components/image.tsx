import { default as NextImage, ImageProps as NextImageProps } from "next/image";
import imgixLoader from "@/imgix-loader";

export type ImageProps = NextImageProps & {
  useDefaultLoader?: boolean;
};

export default function Image(props: ImageProps) {
  if (
    process.env.NODE_ENV == "production" &&
    !props.useDefaultLoader &&
    typeof props.src == "string" &&
    props.src.startsWith("/images")
  ) {
    return <NextImage loader={imgixLoader} {...props} />;
  }
  return <NextImage {...props} />;
}
