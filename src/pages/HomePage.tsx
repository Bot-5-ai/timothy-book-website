
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, BookMarked, Library, Search, Axe } from 'lucide-react';
import Navbar from '@/components/Navbar';

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Initialize animations after component mount
    setIsLoaded(true);
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });
    
    return () => {
      // Clean up event listeners
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f3f1ed] text-gray-800 font-roboto">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Library background */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
              opacity: 0.85
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
        </div>
        
        {/* Subtle warm overlay */}
        <div className="absolute inset-0 bg-[#a87c50]/10" />
        
        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className={`text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white drop-shadow-lg">
              Literary <span className="text-[#e0c49b]">Analysis</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-serif leading-relaxed">
              Discover profound insights into timeless stories and contemporary narratives
            </p>
            
            <div className="relative max-w-2xl mx-auto mb-12">
              <div className="absolute inset-0 bg-[#a87c50]/20 rounded-lg backdrop-blur-sm -m-1.5 transform rotate-1" />
              <div className="absolute inset-0 bg-[#a87c50]/20 rounded-lg backdrop-blur-sm -m-1.5 transform -rotate-1" />
              <div className="relative p-6 md:p-8 bg-white/90 backdrop-blur-md shadow-xl rounded-lg border border-[#a87c50]/30">
                <p className="text-gray-700 text-lg font-serif italic">
                  "Books are a uniquely portable magic. They transform us, transport us, and reveal the depths of human experience."
                </p>
                <div className="mt-3 text-[#a87c50] font-semibold">
                  — Literary Explorations
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-5">
              <Link to="#featured-books" 
                className="px-8 py-3.5 bg-gradient-to-r from-[#8b5a2b] to-[#a87c50] text-white rounded-md font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center group">
                <BookOpen className="mr-2 h-5 w-5" />
                <span>Explore Books</span>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-md" />
              </Link>
              
              <Link to="/search" 
                className="px-8 py-3.5 border-2 border-white/80 text-white rounded-md font-medium shadow-lg hover:bg-white/20 transition-colors flex items-center">
                <Search className="mr-2 h-5 w-5" />
                <span>Search Collection</span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Reading lamp effect */}
        <div className="absolute top-1/4 right-[10%] w-60 h-60 rounded-full bg-yellow-100/20 blur-3xl opacity-40 animate-pulse-slow pointer-events-none" />
        
        {/* Decorative elements */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce opacity-70">
          <a href="#featured-books" aria-label="Scroll down">
            <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </a>
        </div>
      </section>
      
      {/* Featured Books Section */}
      <section id="featured-books" className="py-20 bg-[#f8f5f0]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-[#5a3825]">
              Featured Literary Analyses
            </h2>
            <div className="w-24 h-1 bg-[#a87c50] mx-auto" />
            <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
              Explore our collection of literary analyses, from classic survival stories to modern technological examinations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* AI Book Card */}
            <Link to="/our-final-invention" 
              className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0f2946] to-[#1a3b5d] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute top-0 right-0 bg-blue-500/80 text-white text-xs uppercase tracking-wider py-1 px-3 rounded-bl-lg">
                Technology
              </div>
              
              <div className="p-6 relative z-10">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4 group-hover:bg-blue-500/20 transition-colors">
                    <BookMarked className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-serif font-bold mb-2 text-[#2a4365] group-hover:text-white transition-colors">
                      Our Final Invention
                    </h3>
                    <p className="text-gray-600 mb-4 group-hover:text-gray-300 transition-colors">
                      James Barrat's analysis of artificial intelligence and its potential impact on humanity's future
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-500 group-hover:text-gray-300 transition-colors mt-6 justify-between">
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                    AI & Technology
                  </span>
                  
                  <span className="text-sm bg-blue-100 py-1 px-3 rounded-full text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                    Read Analysis
                  </span>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
            
            {/* Hatchet Card */}
            <Link to="/hatchet" 
              className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#2c4c3b] to-[#0f1b15] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute top-0 right-0 bg-green-600/80 text-white text-xs uppercase tracking-wider py-1 px-3 rounded-bl-lg">
                Survival
              </div>
              
              <div className="p-6 relative z-10">
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4 group-hover:bg-green-500/20 transition-colors">
                    <Axe className="h-7 w-7 text-green-700 group-hover:text-white transition-colors" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-serif font-bold mb-2 text-[#2c4c3b] group-hover:text-white transition-colors">
                      Hatchet
                    </h3>
                    <p className="text-gray-600 mb-4 group-hover:text-gray-300 transition-colors">
                      Journey through the wilderness with Brian Robeson in Gary Paulsen's gripping survival tale
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-500 group-hover:text-gray-300 transition-colors mt-6 justify-between">
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    Survival & Adventure
                  </span>
                  
                  <span className="text-sm bg-green-100 py-1 px-3 rounded-full text-green-700 group-hover:bg-green-700 group-hover:text-white transition-colors">
                    Read Analysis
                  </span>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2c4c3b] to-[#e9b872] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Library Environment Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Wood texture background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1601054730357-708e870a0da3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')"
            }}
          />
          <div className="absolute inset-0 bg-[#f3f1ed]/80" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6 text-[#5a3825]">
                Immerse Yourself in Literary Analysis
              </h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our digital library offers a sanctuary for the mind, where classic and contemporary works are examined with depth and insight. Each analysis provides a window into the author's intentions, the historical context, and the enduring impact of these literary masterpieces.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "In-depth character and theme exploration",
                  "Historical and cultural context",
                  "Literary devices and techniques",
                  "Author background and influences"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-[#a87c50] flex items-center justify-center text-white mr-3 mt-0.5 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex space-x-4">
                <Link to="/about" 
                  className="px-6 py-3 bg-[#5a3825] text-white rounded-md font-medium shadow-md hover:bg-[#6d4632] transition-colors"
                >
                  About Our Library
                </Link>
                
                <Link to="/contact" 
                  className="px-6 py-3 border border-[#5a3825] text-[#5a3825] rounded-md font-medium shadow-md hover:bg-[#5a3825]/10 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute top-0 left-0 w-full h-full bg-[#a87c50]/10 -rotate-6 rounded-2xl transform -translate-x-4 translate-y-4" />
              
              <div className="relative bg-white p-1 rounded-2xl shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Library with books" 
                  className="w-full h-[400px] object-cover rounded-xl"
                />
                
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-[#a87c50]/20 max-w-[260px]">
                  <div className="flex items-center mb-3">
                    <Library className="h-5 w-5 text-[#a87c50] mr-2" />
                    <h4 className="font-serif font-bold text-[#5a3825]">Our Collection</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Access to detailed analyses of classic and contemporary literature, with new titles added regularly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quote Section with library ambiance */}
      <section className="py-20 bg-[#2a1f18] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-15"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1526243741027-444d633d7365?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')"
            }}
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-6 text-[#e0c49b] opacity-70">
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 2-2.75 3 0 0 1 .5 2 2 0 0 1.73-1.794 2-3 .589.953 1 1.358 1 3 0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
          </svg>
          
          <blockquote className="max-w-3xl mx-auto mb-8">
            <p className="text-2xl md:text-3xl font-serif leading-relaxed text-gray-200 italic">
              A reader lives a thousand lives before he dies. The man who never reads lives only one.
            </p>
          </blockquote>
          
          <div className="text-[#e0c49b] font-serif font-medium">
            — George R.R. Martin
          </div>
          
          <div className="mt-12 inline-block">
            <Link to="/sign-up" 
              className="px-8 py-3 bg-[#e0c49b] text-[#2a1f18] rounded-md font-bold shadow-lg hover:bg-[#d5b989] transition-colors"
            >
              Join Our Literary Community
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-[#f8f5f0] border-t border-[#a87c50]/20 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center">
                <Library className="h-8 w-8 text-[#5a3825] mr-2" />
                <h2 className="text-xl font-serif font-bold text-[#5a3825]">Literary Analysis</h2>
              </div>
              <p className="text-gray-600 mt-2">
                Explore the depth and richness of literature
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center space-x-8">
              <Link to="/" className="text-gray-600 hover:text-[#5a3825] transition-colors">Home</Link>
              <Link to="/our-final-invention" className="text-gray-600 hover:text-[#5a3825] transition-colors">Our Final Invention</Link>
              <Link to="/hatchet" className="text-gray-600 hover:text-[#5a3825] transition-colors">Hatchet</Link>
              <Link to="/about" className="text-gray-600 hover:text-[#5a3825] transition-colors">About</Link>
              <Link to="/contact" className="text-gray-600 hover:text-[#5a3825] transition-colors">Contact</Link>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-[#a87c50]/10 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Literary Analysis. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
