// Import the CSS file for global or component styles
import "./css/app.css";
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import Fiction from "./pages/Fiction.jsx";
import History from "./pages/History.jsx";
import Strategy from "./pages/Strategy.jsx";
import About from "./pages/About.jsx";
import Footer from "./components/Footer.jsx";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fiction" element={<Fiction />} />
          <Route path="/history" element={<History />} />
          <Route path="/strategy" element={<Strategy />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

// Export the App component as the default component of this file
// This allows other files to import App without needing to specify its name
export default App;
