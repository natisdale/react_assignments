// Import the CSS file for global or component styles
import "./css/app.css";
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Footer />
    </>
  );
}

// Export the App component as the default component of this file
// This allows other files to import App without needing to specify its name
export default App;
