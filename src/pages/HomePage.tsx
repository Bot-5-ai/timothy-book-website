
import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-bookblue-400 via-purple-400 to-pink-300 relative overflow-hidden">
      {/* Decorative floating shapes */}
      <div className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-pink-300/40 blur-3xl animate-pulse-light"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-bookblue-300/30 blur-3xl"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-purple-300/20 blur-3xl animate-float"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-merriweather font-black mb-8 text-white">
            Book Analysis Project
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-white/90">
            Explore detailed analyses of classic and contemporary literature
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {/* First Book Card */}
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-8 shadow-xl border border-white/30 hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-40 mb-6 flex items-center justify-center">
                <Book size={80} className="text-white" />
              </div>
              
              <h2 className="text-2xl font-merriweather font-bold text-white mb-4">
                Our Final Invention
              </h2>
              
              <p className="text-white/80 mb-6">
                Artificial Intelligence and the End of the Human Era
              </p>
              
              <Link to="/our-final-invention">
                <Button 
                  size="lg" 
                  className="w-full bg-white text-bookblue-600 hover:bg-bookblue-50"
                >
                  View Analysis
                </Button>
              </Link>
            </div>
            
            {/* Second Book Card (Template) */}
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-8 shadow-xl border border-white/30 hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-40 mb-6 flex items-center justify-center">
                <Sparkles size={80} className="text-white" />
              </div>
              
              <h2 className="text-2xl font-merriweather font-bold text-white mb-4">
                Second Book Analysis
              </h2>
              
              <p className="text-white/80 mb-6">
                Template for your second book analysis project
              </p>
              
              <Link to="/second-book">
                <Button 
                  size="lg" 
                  className="w-full bg-white text-purple-600 hover:bg-purple-50"
                >
                  View Analysis
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="mt-20 text-white/70">
            <p className="text-sm">
              English Class Project &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
