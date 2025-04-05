
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
    if (typeof AOS !== 'undefined') {
      AOS.init({ 
        duration: 800,
        once: true
      });
    }
  }, []);

  return (
    <div className="font-roboto overflow-x-hidden">
      <Navbar />
      <Hero />
      <Summary />
      <Author />
      <Reviews />
      <Analysis />
      <Footer />
    </div>
  );
};

export default Index;
