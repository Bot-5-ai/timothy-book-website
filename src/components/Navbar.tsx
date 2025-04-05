
import React, { useState, useEffect } from 'react';
import { BookOpen, User, MessageCircle, BookmarkIcon, Home } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setActiveSection(sectionId);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: <Home className="h-4 w-4 mr-2" /> },
    { id: 'summary', label: 'Summary', icon: <BookOpen className="h-4 w-4 mr-2" /> },
    { id: 'author', label: 'Author', icon: <User className="h-4 w-4 mr-2" /> },
    { id: 'reviews', label: 'Reviews', icon: <MessageCircle className="h-4 w-4 mr-2" /> },
    { id: 'analysis', label: 'Analysis', icon: <BookmarkIcon className="h-4 w-4 mr-2" /> },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="text-bookblue-600 font-merriweather font-bold text-xl">
            Book Analysis
          </div>
          
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg flex items-center transition-colors ${
                  activeSection === item.id 
                    ? 'bg-bookblue-100 text-bookblue-700 font-medium' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>

          <div className="md:hidden block">
            <div className="flex space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`p-2 rounded-full transition-colors ${
                    activeSection === item.id 
                      ? 'bg-bookblue-100 text-bookblue-700' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {item.icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
