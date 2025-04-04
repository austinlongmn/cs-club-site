import Link from "next/link";
import Image from "next/image";

interface Project {
  name: string;
  description: string;
  image: string;
  link: string;
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="transform overflow-hidden rounded-2xl bg-gray-800 p-5 shadow-lg transition hover:scale-105 hover:shadow-2xl">
      <Image
        src={project.image}
        alt={project.name}
        width={200}
        height={200}
        className="mx-auto rounded-md"
      />
      <h2 className="mt-3 text-center text-xl font-semibold text-white">
        {project.name}
      </h2>
      <p className="mt-2 text-center text-sm text-gray-400">
        {project.description}
      </p>
      <div className="mt-4 text-center">
        {project.link ? (
          <Link href={project.link} target="_blank">
            <span className="inline-block cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
              View Project
            </span>
          </Link>
        ) : (
          <span className="inline-block cursor-not-allowed rounded-lg bg-gray-600 px-4 py-2 text-sm font-medium text-white">
            No Link Available
          </span>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  const projects: Project[] = [
    {
      name: "ProKart Website",
      description:
        "A website for ProKart Indoor that allows users to view the track schedule.",
      image: "/images/breyon/prokart-icon.png",
      link: "https://www.prokartmg.com",
    },
    {
      name: "Driver's License Scanning Software",
      description:
        "Software that scans driver's licenses, extracts the data, and fills out a form.",
      image: "/images/breyon/id_card.svg",
      link: "",
    },
    {
      name: "Stadium Research",
      description:
        "Research of how stadiums are using technology to improve the fan experience.",
      image: "/images/breyon/stadium.svg",
      link: "/students/breyon-gunn/stadium-research",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-10 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-center text-5xl font-bold text-white">
          Breyon Gunn
        </h1>
        <p className="mt-4 text-center text-gray-400">
          I’m a software developer and tech enthusiast with a passion for
          problem-solving, cybersecurity, and competitive programming. With
          years of experience in software engineering, database management, and
          system architecture, I enjoy creating innovative solutions and
          tackling complex challenges.
        </p>

        <p className="mt-4 text-center text-gray-400">
          When I’m not writing code, you’ll find me organizing programming
          competitions, mentoring students in computer science, or diving into
          the latest advancements in technology. I also have a deep interest in
          ethical hacking, automation, and infrastructure optimization, always
          looking for new ways to push the limits of what’s possible.
        </p>

        <p className="mt-4 text-center text-gray-400">
          In addition to software development, I enjoy go-kart racing,
          constantly chasing the perfect lap and refining my driving technique.
          I have also developed a scoring programs for AKC dog agility, which
          combines my interest of dog training and software development.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
