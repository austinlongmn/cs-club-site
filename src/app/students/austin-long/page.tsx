import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Austin Long</h1>
      <p>I am a software developer.</p>
      <p>Here are some projects I have worked on.</p>
      <ul>
        <li>
          My <Link href="https://austinlong.dev">Personal Website</Link>
        </li>
        <li>The Last Crewman</li>
        <li>
          <pre>
            <code>zderad</code>
          </pre>
        </li>
        <li>
          <pre>
            <code>ptsched</code>
          </pre>
        </li>
      </ul>

      <p>I Like using Neovim.</p>
      <Image
        src="/images/austin/neovim-mark.svg"
        alt="Neovim logo"
        width="100"
        height="100"
      />
    </>
  );
}
