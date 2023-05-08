import SectionTitle from '../SectionTitle';
import sectionTitles from '../../assets/textContent/sectionTitles';
import aboutMySkills from '../../assets/textContent/aboutMySkills';
import './style.css';
import SkillsCarousel from '../SkillsCarousel';

function SkillsSection() {
  return (
    <section className='page-section'>
      <SectionTitle title={ sectionTitles.skills } />
      
      <SkillsCarousel />
      
      {aboutMySkills.length && aboutMySkills.map((content, i) => {
        return (
          <p key={ i } className='content'>{ content }</p>
        );
      })}
    </section>
  );  
}

export default SkillsSection;
