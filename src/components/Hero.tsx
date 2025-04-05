
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSummary = () => {
    const summarySection = document.getElementById('summary');
    if (summarySection) {
      window.scrollTo({
        top: summarySection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-bookblue-100 to-white px-4">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 -left-20 w-64 h-64 rounded-full bg-bookblue-200/30 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-bookblue-300/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto text-center relative z-10 animate__animated animate__fadeIn">
        <div className="inline-block mb-6 p-2 px-3 bg-bookblue-100 text-bookblue-800 rounded-full text-sm font-medium">
          ENGLISH CLASS BOOK ANALYSIS
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-merriweather font-black mb-6 text-gray-800 tracking-tight">
          Our <span className="text-bookblue-600">Final</span> Invention
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto font-roboto">
          Artificial Intelligence and the End of the Human Era
        </p>

        <div className="mb-8 flex items-center justify-center">
          <div className="flex items-center bg-white shadow-lg rounded-lg p-3 border border-gray-100">
            <div className="h-16 w-16 mr-4 overflow-hidden rounded">
              <img 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MTsxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDB8fHx8MTY4MDk3NTY5N3ww&auto=format&fit=crop&w=150&h=150&q=80"
                alt="AI Concept" 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-500">BY</p>
              <p className="font-semibold">James Barrat</p>
            </div>
          </div>
        </div>

        <div className="animate__animated animate__fadeInUp animate__delay-1s">
          <button 
            onClick={scrollToSummary}
            className="px-8 py-3 bg-bookblue-600 text-white rounded-full font-medium hover:bg-bookblue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-bookblue-500 focus:ring-offset-2"
          >
            Explore Book Analysis
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <button 
          onClick={scrollToSummary} 
          className="p-2 rounded-full bg-white/80 text-bookblue-500 hover:bg-white hover:text-bookblue-600 transition-colors focus:outline-none"
          aria-label="Scroll down"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
