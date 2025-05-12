import React from 'react';
import { Link } from 'react-router-dom';
import { useMobile } from '@/hooks/use-mobile';

const Navbar: React.FC = () => {
  const isMobile = useMobile();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 py-4 px-6 border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          Book Analysis
        </Link>
        
        {!isMobile ? (
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors">Home</Link>
            <Link to="/our-final-invention" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Book</Link>
            <Link to="/hatchet" className="text-gray-300 hover:text-green-400 transition-colors">Hatchet</Link>
          </div>
        ) : (
          <>
            <button onClick={toggleMenu} aria-label="Toggle menu" className="text-white">
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
            
            {isMenuOpen && (
              <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md p-4 border-b border-gray-800">
                <div className="flex flex-col space-y-3">
                  <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors py-2" onClick={toggleMenu}>Home</Link>
                  <Link to="/our-final-invention" className="text-gray-300 hover:text-cyan-400 transition-colors py-2" onClick={toggleMenu}>AI Book</Link>
                  <Link to="/hatchet" className="text-gray-300 hover:text-green-400 transition-colors py-2" onClick={toggleMenu}>Hatchet</Link>
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
