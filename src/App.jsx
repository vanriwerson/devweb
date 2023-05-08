import Header from './components/Header';
import Footer from './components/Footer';
import SectionDivider from './components/SectionDivider/SectionDivider';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import './App.css';

function App() {
  return (
    <main className='app'>
      <Header />

      <SectionDivider  anchorRef='home'/>
      <HomeSection />

      <SectionDivider anchorRef='about'/>
      <AboutSection />

      <SectionDivider anchorRef='skills'/>
      <SkillsSection />

      <SectionDivider anchorRef='projects'/>
      <h1>⚠️ Desculpe pela bagunça! ^^ Site em construção ⚠️</h1>

      <section className='page-section'>
        <h1>Alguns de meus projetos de orgulho</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident officia eaque soluta, voluptatum, eius recusandae culpa quibusdam obcaecati sapiente natus voluptates molestias blanditiis assumenda? Sint ea maxime nobis omnis odio nesciunt molestiae autem! Sequi quaerat numquam facere, architecto tempore deleniti recusandae! Fugit esse consequatur iure aut excepturi at? Molestiae, voluptates.</p>
      </section>

      <Footer />
    </main>
  )
}

export default App
