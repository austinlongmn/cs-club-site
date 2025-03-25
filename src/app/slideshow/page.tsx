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
        <Frame>
          <Element x={25} y={50} width={40} height={85} animationDirection="up">
            <div className="h-full w-full bg-red-300" />
          </Element>
          <Element
            x={75}
            y={50}
            width={40}
            height={85}
            animationDirection="down"
          >
            <div className="h-full w-full bg-amber-300" />
          </Element>
        </Frame>
        <Frame>
          <Element
            x={25}
            y={25}
            width={45}
            height={45}
            animationDirection="left"
          >
            <div className="h-full w-full bg-green-300" />
          </Element>
          <Element x={75} y={25} width={45} height={45} animationDirection="up">
            <div className="h-full w-full bg-blue-300" />
          </Element>
          <Element
            x={25}
            y={75}
            width={45}
            height={45}
            animationDirection="down"
          >
            <div className="h-full w-full bg-green-300" />
          </Element>
          <Element
            x={75}
            y={75}
            width={45}
            height={45}
            animationDirection="right"
          >
            <div className="h-full w-full bg-blue-300" />
          </Element>
        </Frame>
      </Slideshow>
    </div>
  );
}
