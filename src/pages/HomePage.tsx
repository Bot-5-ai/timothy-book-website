
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Library, Bookmark, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';

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
    
    // Setup interactive elements
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
    
    // Subtle highlight animation
    target.classList.add('animate__animated', 'animate__pulse');
    setTimeout(() => {
      target.classList.remove('animate__animated', 'animate__pulse');
    }, 1000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#f8f5f2]">
      {/* Library Background with Real Bookshelf */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1526243741027-444d633d7365?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')`,
            filter: 'sepia(20%)'
          }}
        ></div>
      </div>

      {/* Warm Library Lighting Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-[#ffedcc30] via-[#f8f5f220] to-[#f8f5f240] z-[1]"></div>
      
      {/* Wood Texture for Bottom of Page */}
      <div 
        ref={bookshelfRef} 
        className="absolute bottom-0 left-0 w-full h-1/3 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1586268089456-8dcb1bf2798b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute top-0 w-full h-8 bg-[#392f24] opacity-40 shadow-inner"></div>
        <div className="absolute bottom-0 w-full h-8 bg-[#392f24] opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div data-aos="fade-down" className="text-center mb-12">
            <div className="flex justify-center items-center mb-6">
              <Library size={48} className="text-[#6b4d30] mr-3" />
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#3a2c1c] tracking-tight">
                Literary Analysis
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl mb-8 text-[#5d4534] font-serif max-w-3xl mx-auto leading-relaxed">
              Explore detailed analyses of classic and contemporary works of literature in our carefully curated collection.
            </p>
          </div>
          
          {/* Search Bar */}
          <div 
            className="relative max-w-2xl mx-auto mb-16"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex items-center bg-white bg-opacity-90 rounded-lg shadow-md border border-[#e5ded3] p-1">
              <Search className="ml-3 h-5 w-5 text-[#6b4d30]" />
              <input 
                type="text" 
                placeholder="Search our library collection..." 
                className="w-full p-3 bg-transparent border-none focus:outline-none text-[#3a2c1c] placeholder-[#a18e7b]"
              />
              <Button 
                className="bg-[#6b4d30] hover:bg-[#5d4027] text-white rounded-md mr-1"
              >
                Search
              </Button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* First Book Card */}
            <Card 
              data-aos="fade-right" 
              data-aos-delay="300" 
              className="book-card bg-white bg-opacity-95 rounded-lg p-6 shadow-lg border border-[#e5ded3] hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden transform hover:-translate-y-1"
              data-title="Our Final Invention"
            >
              <div className="absolute top-0 right-0 w-24 h-24">
                <div className="absolute right-[-20px] top-[-20px] w-32 h-32 rotate-45 bg-[#8b3a3a]"></div>
              </div>
              
              <div className="flex md:flex-row flex-col">
                <div className="md:w-1/3 mb-4 md:mb-0 flex justify-center items-start">
                  <div className="book-cover shadow-lg relative transform hover:rotate-y-10 transition-all duration-500" 
                       style={{
                         width: '120px', 
                         height: '180px', 
                         background: 'linear-gradient(145deg, #a13333, #8b2929)',
                         boxShadow: '5px 5px 15px rgba(0,0,0,0.3), -1px -1px 5px rgba(255,255,255,0.1)',
                         borderRadius: '2px 8px 8px 2px'
                       }}>
                    <div className="absolute h-full w-[8px] left-0 top-0 bg-[#6b2323] rounded-l-sm"></div>
                    <div className="p-3 h-full flex flex-col justify-center items-center">
                      <BookOpen size={40} className="text-white opacity-80 mb-2" />
                      <h3 className="text-white text-sm font-bold text-center">Our Final Invention</h3>
                      <p className="text-white text-xs opacity-80 text-center mt-1">James Barrat</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3 md:pl-6 relative z-[2]">
                  <h2 className="text-2xl font-serif font-bold text-[#3a2c1c] mb-3 flex items-center">
                    <span>Our Final Invention</span>
                    <Bookmark className="ml-2 h-5 w-5 text-[#8b3a3a]" />
                  </h2>
                  
                  <p className="text-[#5d4534] mb-4 italic">
                    Artificial Intelligence and the End of the Human Era
                  </p>
                  
                  <p className="text-[#5d4534] mb-6 line-clamp-3">
                    Barrat explores how the quest for artificial intelligence could lead to unforeseen consequences for humanity, examining both the promise and peril of creating machines that may surpass human intellect.
                  </p>
                  
                  <Link to="/our-final-invention" className="block">
                    <Button 
                      className="bg-[#8b3a3a] hover:bg-[#6b2323] text-white shadow-md group w-full md:w-auto"
                    >
                      <span>View Analysis</span>
                      <i className="fas fa-book-open ml-2 group-hover:animate-pulse"></i>
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
            
            {/* Second Book Card */}
            <Card 
              data-aos="fade-left" 
              data-aos-delay="400" 
              className="book-card bg-white bg-opacity-95 rounded-lg p-6 shadow-lg border border-[#e5ded3] hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden transform hover:-translate-y-1"
              data-title="Second Book Analysis"
            >
              <div className="absolute top-0 right-0 w-24 h-24">
                <div className="absolute right-[-20px] top-[-20px] w-32 h-32 rotate-45 bg-[#1a4b6e]"></div>
              </div>
              
              <div className="flex md:flex-row flex-col">
                <div className="md:w-1/3 mb-4 md:mb-0 flex justify-center items-start">
                  <div className="book-cover shadow-lg relative transform hover:rotate-y-10 transition-all duration-500" 
                       style={{
                         width: '120px', 
                         height: '180px', 
                         background: 'linear-gradient(145deg, #235d8b, #1a4b6e)',
                         boxShadow: '5px 5px 15px rgba(0,0,0,0.3), -1px -1px 5px rgba(255,255,255,0.1)',
                         borderRadius: '2px 8px 8px 2px'
                       }}>
                    <div className="absolute h-full w-[8px] left-0 top-0 bg-[#0f3650] rounded-l-sm"></div>
                    <div className="p-3 h-full flex flex-col justify-center items-center">
                      <BookOpen size={40} className="text-white opacity-80 mb-2" />
                      <h3 className="text-white text-sm font-bold text-center">Second Book</h3>
                      <p className="text-white text-xs opacity-80 text-center mt-1">Author Name</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3 md:pl-6 relative z-[2]">
                  <h2 className="text-2xl font-serif font-bold text-[#3a2c1c] mb-3 flex items-center">
                    <span>Second Book Analysis</span>
                    <Bookmark className="ml-2 h-5 w-5 text-[#1a4b6e]" />
                  </h2>
                  
                  <p className="text-[#5d4534] mb-4 italic">
                    Template for your second book analysis project
                  </p>
                  
                  <p className="text-[#5d4534] mb-6 line-clamp-3">
                    A comprehensive literary analysis exploring themes, characters, and the cultural significance of this important work. Dive into the scholarly examination of this text.
                  </p>
                  
                  <Link to="/second-book" className="block">
                    <Button 
                      className="bg-[#1a4b6e] hover:bg-[#0f3650] text-white shadow-md group w-full md:w-auto"
                    >
                      <span>View Analysis</span>
                      <i className="fas fa-book-open ml-2 group-hover:animate-pulse"></i>
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Reading Corner Section */}
          <div className="mt-20 bg-white bg-opacity-80 rounded-lg p-8 shadow-lg border border-[#e5ded3]" data-aos="fade-up" data-aos-delay="500">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <img 
                  src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Reading Corner" 
                  className="rounded-lg shadow-md"
                  style={{maxHeight: '300px', objectFit: 'cover', width: '100%'}}
                />
              </div>
              <div className="md:w-1/2 md:pl-10">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#3a2c1c] mb-4">The Reading Corner</h2>
                <p className="text-[#5d4534] mb-6">
                  Join our community of literary enthusiasts. Discover new perspectives, share your insights, and engage with fellow readers in meaningful discussions about the books that shape our understanding of the world.
                </p>
                <div className="flex space-x-3">
                  <Button className="bg-[#6b4d30] hover:bg-[#5d4027]">
                    Join Book Club
                  </Button>
                  <Button variant="outline" className="border-[#6b4d30] text-[#6b4d30] hover:bg-[#6b4d30] hover:text-white">
                    Browse Collection
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <div className="mt-16 text-center text-[#6b4d30]">
            <p className="text-sm">
              <i className="fas fa-book-reader mr-2"></i>
              Literary Analysis Project &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
      
      {/* Additional styling */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Source+Serif+Pro:wght@400;600;700&display=swap');
        
        .font-serif {
          font-family: 'Libre Baskerville', 'Georgia', serif;
        }
        
        .rotate-y-10:hover {
          transform: rotateY(10deg);
        }
        
        /* Fix for JSX styling */
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 10px rgba(107, 77, 48, 0.4);
          }
          50% {
            box-shadow: 0 0 20px rgba(107, 77, 48, 0.6);
          }
        }
        
        .book-cover:hover {
          animation: glow 3s infinite;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
