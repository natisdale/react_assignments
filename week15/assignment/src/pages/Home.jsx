import Header from "../components/Header";
import { projects } from "../data/projectData";
import ProjectList from "../components/ProjectList";

function Home() {
  return (
    <>
      <Header />
      <main>
        <h1>Home</h1>
        <p>
          This is a portfolio website built using React. It showcases my
          projects and skills as a developer. The website is designed to be
          responsive and user-friendly, allowing visitors to easily navigate
          through the different sections and learn more about me and my work.
        </p>
        <h2>Featured Projects</h2>
        {/* <ProjectList
          projects={projects.filter(
            (project) => project.githubPagesUrl !== undefined,
          )}
        /> */}
        <ProjectList projects={projects} limit={2} />
      </main>
    </>
  );
}

export default Home;
