
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Summary from '@/components/Summary';
import AuthorBio from '@/components/AuthorBio';
import Reviews from '@/components/Reviews';
import MoreByBarrat from '@/components/MoreByBarrat';
import DangerSection from '@/components/DangerSection';
import AIRiskVisualization from '@/components/AIRiskVisualization';
import Analysis from '@/components/Analysis';
import AIChatbot from '@/components/AIChatbot';
import Footer from '@/components/Footer';

const OurFinalInvention = () => {
  useEffect(() => {
    // Initialize AOS with scanning-like transitions
    const AOS = window.AOS;
    if (typeof AOS !== 'undefined') {
      AOS.init({ 
        duration: 1200,
        once: false,
        mirror: true,
        offset: 50,
        easing: 'ease-in-out-cubic',
        delay: 0
      });
    }

    // Add scanning overlay effect
    const scanningOverlay = document.createElement('div');
    scanningOverlay.className = 'scanning-overlay';
    document.body.appendChild(scanningOverlay);

    return () => {
      if (document.body.contains(scanningOverlay)) {
        document.body.removeChild(scanningOverlay);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 relative">
      {/* Scanning line effect */}
      <div className="scanning-line"></div>
      
      {/* Warning banner at the top */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-red-900/90 border-b border-red-500/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-center text-center">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-red-200 text-sm font-mono">
                ⚠️ AI SYSTEM ANALYSIS IN PROGRESS - POTENTIAL RISKS DETECTED ⚠️
              </span>
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-12">
        <Navbar />
        <div data-aos="fade-up" data-aos-duration="1500">
          <Hero />
        </div>
        <div data-aos="fade-right" data-aos-duration="1200" data-aos-delay="100">
          <Summary />
        </div>
        <div data-aos="fade-left" data-aos-duration="1200" data-aos-delay="200">
          <AuthorBio />
        </div>
        <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
          <Reviews />
        </div>
        <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
          <MoreByBarrat />
        </div>
        <div data-aos="fade-right" data-aos-duration="1200" data-aos-delay="500">
          <DangerSection />
        </div>
        <div data-aos="fade-left" data-aos-duration="1200" data-aos-delay="600">
          <AIRiskVisualization />
        </div>
        <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="700">
          <Analysis />
        </div>
        <AIChatbot />
        <Footer />
      </div>

      {/* Scanning overlay styles */}
      <style>{`
        .scanning-line {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #00ff00, transparent);
          animation: scan 3s linear infinite;
          z-index: 1000;
          pointer-events: none;
        }

        .scanning-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            linear-gradient(transparent 50%, rgba(0, 255, 0, 0.03) 50%),
            linear-gradient(90deg, transparent 50%, rgba(0, 255, 0, 0.03) 50%);
          background-size: 100% 4px, 4px 100%;
          animation: scanningGrid 0.1s linear infinite;
          pointer-events: none;
          z-index: 1;
        }

        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100vw); }
        }

        @keyframes scanningGrid {
          0% { opacity: 0.1; }
          50% { opacity: 0.3; }
          100% { opacity: 0.1; }
        }
      `}</style>
    </div>
  );
};

export default OurFinalInvention;
