import Image from "@/components/image";

import { JSX } from "react";
import Bio from "./components/bio";
import Link from "next/link";

function Heading2({ children }: { children: JSX.Element | string }) {
  return (
    <h2 className="font-jetbrains-mono pb-4 text-2xl sm:text-4xl">
      {children}
    </h2>
  );
}

export default async function Page() {
  return (
    <div className="p-6">
      <div className="flex flex-col-reverse gap-3 pb-6 sm:flex-row">
        <div className="grow">
          <h1 className="font-jetbrains-mono pb-6 text-4xl sm:text-5xl md:text-6xl">
            Austin Long
          </h1>
          <Bio />
        </div>
        <Image
          src="/images/austin/headshot.jpeg"
          width={668}
          height={668}
          alt="A headshot of Austin"
          className="mx-auto h-52 w-auto rounded-md md:h-72"
        />
      </div>
      <Heading2>
        <Link href="https://austinlong.dev/">View my website</Link>
      </Heading2>
    </div>
  );
}
