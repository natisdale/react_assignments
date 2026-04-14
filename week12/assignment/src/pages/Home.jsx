import ProjectList from "./ProjectList";
import { projects } from "../data/projectData";

function Home() {
  return (
    <>
      <h2>Web Programming with JavaScript</h2>
      <p>This is a portfolio of my p5.js projects created with React.</p>
      <ProjectList projects={projects} />
    </>
  );
}

export default Home;
