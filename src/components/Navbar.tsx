
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { BookOpen, Library, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Determine if we're on a specific route to change the navbar styling
  const isHatchetPage = location.pathname === '/hatchet';
  const isAIPage = location.pathname === '/our-final-invention';
  const isHomePage = location.pathname === '/';

  // Style variations based on current page
  let navbarStyle = "fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300";
  let logoTextClass = "text-xl font-bold";
  let linkClass = "transition-colors"; 
  
  if (isHatchetPage) {
    // Survival theme for Hatchet
    navbarStyle += " bg-[#0a1510]/90 backdrop-blur-md border-b border-[#2c4c3b]/30";
    logoTextClass += " text-[#e9b872]";
    linkClass += " text-gray-300 hover:text-[#e9b872]";
  } else if (isAIPage) {
    // Futuristic theme for AI book
    navbarStyle += " bg-black/80 backdrop-blur-md border-b border-gray-800";
    logoTextClass += " text-white";
    linkClass += " text-gray-300 hover:text-cyan-400";
  } else {
    // Library theme for homepage
    navbarStyle += " bg-[#2a1f18]/90 backdrop-blur-md border-b border-[#a87c50]/30";
    logoTextClass += " text-[#e0c49b]";
    linkClass += " text-gray-300 hover:text-[#e0c49b]";
  }

  // Active link style
  const getActiveStyle = (path: string) => {
    if (location.pathname === path) {
      if (isHatchetPage) return "text-[#e9b872]";
      if (isAIPage) return "text-cyan-400"; 
      return "text-[#e0c49b]";
    }
    return linkClass;
  };

  return (
    <nav className={navbarStyle}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          {isHatchetPage ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-2 text-[#e9b872]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          ) : isAIPage ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-2 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          ) : (
            <Library className="h-7 w-7 mr-2 text-[#e0c49b]" />
          )}
          <span className={logoTextClass}>
            {isHomePage ? "Literary Analysis" : isHatchetPage ? "Survival Literature" : "Book Analysis"}
          </span>
        </Link>
        
        {!isMobile ? (
          <div className="flex items-center space-x-6">
            <Link to="/" className={getActiveStyle('/')}>Home</Link>
            <Link to="/our-final-invention" className={getActiveStyle('/our-final-invention')}>AI Book</Link>
            <Link to="/hatchet" className={getActiveStyle('/hatchet')}>Hatchet</Link>
          </div>
        ) : (
          <>
            <button 
              onClick={toggleMenu} 
              aria-label="Toggle menu" 
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
            
            {isMenuOpen && (
              <div className="absolute top-full left-0 right-0 backdrop-blur-md p-4 border-b border-opacity-30 animate__animated animate__fadeIn"
                style={{
                  backgroundColor: isHatchetPage ? 'rgba(10, 21, 16, 0.95)' : 
                                  isAIPage ? 'rgba(0, 0, 0, 0.95)' : 
                                  'rgba(42, 31, 24, 0.95)',
                  borderColor: isHatchetPage ? '#2c4c3b' : 
                              isAIPage ? '#2d3748' : 
                              '#a87c50'
                }}
              >
                <div className="flex flex-col space-y-3">
                  <Link 
                    to="/" 
                    className={`py-2 ${getActiveStyle('/')}`} 
                    onClick={toggleMenu}
                  >
                    Home
                  </Link>
                  <Link 
                    to="/our-final-invention" 
                    className={`py-2 ${getActiveStyle('/our-final-invention')}`} 
                    onClick={toggleMenu}
                  >
                    AI Book
                  </Link>
                  <Link 
                    to="/hatchet" 
                    className={`py-2 ${getActiveStyle('/hatchet')}`} 
                    onClick={toggleMenu}
                  >
                    Hatchet
                  </Link>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
