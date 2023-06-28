import SectionTitle from '../SectionTitle';
import sectionTitles from '../../assets/textContent/sectionTitles';
import './style.css';


function ProjectsSection() {
  return (
    <section className='page-section last'>
      <SectionTitle title={ sectionTitles.projects } />
      
      <h1 className='sorry'>⚠ Desculpe-me pela bagunça. Site em construção ⚠</h1>
    </section>
  );  
}

export default ProjectsSection;
