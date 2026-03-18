import Navbar from '../components/Navbar.jsx';
import HeroSection from '../components/HeroSection.jsx';
import FeaturesSection from '../components/FeaturesSection.jsx';
import AboutSection from '../components/AboutSection.jsx';
import ContactSection from '../components/ContactSection.jsx';
import Footer from '../components/Footer.jsx';

const LandingPage = () => {
  return (
    <div className="landingPage">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
