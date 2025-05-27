
import React, { useEffect, useState } from 'react';
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
  const [currentWarning, setCurrentWarning] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [scanningActive, setScanningActive] = useState(false);

  const warnings = [
    "Advanced AI could become uncontrollable and act in ways that harm humanity.",
    "Superintelligent AI might pursue goals that threaten human survival.",
    "Bad actors could use AI for dangerous purposes like cyberattacks or autonomous weapons.",
    "AI could cause massive job loss and economic disruption.",
    "Even well-meaning AI systems might have harmful unintended consequences."
  ];

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

      // Add scroll listener for scanning effect
      const handleScroll = () => {
        setScanningActive(true);
        setTimeout(() => setScanningActive(false), 2000);
      };

      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  useEffect(() => {
    const currentText = warnings[currentWarning];
    const typingSpeed = 80;
    const deletingSpeed = 40;
    const pauseTime = 3000;

    const typeEffect = () => {
      if (!isDeleting && charIndex < currentText.length) {
        setTypedText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setTypedText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentWarning((prev) => (prev + 1) % warnings.length);
      }
    };

    const timeout = setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentWarning, warnings]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 relative">
      {/* Scanning line effect - appears on scroll */}
      <div className={`scanning-line ${scanningActive ? 'active' : ''}`}></div>
      
      {/* Typing warning box - top right, positioned better */}
      <div className="fixed top-32 right-6 z-[60] bg-black/95 border border-cyan-400/60 rounded-lg px-5 py-4 backdrop-blur-md animate__animated animate__fadeInDown shadow-lg shadow-cyan-400/20">
        <div className="text-cyan-300 font-mono text-sm flex items-start max-w-xs">
          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2 animate-pulse flex-shrink-0"></div>
          <div className="flex-1">
            <div className="text-cyan-200 text-xs mb-2 uppercase tracking-wider">AI RISK ANALYSIS</div>
            <span className="leading-relaxed">
              {typedText}
              <span className="animate-pulse text-cyan-400 ml-1">|</span>
            </span>
          </div>
        </div>
      </div>

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

      {/* Enhanced scanning and typing animations */}
      <style>{`
        .scanning-line {
          position: fixed;
          top: 0;
          left: -100%;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, transparent, #00ff00 50%, transparent);
          z-index: 1000;
          pointer-events: none;
          transition: all 0.3s ease;
          box-shadow: 0 0 10px #00ff00;
        }

        .scanning-line.active {
          left: 0;
          animation: scanAcross 2s ease-in-out;
        }

        @keyframes scanAcross {
          0% { 
            left: -100%; 
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% { 
            left: 100%; 
            opacity: 0;
          }
        }

        /* Enhanced section transitions */
        [data-aos] {
          transition-property: transform, opacity, background;
          transition-duration: 1.2s;
        }

        /* Scanning grid overlay enhancements */
        .grid-scanning {
          background-image: 
            linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridScan 6s linear infinite;
        }

        @keyframes gridScan {
          0% { 
            transform: translate(0, 0);
            opacity: 0.1;
          }
          50% {
            opacity: 0.3;
          }
          100% { 
            transform: translate(50px, 50px);
            opacity: 0.1;
          }
        }
      `}</style>
    </div>
  );
};

export default OurFinalInvention;
