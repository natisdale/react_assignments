// Import the CSS file for global or component styles
import "./css/app.css";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <>
      <Home />
    </>
  );
}

// Export the App component as the default component of this file
// This allows other files to import App without needing to specify its name
export default App;
