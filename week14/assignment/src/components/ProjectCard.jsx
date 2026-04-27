import { useState } from "react";

function ProjectCard({ name, description, url, image, githubPagesUrl }) {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="project-card">
      <div className="image">
        <img src={image} alt={name} width={300} />
      </div>
      <div className="content">
        <h2>{name}</h2>
        <button onClick={() => setShowDescription(!showDescription)}>
          {showDescription ? "Hide Description" : "Show Description"}
        </button>
        {showDescription && <p>{description}</p>}

        <p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="sketch"
          >
            View Sketch
          </a>
        </p>

        {githubPagesUrl && (
          <a
            href={githubPagesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="github-pages"
          >
            Mobile-friendly Site
          </a>
        )}
      </div>
    </div>
  );
}
export default ProjectCard;
