import { Image } from "@/components/ui/image";
import { Box, Heading, Text } from "@chakra-ui/react";

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
    <Box width={200} height={300} style={{ alignContent: "center" }}>
      <Heading>{proj.name}</Heading>
      <Text>{proj.description}</Text>
      <Image src={proj.image} alt={proj.name} width={100} height={100} />
      <a href={proj.link}>View Project</a>
    </Box>
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
      image: "/images/breyon/license-icon.png",
      link: "",
    },
  ];

  return (
    <Box padding="10">
      <Heading className="pt-10 pb-5 text-6xl">Breyon Gunn</Heading>

      <Text>
        I’m a software developer and tech enthusiast with a passion for
        problem-solving, cybersecurity, and competitive programming. With years
        of experience in software engineering, database management, and system
        architecture, I enjoy creating innovative solutions and tackling complex
        challenges.
      </Text>
      <Text>
        When I’m not writing code, you’ll find me organizing programming
        competitions, mentoring students in computer science, or diving into the
        latest advancements in technology. I also have a deep interest in
        ethical hacking, automation, and infrastructure optimization, always
        looking for new ways to push the limits of what’s possible.
      </Text>
      <Text>
        In addition to software development, I enjoy go-kart racing, constantly
        chasing the perfect lap and refining my driving technique. I have also
        developed programs for AKC agility scoring, combining my love for
        technology with the precision required in competition settings.
      </Text>
      <br />
      <br />

      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </Box>
  );
}
