"use client";
import {
  ReactElement,
  createContext,
  useContext,
  useState,
  Children,
  cloneElement,
  JSX,
  useEffect,
  useRef,
} from "react";
import { motion } from "motion/react";

interface SlideshowContextType {
  animationDistance: number;
}
const SlideshowContext = createContext({
  animationDistance: 20,
} as SlideshowContextType);
const FrameContext = createContext(false);
const KeyFrameContext = createContext(false);

export interface FrameProps {
  children: ReactElement<ElementProps>[];
  isCurrent?: boolean;
  isKeyFrame?: boolean;
}

export interface SlideshowProps {
  advanceTime: number;
  inBetweenTime: number;
  animationDistance: number;
  animationTime: number;
  children: ReactElement<FrameProps>[];
}

export interface ElementProps {
  children: JSX.Element;
  x: number;
  y: number;
  animationDirection: string | AnimationDirection;
}

export interface AnimationDirection {
  x: number;
  y: number;
}

export function customAnimationDirection(
  x: number,
  y: number
): AnimationDirection {
  return { x: x, y: y };
}

export function Slideshow({
  advanceTime = 7,
  animationDistance = 20,
  inBetweenTime = 0.2,
  animationTime = 1,
  children,
}: SlideshowProps) {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [animateIn, setAnimateIn] = useState(true);
  const timeouts = useRef<NodeJS.Timeout[]>([]); // Track timeouts

  useEffect(() => {
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
                    (prevFrame) => (prevFrame + 1) % Children.count(children)
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
  }, [advanceTime, animationTime, children, inBetweenTime]); // Run effect when `children` change

  return (
    <SlideshowContext value={{ animationDistance }}>
      {Children.map(children, (child, index) =>
        cloneElement(child, {
          isCurrent: currentFrame === index && animateIn,
          isKeyFrame: index === 0,
        })
      )}
    </SlideshowContext>
  );
}
export function Frame({ children, isCurrent, isKeyFrame }: FrameProps) {
  if (isCurrent == null || isKeyFrame == null) {
    throw new Error("Frame must be a child of Slideshow.");
  }
  return (
    <FrameContext value={isCurrent}>
      <KeyFrameContext value={isKeyFrame}>{children}</KeyFrameContext>
    </FrameContext>
  );
}

export function Element({ children, x, y, animationDirection }: ElementProps) {
  let parsedAnimationDirection;
  const slideshowContext = useContext(SlideshowContext);
  const isCurrent = useContext(FrameContext);
  const isKeyFrame = useContext(KeyFrameContext);

  // if (typeof animationDirection === "object") {
  //   parsedAnimationDirection = animationDirection;
  // } else {
  //   switch (animationDirection) {
  //     case "up":
  //       parsedAnimationDirection = customAnimationDirection(
  //         0,
  //         slideshowContext.animationDistance
  //       );
  //     default:
  //       throw new Error("Animation direction is invalid.");
  //   }
  // }
  const notCurrentState = { opacity: 0 };
  const currentState = { opacity: 1 };
  return (
    <motion.div
      initial={isKeyFrame ? currentState : notCurrentState}
      animate={isCurrent ? currentState : notCurrentState}
    >
      {children}
    </motion.div>
  );
}
