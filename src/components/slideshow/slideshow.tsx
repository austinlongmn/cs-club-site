"use client";
import {
  createContext,
  useState,
  useRef,
  useEffect,
  ReactElement,
} from "react";

export interface SlideshowContextType {
  animationDistance: number;
  animationTime: number;
  animationScale: number;
}

export const FrameIndexContext = createContext(false);

export const SlideshowContext = createContext({
  animationDistance: 20,
  animationTime: 20,
  animationScale: 2,
} as SlideshowContextType);

export interface SlideshowProps {
  advanceTime?: number;
  inBetweenTime?: number;
  animationDistance?: number;
  animationTime?: number;
  animationScale?: number;
  previewFrame?: number | null;
  frames: ReactElement[];
}

export function Slideshow({
  advanceTime = 7,
  animationDistance = 20,
  inBetweenTime = 0.2,
  animationTime = 1,
  animationScale = 2,
  previewFrame = null,
  frames,
}: SlideshowProps) {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [animateIn, setAnimateIn] = useState(true);
  const timeouts = useRef<NodeJS.Timeout[]>([]); // Track timeouts
  const containerRef = useRef<HTMLDivElement>(null);

  // Schedule slide advances
  useEffect(() => {
    if (previewFrame == null) {
      const scheduleFrame = () => {
        // Timeout to start animating out
        timeouts.current.push(
          setTimeout(() => {
            setAnimateIn(false);

            // Timeout for in-between state
            timeouts.current.push(
              setTimeout(() => {
                // Timeout to advance slide
                timeouts.current.push(
                  setTimeout(() => {
                    setCurrentFrame(
                      (prevFrame) => (prevFrame + 1) % frames.length
                    );
                    setAnimateIn(true);

                    // Schedule next cycle
                    scheduleFrame();
                  }, inBetweenTime * 1000)
                );
              }, animationTime * 1000)
            );
          }, advanceTime * 1000)
        );
      };

      scheduleFrame();

      return () => {
        // Cleanup timeouts when component unmounts
        timeouts.current.forEach(clearTimeout);
        timeouts.current = [];
      };
    } else {
      setCurrentFrame(previewFrame);
    }
  }, [advanceTime, animationTime, frames.length, inBetweenTime, previewFrame]);

  return (
    <SlideshowContext
      value={{
        animationDistance,
        animationTime,
        animationScale,
      }}
    >
      <div ref={containerRef} className="relative h-full w-full">
        {frames.map((frame, index) => {
          return (
            currentFrame == index && (
              <FrameIndexContext key={index} value={animateIn}>
                {frame}
              </FrameIndexContext>
            )
          );
        })}
      </div>
    </SlideshowContext>
  );
}
