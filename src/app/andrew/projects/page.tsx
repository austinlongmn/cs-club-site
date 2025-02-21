import { Text } from "@chakra-ui/react";
import { Key } from "react";


interface ProjectPreivewProps {
    project: Project
    listKey: Key | null | undefined
}

function ProjectPreivew(props: ProjectPreivewProps) {
    const project = props.project;
    return (
        <div key={props.listKey}>
        <Text>{project.title}</Text>
        <Text>{project.description}</Text>
        </div>
    )
}
interface Project {
    title: string;
    description: string;

}
export default function Projects() {
    const projects: Project[] = [
        { title: "My First project", description: "First project description" },
        { title: "My Second project", description: "Second project description" },
        { title: "My Third project", description: "Third project description" },
    ]
    return (
        <>
            {
            projects.map((project, index) => {
                return (
                 <ProjectPreivew project={project} listKey={index} />
            )
            })
            }
    
        </>
        )
    }
        
   