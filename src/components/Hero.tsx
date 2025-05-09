
import React from 'react';
import { ChevronDown, BookOpen } from 'lucide-react';

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
      {/* Library Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Real library background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
            opacity: 0.3
          }}
        ></div>
        
        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#00000080] via-transparent to-[#00000080]"></div>
        
        {/* Warm lighting glow */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#ff9e4450] blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-[#ffaa4450] blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Realistic book elements */}
      <div className="absolute top-20 left-10 w-16 h-20 animate-float opacity-70">
        <div className="bg-[#6b4d30] h-full w-full rounded-r-md rounded-l-sm shadow-lg transform rotate-[-5deg]">
          <div className="h-1 w-full bg-[#e5ded3] absolute top-3"></div>
          <div className="h-1 w-full bg-[#e5ded3] absolute top-6"></div>
          <div className="h-1 w-full bg-[#e5ded3] absolute top-9"></div>
        </div>
      </div>
      
      <div className="absolute top-40 right-20 w-20 h-24 animate-float-delayed opacity-70">
        <div className="bg-[#8b3a3a] h-full w-full rounded-r-md rounded-l-sm shadow-lg transform rotate-[5deg] relative">
          <div className="absolute inset-0 flex items-center justify-center text-[#e5ded3] opacity-50">
            <BookOpen size={24} />
          </div>
        </div>
      </div>

      <div className="absolute bottom-40 left-[30px] w-16 h-22 animate-float-reverse opacity-70">
        <div className="bg-[#2c4a6b] h-full w-full rounded-r-md rounded-l-sm shadow-lg transform rotate-[-8deg]">
          <div className="h-full w-1 bg-[#1a3654] absolute left-0"></div>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="container mx-auto text-center relative z-10 animate__animated animate__fadeIn">
        <div className="inline-block mb-6 p-2 px-6 backdrop-blur-md bg-[#00000040] text-[#e5ded3] rounded-full text-sm font-serif border border-[#ffffff20] shadow-lg">
          <span>ARTIFICIAL INTELLIGENCE BOOK ANALYSIS</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black mb-6 text-white tracking-tight">
          Our <span className="text-[#ffb454]">Final</span> Invention
        </h1>
        
        <p className="text-xl md:text-2xl text-[#e5ded3] mb-8 max-w-3xl mx-auto font-serif">
          Artificial Intelligence and the End of the Human Era
        </p>

        {/* Book Author Card */}
        <div className="mb-8 flex items-center justify-center">
          <div className="flex items-center backdrop-blur-md bg-[#00000060] shadow-lg rounded-lg p-4 border border-[#ffffff10]">
            <div className="h-16 w-16 mr-4 overflow-hidden rounded shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1526243741027-444d633d7365?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80"
                alt="AI Concept" 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-left">
              <p className="text-sm text-[#e5ded3]/80">BY</p>
              <p className="font-serif font-semibold text-white">James Barrat</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="animate__animated animate__fadeInUp animate__delay-1s">
          <button 
            onClick={scrollToSummary}
            className="group px-8 py-3 bg-[#8b3a3a] text-white rounded-md font-medium hover:bg-[#6b2323] transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-[#8b3a3a] focus:ring-offset-2 focus:ring-offset-black relative overflow-hidden"
          >
            <span className="relative z-10">Explore Book Analysis</span>
            <span className="absolute inset-0 bg-[#ff8c8c20] opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </button>
        </div>
      </div>

      {/* Animated scroll down indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <button 
          onClick={scrollToSummary} 
          className="p-2 rounded-full bg-[#00000040] backdrop-blur-md text-[#e5ded3] hover:text-white hover:bg-[#00000060] transition-colors focus:outline-none border border-[#ffffff20]"
          aria-label="Scroll down"
        >
          <ChevronDown size={24} />
        </button>
      </div>

      {/* Wooden shelf at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none" 
           style={{
             backgroundImage: "url('https://images.unsplash.com/photo-1604413191066-4dd20bedf486?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
             backgroundSize: 'cover',
             backgroundPosition: 'center'
           }}>
        <div className="absolute top-0 left-0 right-0 h-4 bg-[#00000030]"></div>
      </div>
    </section>
  );
};

export default Hero;
