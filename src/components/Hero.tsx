
import React from 'react';
import { ChevronDown, BrainCircuit } from 'lucide-react';

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
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-black">
      {/* Digital Circuit Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="circuit-board h-full w-full opacity-30"></div>
        
        {/* Animated code overlay */}
        <div className="absolute inset-0 binary-rain opacity-20"></div>
        
        {/* Glowing dots */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-cyan-400/10 blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Floating AI-related elements */}
      <div className="absolute top-20 left-10 w-16 h-16 animate-float opacity-70">
        <div className="rounded-lg bg-gradient-to-r from-blue-500/30 to-cyan-400/30 p-3 backdrop-blur-sm border border-blue-500/20 shadow-lg">
          <span className="text-xs font-mono text-cyan-400">01001</span>
        </div>
      </div>
      
      <div className="absolute top-40 right-20 w-24 h-24 animate-float-delayed opacity-70">
        <div className="rounded-full bg-gradient-to-r from-purple-500/30 to-blue-400/30 p-4 backdrop-blur-sm border border-purple-500/20 shadow-lg">
          <BrainCircuit className="w-full h-full text-purple-300" />
        </div>
      </div>

      <div className="absolute bottom-40 left-[30px] w-20 h-20 animate-float-reverse opacity-70">
        <div className="rounded-lg bg-gradient-to-r from-green-500/30 to-cyan-400/30 p-3 backdrop-blur-sm border border-green-500/20 shadow-lg">
          <span className="text-xs font-mono text-green-400">function ai() {'{'}</span>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="container mx-auto text-center relative z-10 animate__animated animate__fadeIn">
        <div className="inline-block mb-6 p-2 px-4 backdrop-blur-md bg-gradient-to-r from-blue-900/40 to-cyan-900/40 text-blue-300 rounded-full text-sm font-mono border border-blue-500/30 shadow-lg shadow-blue-500/20">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">ARTIFICIAL INTELLIGENCE BOOK ANALYSIS</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-merriweather font-black mb-6 text-white tracking-tight">
          Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-green-400">Final</span> Invention
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto font-roboto">
          Artificial Intelligence and the End of the Human Era
        </p>

        {/* Book Author Card */}
        <div className="mb-8 flex items-center justify-center">
          <div className="flex items-center backdrop-blur-md bg-gradient-to-r from-blue-900/20 to-cyan-900/20 shadow-lg rounded-lg p-3 border border-blue-500/30 shadow-cyan-500/20">
            <div className="h-16 w-16 mr-4 overflow-hidden rounded shadow-lg shadow-cyan-500/30">
              <img 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MTsxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDB8fHx8MTY4MDk3NTY5N3ww&auto=format&fit=crop&w=150&h=150&q=80"
                alt="AI Concept" 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-left">
              <p className="text-sm text-blue-300/80">BY</p>
              <p className="font-mono font-semibold text-white">James Barrat</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="animate__animated animate__fadeInUp animate__delay-1s">
          <button 
            onClick={scrollToSummary}
            className="group px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-md font-medium hover:from-blue-700 hover:to-cyan-600 transition-colors shadow-lg shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black relative overflow-hidden"
          >
            <span className="relative z-10">Explore Book Analysis</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 opacity-0 group-hover:opacity-20 transition-opacity"></span>
          </button>
        </div>
      </div>

      {/* Animated scroll down indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <button 
          onClick={scrollToSummary} 
          className="p-2 rounded-full bg-gradient-to-r from-blue-900/30 to-cyan-900/30 backdrop-blur-md text-blue-300 hover:text-cyan-300 hover:bg-cyan-900/40 transition-colors focus:outline-none border border-blue-500/30"
          aria-label="Scroll down"
        >
          <ChevronDown size={24} />
        </button>
      </div>

      {/* Digital circuit paths */}
      <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none">
        <div className="h-full w-full circuit-lines-horizontal"></div>
      </div>
    </section>
  );
};

export default Hero;
