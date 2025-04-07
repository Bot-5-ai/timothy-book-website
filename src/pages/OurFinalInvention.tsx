
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BrainCircuit, Cpu, Terminal, Binary, Atom, MoveRight, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Summary from '../components/Summary';
import Author from '../components/Author';
import Reviews from '../components/Reviews';
import Analysis from '../components/Analysis';
import DangerSection from '../components/DangerSection';
import Footer from '../components/Footer';

const OurFinalInvention = () => {
  useEffect(() => {
    // Initialize AOS on component mount with enhanced options
    const AOS = window.AOS;
    if (typeof AOS !== 'undefined') {
      AOS.init({ 
        duration: 800,
        once: false, // Changed to false for repeated animations on scroll
        mirror: true,
        offset: 100,
        easing: 'ease-in-out',
        delay: 100
      });
    }
    
    // Initialize GSAP animations
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      
      // Animate the binary code elements
      gsap.to('.binary-element', {
        y: -20,
        opacity: 0.8,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: '.binary-section',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      });
      
      // Animate the circuit paths
      gsap.fromTo('.circuit-path', 
        { strokeDashoffset: 1000 },
        { 
          strokeDashoffset: 0, 
          duration: 3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.bg-ai-circuit',
            start: 'top 70%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
    
    // Initialize Typed.js for typing animation
    const Typed = window.Typed;
    if (typeof Typed !== 'undefined') {
      const typed = new Typed('#ai-typing-text', {
        strings: [
          'Artificial Intelligence is advancing rapidly.',
          'Will superintelligent AI share our goals?',
          'AGI could be our final invention...',
          'The control problem remains unsolved.'
        ],
        typeSpeed: 40,
        backSpeed: 20,
        loop: true,
        backDelay: 2000
      });
      
      return () => {
        typed.destroy();
      };
    }
    
    // Initialize particles.js for background effect
    const particlesJS = window.particlesJS;
    if (typeof particlesJS !== 'undefined') {
      particlesJS('particles-js', {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: '#06b6d4' },
          shape: { type: 'circle' },
          opacity: { value: 0.5, random: true },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#0ea5e9',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: true,
            out_mode: 'out'
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'grab' },
            onclick: { enable: true, mode: 'push' }
          },
          modes: {
            grab: { distance: 140, line_linked: { opacity: 1 } },
            push: { particles_nb: 4 }
          }
        }
      });
    }
    
    // Add mousemove event for interactive binary code particles
    const handleMouseMove = (e) => {
      const particles = document.querySelectorAll('.ai-particle');
      particles.forEach((particle: any) => {
        const speed = particle.dataset.speed;
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        
        particle.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    // Clean up event listeners
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="font-roboto overflow-x-hidden relative bg-black text-white">
      {/* Particles.js container for interactive background */}
      <div id="particles-js" className="fixed inset-0 z-0"></div>
      
      {/* AI Circuit board background */}
      <div className="fixed inset-0 bg-black opacity-90 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-cyan-900/10"></div>
        <div className="circuit-board"></div>
      </div>
      
      {/* Back to home button */}
      <div className="fixed top-4 left-4 z-[60]">
        <Link to="/">
          <Button variant="outline" size="sm" className="bg-black/30 text-cyan-300 border-cyan-500/30 hover:bg-cyan-900/40 backdrop-blur-md">
            <ArrowLeft className="mr-2 h-4 w-4" /> Home
          </Button>
        </Link>
      </div>
      
      {/* Typing animation container */}
      <div className="fixed top-5 right-5 z-50 max-w-xs backdrop-blur-md bg-black/40 p-3 rounded-lg border border-cyan-500/30 shadow-lg hidden md:block">
        <span id="ai-typing-text" className="text-sm text-cyan-400 font-mono"></span>
      </div>
      
      {/* AI-themed floating elements */}
      <div className="ai-particle absolute top-[10%] left-[5%] w-16 h-16 opacity-70 animate-pulse" data-speed="4">
        <BrainCircuit className="w-full h-full text-cyan-500" />
      </div>
      <div className="ai-particle absolute top-[20%] right-[15%] w-10 h-10 opacity-60 animate-float" data-speed="2">
        <Cpu className="w-full h-full text-blue-400" />
      </div>
      <div className="ai-particle absolute bottom-[30%] left-[10%] w-12 h-12 opacity-60 animate-pulse-slow" data-speed="3">
        <Terminal className="w-full h-full text-green-400" />
      </div>
      <div className="ai-particle absolute top-[40%] right-[5%] w-14 h-14 opacity-50 animate-float-reverse" data-speed="5">
        <Binary className="w-full h-full text-cyan-400" />
      </div>
      <div className="ai-particle absolute bottom-[15%] right-[15%] w-16 h-16 opacity-60 animate-spin-slow" data-speed="2">
        <Atom className="w-full h-full text-blue-400" />
      </div>
      <div className="ai-particle absolute top-[60%] left-[15%] w-12 h-12 opacity-50 animate-pulse" data-speed="4">
        <Code className="w-full h-full text-cyan-400" />
      </div>
      
      {/* AI Tech Images */}
      <div className="ai-particle absolute top-[30%] right-[8%] w-24 h-24 opacity-80 animate-float-delayed rounded-full overflow-hidden shadow-glow-blue" data-speed="2">
        <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" 
             alt="AI Matrix pattern" 
             className="w-full h-full object-cover" />
      </div>
      <div className="ai-particle absolute bottom-[40%] left-[10%] w-20 h-20 opacity-70 animate-float-delayed rounded-full overflow-hidden shadow-glow-blue" data-speed="3">
        <img src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" 
             alt="AI concept light" 
             className="w-full h-full object-cover" />
      </div>
      <div className="ai-particle absolute top-[70%] right-[12%] w-28 h-28 opacity-70 animate-float rounded-full overflow-hidden shadow-glow-blue" data-speed="1">
        <img src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" 
             alt="Digital brain concept" 
             className="w-full h-full object-cover" />
      </div>
      
      {/* Binary code pattern overlays */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden binary-rain"></div>
      </div>
      
      {/* AI circuit path - decorative element */}
      <div className="fixed left-0 h-full w-12 pointer-events-none z-10">
        <div className="h-full w-full circuit-lines-vertical"></div>
      </div>
      <div className="fixed right-0 h-full w-12 pointer-events-none z-10">
        <div className="h-full w-full circuit-lines-vertical"></div>
      </div>
      
      {/* Scanning line effect */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 scan-line"></div>
      </div>
      
      {/* Binary code section */}
      <div className="fixed inset-x-0 top-0 h-24 pointer-events-none z-5 overflow-hidden binary-section">
        <div className="flex space-x-6 opacity-30">
          {[...Array(12)].map((_, i) => (
            <div key={i} className={`binary-element text-xs text-cyan-400 font-mono animate-float-${i % 3}`}>
              {i % 2 === 0 ? '01010111 00100000 01000001' : '01001001 00100000 01001001'}
            </div>
          ))}
        </div>
      </div>
      
      {/* Content sections */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <div className="bg-ai-grid section-transition relative" data-aos="fade-up" data-aos-duration="1200">
          <div className="absolute inset-0 ai-overlay grid-overlay"></div>
          <Summary />
        </div>
        <div className="bg-ai-neural section-transition relative" data-aos="fade-up" data-aos-duration="1200">
          <div className="absolute inset-0 ai-overlay neural-overlay"></div>
          <Author />
        </div>
        <div className="bg-ai-circuit section-transition relative" data-aos="fade-up" data-aos-duration="1200">
          <div className="absolute inset-0 ai-overlay circuit-overlay"></div>
          <Reviews />
        </div>
        
        {/* New Dangers Section */}
        <DangerSection />
        
        <div className="bg-ai-binary section-transition relative" data-aos="fade-up" data-aos-duration="1200">
          <div className="absolute inset-0 ai-overlay binary-overlay"></div>
          <Analysis />
        </div>
        <div className="bg-ai-matrix relative">
          <div className="absolute inset-0 ai-overlay matrix-overlay"></div>
          <Footer />
        </div>
      </div>
      
      {/* Interactive floating bot */}
      <div className="fixed bottom-8 right-8 animate-bounce-slow z-50" id="aiAssistant">
        <div className="relative">
          <button 
            className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-600 to-blue-500 text-white shadow-glow p-4 hover:scale-110 transition-all duration-300"
            onClick={() => document.getElementById('aiMessage')?.classList.toggle('hidden')}
          >
            <BrainCircuit className="w-8 h-8" />
          </button>
          <div id="aiMessage" className="absolute bottom-full right-0 mb-4 p-4 bg-black/80 backdrop-blur-lg border border-cyan-500/50 rounded-lg w-64 shadow-glow hidden animate__animated animate__fadeIn">
            <p className="text-sm text-cyan-300 mb-2 typing-animation">Hello human. Exploring AI concepts?</p>
            <div className="flex gap-2 mt-2">
              <a href="#summary" className="text-xs px-3 py-1 bg-cyan-600/50 hover:bg-cyan-600 rounded-full transition-all">Summary</a>
              <a href="#dangers" className="text-xs px-3 py-1 bg-red-600/50 hover:bg-red-600 rounded-full transition-all">Dangers</a>
              <a href="#analysis" className="text-xs px-3 py-1 bg-blue-600/50 hover:bg-blue-600 rounded-full transition-all">Analysis</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* SVG Circuit paths */}
      <svg className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-20" xmlns="http://www.w3.org/2000/svg">
        <path className="circuit-path" d="M0,100 Q100,50 200,100 T400,100" stroke="#06b6d4" strokeWidth="2" fill="none" strokeDasharray="5,5" />
        <path className="circuit-path" d="M0,200 Q200,150 400,200 T800,200" stroke="#0ea5e9" strokeWidth="2" fill="none" strokeDasharray="5,5" />
        <path className="circuit-path" d="M0,300 Q300,250 600,300 T1200,300" stroke="#2dd4bf" strokeWidth="2" fill="none" strokeDasharray="5,5" />
      </svg>
      
      {/* Additional AI-themed decorative elements */}
      <div className="fixed bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500"></div>
    </div>
  );
};

export default OurFinalInvention;
