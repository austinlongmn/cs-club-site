import { Key } from "react";

interface ProjectPreviewProps {
  project: Project;
  key: Key | null | undefined;
}

function ProjectPreview(props: ProjectPreviewProps) {
  const project = props.project;
  return (
    <div>
      <p>{project.title}</p>
      <p>{project.description}</p>
    </div>
  );
}

interface Project {
  title: string;
  description: string;
}

export default function Projects() {
  const projects: Project[] = [
    { title: "My First project", description: "First project description" },
    { title: "My Second project", description: "Second project description" },
  ];

  return (
    <>
      {projects.map((project, index) => {
        return <ProjectPreview project={project} key={index} />;
      })}
    </>
  );
}
