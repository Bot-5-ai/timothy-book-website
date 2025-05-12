import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-12 animate__animated animate__fadeIn">
          Book Analysis
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* AI Book Card */}
          <Link to="/our-final-invention" 
            className="group relative overflow-hidden rounded-lg border border-gray-800 bg-gradient-to-br from-gray-800 to-gray-900 hover:from-blue-900/30 hover:to-cyan-900/30 transition-all duration-300 animate__animated animate__fadeInLeft"
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-cyan-400 group-hover:text-cyan-300">Our Final Invention</h2>
              <p className="text-gray-400 mb-4">
                Explore James Barrat's analysis of artificial intelligence and its potential impact on humanity's future.
              </p>
              <div className="flex items-center text-gray-500">
                <i className="fas fa-microchip mr-2"></i>
                <span>AI & Technology</span>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </Link>
          
          {/* Hatchet Card */}
          <Link to="/hatchet" 
            className="group relative overflow-hidden rounded-lg border border-gray-800 bg-gradient-to-br from-gray-800 to-gray-900 hover:from-[#2c4c3b]/30 hover:to-[#0f1b15]/70 transition-all duration-300 animate__animated animate__fadeInRight"
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-[#e9b872] group-hover:text-[#e9b872]">Hatchet</h2>
              <p className="text-gray-400 mb-4">
                Journey through the wilderness with Brian Robeson in Gary Paulsen's gripping survival tale.
              </p>
              <div className="flex items-center text-gray-500">
                <i className="fas fa-tree mr-2"></i>
                <span>Survival & Adventure</span>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2c4c3b] to-[#e9b872] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </Link>
        </div>
        
        <div className="text-center mt-16 text-gray-400">
          <p className="animate__animated animate__fadeIn animate__delay-1s">
            Select a book to view its detailed literary analysis
          </p>
        </div>
      </div>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          .animate-float-delayed {
            animation: float 8s ease-in-out infinite;
          }
          
          @keyframes pulse-light {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
          }
          
          .animate-pulse-light {
            animation: pulse-light 3s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default HomePage;
