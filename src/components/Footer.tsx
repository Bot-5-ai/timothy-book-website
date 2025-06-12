
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-10 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-merriweather font-bold mb-2">Our Final Invention</h3>
            <p className="text-gray-400 text-sm">
              Book analysis for English class
            </p>
          </div>
          
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              {['Home', 'Summary', 'Author', 'Reviews', 'Analysis'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-2">Find This Book</h4>
            <div className="flex space-x-3">
              <a 
                href="https://www.amazon.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="Amazon"
              >
                <i className="fab fa-amazon text-lg"></i>
              </a>
              <a 
                href="https://books.apple.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="Apple Books"
              >
                <i className="fab fa-apple text-lg"></i>
              </a>
              <a 
                href="https://play.google.com/store/books" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="Google Play Books"
              >
                <i className="fab fa-google-play text-lg"></i>
              </a>
              <a 
                href="https://www.barnesandnoble.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="Barnes & Noble"
              >
                <i className="fas fa-book text-lg"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700">
          <p className="text-gray-400 text-sm text-center">
            © {currentYear} English Class Project. This website is for educational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
