import PropTypes from 'prop-types';

function ProjectCard({ project }) {
  return (
    <div>
      <h3>{project.title}</h3>
      <img src={project.thumb} alt={ `${project.title} print` } style={{ width: "120px" }} />
      <p>{project.description}</p>
      <p>
        <strong>Linguagem:</strong> {project.language}
      </p>
      <p>
        <a href={project.html_url}>Repo</a>
      </p>
      {project.homepage && (
        <p>
          <a href={project.homepage}>Deploy</a>
        </p>
      )}
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    language: PropTypes.string,
    homepage: PropTypes.string,
    html_url: PropTypes.string,
    thumb: PropTypes.string,
  }).isRequired,
};

export default ProjectCard;
