
import React from 'react';
import { ChevronDown, BrainCircuit, Cpu, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSummary = () => {
    const summarySection = document.getElementById('summary');
    if (summarySection) {
      window.scrollTo({
        top: summarySection.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* AI-themed Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Digital neural network background */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
            opacity: 0.15
          }}
        ></div>
        
        {/* Dark overlay with blue tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/20 to-black/80"></div>
        
        {/* Tech particle effects */}
        <div className="absolute top-0 left-0 right-0 bottom-0">
          <div id="particles-hero" className="h-full w-full"></div>
        </div>
        
        {/* Glowing elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-cyan-400/10 blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Floating tech elements */}
      <div className="absolute top-20 left-10 animate-float opacity-70">
        <Cpu className="h-10 w-10 text-blue-400" />
      </div>
      
      <div className="absolute top-40 right-20 animate-float-delayed opacity-70">
        <Terminal className="h-12 w-12 text-cyan-400" />
      </div>

      <div className="absolute bottom-40 left-30 animate-float-reverse opacity-70">
        <BrainCircuit className="h-16 w-16 text-blue-500/40" />
      </div>

      {/* Binary code streams */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="binary-stream left-1/4 top-0 h-full"></div>
        <div className="binary-stream right-1/3 top-0 h-full"></div>
      </div>

      {/* Main Hero Content */}
      <div className="container mx-auto text-center relative z-10 animate__animated animate__fadeIn">
        <div className="inline-block mb-6 p-2 px-6 backdrop-blur-md bg-blue-900/20 text-cyan-300 rounded-full text-sm font-mono border border-cyan-500/30 shadow-lg">
          <span>ARTIFICIAL INTELLIGENCE ANALYSIS</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tight">
          Our <span className="text-cyan-400">Final</span> Invention
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Artificial Intelligence and the End of the Human Era
        </p>

        {/* Book Author Card */}
        <div className="mb-8 flex items-center justify-center">
          <div className="flex items-center backdrop-blur-md bg-blue-900/20 shadow-lg rounded-lg p-4 border border-cyan-500/30">
            <div className="h-16 w-16 mr-4 overflow-hidden rounded shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80"
                alt="AI Concept" 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-400">BY</p>
              <p className="font-medium text-white">James Barrat</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="animate__animated animate__fadeInUp animate__delay-1s">
          <button 
            onClick={scrollToSummary}
            className="group px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-md font-medium hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black relative overflow-hidden"
          >
            <span className="relative z-10">Explore Analysis</span>
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </button>
        </div>
      </div>

      {/* Animated scroll down indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <button 
          onClick={scrollToSummary} 
          className="p-2 rounded-full bg-blue-900/30 backdrop-blur-md text-cyan-400 hover:text-cyan-300 hover:bg-blue-900/50 transition-colors focus:outline-none border border-cyan-500/30"
          aria-label="Scroll down"
        >
          <ChevronDown size={24} />
        </button>
      </div>

      {/* Circuit board at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none" 
           style={{
             backgroundImage: "url('https://images.unsplash.com/photo-1677442135968-6ca6a7d3b002?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             opacity: 0.3
           }}>
        <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-transparent to-blue-900/20"></div>
      </div>

      {/* Custom CSS for binary streams and animations */}
      <style>
        {`
          @keyframes binary-fall {
            0% { transform: translateY(-100%); opacity: 0.7; }
            100% { transform: translateY(100vh); opacity: 0; }
          }
          
          .binary-stream {
            position: absolute;
            width: 20px;
            font-family: monospace;
            font-size: 12px;
            color: rgba(6, 182, 212, 0.4);
            text-align: center;
            user-select: none;
            animation: binary-fall 15s linear infinite;
          }
          
          .binary-stream::before {
            content: '01010111 00100000 01000001 01001001 00100000 01001001 01010011 00100000 01010100 01001000 01000101 00100000 01000110 01010101 01010100 01010101 01010010 01000101';
            white-space: pre;
            writing-mode: vertical-rl;
            text-orientation: upright;
          }
          
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 0.6; }
          }
          
          .animate-pulse-slow {
            animation: pulse-slow 4s ease-in-out infinite;
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          
          .animate-float {
            animation: float 8s ease-in-out infinite;
          }
          
          .animate-float-delayed {
            animation: float 12s ease-in-out infinite;
            animation-delay: 2s;
          }
          
          .animate-float-reverse {
            animation: float 10s ease-in-out infinite reverse;
            animation-delay: 1s;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
