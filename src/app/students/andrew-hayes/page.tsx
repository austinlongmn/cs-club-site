import Link from "next/link";

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
      <h1>This is Andrew&apos;s Route!</h1>
      <p className="center">Welcome to this empty page.</p>
      <section id="youtube">
        <Link
          href="https://www.youtube.com/watch?v=C12rXla0uuo&pp=ygUOY2xvbmUgd2FycyBzZm0%3D"
          style={{ color: "blue" }}
        >
          {" "}
          Funny video I enjoy
        </Link>
      </section>
    </>
  );
}
