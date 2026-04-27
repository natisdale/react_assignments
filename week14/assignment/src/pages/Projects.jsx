import ProjectList from "../components/ProjectList";
import { projects } from "../data/projectData";

export default function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <p>This is a portfolio of my p5.js projects created with React.</p>
      <ProjectList projects={projects} />
    </>
  );
}
