
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutMe = () => {
  const [stars, setStars] = useState<{ id: number; x: number; y: number; size: number; opacity: number; speed: number }[]>([]);
  
  useEffect(() => {
    // Generate stars for the space background
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.05 + 0.01
        });
      }
      setStars(newStars);
    };
    
    generateStars();
    
    // Initialize animations
    if (typeof window.AOS !== 'undefined') {
      window.AOS.init({
        duration: 1000,
        once: false
      });
    }
  }, []);
  
  return (
    <div className="min-h-screen bg-[#070b24] text-gray-100 font-roboto relative overflow-hidden">
      {/* Stars background */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity
            }}
          />
        ))}
        
        {/* Nebula effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      </div>
      
      {/* Navigation */}
      <header className="py-4 px-6 bg-[#040613]/80 border-b border-indigo-900/30 sticky top-0 z-50 backdrop-blur-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 mr-3 text-indigo-400">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
              <path d="M2 12h20"></path>
            </svg>
            <h1 className="text-indigo-300 text-2xl font-bold">About Me</h1>
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-300 hover:text-indigo-300 transition-colors">Home</Link>
            <Link to="/hatchet" className="text-gray-300 hover:text-indigo-300 transition-colors">Hatchet</Link>
            <Link to="/our-final-invention" className="text-gray-300 hover:text-indigo-300 transition-colors">AI Book</Link>
            <Link to="/about-me" className="text-indigo-300 transition-colors">About Me</Link>
          </nav>
          
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-indigo-300">
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </header>
      
      {/* Back to Home button */}
      <div className="fixed bottom-4 left-4 z-40">
        <Link to="/">
          <Button variant="outline" size="sm" className="bg-black/30 text-indigo-300 border-indigo-500/30 hover:bg-indigo-900/40 backdrop-blur-md">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back Home
          </Button>
        </Link>
      </div>
      
      {/* Main Content - Space Theme */}
      <main className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mx-auto mb-6 p-1">
              <div className="w-full h-full bg-[#070b24] rounded-full flex items-center justify-center">
                <span className="text-4xl">👨‍🚀</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">About Me</h1>
            <p className="text-xl text-indigo-200/80">
              Space enthusiast and literary explorer
            </p>
          </div>
          
          {/* About Section */}
          <div className="bg-[#0c1333]/70 backdrop-blur-md border border-indigo-900/30 rounded-xl p-8 shadow-xl mb-12" data-aos="fade-up">
            <h2 className="text-2xl font-bold mb-6 text-indigo-300 flex items-center">
              <i className="fas fa-user-astronaut mr-3"></i>
              Personal Information
            </h2>
            
            <p className="text-gray-300 mb-6">
              Hello there! This is a placeholder for your personal information. You can customize this section with details about yourself, your interests, and your background.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-indigo-200">Interests</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <i className="fas fa-book-open text-purple-400 mr-3"></i>
                    <span>Reading science fiction and fantasy</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-meteor text-purple-400 mr-3"></i>
                    <span>Astronomy and space exploration</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-hiking text-purple-400 mr-3"></i>
                    <span>Hiking and outdoor adventures</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-gamepad text-purple-400 mr-3"></i>
                    <span>Gaming and interactive storytelling</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-indigo-200">Education</h3>
                <ul className="space-y-4 text-gray-300">
                  <li>
                    <div className="flex items-center text-purple-300 mb-1">
                      <i className="fas fa-graduation-cap mr-2"></i>
                      <span className="font-bold">Bachelor's Degree</span>
                    </div>
                    <p>Literature & Space Sciences, University Name</p>
                    <p className="text-sm text-indigo-400">2018 - 2022</p>
                  </li>
                  <li>
                    <div className="flex items-center text-purple-300 mb-1">
                      <i className="fas fa-certificate mr-2"></i>
                      <span className="font-bold">Certification</span>
                    </div>
                    <p>Advanced Space Programming, Institute Name</p>
                    <p className="text-sm text-indigo-400">2022</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* More Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#0c1333]/70 backdrop-blur-md border border-indigo-900/30 rounded-xl p-8 shadow-xl" data-aos="fade-up" data-aos-delay="100">
              <h2 className="text-2xl font-bold mb-6 text-indigo-300 flex items-center">
                <i className="fas fa-rocket mr-3"></i>
                Projects
              </h2>
              
              <ul className="space-y-4">
                <li>
                  <h3 className="text-xl font-bold text-purple-300">Literary Analysis Blog</h3>
                  <p className="text-gray-300 mt-2">
                    A blog focusing on in-depth analysis of classic and contemporary literature with a special focus on wilderness survival narratives.
                  </p>
                </li>
                <li>
                  <h3 className="text-xl font-bold text-purple-300">Space Exploration Timeline</h3>
                  <p className="text-gray-300 mt-2">
                    An interactive timeline chronicling major events in human space exploration from Sputnik to modern commercial spaceflight.
                  </p>
                </li>
              </ul>
            </div>
            
            <div className="bg-[#0c1333]/70 backdrop-blur-md border border-indigo-900/30 rounded-xl p-8 shadow-xl" data-aos="fade-up" data-aos-delay="200">
              <h2 className="text-2xl font-bold mb-6 text-indigo-300 flex items-center">
                <i className="fas fa-star mr-3"></i>
                Favorite Books
              </h2>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-900/40 rounded-lg mr-4 flex items-center justify-center">
                    <i className="fas fa-book text-indigo-300"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-purple-300">Hatchet</h3>
                    <p className="text-gray-400">Gary Paulsen</p>
                    <div className="flex text-yellow-300 text-sm mt-1">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-900/40 rounded-lg mr-4 flex items-center justify-center">
                    <i className="fas fa-book text-indigo-300"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-purple-300">Dune</h3>
                    <p className="text-gray-400">Frank Herbert</p>
                    <div className="flex text-yellow-300 text-sm mt-1">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Contact Section */}
          <div className="bg-[#0c1333]/70 backdrop-blur-md border border-indigo-900/30 rounded-xl p-8 shadow-xl" data-aos="fade-up">
            <h2 className="text-2xl font-bold mb-6 text-indigo-300 flex items-center">
              <i className="fas fa-paper-plane mr-3"></i>
              Contact Me
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-300">
                Feel free to reach out through any of these platforms:
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#" className="flex items-center px-4 py-2 bg-indigo-900/50 hover:bg-indigo-800/70 text-indigo-200 rounded-lg transition-colors shadow-md">
                  <i className="fab fa-twitter mr-2"></i>
                  Twitter
                </a>
                <a href="#" className="flex items-center px-4 py-2 bg-indigo-900/50 hover:bg-indigo-800/70 text-indigo-200 rounded-lg transition-colors shadow-md">
                  <i className="fab fa-linkedin-in mr-2"></i>
                  LinkedIn
                </a>
                <a href="#" className="flex items-center px-4 py-2 bg-indigo-900/50 hover:bg-indigo-800/70 text-indigo-200 rounded-lg transition-colors shadow-md">
                  <i className="fab fa-github mr-2"></i>
                  GitHub
                </a>
                <a href="mailto:example@email.com" className="flex items-center px-4 py-2 bg-indigo-900/50 hover:bg-indigo-800/70 text-indigo-200 rounded-lg transition-colors shadow-md">
                  <i className="fas fa-envelope mr-2"></i>
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-[#040613]/90 border-t border-indigo-900/30 py-8 relative z-10 mt-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-indigo-200 text-sm">
                © 2025 My Space Journey
              </p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style>
        {`
        @keyframes twinkle {
          0% { opacity: 0.2; }
          50% { opacity: 0.8; }
          100% { opacity: 0.2; }
        }
        
        .star {
          animation: twinkle 3s infinite ease-in-out;
        }
        `}
      </style>
    </div>
  );
};

export default AboutMe;
