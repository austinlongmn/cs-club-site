import { Frame, Element } from "@/components/slideshow";

import Image from "next/image";

import ProfileImage from "@public/images/austin/headshot.jpeg";
import SwiftLogo from "@/svg/swift-logo-color.svg";
import RustLogo from "@public/images/general/rust-logo-128x128.png";
import TypeScriptLogo from "@/svg/ts-logo-128.svg";
import PythonLogo from "@/svg/python-logo.svg";
import QRCode from "@public/images/austin/website-qr-code.svg";
import Bio from "./components/bio";

export default function SlideshowFrame() {
  return (
    <Frame backgroundColor="#050809" defaultAnimationDuration={50}>
      <div className="grid h-full grid-cols-2 grid-rows-[auto_1fr] gap-5 p-5">
        <div className="flex flex-row gap-5">
          <Element animationDirection="up">
            <div className="font-jetbrains-mono flex h-full items-center justify-center rounded-lg bg-zinc-800 p-10 text-7xl">
              <div className="text-center">Austin Long</div>
            </div>
          </Element>
          <Element animationDirection="up" animationDelay={12.5}>
            <Image
              src={ProfileImage}
              className="w-100 flex-1 rounded-lg"
              alt="Austin Long"
            />
          </Element>
        </div>
        <Element animationDirection="right" animationDelay={25}>
          <div className="flex h-full flex-col rounded-lg bg-zinc-800 p-5">
            <h2 className="font-jetbrains-mono text-center text-4xl">
              Favorite Programming Languages
            </h2>
            <ul className="font-jetbrains-mono flex grow flex-col justify-around text-3xl *:flex *:flex-row *:items-center *:gap-5">
              <li>
                <Image alt="Swift Logo" className="w-10" src={SwiftLogo} />
                <div>Swift</div>
              </li>
              <li>
                <Image alt="Rust Logo" className="w-10" src={RustLogo} />
                <div>Rust</div>
              </li>
              <li>
                <Image
                  alt="TypeScript Logo"
                  className="w-10"
                  src={TypeScriptLogo}
                />
                <div>TypeScript</div>
              </li>
              <li>
                <Image alt="Python Logo" className="w-10" src={PythonLogo} />
                <div>Python</div>
              </li>
            </ul>
          </div>
        </Element>
        <Element animationDirection="left" animationDelay={37.5}>
          <div className="prose prose-p:text-3xl prose-a:no-underline prose-a:text-foreground prose-p:text-foreground h-full w-full max-w-none rounded-lg bg-zinc-800 p-5">
            <Bio />
          </div>
        </Element>
        <Element animationDirection="down" animationDelay={50}>
          <div className="flex h-full flex-col items-center justify-center gap-5 rounded-lg p-5">
            <h2 className="font-jetbrains-mono text-center text-5xl">
              Website
            </h2>
            <p className="font-jetbrains-mono bold text-center text-4xl">
              https://austinlong.dev/
            </p>
            <Image
              alt="QR Code to my website"
              className="w-100 rounded-lg bg-white"
              src={QRCode}
            />
          </div>
        </Element>
      </div>
    </Frame>
  );
}
