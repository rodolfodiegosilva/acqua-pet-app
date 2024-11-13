import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import AboutUs from './components/AboutUs/AboutUs';
import Services from './components/Services/Services';
import FishGallery from './components/FishGallery/FishGallery';
import Testimonials from './components/Testimonials/Testimonials';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <HeroSection />
        <AboutUs />
        <Services />
        <FishGallery />
        <Testimonials />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
