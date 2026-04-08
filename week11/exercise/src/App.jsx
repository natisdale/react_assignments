import { useState } from "react";
import "./css/app.css";
import SimpleCard from "./SimpleCard";
import Footer from "./Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* Page heading */}
      <h1>Hello World!</h1>
      {/* Render the SimpleCard component and pass title and content as props */}
      <SimpleCard
        title="Hello Card"
        content="This is my first card component."
      />
      <SimpleCard
        title="Goodbye Card"
        content="This is my last card component."
      />
      {/* Render the footer with copyright information */}

      <Footer />
    </div>
  );
}

// Export the App component as the default component of this file
// This allows other files to import App without needing to specify its name
export default App;
