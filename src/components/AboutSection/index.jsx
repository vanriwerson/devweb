import SectionTitle from '../SectionTitle';
import sectionTitles from '../../assets/textContent/sectionTitles';
import aboutMe from '../../assets/textContent/aboutMe';
import './style.css';

function AboutSection() {
  return (
    <section className='page-section'>
      <SectionTitle title={ sectionTitles.about } />
      
      {aboutMe.length && aboutMe.map((content, i) => {
        return (
          <p key={ i } className='content'>{ content }</p>
        );
      })}
    </section>
  );  
}

export default AboutSection;
