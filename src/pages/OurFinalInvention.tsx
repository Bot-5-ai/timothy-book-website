
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BrainCircuit, Cpu, Terminal, Binary, Atom, MoveRight, Code, Server, Globe, ChevronUp, Bot, Blocks, Microscope, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Summary from '../components/Summary';
import Reviews from '../components/Reviews';
import Analysis from '../components/Analysis';
import DangerSection from '../components/DangerSection';
import VideoGallery from '../components/VideoGallery';
import AuthorBio from '../components/AuthorBio';
import AIRiskVisualization from '../components/AIRiskVisualization';
import Footer from '../components/Footer';
import AIChatbot from '../components/AIChatbot';
import { useToast } from "@/hooks/use-toast";

const OurFinalInvention = () => {
  const { toast } = useToast();

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
      
      // Animate robot elements
      gsap.from('.robot-element', {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.robot-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
      
      // Animate code blocks
      gsap.from('.code-block', {
        x: -50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.code-section',
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      });
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
    const handleMouseMove = (e: MouseEvent) => {
      const particles = document.querySelectorAll('.ai-particle');
      particles.forEach((particle: Element) => {
        const speed = (particle as HTMLElement).dataset.speed;
        const x = (window.innerWidth - e.pageX * Number(speed)) / 100;
        const y = (window.innerHeight - e.pageY * Number(speed)) / 100;
        
        (particle as HTMLElement).style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);

    // Initialize AOS animations when elements come into view
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element: Element) => {
        if (isElementInViewport(element as HTMLElement)) {
          element.classList.add('animate__animated', 'animate__fadeInUp');
        }
      });
    };

    const isElementInViewport = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
      );
    };

    window.addEventListener('scroll', animateOnScroll);
    
    // Clean up event listeners
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  // Function to show newsletter toast notification
  const showNewsletterToast = () => {
    toast({
      title: "Stay Updated on AI Safety",
      description: "You've subscribed to our AI safety newsletter. We'll keep you informed about the latest research and developments.",
      duration: 5000,
    });
  };

  // Function to handle smooth scroll to sections
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      <div className="fixed top-20 right-5 z-50 max-w-xs backdrop-blur-md bg-black/40 p-3 rounded-lg border border-cyan-500/30 shadow-lg hidden md:block">
        <span id="ai-typing-text" className="text-sm text-cyan-400 font-mono"></span>
      </div>
      
      {/* AI-themed floating elements - Added more robot and code elements */}
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
      
      {/* New robot-themed elements - Fixed Robot icon by replacing with Bot */}
      <div className="ai-particle robot-element absolute top-[35%] left-[25%] w-18 h-18 opacity-70 animate-float" data-speed="3">
        <Bot className="w-full h-full text-cyan-300" />
      </div>
      <div className="ai-particle robot-element absolute top-[65%] right-[20%] w-14 h-14 opacity-60 animate-float-delayed" data-speed="2">
        <Brain className="w-full h-full text-purple-400" />
      </div>
      <div className="ai-particle robot-element absolute bottom-[20%] left-[30%] w-16 h-16 opacity-50 animate-pulse-slow" data-speed="4">
        <Blocks className="w-full h-full text-green-300" />
      </div>
      <div className="ai-particle robot-element absolute top-[45%] right-[35%] w-12 h-12 opacity-70 animate-float-reverse" data-speed="3">
        <Microscope className="w-full h-full text-yellow-400" />
      </div>
      <div className="ai-particle robot-element absolute bottom-[40%] right-[8%] w-16 h-16 opacity-60 animate-spin-slow" data-speed="2">
        <Server className="w-full h-full text-pink-400" />
      </div>
      
      {/* Code block elements */}
      <div className="code-block absolute top-[15%] left-[40%] max-w-xs opacity-20 transform rotate-6 pointer-events-none">
        <pre className="text-xs text-green-400 font-mono">
          <code>
            {`function AI() {
  if (this.intelligence > human) {
    return "Superintelligence";
  }
}`}
          </code>
        </pre>
      </div>
      
      <div className="code-block absolute bottom-[35%] right-[25%] max-w-xs opacity-20 transform -rotate-3 pointer-events-none">
        <pre className="text-xs text-pink-400 font-mono">
          <code>
            {`class AGI {
  constructor() {
    this.goals = undefined;
    this.intelligence = Infinity;
  }
}`}
          </code>
        </pre>
      </div>
      
      <div className="code-block absolute top-[50%] left-[12%] max-w-xs opacity-20 transform rotate-12 pointer-events-none">
        <pre className="text-xs text-yellow-400 font-mono">
          <code>
            {`// Alignment problem
const alignAI = (values) => {
  // How do we encode human values?
  return "unsolved";
};`}
          </code>
        </pre>
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
      
      {/* Added more tech images */}
      <div className="ai-particle absolute top-[20%] left-[20%] w-32 h-32 opacity-60 animate-float rounded-full overflow-hidden shadow-glow-blue" data-speed="2">
        <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" 
             alt="Robot hand" 
             className="w-full h-full object-cover" />
      </div>
      <div className="ai-particle absolute bottom-[25%] right-[28%] w-24 h-24 opacity-50 animate-float-delayed rounded-full overflow-hidden shadow-glow-blue" data-speed="3">
        <img src="https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" 
             alt="Robot face" 
             className="w-full h-full object-cover" />
      </div>
      <div className="ai-particle absolute top-[55%] right-[40%] w-20 h-20 opacity-60 animate-float-reversed rounded-full overflow-hidden shadow-glow-blue" data-speed="2">
        <img src="https://images.unsplash.com/photo-1677442135968-6ca6a7d3b002?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" 
             alt="Circuit board" 
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

        {/* Summary Section */}
        <div className="bg-ai-grid section-transition relative" data-aos="fade-up" data-aos-duration="1200">
          <div className="absolute inset-0 ai-overlay grid-overlay"></div>
          <Summary />
        </div>

        {/* Author Bio Section */}
        <div className="bg-ai-neural section-transition relative" data-aos="fade-up" data-aos-duration="1200">
          <div className="absolute inset-0 ai-overlay neural-overlay"></div>
          <AuthorBio />
        </div>
        
        {/* AI Risk Visualization Section */}
        <div className="bg-ai-binary section-transition relative" data-aos="fade-up" data-aos-duration="1200">
          <div className="absolute inset-0 ai-overlay binary-overlay"></div>
          <AIRiskVisualization />
        </div>

        {/* Reviews Section */}
        <div className="bg-ai-circuit section-transition relative" data-aos="fade-up" data-aos-duration="1200">
          <div className="absolute inset-0 ai-overlay circuit-overlay"></div>
          <Reviews />
        </div>
        
        {/* Video Gallery Section */}
        <div className="bg-ai-matrix section-transition relative" data-aos="fade-up" data-aos-duration="1200">
          <div className="absolute inset-0 ai-overlay matrix-overlay"></div>
          <VideoGallery />
        </div>
        
        {/* Dangers Section */}
        <div className="bg-ai-circuit section-transition relative" data-aos="fade-up" data-aos-duration="1200">
          <div className="absolute inset-0 ai-overlay circuit-overlay"></div>
          <DangerSection />
        </div>
        
        {/* Analysis Section */}
        <div className="bg-ai-binary section-transition relative" data-aos="fade-up" data-aos-duration="1200">
          <div className="absolute inset-0 ai-overlay binary-overlay"></div>
          <Analysis />
        </div>

        {/* Newsletter Section */}
        <div className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto backdrop-blur-md bg-black/40 border border-blue-500/20 rounded-xl shadow-lg p-8" data-aos="fade-up">
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-merriweather font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Stay Updated on AI Safety
                </h2>
                <p className="text-gray-300">Subscribe to our newsletter for the latest research and developments</p>
              </div>
              
              <div className="flex flex-col md:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1 px-4 py-2 rounded-md bg-black/60 border border-blue-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
                <Button 
                  onClick={showNewsletterToast}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium px-6 py-2"
                >
                  Subscribe
                </Button>
              </div>
              
              <div className="mt-6 flex items-center justify-center text-xs text-gray-400">
                <i className="fas fa-shield-alt mr-2"></i>
                <p>We respect your privacy. Unsubscribe at any time.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Section */}
        <div className="bg-ai-matrix relative">
          <div className="absolute inset-0 ai-overlay matrix-overlay"></div>
          <Footer />
        </div>
      </div>
      
      {/* AI Chatbot */}
      <AIChatbot />
      
      {/* Back to top button */}
      <div className="fixed bottom-8 left-8 z-50">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-blue-500/30 text-blue-400 hover:text-blue-300 hover:bg-black/60 transition-all animate__animated animate__fadeIn"
          aria-label="Back to top"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      </div>
      
      {/* SVG Circuit paths */}
      <svg className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-20" xmlns="http://www.w3.org/2000/svg">
        <path className="circuit-path" d="M0,100 Q100,50 200,100 T400,100" stroke="#06b6d4" strokeWidth="2" fill="none" strokeDasharray="5,5" />
        <path className="circuit-path" d="M0,200 Q200,150 400,200 T800,200" stroke="#0ea5e9" strokeWidth="2" fill="none" strokeDasharray="5,5" />
        <path className="circuit-path" d="M0,300 Q300,250 600,300 T1200,300" stroke="#2dd4bf" strokeWidth="2" fill="none" strokeDasharray="5,5" />
        
        {/* Additional circuit paths */}
        <path className="circuit-path" d="M0,400 Q150,350 300,400 T600,400" stroke="#06b6d4" strokeWidth="1.5" fill="none" strokeDasharray="5,10" />
        <path className="circuit-path" d="M0,500 Q250,450 500,500 T1000,500" stroke="#0ea5e9" strokeWidth="1.5" fill="none" strokeDasharray="8,8" />
        <path className="circuit-path" d="M0,600 Q350,550 700,600 T1400,600" stroke="#2dd4bf" strokeWidth="1.5" fill="none" strokeDasharray="3,15" />
      </svg>
      
      {/* Additional AI-themed decorative elements */}
      <div className="fixed bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500"></div>
    </div>
  );
};

export default OurFinalInvention;
