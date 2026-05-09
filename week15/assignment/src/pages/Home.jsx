import Header from "../components/Header";
import { projects } from "../data/projectData";
import ProjectList from "../components/ProjectList";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />
      <main>
        <Header
          title="My Portfolio"
          summary="This is a portfolio website built using the React library. It showcases my
          projects and skills as a front-end developer using JavaScript and CSS. The website is designed to be
          responsive and user-friendly, allowing visitors to easily navigate
          through the different sections and learn more about me and my work."
        />
        <h2>Featured Projects</h2>
        <ProjectList
          projects={projects.filter((project) => project.featured === true)}
        />
        {/* <ProjectList projects={projects} limit={2} /> */}
        <div>
          <Link to="/projects" className="button button--tertiary">
            See All Projects
          </Link>
        </div>
      </main>
    </>
  );
}

export default Home;
