import { useState } from "react";

// SimpleCard component that takes in title and content as props
// This is a functional component that accepts props and returns JSX to render a styled card
function BookCard({
  title,
  author,
  description,
  coverImage,
  projectGutenbergLink,
}) {
  const [isRead, setIsRead] = useState(false);

  const toggleReadStatus = () => {
    setIsRead((prevState) => !prevState);
  };

  return (
    <div className="book-card">
      <div className="image">
        <img src={coverImage} alt={`${title} cover`} />
        <a
          href={projectGutenbergLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read on Project Gutenberg
        </a>
        <button onClick={toggleReadStatus} className="read-button">
          {isRead ? "Mark as Unread" : "Mark as Read"}
        </button>{" "}
      </div>
      <div className="content">
        <h2>{title}</h2>
        <h3>{author}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default BookCard;
