"use client";
import { motion } from "motion/react";
import { createContext, useContext } from "react";
import {
  animationEase,
  animationEaseReverse,
  FrameIndexContext,
  SlideshowContext,
} from "./slideshow";

export interface FrameProps {
  children: React.ReactNode;
  backgroundColor?: string;
  defaultAnimationDuration?: number;
}

export interface FrameContext {
  defaultAnimationDuration: number;
}

export const FrameContext = createContext<FrameContext>({
  defaultAnimationDuration: 100,
});

export function Frame({
  children,
  backgroundColor,
  defaultAnimationDuration = 100,
}: FrameProps) {
  const slideshowContext = useContext(SlideshowContext);
  const animIn = useContext(FrameIndexContext);
  const transition = {
    ease: animIn ? animationEase : animationEaseReverse,
    duration: slideshowContext.animationTime,
  };

  const initialScale = slideshowContext.animationScale;
  const targetScale = animIn ? 1 : initialScale;

  const initialBackgroundColor = "rgba(0, 0, 0, 0)";
  const targetBackgroundColor = animIn
    ? (backgroundColor ?? initialBackgroundColor)
    : initialBackgroundColor;

  return (
    <motion.div
      initial={{ scale: initialScale, backgroundColor: initialBackgroundColor }}
      animate={{ scale: targetScale, backgroundColor: targetBackgroundColor }}
      transition={{ scale: transition, backgroundColor: transition }}
      className="absolute h-full w-full"
    >
      <FrameContext.Provider value={{ defaultAnimationDuration }}>
        {children}
      </FrameContext.Provider>
    </motion.div>
  );
}
