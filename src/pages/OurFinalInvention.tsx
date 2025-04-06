
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BrainCircuit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Summary from '../components/Summary';
import Author from '../components/Author';
import Reviews from '../components/Reviews';
import Analysis from '../components/Analysis';
import Footer from '../components/Footer';

const OurFinalInvention = () => {
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
      {/* Back to home button */}
      <div className="fixed top-4 left-4 z-[60]">
        <Link to="/">
          <Button variant="outline" size="sm" className="bg-white/20 text-white border-white/30 hover:bg-white/40 backdrop-blur-md">
            <ArrowLeft className="mr-2 h-4 w-4" /> Home
          </Button>
        </Link>
      </div>
      
      {/* AI-themed floating elements */}
      <div className="absolute top-[10%] left-[5%] w-16 h-16 opacity-30 animate-pulse">
        <BrainCircuit className="w-full h-full text-purple-500" />
      </div>
      <div className="absolute top-[30%] right-[8%] w-24 h-24 opacity-20 animate-float">
        <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" 
             alt="Circuit pattern" 
             className="w-full h-full object-cover rounded-full shadow-lg" />
      </div>
      <div className="absolute bottom-[40%] left-[10%] w-20 h-20 opacity-30 animate-pulse-slow">
        <img src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" 
             alt="AI concept light" 
             className="w-full h-full object-cover rounded-full shadow-lg" />
      </div>
      
      {/* Binary code pattern overlays */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 overflow-hidden binary-rain"></div>
      </div>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-transparent"></div>
      </div>
      
      {/* AI circuit path - decorative element */}
      <div className="fixed left-0 h-full w-8 pointer-events-none z-10 opacity-10">
        <div className="h-full w-full circuit-lines-vertical"></div>
      </div>
      <div className="fixed right-0 h-full w-8 pointer-events-none z-10 opacity-10">
        <div className="h-full w-full circuit-lines-vertical"></div>
      </div>
      
      <Navbar />
      <Hero />
      <div className="bg-ai-grid section-transition" data-aos="fade-up" data-aos-duration="1200">
        <Summary />
      </div>
      <div className="bg-ai-neural section-transition" data-aos="fade-up" data-aos-duration="1200">
        <Author />
      </div>
      <div className="bg-ai-circuit section-transition" data-aos="fade-up" data-aos-duration="1200">
        <Reviews />
      </div>
      <div className="bg-ai-binary section-transition" data-aos="fade-up" data-aos-duration="1200">
        <Analysis />
      </div>
      <div className="bg-ai-matrix">
        <Footer />
      </div>
      
      {/* Additional AI-themed decorative elements */}
      <div className="fixed bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50"></div>
    </div>
  );
};

export default OurFinalInvention;
