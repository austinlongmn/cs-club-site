"use client";

export default function CustomBackground({ color }: { color: string }) {
  return (
    <style global jsx>
      {`
        body {
          background-color: ${color};
        }
      `}
    </style>
  );
}
