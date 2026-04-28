import ProjectCard from "./ProjectCard";

function ProjectList({ projects, limit }) {
  const displayed = limit ? projects.slice(0, limit) : projects;

  return (
    <div className="project-list">
      {displayed.map((project) => (
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
