import SectionTitle from '../SectionTitle';
import sectionTitles from '../../assets/textContent/sectionTitles';
import useProjects from '../../hooks/useProjects';
import ProjectCard from '../ProjectCard';
import './style.css';


function ProjectsSection() {
  const [projects] = useProjects();

  return (
    <section className='page-section last'>
      <SectionTitle title={ sectionTitles.projects } />

      <div className='projects-display'>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={ project } />
        ))}
      </div>

    </section>
  );  
}

export default ProjectsSection;
