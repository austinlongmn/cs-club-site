import { Element, Frame, Slideshow } from "@/components/slideshow";

export default function Page() {
  return (
    <div className="bg-background fixed top-0 right-0 z-51 h-full w-full">
      <Slideshow
        advanceTime={5}
        animationDistance={10}
        inBetweenTime={1}
        animationTime={1.5}
      >
        <Frame paddingSize={5}>
          <Element
            x={25}
            y={50}
            width={50}
            height={100}
            animationDirection="up"
            paddingPosition="notRight"
          >
            <div className="h-full w-full bg-red-300" />
          </Element>
          <Element
            x={75}
            y={50}
            width={50}
            height={100}
            animationDirection="down"
            paddingPosition="notLeft"
          >
            <div className="h-full w-full bg-amber-300" />
          </Element>
        </Frame>
        <Frame paddingSize={5}>
          <Element
            x={25}
            y={25}
            width={50}
            height={50}
            animationDirection="left"
            paddingPosition="topLeft"
          >
            <div className="h-full w-full bg-blue-300" />
          </Element>
          <Element
            x={75}
            y={25}
            width={50}
            height={50}
            animationDirection="up"
            paddingPosition="topRight"
          >
            <div className="h-full w-full bg-green-300" />
          </Element>
          <Element
            x={25}
            y={75}
            width={50}
            height={50}
            animationDirection="down"
            paddingPosition="bottomLeft"
          >
            <div className="h-full w-full bg-green-300" />
          </Element>
          <Element
            x={75}
            y={75}
            width={50}
            height={50}
            animationDirection="right"
            paddingPosition="bottomRight"
          >
            <div className="h-full w-full bg-blue-300" />
          </Element>
        </Frame>
      </Slideshow>
    </div>
  );
}
