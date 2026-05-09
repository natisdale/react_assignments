import { useState } from "react";

function ProjectCard({ name, description, url, image, githubPagesUrl }) {
  const [showDescription, setShowDescription] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <div className="project-card">
      <div>
        <img
          className="project-card__thumbnail"
          src={image}
          alt={name}
          width={300}
        />
      </div>
      <div className="content">
        <h2>{name}</h2>
        {isExpanded ? (
          <p className="project-card__description--full">{description}</p>
        ) : (
          <p className="project-card__description--truncated">{description}</p>
        )}
        <button onClick={toggleDescription} className="button button--tertiary">
          {isExpanded ? "Show Less" : "Show More"}
        </button>

        <div className="project-card__button-row">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="button project-card__button--primary"
          >
            View
          </a>

          {githubPagesUrl && (
            <a
              href={githubPagesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button project-card__button--secondary"
            >
              Site
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
