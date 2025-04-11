"use client";
import React from "react";

export default function FlipTile({
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
