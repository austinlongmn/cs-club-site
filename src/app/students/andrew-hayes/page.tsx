import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-black p-6 text-white">
      <h1 className="mb-4 text-center text-3xl font-bold">
        This is Andrew&apos;s Route!
      </h1>
      <p className="mb-6 text-center">Welcome to this empty page.</p>

      <section className="mb-6">
        <Link
          href="https://www.youtube.com/watch?v=C12rXla0uuo&pp=ygUOY2xvbmUgd2FycyBzZm0%3D"
          className="block text-center text-blue-500 hover:underline"
        >
          Click text for a funny video I enjoy
        </Link>
        <p className="mt-4 text-center">
          Here are some projects I'm working on:
        </p>
        <ul className="list-inside list-disc text-center">
          <li>The Last Crewman</li>
          <li>Image sorter for personal use</li>
        </ul>
      </section>

      <section className="rounded-lg border-4 border-orange-500 p-4">
        <div className="text-center">
          <p>I am a software developer. I also enjoy certain video games.</p>
          <p className="mt-2 text-red-500">
            I am a fan of the following games:
          </p>
          <ul className="list-inside list-disc">
            <li>Fallout 4</li>
            <li>Minecraft</li>
            <li>Slay the Princess</li>
            <li>Hollow Knight</li>
          </ul>
          <p className="mt-4 text-red-500">
            I am also a fan of the following shows:
          </p>
          <ul className="list-inside list-disc">
            <li>Star Trek</li>
            <li>Star Wars</li>
            <li>Doctor Who</li>
            <li>Goblin Slayer</li>
            <li>Frieren: Beyond Journey's End</li>
          </ul>
        </div>
      </section>
    </div>
  );
}