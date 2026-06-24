import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

const sectionIds = {
  home: 'home',
  about: 'about',
  services: 'services',
  faq: 'faq',
  contact: 'contact',
};

function navigateTo(section) {
  const id = sectionIds[section] || section;
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

export default function App() {
  return (
    <>
      <Navbar onNavigate={navigateTo} />
      <main>
        <Hero onNavigate={navigateTo} />
        <About />
        <Services onNavigate={navigateTo} />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
