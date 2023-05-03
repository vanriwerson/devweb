import SectionTitle from '../SectionTitle';
import ProfileImage from '../ProfileImage';
import sectionTitles from '../../assets/textContent/sectionTitles';
import './style.css';
import CTAButton from '../CTAButton';

function HomeSection() {
  return (
    <section className='home'>
      <SectionTitle title={ sectionTitles.home } />

      <div className='business-card'>
        <ProfileImage />

        <div className="business-card-text">
          <h2 className='title'>Muito prazer! Meu nome é Bruno Riwerson Silva</h2>
          <p className='content'>Sou o desenvolvedor web full-stack que vai ouvir seu problema e gerar uma solução prática e eficaz para ele. Fico muito feliz por seu interesse em conhecer um pouco do meu trabalho.</p>

          <CTAButton
            labelText='Vamos transformar seu sonho em código?'
          />
        </div>
      </div>
    </section>
  );  
}

export default HomeSection;
