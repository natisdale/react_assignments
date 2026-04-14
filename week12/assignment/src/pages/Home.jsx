import Header from "../components/Header";
import ProjectList from "../components/ProjectList";
import { projects } from "../data/projectData";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <main>
        <h1>Web Programming with JavaScript</h1>
        <p>This is a portfolio of my p5.js projects created with React.</p>
        <ProjectList projects={projects} />
      </main>
      <Footer />
    </>
  );
}

export default Home;
