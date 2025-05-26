
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
  const [isTyping, setIsTyping] = useState(true);
  const [scanningActive, setScanningActive] = useState(false);

  const warnings = [
    "⚠️ NEURAL NETWORK ACTIVITY DETECTED",
    "⚠️ ANALYZING AI THREAT LEVELS",
    "⚠️ SCANNING FOR AUTONOMOUS SYSTEMS",
    "⚠️ MONITORING INTELLIGENCE EXPANSION",
    "⚠️ DETECTING ALGORITHMIC ANOMALIES"
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
    // Cycle through warnings with typing effect
    const warningInterval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentWarning((prev) => (prev + 1) % warnings.length);
        setIsTyping(true);
      }, 500);
    }, 4000);

    return () => clearInterval(warningInterval);
  }, [warnings.length]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 relative">
      {/* Scanning line effect - appears on scroll */}
      <div className={`scanning-line ${scanningActive ? 'active' : ''}`}></div>
      
      {/* Typing warning box - top right */}
      <div className="fixed top-4 right-4 z-[60] bg-black/90 border border-green-500/50 rounded-lg px-4 py-2 backdrop-blur-sm animate__animated animate__fadeInDown">
        <div className="text-green-400 font-mono text-sm">
          <span className={`typing-text ${isTyping ? 'typing' : 'deleting'}`}>
            {warnings[currentWarning]}
          </span>
          <span className="cursor">|</span>
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

        .typing-text {
          display: inline-block;
          min-width: 280px;
        }

        .typing-text.typing {
          animation: typeIn 2s steps(30, end);
        }

        .typing-text.deleting {
          animation: typeOut 0.5s steps(10, end);
        }

        @keyframes typeIn {
          from { 
            width: 0;
            opacity: 0;
          }
          to { 
            width: 100%;
            opacity: 1;
          }
        }

        @keyframes typeOut {
          from { 
            width: 100%;
            opacity: 1;
          }
          to { 
            width: 0;
            opacity: 0.3;
          }
        }

        .cursor {
          animation: blink 1s infinite;
          color: #00ff00;
          font-weight: bold;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
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
