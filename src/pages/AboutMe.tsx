
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, User, Github, Linkedin, Mail, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutMe = () => {
  useEffect(() => {
    // Initialize animations
    if (typeof window.AOS !== 'undefined') {
      window.AOS.init({
        duration: 1000,
        once: false
      });
    }

    // Create twinkling stars effect
    const createStars = () => {
      const starsContainer = document.getElementById('stars-container');
      if (starsContainer) {
        for (let i = 0; i < 200; i++) {
          const star = document.createElement('div');
          star.className = 'absolute rounded-full bg-white';
          
          // Random size
          const size = Math.random() * 3;
          star.style.width = `${size}px`;
          star.style.height = `${size}px`;
          
          // Random position
          star.style.left = `${Math.random() * 100}%`;
          star.style.top = `${Math.random() * 100}%`;
          
          // Random opacity and animation
          star.style.opacity = `${Math.random()}`;
          star.style.animation = `twinkle ${3 + Math.random() * 7}s linear infinite`;
          star.style.animationDelay = `${Math.random() * 5}s`;
          
          starsContainer.appendChild(star);
        }
      }
    };

    createStars();
    
    // Add parallax effect for space elements
    const handleMouseMove = (e) => {
      const spaceElements = document.querySelectorAll('.space-element');
      spaceElements.forEach((element) => {
        const speed = element.getAttribute('data-speed');
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        
        element.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a20] text-white font-sans overflow-hidden relative">
      {/* Stars background */}
      <div id="stars-container" className="fixed inset-0 z-0"></div>
      
      {/* Space nebula background effect */}
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20 z-0"></div>
      
      {/* Back button */}
      <div className="absolute top-4 left-4 z-50">
        <Link to="/">
          <Button variant="outline" size="sm" className="bg-white/10 text-white border-purple-500/30 hover:bg-purple-900/40 backdrop-blur-md">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>
      </div>
      
      {/* Floating space elements */}
      <div className="space-element pointer-events-none absolute top-[15%] left-[10%] opacity-60" data-speed="2">
        <Star className="h-20 w-20 text-yellow-300" />
      </div>
      <div className="space-element pointer-events-none absolute bottom-[20%] right-[15%] opacity-40" data-speed="4">
        <img 
          src="https://www.freepnglogos.com/uploads/planet-png/planet-png-transparent-images-png-only-19.png" 
          alt="Planet" 
          className="h-40 w-40"
        />
      </div>
      <div className="space-element pointer-events-none absolute top-[60%] left-[20%] opacity-30" data-speed="3">
        <img 
          src="https://www.freepnglogos.com/uploads/moon-png/moon-png-no-background-moon-19.png" 
          alt="Moon" 
          className="h-24 w-24"
        />
      </div>
      
      {/* Content */}
      <main className="relative z-10 container mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center mb-12" data-aos="fade-down">
          <div className="w-32 h-32 rounded-full border-4 border-purple-500 overflow-hidden mb-6">
            <img 
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
              alt="Profile Placeholder" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
            About Me
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            This is a template for the About Me page. Replace this content with your personal information.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* About Section */}
          <div className="bg-white/5 backdrop-blur-md rounded-lg border border-purple-500/20 p-8 mb-8 shadow-lg shadow-purple-500/10" data-aos="fade-up">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <User className="mr-3 h-6 w-6 text-purple-400" />
              Personal Information
            </h2>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-6"></div>
            <p className="text-gray-300 mb-4">
              Hello! I'm [Your Name], a passionate [Your Profession/Interest] with a deep love for books and literature. I created this website to share my thoughts and analyses of some of my favorite books.
            </p>
            <p className="text-gray-300">
              I believe that books have the power to transform our understanding of the world and ourselves. Through this platform, I hope to inspire others to discover the joy of reading and the worlds that await within the pages of a good book.
            </p>
          </div>
          
          {/* Interests Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/5 backdrop-blur-md rounded-lg border border-blue-500/20 p-8 shadow-lg shadow-blue-500/10" data-aos="fade-right">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">My Literary Interests</h2>
              <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mb-6"></div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-2">
                    <span className="text-blue-400">•</span>
                  </div>
                  <span>Survival Literature</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-2">
                    <span className="text-blue-400">•</span>
                  </div>
                  <span>Science Fiction</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-2">
                    <span className="text-blue-400">•</span>
                  </div>
                  <span>Classic Literature</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-2">
                    <span className="text-blue-400">•</span>
                  </div>
                  <span>Philosophy</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md rounded-lg border border-pink-500/20 p-8 shadow-lg shadow-pink-500/10" data-aos="fade-left">
              <h2 className="text-2xl font-bold mb-4 text-pink-400">Education & Background</h2>
              <div className="w-full h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent mb-6"></div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-pink-500/20 flex items-center justify-center mr-2">
                    <span className="text-pink-400">•</span>
                  </div>
                  <span>BA in English Literature, University of [Your University]</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-pink-500/20 flex items-center justify-center mr-2">
                    <span className="text-pink-400">•</span>
                  </div>
                  <span>Certificate in Creative Writing</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-pink-500/20 flex items-center justify-center mr-2">
                    <span className="text-pink-400">•</span>
                  </div>
                  <span>Book Club Organizer</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-pink-500/20 flex items-center justify-center mr-2">
                    <span className="text-pink-400">•</span>
                  </div>
                  <span>Literary Blog Writer</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Contact Section */}
          <div className="bg-white/5 backdrop-blur-md rounded-lg border border-green-500/20 p-8 shadow-lg shadow-green-500/10" data-aos="fade-up">
            <h2 className="text-2xl font-bold mb-4 text-green-400">Connect With Me</h2>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent mb-6"></div>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/10">
                <Github className="h-5 w-5 text-white" />
                <span>GitHub</span>
              </a>
              <a href="#" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/10">
                <Linkedin className="h-5 w-5 text-white" />
                <span>LinkedIn</span>
              </a>
              <a href="#" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/10">
                <Mail className="h-5 w-5 text-white" />
                <span>Email Me</span>
              </a>
            </div>
          </div>
        </div>
      </main>
      
      {/* CSS for star animation */}
      <style jsx>{`
        @keyframes twinkle {
          0% { opacity: 0.2; }
          50% { opacity: 1; }
          100% { opacity: 0.2; }
        }
      `}</style>
    </div>
  );
};

export default AboutMe;
