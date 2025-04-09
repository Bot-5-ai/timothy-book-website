
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const SecondBook = () => {
  useEffect(() => {
    // Initialize AOS
    if (typeof window.AOS !== 'undefined') {
      window.AOS.init({
        duration: 1000,
        once: false
      });
    }

    // Parchment effect
    if (typeof window.parchment !== 'undefined') {
      document.querySelectorAll('.parchment').forEach((el) => {
        window.parchment.init(el);
      });
    }

    // Initialize GSAP animations
    if (typeof window.gsap !== 'undefined') {
      window.gsap.from(".hero-text", { 
        duration: 1.5, 
        y: 100, 
        opacity: 0, 
        stagger: 0.25,
        ease: "power3.out"
      });

      window.gsap.from(".dragon-image", { 
        duration: 2, 
        scale: 0.5, 
        opacity: 0, 
        rotation: 10,
        ease: "back.out(1.7)"
      });

      // Animate the dragon flight across the screen
      window.gsap.to(".flying-dragon", {
        x: window.innerWidth + 300, 
        duration: 20, 
        repeat: -1,
        ease: "none",
        yoyo: false,
      });
    }

    // Add torch flicker effect
    const torches = document.querySelectorAll('.torch');
    torches.forEach((torch) => {
      if (torch instanceof HTMLElement) {
        torch.style.animation = `torch-flicker ${3 + Math.random() * 2}s ease-in-out infinite`;
      }
    });
    
    // Add floating clouds
    const clouds = document.querySelectorAll('.cloud');
    clouds.forEach((cloud, index) => {
      if (cloud instanceof HTMLElement) {
        cloud.style.animation = `float ${10 + index * 5}s ease-in-out infinite`;
      }
    });

    // Initialize calendar for medieval date picking
    const calendar = document.getElementById('medieval-calendar');
    if (calendar) {
      calendar.addEventListener('click', () => {
        alert('The year is 1257, Month of Harvests, 3rd Sunday after the Feast of Saint Crispin');
      });
    }
    
    // Castle gate open/close animation
    const castleGate = document.getElementById('castle-gate');
    if (castleGate) {
      castleGate.addEventListener('click', () => {
        castleGate.classList.toggle('gate-open');
        const isOpen = castleGate.classList.contains('gate-open');
        const gateStatusText = document.getElementById('gate-status-text');
        if (gateStatusText) {
          gateStatusText.textContent = isOpen ? 'Castle Gate Open' : 'Castle Gate Closed';
        }
      });
    }
    
    // Initialize ScrollReveal if available
    if (typeof window.ScrollReveal !== 'undefined') {
      window.ScrollReveal().reveal('.scroll-reveal', { 
        delay: 300,
        distance: '50px',
        duration: 1000,
        origin: 'bottom',
        easing: 'ease-in-out'
      });
    }
    
    return () => {
      // Clean up event listeners if needed
      const calendar = document.getElementById('medieval-calendar');
      if (calendar) {
        calendar.removeEventListener('click', () => {});
      }
      
      const castleGate = document.getElementById('castle-gate');
      if (castleGate) {
        castleGate.removeEventListener('click', () => {});
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-medieval-dark text-medieval-light font-medieval">
      {/* Navigation */}
      <header className="py-4 px-6 bg-medieval-dark-alt border-b border-medieval-gold/30">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src="https://img.icons8.com/glyph-neue/64/d4af37/castle.png" alt="Medieval Logo" className="h-10 w-10 mr-3" />
            <h1 className="text-medieval-gold text-2xl font-bold">Medieval Chronicles</h1>
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="hvr-underline-from-center text-medieval-light hover:text-medieval-gold transition-colors">Home</Link>
            <Link to="/second-book" className="hvr-underline-from-center text-medieval-gold transition-colors">Knights & Dragons</Link>
            <Link to="/our-final-invention" className="hvr-underline-from-center text-medieval-light hover:text-medieval-gold transition-colors">AI Book</Link>
          </nav>
          
          <div className="md:hidden">
            <button className="text-medieval-light hover:text-medieval-gold">
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-[url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container mx-auto px-6 text-center z-10">
          <div className="mb-6 inline-block animate__animated animate__fadeIn">
            <i className="fas fa-dragon text-4xl text-medieval-gold animate-pulse-light"></i>
          </div>
          <h1 className="hero-text text-4xl md:text-6xl font-cinzel font-bold mb-6 medieval-text-shadow">
            The Age of <span className="text-medieval-gold">Dragons</span> & <span className="text-medieval-gold">Knights</span>
          </h1>
          <p className="hero-text text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-gray-300">
            An epic tale of bravery, honor, and the eternal struggle between man and mythical beast
          </p>
          <div className="hero-text flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-medieval-red text-white rounded-sm font-bold hover:bg-red-800 transition-colors shadow-lg flex items-center">
              <i className="fas fa-book-open mr-2"></i> Read the Chronicle
            </button>
            <button className="px-6 py-3 border-2 border-medieval-gold text-medieval-gold rounded-sm font-bold hover:bg-medieval-gold/20 transition-colors shadow-lg flex items-center">
              <i className="fas fa-map-marked-alt mr-2"></i> Explore the Realm
            </button>
          </div>
          
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
            <i className="fas fa-chevron-down text-medieval-gold text-3xl"></i>
          </div>
        </div>
        
        {/* Flying dragon animation */}
        <div className="absolute top-20 left-0 flying-dragon pointer-events-none">
          <img src="https://www.freepnglogos.com/uploads/dragon-png/dragon-png-transparent-images-download-clip-14.png" alt="Flying Dragon" className="w-40 md:w-64" />
        </div>
        
        {/* Decorative elements */}
        <div className="hidden md:block absolute top-10 left-10 torch animate-torch-flicker">
          <i className="fas fa-fire text-orange-500 text-3xl"></i>
        </div>
        <div className="hidden md:block absolute top-10 right-10 torch animate-torch-flicker">
          <i className="fas fa-fire text-orange-500 text-3xl"></i>
        </div>
      </section>
      
      {/* Book Description */}
      <section className="py-16 bg-medieval-dark-alt">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2" data-aos="fade-right">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Medieval Book" 
                  className="rounded-lg shadow-xl border-4 border-medieval-gold/30 dragon-image"
                />
                <div className="absolute -bottom-5 -right-5 bg-medieval-gold/90 rounded-full p-3 shadow-xl">
                  <i className="fas fa-award text-medieval-dark text-3xl"></i>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2" data-aos="fade-left">
              <div className="parchment-texture p-8 rounded-lg">
                <h2 className="text-3xl font-cinzel font-bold text-medieval-dark mb-4 flex items-center">
                  <i className="fas fa-quill text-medieval-red mr-3"></i>
                  The Chronicle of Scales and Steel
                </h2>
                <div className="medieval-divider"></div>
                <p className="text-medieval-dark mb-4">
                  In the ancient kingdom of Valorheim, dragons and knights have engaged in an age-old conflict that has shaped the destiny of the realm. This chronicle documents the epic battles, valiant heroes, and fearsome dragons that have defined this legendary era.
                </p>
                <p className="text-medieval-dark mb-6">
                  Written by the court historian Sir Gideon of Westmark, this volume contains detailed accounts of the most famous dragon-slayers and their conquests, as well as the lineages of the noble dragon families that ruled the mountains and skies.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <i className="fas fa-calendar-alt text-medieval-red mr-2"></i>
                    <span className="text-medieval-dark">Year Published: 1257</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-scroll text-medieval-red mr-2"></i>
                    <span className="text-medieval-dark">Pages: 842</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-language text-medieval-red mr-2"></i>
                    <span className="text-medieval-dark">Language: Old English</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-university text-medieval-red mr-2"></i>
                    <span className="text-medieval-dark">Kingdom: Valorheim</span>
                  </div>
                </div>
                
                <button className="px-6 py-3 bg-medieval-red text-white rounded-sm font-bold hover:bg-red-800 transition-colors shadow-lg flex items-center mx-auto">
                  <i className="fas fa-book mr-2"></i> Read Sample Chapter
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Characters */}
      <section className="py-16 bg-[url('https://images.unsplash.com/photo-1553615738-d8e4d1c23bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')] bg-fixed bg-cover bg-center">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative container mx-auto px-6 z-10">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-cinzel font-bold mb-4 medieval-text-shadow">
              Key Characters
            </h2>
            <div className="w-24 h-1 bg-medieval-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Knight Character */}
            <div className="bg-medieval-dark-alt/90 border border-medieval-gold/30 rounded-lg overflow-hidden shadow-xl scroll-reveal" data-aos="fade-up" data-aos-delay="100">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1589656966895-2f33e7653819?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Sir Galahad the Dragonslayer" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-cinzel font-bold mb-2 text-medieval-gold">Sir Galahad the Dragonslayer</h3>
                <p className="text-sm text-gray-300 mb-4">
                  The most renowned knight of the realm, Sir Galahad has slain seventeen dragons and saved countless villages from fiery destruction.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <i className="fas fa-shield-alt text-medieval-red mr-2"></i>
                    <span className="text-sm">Knight of Valorheim</span>
                  </div>
                  <button className="text-medieval-gold hover:text-medieval-light">
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Dragon Character */}
            <div className="bg-medieval-dark-alt/90 border border-medieval-gold/30 rounded-lg overflow-hidden shadow-xl scroll-reveal" data-aos="fade-up" data-aos-delay="200">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1577493340887-b7bfff550145?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Fyretalon the Ancient" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-cinzel font-bold mb-2 text-medieval-gold">Fyretalon the Ancient</h3>
                <p className="text-sm text-gray-300 mb-4">
                  The eldest and most fearsome dragon in the Mistpeak Mountains, Fyretalon guards a hoard of treasure accumulated over five centuries.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <i className="fas fa-dragon text-medieval-red mr-2"></i>
                    <span className="text-sm">Elder Dragon</span>
                  </div>
                  <button className="text-medieval-gold hover:text-medieval-light">
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Princess Character */}
            <div className="bg-medieval-dark-alt/90 border border-medieval-gold/30 rounded-lg overflow-hidden shadow-xl scroll-reveal" data-aos="fade-up" data-aos-delay="300">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Princess Elyndra" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-cinzel font-bold mb-2 text-medieval-gold">Princess Elyndra</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Far from a damsel in distress, Princess Elyndra is a skilled diplomat who brokered the first peace treaty between knights and dragonkind.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <i className="fas fa-crown text-medieval-red mr-2"></i>
                    <span className="text-sm">Royal Diplomat</span>
                  </div>
                  <button className="text-medieval-gold hover:text-medieval-light">
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Interactive Castle Section */}
      <section className="py-16 bg-medieval-dark-alt castle-silhouette">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-cinzel font-bold mb-4 medieval-text-shadow">
              The Interactive Castle
            </h2>
            <div className="w-24 h-1 bg-medieval-gold mx-auto"></div>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Explore the royal castle of Valorheim and discover the secrets hidden within its ancient walls.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-medieval-dark border border-medieval-gold/30 rounded-lg p-6" data-aos="fade-right">
              <h3 className="text-xl font-cinzel font-bold mb-4 text-medieval-gold flex items-center">
                <i className="fas fa-chess-rook mr-3"></i> Castle Features
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <button className="w-12 h-12 rounded-full bg-medieval-gold/20 flex items-center justify-center mr-4">
                    <i className="fas fa-dungeon text-medieval-gold text-xl"></i>
                  </button>
                  <div>
                    <h4 className="font-cinzel font-medium text-white">Royal Throne Room</h4>
                    <p className="text-sm text-gray-400">Where the king holds court and makes royal proclamations</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <button className="w-12 h-12 rounded-full bg-medieval-gold/20 flex items-center justify-center mr-4">
                    <i className="fas fa-book text-medieval-gold text-xl"></i>
                  </button>
                  <div>
                    <h4 className="font-cinzel font-medium text-white">Ancient Library</h4>
                    <p className="text-sm text-gray-400">Contains scrolls documenting the history of dragons</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <button className="w-12 h-12 rounded-full bg-medieval-gold/20 flex items-center justify-center mr-4">
                    <i className="fas fa-shield-alt text-medieval-gold text-xl"></i>
                  </button>
                  <div>
                    <h4 className="font-cinzel font-medium text-white">Armory</h4>
                    <p className="text-sm text-gray-400">Where knights prepare for battle with enchanted weapons</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <button className="w-12 h-12 rounded-full bg-medieval-gold/20 flex items-center justify-center mr-4" id="castle-gate">
                    <i className="fas fa-door-open text-medieval-gold text-xl"></i>
                  </button>
                  <div>
                    <h4 className="font-cinzel font-medium text-white">Castle Gate</h4>
                    <p className="text-sm text-gray-400" id="gate-status-text">Click to open or close the castle gate</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <button className="w-12 h-12 rounded-full bg-medieval-gold/20 flex items-center justify-center mr-4" id="medieval-calendar">
                    <i className="fas fa-calendar-alt text-medieval-gold text-xl"></i>
                  </button>
                  <div>
                    <h4 className="font-cinzel font-medium text-white">Royal Calendar</h4>
                    <p className="text-sm text-gray-400">Click to see today's medieval date</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div data-aos="fade-left">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1579025246803-189be6d2b2bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Valorheim Castle" 
                  className="rounded-lg shadow-xl border-4 border-medieval-gold/30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <button className="px-4 py-2 bg-medieval-red text-white rounded-sm text-sm font-bold hover:bg-red-800 transition-colors shadow-lg">
                    Virtual Tour
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mt-4">
                <img 
                  src="https://images.unsplash.com/photo-1584813539806-2538b621b5b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                  alt="Castle Interior" 
                  className="h-24 object-cover rounded-lg border-2 border-medieval-gold/30 cursor-pointer hover:border-medieval-gold transition-colors"
                />
                <img 
                  src="https://images.unsplash.com/photo-1597767411735-c3a37003cf24?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                  alt="Castle Throne Room" 
                  className="h-24 object-cover rounded-lg border-2 border-medieval-gold/30 cursor-pointer hover:border-medieval-gold transition-colors"
                />
                <img 
                  src="https://images.unsplash.com/photo-1584813539542-5c29an4fa06a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                  alt="Castle Armory" 
                  className="h-24 object-cover rounded-lg border-2 border-medieval-gold/30 cursor-pointer hover:border-medieval-gold transition-colors"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Medieval Footer */}
      <footer className="py-10 bg-medieval-dark border-t border-medieval-gold/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center">
                <img src="https://img.icons8.com/glyph-neue/64/d4af37/castle.png" alt="Medieval Logo" className="h-10 w-10 mr-3" />
                <h3 className="text-medieval-gold text-xl font-cinzel font-bold">Medieval Chronicles</h3>
              </div>
              <p className="text-gray-400 mt-2 text-sm">
                Est. in the Year of Our Lord 1257
              </p>
            </div>
            
            <div className="flex space-x-6 mb-6 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-medieval-gold transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-medieval-gold transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-medieval-gold transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-medieval-gold transition-colors">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                Crafted by the Royal Scribe
              </p>
              <p className="text-gray-500 text-xs mt-1">
                By decree of the King of Valorheim
              </p>
            </div>
          </div>
          
          <div className="sword-divider"></div>
          
          <div className="text-center text-gray-500 text-xs">
            <p>All illustrations and tales herein are protected by royal decree. Unauthorized copying shall be punishable by dragon.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SecondBook;
