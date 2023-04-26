import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import SkillsCarousel from './components/SkillsCarousel';

function App() {
  return (
    <main className='app'>
      <Header />

      <h1>Boas-vindas ao meu Portifólio</h1>

      <SkillsCarousel />

      <p className="read-the-docs">
        New portfolio is coming
      </p>

      <Footer />
    </main>
  )
}

export default App
