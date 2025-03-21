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
    .text {
            color: red;}
    `}</style>
      <h1>This is Andrew&apos;s Route!</h1>
      <p className="center">Welcome to this empty page.</p>
      <section id="youtube">
        <Link
          href="https://www.youtube.com/watch?v=C12rXla0uuo&pp=ygUOY2xvbmUgd2FycyBzZm0%3D"
          style={{ color: "blue" }}
        >
          {" "}
         Click text for a funny video I enjoy
        </Link>
        <p>Here are some projects Im working on.</p>

        <li>
          The Last Crewman 

        </li>
        <li>
          Image sorter for personal use
        </li>



      </section>
      <section id="about me">
        <body>

        <p> I am a software developer I also enjoy certain video games</p>
        <p className="text"> I am a fan of the following games:</p>
        <li>Fallout 4</li>
        <li>Minecraft</li>
        <li>Slay the Princess</li>
        <li>HollowKnight</li>
        <p className="text">
          I am also a fan of the following shows:
        </p >
        <li>Star Trek</li>
        <li>Star Wars</li>
        <li>Doctor Who</li>
        <li>Goblin Slayer</li>
        <li>Friern: Beyond Journey's End</li>
        </body>
        </section>
  
    </>
  );
}
