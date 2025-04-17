"use client";
import React, { useState } from "react";
import Image from "@/components/image";

export function FlipTile({
  frontText,
  backText,
  frontStyle,
  backStyle,
}: {
  frontText: string;
  backText: string;
  frontStyle: string;
  backStyle: string;
}) {
  const [flipped, setFlipped] = React.useState(false);
  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      className={`relative m-2 flex h-40 w-40 cursor-pointer items-center justify-center rounded-lg bg-blue-800 text-white shadow-lg transition-transform duration-300 hover:scale-105 ${flipped ? "rotate-y-180" : ""}`}
      onClick={handleClick}
    >
      <div
        className={`m-2 text-center ${flipped ? `${backStyle} rotate-y-180` : `${frontStyle}`}`}
      >
        <h3>{flipped ? backText : frontText}</h3>
      </div>
    </div>
  );
}

export function HoverImage({
  text,
  imagePath,
}: {
  text: string;
  imagePath: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const timeoutReference = React.useRef<NodeJS.Timeout | null>(null);

  const handleHover = () => {
    if (timeoutReference.current) {
      clearTimeout(timeoutReference.current);
    }
    setIsHovered(true);
  };
  const handleLeave = () => {
    timeoutReference.current = setTimeout(() => {
      setIsHovered(false);
    }, 200);
  };

  const handleClick = () => {
    setIsHovered(true);
    setTimeout(() => {
      setIsHovered(false);
    }, 2000);
  };

  return (
    <div className="relative inline-block">
      <div
        className="cursor-pointer text-white underline"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        onClick={handleClick}
      >
        {text}
      </div>
      {isHovered && (
        <div className="absolute bottom-5 left-full z-5 h-54 w-54 rounded-lg shadow-lg">
          <Image
            className="absolute bottom-0 left-0 rounded-lg object-contain shadow-lg"
            src={imagePath}
            alt="Revealed Image"
            width={200}
            height={200}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          />
        </div>
      )}
    </div>
  );
}
