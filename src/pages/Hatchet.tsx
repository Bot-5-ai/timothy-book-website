
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Axe, Compass, Trees, TreePine, Mountain, ArrowLeft, BookOpen, Star } from 'lucide-react';
import HatchetSummary from '@/components/HatchetSummary';
import HatchetStats from '@/components/HatchetStats';
import HatchetQuotes from '@/components/HatchetQuotes';
import GaryPaulsenTimeline from '@/components/GaryPaulsenTimeline';
import HatchetInteractiveMap from '@/components/HatchetInteractiveMap';
import HatchetVideos from '@/components/HatchetVideos';
import HatchetResources from '@/components/HatchetResources';

const Hatchet = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 via-gray-900 to-black text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 opacity-10">
          <Trees className="h-32 w-32 text-green-500 animate-pulse" />
        </div>
        <div className="absolute top-40 right-32 opacity-10">
          <TreePine className="h-24 w-24 text-green-600 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="absolute bottom-40 left-40 opacity-10">
          <Mountain className="h-28 w-28 text-gray-500 animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        <div className="absolute bottom-20 right-20 opacity-10">
          <Compass className="h-20 w-20 text-orange-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md border-b border-green-500/20' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center text-green-400 hover:text-green-300 transition-colors duration-200 group"
            >
              <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Home
            </Link>
            
            <div className="flex items-center space-x-2">
              <Axe className="h-6 w-6 text-orange-500" />
              <span className="font-bold text-xl text-white">Hatchet</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <div className="inline-block p-4 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full border border-orange-500/30 mb-6">
              <Axe className="h-16 w-16 text-orange-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
              Hatchet
            </h1>
            <p className="text-xl text-gray-300 mb-2">by Gary Paulsen</p>
            <div className="flex items-center justify-center space-x-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
              <span className="ml-2 text-gray-400">(4.8/5 rating)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <HatchetStats />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <HatchetSummary />
              <HatchetQuotes />
            </div>
            
            <div className="space-y-8">
              {/* Book Cover */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-600/30 shadow-lg text-center">
                <img 
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80" 
                  alt="Hatchet Book Cover" 
                  className="w-full max-w-48 mx-auto rounded-lg shadow-lg mb-4 hover:scale-105 transition-transform duration-300"
                />
                <h4 className="text-lg font-bold text-white mb-2">Available Now</h4>
                <p className="text-gray-400 text-sm mb-4">A survival story that changed young adult literature</p>
                <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-2 rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                  <BookOpen className="inline mr-2 h-4 w-4" />
                  Read Now
                </button>
              </div>

              {/* Quick Facts */}
              <div className="bg-gradient-to-br from-green-900/30 to-blue-900/30 backdrop-blur-sm p-6 rounded-xl border border-green-500/20 shadow-lg">
                <h4 className="text-lg font-bold text-green-300 mb-4 flex items-center">
                  <i className="fas fa-info-circle mr-2"></i>
                  Quick Facts
                </h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <i className="fas fa-calendar-alt text-orange-400 mr-3 w-4"></i>
                    <span>First published: 1987</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-trophy text-yellow-400 mr-3 w-4"></i>
                    <span>Newbery Honor Book</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-book text-blue-400 mr-3 w-4"></i>
                    <span>Young Adult Fiction</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-users text-green-400 mr-3 w-4"></i>
                    <span>Ages 10-14</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-file-alt text-purple-400 mr-3 w-4"></i>
                    <span>195 pages</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Components */}
      <GaryPaulsenTimeline />
      <HatchetInteractiveMap />
      <HatchetVideos />
      <HatchetResources />
    </div>
  );
};

export default Hatchet;
