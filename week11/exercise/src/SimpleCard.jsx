// Import the CSS file for global or component styles
import "./App.css";

// SimpleCard component that takes in title and content as props
// This is a functional component that accepts props and returns JSX to render a styled card
function SimpleCard({ title, content }) {
  return (
    <div className="simple-card">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default SimpleCard;
