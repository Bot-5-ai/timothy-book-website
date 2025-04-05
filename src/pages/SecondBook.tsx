
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SecondBook = () => {
  useEffect(() => {
    // Initialize AOS on component mount with enhanced options
    const AOS = window.AOS;
    if (typeof AOS !== 'undefined') {
      AOS.init({ 
        duration: 800,
        once: false,
        mirror: true,
        offset: 100,
        easing: 'ease-in-out',
        delay: 100
      });
    }
  }, []);

  return (
    <div className="font-roboto overflow-x-hidden relative">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-gradient-to-r from-purple-500/90 to-pink-500/90 backdrop-blur-md shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="text-white font-merriweather font-bold text-xl">
              Second Book Analysis
            </div>
            
            <div className="flex space-x-2">
              <Link to="/">
                <Button variant="outline" className="bg-white/20 text-white border-white/30 hover:bg-white/40">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-400 via-pink-400 to-orange-300 px-4 pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-pink-300/40 blur-3xl animate-pulse-light"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-purple-300/30 blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-orange-300/20 blur-3xl animate-float"></div>
        </div>

        <div className="container mx-auto text-center relative z-10 animate__animated animate__fadeIn">
          <div className="inline-block mb-6 p-2 px-4 bg-white/30 backdrop-blur-md text-purple-800 rounded-full text-sm font-medium shadow-lg">
            SECOND BOOK TEMPLATE
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-merriweather font-black mb-6 text-white tracking-tight">
            Your Second Book <span className="text-white gradient-text">Analysis</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto font-roboto">
            Add your second book's description and analysis here
          </p>

          <div className="mb-8 flex items-center justify-center">
            <div className="flex items-center backdrop-blur-md bg-white/20 shadow-lg rounded-lg p-3 border border-white/30">
              <div className="h-16 w-16 mr-4 overflow-hidden rounded">
                <div className="h-full w-full bg-purple-200 flex items-center justify-center text-purple-600">Book</div>
              </div>
              <div className="text-left">
                <p className="text-sm text-white/80">BY</p>
                <p className="font-semibold text-white">Author Name</p>
              </div>
            </div>
          </div>

          <div className="animate__animated animate__fadeInUp animate__delay-1s">
            <p className="text-white/70 text-lg">
              This is a template for your second book analysis
            </p>
          </div>
        </div>
      </section>

      {/* Placeholder sections */}
      <section className="py-20 bg-white px-4">
        <div className="container mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-merriweather font-bold text-center mb-12">Book Summary</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 mb-4">
              This is a placeholder for your second book's summary. You can replace this text with your actual book summary once you've selected your second book.
            </p>
            <p className="text-gray-600">
              The template includes sections for summary, author information, reviews, and analysis - just like your first book analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-merriweather font-bold mb-2">Second Book Analysis</h3>
              <p className="text-gray-400 text-sm">Book analysis for English class</p>
            </div>
            
            <div>
              <Link to="/">
                <Button variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/20">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-700">
            <p className="text-gray-400 text-sm text-center">
              © {new Date().getFullYear()} English Class Project. This website is for educational purposes only.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SecondBook;
