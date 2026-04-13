import "./css/index.css";
import "./css/app.css";

function Header() {
  return (
    <header>
      <h1>My React Portfolio</h1>
    </header>
  );
}

function ProjectCard({ name, description }) {
  return (
    <div className="project-card">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2026 Nathan Tisdale</p>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <p>Hello World!</p>
      <ProjectCard name="Project One" description="First React Component" />
      <ProjectCard name="Project Two" description="Learning Props" />
      <Footer />
    </div>
  );
}

export default App;
