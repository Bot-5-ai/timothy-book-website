
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
    // Initialize AOS on component mount
    const AOS = window.AOS;
    if (typeof AOS !== 'undefined') {
      AOS.init({ 
        duration: 800,
        once: true
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
      <div className="bg-waves">
        <Summary />
      </div>
      <div className="bg-dots">
        <Author />
      </div>
      <div className="bg-circuit">
        <Reviews />
      </div>
      <div className="bg-confetti">
        <Analysis />
      </div>
      <div className="bg-stripes">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
