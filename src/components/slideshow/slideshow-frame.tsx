"use client";
import { motion } from "motion/react";
import { useContext } from "react";
import { FrameIndexContext, SlideshowContext } from "./slideshow";

export interface FrameProps {
  children: React.ReactNode;
}

export function Frame({ children }: FrameProps) {
  const slideshowContext = useContext(SlideshowContext);
  const animIn = useContext(FrameIndexContext);
  const transition = {
    ease: "easeInOut",
    duration: slideshowContext.animationTime,
  };

  const initialScale = slideshowContext.animationScale;
  const targetScale = animIn ? 1 : initialScale;

  return (
    <motion.div
      initial={{ scale: initialScale }}
      animate={{ scale: targetScale }}
      transition={{ scale: transition }}
      className="absolute h-full w-full"
    >
      {children}
    </motion.div>
  );
}
