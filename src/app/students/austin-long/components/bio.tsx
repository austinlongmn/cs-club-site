import Link from "next/link";

export default function Bio() {
  return (
    <p>
      Hello, my name is Austin Long. I am a software developer who loves using
      my gifts, talents and abilities to serve Christ. I <em>love</em>{" "}
      programming and enjoy learning new languages and solving problems. I
      especially enjoy automation and finding creative ways to follow the{" "}
      <Link href="https://en.wikipedia.org/wiki/Don%27t_repeat_yourself">
        DRY principle
      </Link>
      . Check out some of my featured projects below, or check out more{" "}
      <Link href="/students/austin-long/projects">here</Link>. One of my
      favorite programming tools to use is Neovim, a fork of Vim. I enjoy the
      keyboard-first experience, and, of course, shaving those precious
      milliseconds off the startup time.
    </p>
  );
}
