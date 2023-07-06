import SectionTitle from '../SectionTitle';
import sectionTitles from '../../assets/textContent/sectionTitles';
import useProjects from '../../hooks/useProjects';
import './style.css';
import ProjectCard from '../ProjectCard';


function ProjectsSection() {
  const [projects] = useProjects();

  return (
    <section className='page-section last'>
      <SectionTitle title={ sectionTitles.projects } />
      
      <h1 className='sorry'>⚠ Desculpe-me pela bagunça. Site em construção ⚠</h1>
      <div>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={ project } />
        ))}
      </div>

    </section>
  );  
}

export default ProjectsSection;
