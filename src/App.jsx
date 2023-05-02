import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import SkillsCarousel from './components/SkillsCarousel';
import SectionDivider from './components/SectionDivider/SectionDivider';
import HomeSection from './components/HomeSection';

function App() {
  return (
    <main className='app'>
      <Header />

      <SectionDivider  anchorRef='home'/>
      <HomeSection />

      <SectionDivider anchorRef='about'/>

      <section className='page-section'>
        <h1>Um pouco de minha história</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eaque alias enim, sequi nostrum itaque numquam delectus fugiat aliquid voluptates sunt ipsa optio accusantium. Tempora nihil non rem ipsa pariatur aliquam molestias magnam minus voluptatem unde rerum consequuntur, obcaecati aspernatur excepturi accusamus saepe soluta, quis animi. Facere neque nesciunt odio.</p>
      </section>

      <SectionDivider anchorRef='skills'/>

      <section className='page-section'>
        <h1>Ferramentas que utilizo atualmente</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum vero facere quam aliquam id architecto commodi praesentium, sunt deleniti sit nesciunt minus saepe optio nemo dolores accusamus enim, laboriosam a?</p>
        <SkillsCarousel />
      </section>

      <SectionDivider anchorRef='projects'/>

      <section className='page-section'>
        <h1>Alguns de meus projetos de orgulho</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident officia eaque soluta, voluptatum, eius recusandae culpa quibusdam obcaecati sapiente natus voluptates molestias blanditiis assumenda? Sint ea maxime nobis omnis odio nesciunt molestiae autem! Sequi quaerat numquam facere, architecto tempore deleniti recusandae! Fugit esse consequatur iure aut excepturi at? Molestiae, voluptates.</p>
      </section>

      <Footer />
    </main>
  )
}

export default App
