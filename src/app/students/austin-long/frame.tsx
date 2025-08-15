import { Frame, Element } from "@/components/slideshow";

import Image from "next/image";

import ProfileImage from "@public/images/austin/headshot.jpeg";
import { Bio } from "./page";

export default function SlideshowFrame() {
  return (
    <Frame>
      <div className="flex flex-col gap-5 p-5">
        <div className="flex flex-row gap-5">
          <Element animationDirection="up">
            <div className="font-jetbrains-mono flex items-center justify-center rounded-lg bg-zinc-700 p-10 text-7xl">
              <div>Austin Long</div>
            </div>
          </Element>
          <Element animationDirection="up">
            <Image
              src={ProfileImage}
              className="w-50 rounded-lg"
              alt="Austin Long"
            />
          </Element>
        </div>
        <Element animationDirection="left">
          <div className="prose prose-p:text-3xl prose-a:no-underline prose-a:text-foreground prose-p:text-foreground rounded-lg bg-zinc-800 p-5">
            <Bio />
          </div>
        </Element>
      </div>
    </Frame>
  );
}
