import Header from './components/Header';
import Footer from './components/Footer';
import SectionDivider from './components/SectionDivider/SectionDivider';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import './App.css';
import ProjectsSection from './components/ProjectsSection';

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
      <ProjectsSection />

      <Footer />
    </main>
  )
}

export default App
