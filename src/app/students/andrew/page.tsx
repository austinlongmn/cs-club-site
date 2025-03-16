import { Heading, Text } from "@chakra-ui/react";

export default function Page() {
  return (
    <>
      <style>{`
    .center {
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 50%;
            }
    `}</style>
      <Heading>This is Andrew&apos;s Route!</Heading>
      <Text className="center">Welcome to this empty page.</Text>
      <section id="youtube">
        <a
          href="https://www.youtube.com/watch?v=C12rXla0uuo&pp=ygUOY2xvbmUgd2FycyBzZm0%3D"
          style={{ color: "blue" }}
        >
          {" "}
          Funny video I enjoy
        </a>
      </section>
    </>
  );
}
