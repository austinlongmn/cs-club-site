"use client";
import { ReactElement, ReactNode, createContext, useContext } from "react";

interface SlideshowContextType {
  animationDistance: number;
}

const SlideshowContext = createContext({
  animationDistance: 20,
} as SlideshowContextType);

export interface SlideshowProps {
  advanceTime: number;
  animationDistance: number;
  children: ReactElement<typeof Frame>[];
}

export function Slideshow({
  animationDistance = 20,
  children,
}: SlideshowProps) {
  return (
    <SlideshowContext value={{ animationDistance: animationDistance }}>
      {children}
    </SlideshowContext>
  );
}

export interface FrameProps {
  children: ReactElement<typeof Element>[];
}

export function Frame({ children }: FrameProps) {
  return <>{children}</>;
}

export interface AnimationDirection {
  x: number
  y: number
}

export function customAnimationDirection(x: number, y: number): AnimationDirection {
  return { x: x, y: y }
}

export interface ElementProps {
  children: ReactNode[];
  x: number
  y: number
  animationDirection: string | AnimationDirection
}

export function Element({ children, x, y, animationDirection }: ElementProps) {
  let parsedAnimationDirection;
  let slideshowContext = useContext(SlideshowContext)

  if (typeof(animationDirection) === "object") {
    parsedAnimationDirection = animationDirection
  } else {
    switch (animationDirection) {
      case "up":
        parsedAnimationDirection = customAnimationDirection(0, slideshowContext.animationDistance)
      default:
        throw new Error("Animation direction is invalid.")
    }

  }
  return <>{children}</>;
}
