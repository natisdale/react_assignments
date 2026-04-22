import "./css/index.css";
import "./css/app.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Projects />
      <About />
      <Footer />
    </>
  );
}

export default App;
