import PropTypes from "prop-types";
import { useState } from "react";
import skillIcons from "../../utils/skillIcons";
import arrow from "../../assets/images/arrow.svg";
import "./style.css";

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  const getIcon = (language) => {
    const icon = skillIcons.find(
      (skill) => skill.alt.toLowerCase() === language.toLowerCase()
    );
    return icon.src;
  };

  return (
    <article className="project-container">
      <div className="title-container">
        <h4 className="project-title">{project.title}</h4>

        <img
          className="thumb"
          src={project.thumb}
          alt={`${project.title} thumb`}
        />

        <button className="toggle-container" onClick={toggleAccordion}>
          <img className={ expanded ? "toggle-icon expanded" : "toggle-icon" } src={arrow} alt="arrow icon" />
        </button>
      </div>

      <div
        className={
          expanded ? "accordion-content expanded" : "accordion-content"
        }
      >
        {expanded && (
          <>
            <p>{project.description}</p>

            <img
              className="tech-icon"
              src={getIcon(project.language)}
              alt={project.language}
            />

            <div className="project-links-container">
              <a href={project.html_url} target="_blank" rel="noreferrer">
                Repo
              </a>

              {project.homepage && (
                <a href={project.homepage} target="_blank" rel="noreferrer">
                  Deploy
                </a>
              )}
            </div>
          </>
        )}
      </div>
    </article>
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
