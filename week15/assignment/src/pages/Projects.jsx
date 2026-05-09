import ProjectList from "../components/ProjectList";
import { projects } from "../data/projectData";
import Header from "../components/Header";

export default function Projects({ limit }) {
  return (
    <>
      <Header
        title="JavaScript Projects"
        summary="A collection of my JavaScript projects using the p5.js library."
      />
      <ProjectList projects={projects} />
    </>
  );
}
