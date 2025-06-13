
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
import AIVideoGallery from '@/components/AIVideoGallery';
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

      // Add scroll listener for horizontal scanning effect
      const handleScroll = () => {
        setScanningActive(true);
        setTimeout(() => setScanningActive(false), 3000);
      };

      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  useEffect(() => {
    const currentText = warnings[currentWarning];
    const typingSpeed = 50; // Faster typing for smoother effect
    const deletingSpeed = 30; // Faster deleting for smoother effect
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
      {/* Horizontal scanning line effect - scans from top to bottom */}
      <div className={`scanning-line-horizontal ${scanningActive ? 'active' : ''}`}></div>
      
      {/* Minimalist typing warning box - smaller and cleaner */}
      <div className="fixed top-36 right-6 z-[60] bg-gradient-to-br from-blue-500/20 to-cyan-400/20 border border-cyan-400/40 rounded-lg px-4 py-3 backdrop-blur-md animate__animated animate__fadeInDown shadow-lg shadow-cyan-400/10 max-w-sm">
        <div className="text-cyan-300 font-mono text-sm">
          <span className="leading-relaxed">
            {typedText}
            <span className="animate-pulse text-cyan-400 ml-1">|</span>
          </span>
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
      <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="800">
        <AIVideoGallery />
      </div>
      <AIChatbot />
      <Footer />

      {/* Enhanced horizontal scanning animations */}
      <style>{`
        .scanning-line-horizontal {
          position: fixed;
          left: 0;
          top: -10px;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, transparent, #00ff00 30%, #00ff00 70%, transparent);
          z-index: 1000;
          pointer-events: none;
          transition: all 0.3s ease;
          box-shadow: 0 0 15px #00ff00, 0 0 30px #00ff00;
          opacity: 0;
        }

        .scanning-line-horizontal.active {
          opacity: 1;
          animation: scanHorizontal 3s ease-in-out;
        }

        @keyframes scanHorizontal {
          0% { 
            top: -10px; 
            opacity: 0;
            box-shadow: 0 0 15px #00ff00, 0 0 30px #00ff00;
          }
          10% {
            opacity: 1;
            box-shadow: 0 0 20px #00ff00, 0 0 40px #00ff00;
          }
          50% {
            opacity: 1;
            box-shadow: 0 0 25px #00ff00, 0 0 50px #00ff00;
            top: 50vh;
          }
          90% {
            opacity: 1;
            box-shadow: 0 0 20px #00ff00, 0 0 40px #00ff00;
          }
          100% { 
            top: 100vh; 
            opacity: 0;
            box-shadow: 0 0 15px #00ff00, 0 0 30px #00ff00;
          }
        }

        /* Additional horizontal scan lines for enhanced computer-like effect */
        .scanning-line-horizontal::before {
          content: '';
          position: absolute;
          left: 0;
          top: 8px;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #00ff00 40%, #00ff00 60%, transparent);
          opacity: 0.6;
        }

        .scanning-line-horizontal::after {
          content: '';
          position: absolute;
          left: 0;
          top: -6px;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, #00ff00 50%, transparent);
          opacity: 0.4;
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

        /* Smooth typing cursor animation */
        @keyframes smoothBlink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        /* Additional computer scanning effects */
        body {
          position: relative;
        }

        body::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            linear-gradient(90deg, transparent 0%, rgba(0, 255, 0, 0.02) 50%, transparent 100%),
            linear-gradient(180deg, transparent 0%, rgba(0, 255, 0, 0.02) 50%, transparent 100%);
          pointer-events: none;
          z-index: 1;
          animation: computerGrid 4s ease-in-out infinite;
          opacity: 0;
        }

        .scanning-line-horizontal.active ~ * body::before {
          opacity: 1;
        }

        @keyframes computerGrid {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
};

export default OurFinalInvention;
