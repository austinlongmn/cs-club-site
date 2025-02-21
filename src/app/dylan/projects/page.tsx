import { Text } from "@chakra-ui/react"
import { Key } from "react"

interface ProjectPreviewProps {
    project: Project
    listKey: Key | null | undefined
}

function ProjectPreview(props: ProjectPreviewProps) {
    const project = props.project
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
        { title: "My first project", description: "First project description" },
        { title: "My second project", description: "Second project description" }
    ]

    return (
        <>
            { 
                projects.map((project, index) => {
                    return (
                        <ProjectPreview project={project} listKey={index}/>
                    )
                })
            }
        </>
    )
}