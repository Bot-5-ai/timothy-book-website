
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { Book, BookOpen, X, Menu, Github, Bookmark, BookCopy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Campfire from '@/components/icons/Campfire';

const HomePage = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Load CDN resources
    const fontAwesome = document.createElement('link');
    fontAwesome.rel = 'stylesheet';
    fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css';
    document.head.appendChild(fontAwesome);
    
    const animateCSS = document.createElement('link');
    animateCSS.rel = 'stylesheet';
    animateCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';
    document.head.appendChild(animateCSS);

    const googleFonts = document.createElement('link');
    googleFonts.rel = 'stylesheet';
    googleFonts.href = 'https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Crimson+Text:wght@400;600&display=swap';
    document.head.appendChild(googleFonts);

    // Initialize animations
    if (typeof window.AOS !== 'undefined') {
      window.AOS.init({
        duration: 800,
        once: false,
        mirror: true,
        easing: 'ease-out-cubic'
      });
    }

    // Add parallax effect to hero section
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroSection = document.getElementById('hero-parallax');
      if (heroSection) {
        heroSection.style.backgroundPositionY = `${scrollPosition * 0.4}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f5f0] text-[#3a2e21] font-crimson">
      {/* Hero Section */}
      <section 
        id="hero-parallax" 
        className="relative h-screen bg-cover bg-center flex items-center justify-center overflow-hidden transition-all duration-1000"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/60 transition-opacity duration-500"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80"></div>
        
        {/* Floating book elements */}
        <div className="absolute top-20 left-[10%] animate-float opacity-70 hidden md:block">
          <Book className="h-12 w-12 text-white/80 transition-transform duration-300 hover:scale-110" />
        </div>
        <div className="absolute bottom-40 right-[15%] animate-float-delayed opacity-70 hidden md:block">
          <BookOpen className="h-16 w-16 text-white/80 transition-transform duration-300 hover:scale-110" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4 animate__animated animate__fadeIn font-merriweather">
            Immerse Yourself <br />in Literary Worlds
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 animate__animated animate__fadeIn animate__delay-1s">
            Explore thought-provoking books that challenge perspectives and inspire growth
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 animate__animated animate__fadeInUp animate__delay-2s">
            <Link to="/hatchet">
              <Button size="lg" className="bg-[#3a2e21] hover:bg-[#5c4a36] text-white font-medium flex items-center gap-2 group shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <Campfire className="h-5 w-5 text-amber-400 group-hover:text-amber-300 transition-colors" />
                Explore Hatchet
              </Button>
            </Link>
            
            <Link to="/our-final-invention">
              <Button size="lg" variant="outline" className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-950/30 hover:text-cyan-300 flex items-center gap-2 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <BookCopy className="h-5 w-5" />
                Explore AI Book
              </Button>
            </Link>
            
            <Link to="/about-me">
              <Button size="lg" variant="outline" className="border-2 border-purple-500 text-purple-400 hover:bg-purple-950/30 hover:text-purple-300 flex items-center gap-2 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <Bookmark className="h-5 w-5" />
                About Me
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Subtle wood grain overlay for texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-30 mix-blend-overlay pointer-events-none"></div>
      </section>

      {/* Featured Books Section */}
      <section className="py-20 bg-[url('https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-fixed relative">
        <div className="absolute inset-0 bg-[#3a2e21]/80"></div>
        <div className="relative container mx-auto px-6 z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 font-merriweather">
              Featured Books
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto transition-all duration-300"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Featured Book 1: Hatchet */}
            <Link to="/hatchet" className="block">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl border border-white/20 group transition-all duration-300 hover:shadow-2xl hover:border-white/40 hover:scale-105 cursor-pointer" data-aos="fade-right">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
                    alt="Forest representing Hatchet's setting" 
                    className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center font-merriweather">
                      <Campfire className="h-6 w-6 text-amber-500 mr-2" />
                      Hatchet
                    </h3>
                    <p className="text-gray-300 text-sm">By Gary Paulsen</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4 transition-colors duration-200 group-hover:text-white">
                    A gripping tale of survival in the Canadian wilderness after a plane crash leaves thirteen-year-old Brian Robeson alone with only a hatchet.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-1">
                      <span className="text-amber-500 transition-transform duration-200 group-hover:scale-110">★</span>
                      <span className="text-amber-500 transition-transform duration-200 group-hover:scale-110">★</span>
                      <span className="text-amber-500 transition-transform duration-200 group-hover:scale-110">★</span>
                      <span className="text-amber-500 transition-transform duration-200 group-hover:scale-110">★</span>
                      <span className="text-amber-500 transition-transform duration-200 group-hover:scale-110">★</span>
                    </div>
                    <div className="bg-amber-700 text-white px-4 py-2 rounded-md shadow-lg transition-all duration-300 group-hover:bg-amber-600 group-hover:scale-105">
                      Explore Book
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            
            {/* Featured Book 2: Our Final Invention */}
            <Link to="/our-final-invention" className="block">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl border border-white/20 group transition-all duration-300 hover:shadow-2xl hover:border-white/40 hover:scale-105 cursor-pointer" data-aos="fade-left">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
                    alt="AI concept" 
                    className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2 font-merriweather">Our Final Invention</h3>
                    <p className="text-gray-300 text-sm">By James Barrat</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4 transition-colors duration-200 group-hover:text-white">
                    An exploration of artificial intelligence and the existential risks it may pose to humanity in the near future.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-1">
                      <span className="text-cyan-500 transition-transform duration-200 group-hover:scale-110">★</span>
                      <span className="text-cyan-500 transition-transform duration-200 group-hover:scale-110">★</span>
                      <span className="text-cyan-500 transition-transform duration-200 group-hover:scale-110">★</span>
                      <span className="text-cyan-500 transition-transform duration-200 group-hover:scale-110">★</span>
                      <span className="text-gray-500 transition-transform duration-200 group-hover:scale-110">★</span>
                    </div>
                    <div className="bg-cyan-700 text-white px-4 py-2 rounded-md shadow-lg transition-all duration-300 group-hover:bg-cyan-600 group-hover:scale-105">
                      Explore Book
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Library Atmosphere */}
      <section className="py-20 bg-[#f8f5f0]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-serif font-bold mb-4 text-[#3a2e21] font-merriweather">Our Reading Sanctuary</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto transition-all duration-300"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105" data-aos="fade-up" data-aos-delay="100">
              <img 
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Cozy library atmosphere" 
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-serif font-bold mb-2 text-[#3a2e21] font-merriweather">Comfortable Reading Spaces</h3>
                <p className="text-gray-600">
                  Immerse yourself in our carefully designed reading areas with natural lighting and comfortable seating.
                </p>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105" data-aos="fade-up" data-aos-delay="200">
              <img 
                src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Book collection" 
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-serif font-bold mb-2 text-[#3a2e21] font-merriweather">Curated Collection</h3>
                <p className="text-gray-600">
                  Our collection features thought-provoking works that challenge perspectives and inspire growth.
                </p>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105" data-aos="fade-up" data-aos-delay="300">
              <img 
                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Reading lamp" 
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-serif font-bold mb-2 text-[#3a2e21] font-merriweather">Ambient Atmosphere</h3>
                <p className="text-gray-600">
                  The perfect ambiance with warm lighting, subtle background music, and the comforting scent of old books.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-[#3a2e21] text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center">
                <Book className="h-6 w-6 text-amber-400 mr-2" />
                <h3 className="text-xl font-serif font-bold font-merriweather">Literary Explorations</h3>
              </div>
              <p className="text-gray-400 mt-2 text-sm">
                A sanctuary for book lovers
              </p>
            </div>
            
            <div className="flex space-x-6 mb-6 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-all duration-200 hover:scale-110">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-all duration-200 hover:scale-110">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-all duration-200 hover:scale-110">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-all duration-200 hover:scale-110">
                <i className="fab fa-goodreads-g"></i>
              </a>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2025 Literary Explorations
              </p>
              <p className="text-gray-500 text-xs mt-1">
                All rights reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
