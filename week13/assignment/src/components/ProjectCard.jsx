function ProjectCard({ name, description, url, image, githubPagesUrl }) {
  return (
    <div className="project-card">
      <div className="image">
        <img src={image} alt={name} width={300} />
      </div>
      <div className="content">
        <h2>{name}</h2>
        <p>{description}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="sketch"
        >
          View Sketch
        </a>
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
