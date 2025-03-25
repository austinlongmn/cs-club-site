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
  animationTime: number;
  width: number;
  height: number;
}

const SlideshowContext = createContext({
  animationDistance: 20,
  animationTime: 20,
  width: 0,
  height: 0,
} as SlideshowContextType);

interface FrameContextType {
  isCurrent: boolean;
  isKeyFrame: boolean;
  paddingSize?: number;
}

const FrameContext = createContext({
  isCurrent: false,
  isKeyFrame: false,
  paddingSize: 0,
} as FrameContextType);

export interface FrameProps {
  children: ReactElement<ElementProps>[];
  // These are set by React.cloneElement.
  isCurrent?: boolean;
  isKeyFrame?: boolean;
  paddingSize?: number;
}

export interface SlideshowProps {
  advanceTime?: number;
  inBetweenTime?: number;
  animationDistance?: number;
  animationTime?: number;
  previewFrame?: number | null;
  children: ReactElement<FrameProps>[];
}

export type StringAnimationDirection =
  | "up"
  | "down"
  | "left"
  | "right"
  | "none"
  | AnimationDirection;

export type PaddingSpecifier =
  | "left"
  | "right"
  | "top"
  | "bottom"
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight"
  | "none"
  | "all"
  | "notLeft"
  | "notRight"
  | "notUp"
  | "notDown";

export interface ElementProps {
  children: JSX.Element;
  x: number;
  y: number;
  animationDirection: StringAnimationDirection;
  width: number;
  height: number;
  paddingPosition?: PaddingSpecifier;
}

export interface AnimationDirection {
  x: number;
  y: number;
}

function createAnimationDirection(x: number, y: number): AnimationDirection {
  return { x: x, y: y };
}

export const customAnimationDirection = createAnimationDirection;

export function Slideshow({
  advanceTime = 7,
  animationDistance = 20,
  inBetweenTime = 0.2,
  animationTime = 1,
  previewFrame = null,
  children,
}: SlideshowProps) {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [animateIn, setAnimateIn] = useState(true);
  const timeouts = useRef<NodeJS.Timeout[]>([]); // Track timeouts
  const containerRef = useRef<HTMLDivElement>(null); // FIXME: we need to wait until this is set before rendering things.
  const [size, setSize] = useState<{ width: number; height: number }>({
    width: -1,
    height: -1,
  });

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setSize({ width: width, height: height });
      }
    };

    const resizeObserver = new ResizeObserver(updateSize);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

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
    } else {
      setCurrentFrame(previewFrame);
    }
  }, [advanceTime, animationTime, children, inBetweenTime, previewFrame]); // Run effect when `children` change

  return (
    <SlideshowContext
      value={{
        animationDistance,
        animationTime,
        width: size.width,
        height: size.height,
      }}
    >
      <div ref={containerRef} className="h-full w-full">
        {Children.map(children, (child, index) =>
          cloneElement(child, {
            isCurrent: currentFrame === index && animateIn,
            isKeyFrame: index === (previewFrame ?? 0),
          })
        )}
      </div>
    </SlideshowContext>
  );
}

// Warning: isCurrent and isKeyFrame are set by React.cloneElement.
export function Frame({
  children,
  isCurrent,
  isKeyFrame,
  paddingSize = 0,
}: FrameProps) {
  if (isCurrent == null || isKeyFrame == null) {
    throw new Error("Frame must be a child of Slideshow.");
  }
  return (
    <FrameContext value={{ isCurrent, isKeyFrame, paddingSize }}>
      <div className="fixed h-full w-full">{children}</div>
    </FrameContext>
  );
}

function calculateRelativePosition(pos: number, slideshowLength: number) {
  return slideshowLength * (pos / 100);
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

function parsePaddingSpecifier(
  specifier: PaddingSpecifier,
  paddingSize: number
) {
  let paddings: object;
  switch (specifier) {
    case "left":
      paddings = { paddingLeft: paddingSize };
      break;
    case "right":
      paddings = { paddingRight: paddingSize };
      break;
    case "top":
      paddings = { paddingTop: paddingSize };
      break;
    case "bottom":
      paddings = { paddingBottom: paddingSize };
      break;
    case "topLeft":
      paddings = { paddingLeft: paddingSize, paddingTop: paddingSize };
      break;
    case "topRight":
      paddings = { paddingRight: paddingSize, paddingTop: paddingSize };
      break;
    case "bottomLeft":
      paddings = { paddingLeft: paddingSize, paddingBottom: paddingSize };
      break;
    case "bottomRight":
      paddings = { paddingRight: paddingSize, paddingBottom: paddingSize };
      break;
    case "notUp":
      paddings = {
        paddingLeft: paddingSize,
        paddingRight: paddingSize,
        paddingBottom: paddingSize,
      };
      break;
    case "notLeft":
      paddings = {
        paddingRight: paddingSize,
        paddingBottom: paddingSize,
        paddingTop: paddingSize,
      };
      break;
    case "notRight":
      paddings = {
        paddingLeft: paddingSize,
        paddingBottom: paddingSize,
        paddingTop: paddingSize,
      };
      break;
    case "notDown":
      paddings = {
        paddingLeft: paddingSize,
        paddingRight: paddingSize,
        paddingTop: paddingSize,
      };
      break;
    case "all":
      paddings = {
        paddingLeft: paddingSize,
        paddingRight: paddingSize,
        paddingBottom: paddingSize,
        paddingTop: paddingSize,
      };
      break;
    case "none":
      paddings = {
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingTop: 0,
      };
      break;
  }

  return {
    paddingLeft: paddingSize / 2,
    paddingRight: paddingSize / 2,
    paddingTop: paddingSize / 2,
    paddingBottom: paddingSize / 2,
    ...paddings,
  };
}

export function Element({
  children,
  x,
  y,
  width,
  height,
  animationDirection,
  paddingPosition,
}: ElementProps) {
  const slideshowContext = useContext(SlideshowContext);
  const frameContext = useContext(FrameContext);
  const elementRef = useRef<HTMLDivElement>(null);

  const isKeyFrame = frameContext.isKeyFrame;
  const isCurrent = frameContext.isCurrent;
  const paddingSize = frameContext.paddingSize ?? 0;

  const size = {
    width: slideshowContext.width * (width / 100),
    height: slideshowContext.height * (height / 100),
  };

  const parsedAnimationDirection = parseAnimationDirection(
    animationDirection,
    slideshowContext.animationDistance
  );

  const relX = calculateRelativePosition(50, size.width);
  const relY = calculateRelativePosition(50, size.height);

  const iniPosX =
    calculateRelativePosition(
      x + parsedAnimationDirection.x,
      slideshowContext.width
    ) - relX;
  const iniPosY =
    calculateRelativePosition(
      y + parsedAnimationDirection.y,
      slideshowContext.height
    ) - relY;
  const posX = calculateRelativePosition(x, slideshowContext.width) - relX;
  const posY = calculateRelativePosition(y, slideshowContext.height) - relY;

  const notCurrentState = {
    opacity: 0,
    x: iniPosX,
    y: iniPosY,
  };
  const currentState = { opacity: 1, x: posX, y: posY };
  const transition = {
    ease: "easeInOut",
    duration: slideshowContext.animationTime,
  };

  const paddings = parsePaddingSpecifier(
    paddingPosition ?? "none",
    (paddingSize / 100) *
      Math.sqrt(slideshowContext.width * slideshowContext.height)
  );

  const ready = !(slideshowContext.width < 0 || slideshowContext.height < 0);

  if (!ready) {
    return <></>;
  }

  return (
    <motion.div
      initial={isKeyFrame ? currentState : notCurrentState}
      animate={isCurrent ? currentState : notCurrentState}
      transition={{
        opacity: {
          duration: slideshowContext.animationTime,
          ease: "easeInOut",
        },
        x: transition,
        y: transition,
      }}
      className="absolute"
      style={{
        width: slideshowContext.width * (width / 100),
        height: slideshowContext.height * (height / 100),
        ...paddings,
      }}
      ref={elementRef}
    >
      {children}
    </motion.div>
  );
}
