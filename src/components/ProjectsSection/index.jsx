import SectionTitle from '../SectionTitle';
import ProjectCard from '../ProjectCard';

import sectionTitles from '../../assets/textContent/sectionTitles';
import aboutMyProjects from '../../assets/textContent/aboutMyProjects';

import useProjects from '../../hooks/useProjects';

import './style.css';


function ProjectsSection() {
  const [projects] = useProjects();

  return (
    <section className='page-section last'>
      <SectionTitle title={ sectionTitles.projects } />

      {aboutMyProjects.length && aboutMyProjects.map((content, i) => 
        (
          <p key={ i } className='content'>{ content }</p>
        )
      )}

      <div className='projects-display'>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={ project } />
        ))}
      </div>

    </section>
  );  
}

export default ProjectsSection;
