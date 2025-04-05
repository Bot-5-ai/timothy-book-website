
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
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
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-bookblue-400 via-purple-400 to-pink-300 px-4">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-pink-300/40 blur-3xl animate-pulse-light"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-bookblue-300/30 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-purple-300/20 blur-3xl animate-float"></div>
      </div>

      <div className="container mx-auto text-center relative z-10 animate__animated animate__fadeIn">
        <div className="inline-block mb-6 p-2 px-4 bg-white/30 backdrop-blur-md text-bookblue-800 rounded-full text-sm font-medium shadow-lg">
          ENGLISH CLASS BOOK ANALYSIS
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-merriweather font-black mb-6 text-white tracking-tight">
          Our <span className="text-white gradient-text">Final</span> Invention
        </h1>
        
        <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto font-roboto">
          Artificial Intelligence and the End of the Human Era
        </p>

        <div className="mb-8 flex items-center justify-center">
          <div className="flex items-center backdrop-blur-md bg-white/20 shadow-lg rounded-lg p-3 border border-white/30">
            <div className="h-16 w-16 mr-4 overflow-hidden rounded">
              <img 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MTsxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDB8fHx8MTY4MDk3NTY5N3ww&auto=format&fit=crop&w=150&h=150&q=80"
                alt="AI Concept" 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-left">
              <p className="text-sm text-white/80">BY</p>
              <p className="font-semibold text-white">James Barrat</p>
            </div>
          </div>
        </div>

        <div className="animate__animated animate__fadeInUp animate__delay-1s">
          <button 
            onClick={scrollToSummary}
            className="px-8 py-3 bg-white text-bookblue-600 rounded-full font-medium hover:bg-bookblue-50 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-bookblue-500 glow-effect"
          >
            Explore Book Analysis
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <button 
          onClick={scrollToSummary} 
          className="p-2 rounded-full bg-white/30 backdrop-blur-md text-white hover:bg-white/50 hover:text-bookblue-600 transition-colors focus:outline-none"
          aria-label="Scroll down"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
