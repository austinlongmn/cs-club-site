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

function ProjectCard(project: ProjectCardProps) {
  const proj = project.project;

  return (
    <div className="h-[300px] w-[200px] content-center">
      <h1>{proj.name}</h1>
      <p>{proj.description}</p>
      <Image src={proj.image} alt={proj.name} width={100} height={100} />
      <Link href={proj.link}>View Project</Link>
    </div>
  );
}

export default function Home() {
  const projects: Project[] = [
    {
      name: "ProKart Website",
      description:
        "A website for ProKart Indoor that allows users to view the track schedule",
      image: "/images/breyon/prokart-icon.png",
      link: "https://www.prokartmg.com",
    },
    {
      name: "Driver's license scanning software",
      description:
        "Software that scans driver's licenses, extracts the data, and fills out a form",
      image: "/images/breyon/license-icon.png", // FIXME: not found
      link: "",
    },
  ];

  return (
    <div className="p-10">
      <h1 className="pt-10 pb-5 text-6xl">Breyon Gunn</h1>

      <p>
        I’m a software developer and tech enthusiast with a passion for
        problem-solving, cybersecurity, and competitive programming. With years
        of experience in software engineering, database management, and system
        architecture, I enjoy creating innovative solutions and tackling complex
        challenges.
      </p>
      <p>
        When I’m not writing code, you’ll find me organizing programming
        competitions, mentoring students in computer science, or diving into the
        latest advancements in technology. I also have a deep interest in
        ethical hacking, automation, and infrastructure optimization, always
        looking for new ways to push the limits of what’s possible.
      </p>
      <p>
        In addition to software development, I enjoy go-kart racing, constantly
        chasing the perfect lap and refining my driving technique. I have also
        developed programs for AKC agility scoring, combining my love for
        technology with the precision required in competition settings.
      </p>
      <br />
      <br />

      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}
