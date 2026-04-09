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
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2026 My React Portfolio</p>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <p>Hello World!</p>
      <ProjectCard
        name="Project 1"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <ProjectCard
        name="Project 2"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Footer />
    </div>
  );
}

export default App;
