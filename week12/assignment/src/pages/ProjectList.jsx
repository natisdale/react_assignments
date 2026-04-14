import ProjectCard from "../components/ProjectCard";

function ProjectList({ projects }) {
  return (
    <>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          name={project.name}
          description={project.description}
          url={project.url}
          image={project.image}
        />
      ))}
    </>
  );
}
export default ProjectList;
