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

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded((prevState) => !prevState);
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
        <h2 className="book-card__title">{title}</h2>
        <h3 className="book-card__author">{author}</h3>
        {isExpanded ? (
          <p className="book-card__description full-description">
            {description}
          </p>
        ) : (
          <p className="book-card__description truncated-description">
            {description}
          </p>
        )}
        <button onClick={toggleDescription} className="description-button">
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
}

export default BookCard;
