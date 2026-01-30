"use client";
import AustinFrame from "@/app/students/austin-long/frame";
import { Slideshow } from "@/components/slideshow";
import { useEffect, useState } from "react";

export default function Page() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    function onHashChange() {
      if (window.location.hash.includes("fullscreen")) {
        setIsFullscreen(true);
      } else {
        setIsFullscreen(false);
      }
    }

    window.addEventListener("hashchange", onHashChange);

    onHashChange();

    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return (
    <div
      className={`bg-background aspect-video ${isFullscreen ? "fixed top-0 left-0 z-51 h-screen w-screen" : ""}`}
    >
      <Slideshow
        advanceTime={20}
        animationDistance={50}
        animationScale={2}
        inBetweenTime={1.5}
        animationTime={2.5}
        frames={[<AustinFrame key={"Austin Long"} />]}
      />
    </div>
  );
}
