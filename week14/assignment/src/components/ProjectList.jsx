import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          name={project.name}
          description={project.description}
          url={project.url}
          image={project.image}
          githubPagesUrl={project.githubPagesUrl}
        />
      ))}
    </div>
  );
}
export default ProjectList;
