import ProjectsItems from "../assets/ProjectsItems";
import ProjectCard from "./ProjectCard";

function ProjectsSection() {
  return (
    <div className="py-5" id="projects">
      <div className="container">
        <h2 className="mt-3 mb-5 text-center">My Projects</h2>

        <div className="d-flex flex-column gap-4">
          {ProjectsItems.map((project) => (
            <ProjectCard
              key={project.id}
              projectImage={project.projectImg}
              projectName={project.projectTitle}
              projectDesc={project.projectDescription}
              projectTechnologies={project.projectTechnologies}
              projectLink={project.projectLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
