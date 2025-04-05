"use client";
import { createContext, ReactElement } from "react";

export interface FrameContextType {
  paddingSize?: number;
}

export const FrameContext = createContext({
  paddingSize: 0,
} as FrameContextType);

export interface FrameProps {
  children: ReactElement[];
  paddingSize?: number;
}

export function Frame({ children, paddingSize = 0 }: FrameProps) {
  return (
    <FrameContext value={{ paddingSize }}>
      <div className="absolute h-full w-full">{children}</div>
    </FrameContext>
  );
}
