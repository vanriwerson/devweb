import SectionTitle from '../SectionTitle';
import sectionTitles from '../../assets/textContent/sectionTitles';
import './style.css';

function HomeSection() {
  return (
    <section className='page-section'>
      <SectionTitle title={ sectionTitles.home } />
      
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, dignissimos. Suscipit rem accusantium repellendus dicta a harum illum nobis aliquam.</p>
    </section>
  );  
}

export default HomeSection;
