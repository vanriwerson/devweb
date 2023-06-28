import SectionTitle from '../SectionTitle';
import sectionTitles from '../../assets/textContent/sectionTitles';
import './style.css';
import useProjects from '../../hooks/useProjects';


function ProjectsSection() {
  const [projects] = useProjects();

  return (
    <section className='page-section last'>
      <SectionTitle title={ sectionTitles.projects } />
      
      <h1 className='sorry'>⚠ Desculpe-me pela bagunça. Site em construção ⚠</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p>
                <strong>Linguagem:</strong> {project.language}
              </p>
              {project.homepage && (
                <p>
                  <strong>Página:</strong> <a href={project.homepage}>{project.homepage}</a>
                </p>
              )}
              {project.has_pages && (
                <p>
                  <strong>Miniatura:</strong> <img src={`https://raw.githubusercontent.com/${project.full_name}/main/thumbnail.png`} alt="Miniatura" />
                </p>
              )}
          </li>
        ))}
      </ul>

    </section>
  );  
}

export default ProjectsSection;
