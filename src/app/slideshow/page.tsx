"use client";
import { Element, Frame, Slideshow } from "@/components/slideshow";
import { useEffect, useState } from "react";

function DemoFrame() {
  return (
    <Frame key={1}>
      <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-4">
        <Element
          animationDirection="left"
          animationDelay={0}
          animationLength={70}
        >
          <div className="h-full w-full rounded-md bg-blue-300 text-center text-9xl">
            <div className="h-50" />
            <div>Hello, there!</div>
          </div>
        </Element>
        <Element
          animationDirection="up"
          animationDelay={10}
          animationLength={70}
        >
          <div className="h-full w-full rounded-md bg-green-300" />
        </Element>
        <Element
          animationDirection="down"
          animationDelay={20}
          animationLength={70}
        >
          <div className="h-full w-full rounded-md bg-green-300" />
        </Element>
        <Element
          animationDirection="right"
          animationDelay={30}
          animationLength={70}
        >
          <div className="h-full w-full rounded-md bg-blue-300" />
        </Element>
      </div>
    </Frame>
  );
}

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
        advanceTime={5}
        animationDistance={50}
        animationScale={2}
        inBetweenTime={1}
        animationTime={1.5}
        frames={[<DemoFrame key={1} />]}
      />
    </div>
  );
}
