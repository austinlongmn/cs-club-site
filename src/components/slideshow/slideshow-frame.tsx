"use client";
import { motion } from "motion/react";
import { useContext } from "react";
import { FrameIndexContext, SlideshowContext } from "./slideshow";

export interface FrameProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

export function Frame({ children, backgroundColor }: FrameProps) {
  const slideshowContext = useContext(SlideshowContext);
  const animIn = useContext(FrameIndexContext);
  const transition = {
    ease: "easeInOut",
    duration: slideshowContext.animationTime,
  };

  const initialScale = slideshowContext.animationScale;
  const targetScale = animIn ? 1 : initialScale;

  const initialBackgroundColor = "rgba(0, 0, 0, 0)";
  const targetBackgroundColor = animIn
    ? (backgroundColor ?? initialBackgroundColor)
    : initialBackgroundColor;

  console.log(targetBackgroundColor);
  return (
    <motion.div
      initial={{ scale: initialScale, backgroundColor: initialBackgroundColor }}
      animate={{ scale: targetScale, backgroundColor: targetBackgroundColor }}
      transition={{ scale: transition, backgroundColor: transition }}
      className="absolute h-full w-full"
    >
      {children}
    </motion.div>
  );
}
