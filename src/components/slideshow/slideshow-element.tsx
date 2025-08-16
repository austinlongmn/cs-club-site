"use client";
import { useContext, useRef, ReactNode } from "react";
import { motion, ValueTransition } from "motion/react";
import {
  animationEase,
  animationEaseReverse,
  FrameIndexContext,
  SlideshowContext,
} from "./slideshow";
import { FrameContext } from "./slideshow-frame";

export type StringAnimationDirection =
  | "up"
  | "down"
  | "left"
  | "right"
  | "none"
  | AnimationDirection;

export interface ElementProps {
  children: ReactNode;
  animationDirection: StringAnimationDirection;
  animationDelay?: number;
  animationDuration?: number;
  className?: string;
}

export interface AnimationDirection {
  x: number;
  y: number;
}

function createAnimationDirection(x: number, y: number): AnimationDirection {
  return { x: x, y: y };
}

export const customAnimationDirection = createAnimationDirection;

function calculateRelativeDelay(
  time: number,
  fullTime: number,
  fromBack: boolean,
  duration: number
) {
  return fromBack ? (1 - (time + duration)) * fullTime : time * fullTime;
}
function parseAnimationDirection(
  animationDirection: StringAnimationDirection,
  animationDistance: number
): AnimationDirection {
  if (typeof animationDirection === "object") {
    return animationDirection;
  } else {
    switch (animationDirection) {
      case "up":
        return createAnimationDirection(0, -animationDistance);
      case "down":
        return createAnimationDirection(0, animationDistance);
      case "left":
        return createAnimationDirection(-animationDistance, 0);
      case "right":
        return createAnimationDirection(animationDistance, 0);
      case "none":
        return createAnimationDirection(0, 0);
    }
  }
}
export function Element({
  children,
  animationDirection,
  animationDelay = 0,
  animationDuration,
  className = "",
}: ElementProps) {
  const frameContext = useContext(FrameContext);
  if (animationDuration == null) {
    animationDuration = frameContext.defaultAnimationDuration;
  }

  const invalidAnimationLengthMessage = "Animation length cannot exceed 100%";
  if (animationDelay + animationDuration > 100) {
    if (process.env.NODE_ENV === "development") {
      throw new Error(invalidAnimationLengthMessage);
    } else {
      console.error(invalidAnimationLengthMessage);
    }
  }

  const slideshowContext = useContext(SlideshowContext);
  const animIn = useContext(FrameIndexContext);
  const elementRef = useRef<HTMLDivElement>(null);
  const parsedAnimationDirection = parseAnimationDirection(
    animationDirection,
    slideshowContext.animationDistance
  );

  const notCurrentState = {
    opacity: 0,
    x: parsedAnimationDirection.x,
    y: parsedAnimationDirection.y,
  };
  const currentState = { opacity: 1, x: 0, y: 0 };

  const durationPercent = animationDuration / 100;
  const duration = durationPercent * slideshowContext.animationTime;
  const delay = calculateRelativeDelay(
    animationDelay / 100,
    slideshowContext.animationTime,
    !animIn,
    durationPercent
  );

  const transition: ValueTransition = {
    type: "tween",
    ease: animIn ? animationEase : animationEaseReverse,
    delay: delay,
    duration: duration,
  };
  return (
    <motion.div
      initial={notCurrentState}
      animate={animIn ? currentState : notCurrentState}
      transition={{
        default: transition,
      }}
      className={className}
      ref={elementRef}
    >
      {children}
    </motion.div>
  );
}
