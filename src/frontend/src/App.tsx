import HeaderNav from './components/marketing/HeaderNav';
import Hero from './components/marketing/Hero';
import Highlights from './components/marketing/Highlights';
import AboutSection from './components/marketing/AboutSection';
import ServiceOptionsSection from './components/marketing/ServiceOptionsSection';
import ServicesSection from './components/marketing/ServicesSection';
import ContactSection from './components/marketing/ContactSection';
import Footer from './components/marketing/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNav />
      <main>
        <Hero />
        <Highlights />
        <AboutSection />
        <ServiceOptionsSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
