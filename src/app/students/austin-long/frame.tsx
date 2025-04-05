import { Frame, Element } from "@/components/slideshow";

export default function SlideshowFrame() {
  return (
    <Frame paddingSize={5}>
      <Element
        x={25}
        y={10}
        width={50}
        height={20}
        animationDirection="up"
        paddingPosition="topLeft"
      >
        <div className="@container flex h-full w-full items-center justify-center rounded-md bg-emerald-900">
          <h1 className="text-[calc(10cqmin)]">Austin Long</h1>
        </div>
      </Element>
      <Element
        x={25}
        y={60}
        width={50}
        height={80}
        animationDirection="left"
        paddingPosition="bottomLeft"
      >
        <div className="h-full w-full rounded-md bg-emerald-200" />
      </Element>
    </Frame>
  );
}
