// Import the CSS file for global or component styles
import "./css/app.css";
import NavBar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Footer from "./components/Footer.jsx";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboute" element={<About />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

// Export the App component as the default component of this file
// This allows other files to import App without needing to specify its name
export default App;
