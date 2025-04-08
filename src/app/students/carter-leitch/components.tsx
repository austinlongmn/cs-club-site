import Image from "next/image";
import Link from "next/link";
import React from "react";

export function BigHeader({ text }: { text: string }) {
  return (
    <h1 className="m-10 justify-center text-center text-5xl text-white">
      {text}
    </h1>
  );
}

export function LittleHeader({ text }: { text: string }) {
  return (
    <h1 className="m-5 justify-center text-center text-3xl text-white">
      {text}
    </h1>
  );
}

export function GitHubButton() {
  return (
    <Link href="https://github.com/cartrleitch" target="_blank">
      <Image
        className="mt-3 mr-4 hover:cursor-pointer hover:opacity-50"
        src="/images/carter/GitHubLogo.png"
        alt="Profile photo of Carter Leitch"
        width={50}
        height={50}
      />
    </Link>
  );
}

export function LinkedInButton() {
  return (
    <Link href="https://www.linkedin.com/in/carter-leitch/" target="_blank">
      <Image
        className="mt-3 hover:cursor-pointer hover:opacity-50"
        src="/images/carter/LinkedIn_icon.svg"
        alt="Profile photo of Carter Leitch"
        width={50}
        height={50}
      />
    </Link>
  );
}