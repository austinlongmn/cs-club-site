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
    <div className="bg-gray-800 shadow-lg rounded-2xl overflow-hidden p-5 transition transform hover:scale-105 hover:shadow-2xl">
      <Image
        src={project.image}
        alt={project.name}
        width={200}
        height={200}
        className="rounded-md mx-auto"
      />
      <h2 className="text-xl font-semibold text-white mt-3 text-center">{project.name}</h2>
      <p className="text-gray-400 text-sm mt-2 text-center">{project.description}</p>
      <div className="mt-4 text-center">
        {project.link ? (
          <Link href={project.link} target="_blank">
        <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition hover:bg-blue-700 cursor-pointer">
          View Project
        </span>
          </Link>
        ) : (
          <span className="inline-block bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium cursor-not-allowed">
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
      description: "Research of how stadiums are using technology to improve the fan experience.",
      image: "/images/breyon/stadium.svg",
      link: "/students/breyon-gunn/stadium-research",
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-white text-center">Breyon Gunn</h1>
        <p className="text-center text-gray-400 mt-4">
          I’m a software developer and tech enthusiast with a passion for
          problem-solving, cybersecurity, and competitive programming. With
          years of experience in software engineering, database management,
          and system architecture, I enjoy creating innovative solutions and
          tackling complex challenges.
        </p>

        <p className="text-center text-gray-400 mt-4">
          When I’m not writing code, you’ll find me organizing programming
          competitions, mentoring students in computer science, or diving into
          the latest advancements in technology. I also have a deep interest in
          ethical hacking, automation, and infrastructure optimization, always
          looking for new ways to push the limits of what’s possible.
        </p>

        <p className="text-center text-gray-400 mt-4">
          In addition to software development, I enjoy go-kart racing,
          constantly chasing the perfect lap and refining my driving technique.
          I have also developed a scoring programs for AKC dog agility, which
          combines my interest of dog training and software development.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
