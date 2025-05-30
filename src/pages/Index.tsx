
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Summary from '../components/Summary';
import Author from '../components/Author';
import Reviews from '../components/Reviews';
import Analysis from '../components/Analysis';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Initialize AOS on component mount with enhanced options
    const AOS = window.AOS;
    if (typeof AOS !== 'undefined') {
      AOS.init({ 
        duration: 800,
        once: false,
        mirror: true,
        offset: 100,
        easing: 'ease-in-out',
        delay: 100
      });
    }
  }, []);

  return (
    <div className="font-roboto overflow-x-hidden relative">
      {/* Floating shapes for added visual interest */}
      <div className="floating-shape shape-1 top-[15%] left-[5%]"></div>
      <div className="floating-shape shape-2 top-[35%] right-[8%]"></div>
      <div className="floating-shape shape-3 bottom-[20%] left-[15%]"></div>
      <div className="floating-shape shape-1 bottom-[40%] right-[15%]"></div>
      <div className="floating-shape shape-2 top-[60%] left-[50%]"></div>
      
      <Navbar />
      <Hero />
      <div className="bg-waves section-transition" data-aos="fade-up" data-aos-duration="1200">
        <Summary />
      </div>
      <div className="bg-dots section-transition" data-aos="fade-up" data-aos-duration="1200">
        <Author />
      </div>
      <div className="bg-circuit section-transition" data-aos="fade-up" data-aos-duration="1200">
        <Reviews />
      </div>
      <div className="bg-confetti section-transition" data-aos="fade-up" data-aos-duration="1200">
        <Analysis />
      </div>
      <div className="bg-stripes">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
