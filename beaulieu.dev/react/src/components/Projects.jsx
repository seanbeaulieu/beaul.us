import React from "react";
import projectService from "../services/projects"

/**
 * Projects
 * Displays all projects pulled from project database
 */

const Projects = () => {
    
    /**
     * SingleProject
     * Displays a single project with an image, title, and description
     * project: json object containing project details
     */

    const SingleProject = ({ project }) => {
        const projectStyle = {
            container: "sm:w1/2 w-100 p-4",
            imageWrapper: "flex relative",
            image: "absolute inset-0 w-full h-full object-cover object-center",
            info: "px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100",
            subtitle: "tracking-widest text-sm title-font font-medium text-blue-600 mb-1",
            title: "title-font text-lg font-medium text-white mb-3",
            description: "leading-relaxed",
        }
    
        return (
            <a href={project.link} key={project.id} className={projectStyle.container}>
                <div className={projectStyle.imageWrapper}>
                    <img alt="gallery" className={projectStyle.image} src={project.image} />
                    <div className={projectStyle.info}>
                        <h2 className={projectStyle.subtitle}>
                            {project.subtitle}
                        </h2>
                        <h1 className={projectStyle.title}>
                            {project.title}
                        </h1>
                        <p className={projectStyle.description}>{project.description}</p>  
                    </div>
                </div>
            </a>
        )
    }

    const projects = projectService.getAllProjects()

    return (
        <section id="projects" className="bg-gray-900">
            <div className="container mx-auto py-10">
                <div className="flex flex-wrap justify-center">
                    {projects.map((project) => (
                        <SingleProject key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects