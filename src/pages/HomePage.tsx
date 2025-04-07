
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Book, Sparkles, BookOpen, Library } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const HomePage = () => {
  const bookshelfRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  useEffect(() => {
    // Initialize AOS animation library
    if (typeof window !== 'undefined') {
      const AOS = (window as any).AOS;
      AOS.init({
        duration: 800,
        once: false,
      });
    }
    
    // Setup floating books animation
    const animateFloatingBooks = () => {
      const books = document.querySelectorAll('.floating-book');
      books.forEach((book, index) => {
        const delay = index * 0.5;
        const element = book as HTMLElement;
        element.style.animationDelay = `${delay}s`;
      });
    };
    
    animateFloatingBooks();
    
    // Confetti effect for book click
    const setupBookInteraction = () => {
      const books = document.querySelectorAll('.book-card');
      books.forEach(book => {
        book.addEventListener('click', (e) => {
          showBookInfo(e);
        });
      });
    };
    
    setupBookInteraction();
    
    return () => {
      const books = document.querySelectorAll('.book-card');
      books.forEach(book => {
        book.removeEventListener('click', showBookInfo);
      });
    };
  }, []);
  
  const showBookInfo = (e: Event) => {
    const target = e.currentTarget as HTMLElement;
    const bookTitle = target.getAttribute('data-title');
    
    toast({
      title: "Book Selected",
      description: `You selected "${bookTitle}". Click "View Analysis" to continue.`,
    });
    
    // Create book opening animation
    target.classList.add('animate__animated', 'animate__pulse');
    setTimeout(() => {
      target.classList.remove('animate__animated', 'animate__pulse');
    }, 1000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#FEF9E7] to-[#FDF2E9]">
      {/* Decorative library elements */}
      <div className="absolute inset-0 z-0 opacity-15">
        <div className="absolute top-0 left-0 w-full h-full bg-repeat bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNCQkMwQzMiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBmaWxsPSIjQTc2QTM5IiBkPSJNMTAgMGg1MHY2MEgxMHoiLz48cGF0aCBmaWxsPSIjODQ1MzJEIiBkPSJNMjAgMGg0MHY2MEgyMHoiLz48cGF0aCBmaWxsPSIjNjc0MDIzIiBkPSJNMzAgMGgzMHY2MEgzMHoiLz48cGF0aCBmaWxsPSIjNTczMzFDIiBkPSJNNDAgMGgyMHY2MEg0MHoiLz48cGF0aCBmaWxsPSIjNDIyNzE2IiBkPSJNNTAgMGgxMHY2MEg1MHoiLz48L2c+PC9zdmc+')]"></div>
      </div>
      
      {/* Floating books */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-book animate-float" style={{position: 'absolute', top: '10%', left: '5%'}}>
          <BookOpen size={30} className="text-amber-700 transform rotate-12" />
        </div>
        <div className="floating-book animate-float" style={{position: 'absolute', top: '15%', right: '10%'}}>
          <Book size={25} className="text-purple-700 transform -rotate-6" />
        </div>
        <div className="floating-book animate-float" style={{position: 'absolute', bottom: '20%', left: '15%'}}>
          <BookOpen size={35} className="text-blue-700 transform rotate-3" />
        </div>
        <div className="floating-book animate-float" style={{position: 'absolute', bottom: '30%', right: '5%'}}>
          <Book size={28} className="text-green-700 transform -rotate-8" />
        </div>
      </div>
      
      {/* Bookshelf background effect */}
      <div ref={bookshelfRef} className="absolute bottom-0 left-0 w-full h-1/3 bg-[#8B4513] opacity-70 z-0">
        <div className="absolute top-0 w-full h-8 bg-[#A0522D] shadow-inner"></div>
        <div className="absolute bottom-0 w-full h-8 bg-[#A0522D]"></div>
        <div className="absolute top-10 w-full h-3 bg-[#6B4226]"></div>
        <div className="absolute bottom-20 w-full h-3 bg-[#6B4226]"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div data-aos="fade-down">
            <h1 className="text-5xl md:text-7xl font-merriweather font-black mb-8 text-[#5D4037] drop-shadow-lg">
              <Library size={48} className="inline-block mr-3 mb-2 text-amber-700" />
              Book Analysis Project
            </h1>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="300">
            <p className="text-xl md:text-2xl mb-12 text-[#795548] font-roboto">
              Explore detailed analyses of classic and contemporary literature
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {/* First Book Card */}
            <div 
              data-aos="flip-left" 
              data-aos-delay="500" 
              className="book-card bg-gradient-to-r from-[#FFF8E1] to-[#FFECB3] rounded-xl p-8 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.2)] border-4 border-[#D4A76A] hover:shadow-[0_25px_30px_-5px_rgba(0,0,0,0.3)] transition-all duration-300 cursor-pointer relative overflow-hidden"
              data-title="Our Final Invention"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#D50000] rotate-45 translate-x-10 -translate-y-10 z-[1]"></div>
              
              <div className="h-40 mb-6 flex items-center justify-center relative">
                <div className="absolute w-full h-full flex items-center justify-center opacity-10">
                  <i className="fas fa-robot text-9xl text-[#455A64]"></i>
                </div>
                <Book size={80} className="text-[#D32F2F] relative z-[2]" />
              </div>
              
              <h2 className="text-2xl font-merriweather font-bold text-[#5D4037] mb-4 relative z-[2]">
                Our Final Invention
              </h2>
              
              <p className="text-[#795548] mb-6 relative z-[2]">
                Artificial Intelligence and the End of the Human Era
              </p>
              
              <Link to="/our-final-invention" className="relative z-[2] block">
                <Button 
                  size="lg" 
                  className="w-full bg-[#D32F2F] hover:bg-[#B71C1C] text-white shadow-lg group"
                >
                  <span>View Analysis</span>
                  <Sparkles size={16} className="ml-2 group-hover:animate-pulse" />
                </Button>
              </Link>
            </div>
            
            {/* Second Book Card */}
            <div 
              data-aos="flip-right" 
              data-aos-delay="700" 
              className="book-card bg-gradient-to-r from-[#E3F2FD] to-[#BBDEFB] rounded-xl p-8 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.2)] border-4 border-[#90CAF9] hover:shadow-[0_25px_30px_-5px_rgba(0,0,0,0.3)] transition-all duration-300 cursor-pointer relative overflow-hidden"
              data-title="Second Book Analysis"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#1565C0] rotate-45 translate-x-10 -translate-y-10 z-[1]"></div>
              
              <div className="h-40 mb-6 flex items-center justify-center relative">
                <div className="absolute w-full h-full flex items-center justify-center opacity-10">
                  <i className="fas fa-magic text-9xl text-[#1565C0]"></i>
                </div>
                <Sparkles size={80} className="text-[#1976D2] relative z-[2]" />
              </div>
              
              <h2 className="text-2xl font-merriweather font-bold text-[#1565C0] mb-4 relative z-[2]">
                Second Book Analysis
              </h2>
              
              <p className="text-[#1976D2] mb-6 relative z-[2]">
                Template for your second book analysis project
              </p>
              
              <Link to="/second-book" className="relative z-[2] block">
                <Button 
                  size="lg" 
                  className="w-full bg-[#1976D2] hover:bg-[#0D47A1] text-white shadow-lg group"
                >
                  <span>View Analysis</span>
                  <BookOpen size={16} className="ml-2 group-hover:animate-pulse" />
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Reading cat illustration */}
          <div className="mt-16 flex justify-center" data-aos="zoom-in" data-aos-delay="900">
            <div className="relative w-64 h-48">
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-12 bg-[#8B4513] rounded-lg"></div>
              <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-32 h-20 bg-[#5D4037] rounded flex items-center justify-center">
                <div className="w-28 h-16 bg-white flex items-center justify-center text-xs text-center text-[#5D4037]">
                  <i className="fas fa-book-open text-lg mb-1"></i>
                  <br/>Reading is magic
                </div>
              </div>
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#795548] rounded-full z-10"></div>
              <div className="cat absolute bottom-14 left-1/2 transform -translate-x-1/2 z-20">
                <div className="w-20 h-14 bg-[#FF9800] rounded-t-3xl relative">
                  <div className="absolute top-[-8px] left-2 w-6 h-8 bg-[#FF9800] rounded-t-full transform rotate-[-20deg]"></div>
                  <div className="absolute top-[-8px] right-2 w-6 h-8 bg-[#FF9800] rounded-t-full transform rotate-[20deg]"></div>
                  <div className="absolute top-4 left-3 w-3 h-3 bg-black rounded-full"></div>
                  <div className="absolute top-4 right-3 w-3 h-3 bg-black rounded-full"></div>
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-[#E65100] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-[#795548] animate__animated animate__fadeIn animate__delay-1s">
            <p className="text-sm">
              <i className="fas fa-book-reader mr-2"></i>
              English Class Project &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
