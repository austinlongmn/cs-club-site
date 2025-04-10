"use client";
import React, { useState } from "react";
import Image from "next/image";

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

  return (
    <div className="realtive inline-block">
      <div
        className="cursor-pointer text-white underline"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {text}
      </div>

      {isHovered && (
        <div className="absolute bottom-7 z-50 translate-x-10">
          <Image
            className="rounded-lg shadow-lg"
            src={imagePath}
            alt="Revealed Image"
            width={250}
            height={200}
          />
        </div>
      )}
    </div>
  );
}
