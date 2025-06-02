
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, X, Info, Box, Tent, TreePine, Flame, Ban } from 'lucide-react';

interface MapLocation {
  id: string;
  name: string;
  x: number;
  y: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  quote: string;
  importance: string;
}

const HatchetInteractiveMap = () => {
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);

  const locations: MapLocation[] = [
    {
      id: 'crash-site',
      name: 'Crash Site',
      x: 25,
      y: 30,
      icon: <MapPin className="h-5 w-5" />,
      title: 'The Plane Crash Site',
      description: 'This is where it all began - Brian\'s terrifying introduction to the wilderness when the pilot had a heart attack and the plane crashed into the lake.',
      quote: '"The plane had gone down into the water and he had somehow pulled himself out."',
      importance: 'The crash site represents the end of Brian\'s old life and the beginning of his survival journey.'
    },
    {
      id: 'shelter',
      name: 'Brian\'s Shelter',
      x: 45,
      y: 50,
      icon: <Tent className="h-5 w-5" />,
      title: 'The Rock Shelter',
      description: 'Brian found this natural shelter formed by a rock overhang near the lake. This became his home for 54 days.',
      quote: '"It was a good place, he thought. A good place to be."',
      importance: 'The shelter represents safety and Brian\'s first step toward making the wilderness livable.'
    },
    {
      id: 'fire-site',
      name: 'First Fire',
      x: 50,
      y: 45,
      icon: <Flame className="h-5 w-5" />,
      title: 'Where Brian Made Fire',
      description: 'The spot where Brian finally succeeded in making fire using his hatchet and birch bark - a turning point in his survival.',
      quote: '"I have fire, he thought. I have fire."',
      importance: 'Fire changed everything for Brian - it meant warmth, cooked food, and protection from animals.'
    },
    {
      id: 'berry-patch',
      name: 'Berry Patch',
      x: 70,
      y: 35,
      icon: <TreePine className="h-5 w-5" />,
      title: 'The Berry Patch',
      description: 'Brian discovered these gut cherries that made him sick at first, but later became an important food source.',
      quote: '"Gut cherries, he thought. That\'s what they are. Gut cherries."',
      importance: 'This taught Brian that nature could provide food, but he had to learn what was safe to eat.'
    },
    {
      id: 'survival-pack',
      name: 'Survival Pack',
      x: 20,
      y: 40,
      icon: <Box className="h-5 w-5" />,
      title: 'The Survival Pack Location',
      description: 'After the tornado, Brian dove into the lake to retrieve the survival pack from the crashed plane.',
      quote: '"There it was. The survival pack."',
      importance: 'The survival pack contained the emergency transmitter that ultimately led to Brian\'s rescue.'
    },
    {
      id: 'restricted-area',
      name: 'Dangerous Area',
      x: 75,
      y: 65,
      icon: <Ban className="h-5 w-5" />,
      title: 'Restricted Wilderness Area',
      description: 'A dangerous area with steep cliffs and unstable terrain that Brian learned to avoid during his survival.',
      quote: '"He would have to be more careful, think more carefully."',
      importance: 'This area taught Brian the importance of being cautious and observant in the wilderness.'
    }
  ];

  return (
    <section className="py-20 bg-[url('https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-fixed relative">
      <div className="absolute inset-0 bg-[#0f1b15]/90 backdrop-filter backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-4 text-[#e9b872]">
            Brian's Journey Map
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#e9b872] to-[#a3c9a8] mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Explore the Canadian wilderness where Brian survived for 54 days. Click on each location to learn about the important events that happened there.
          </p>
        </div>

        <div className="relative bg-[#162821]/90 backdrop-blur-md border border-[#2c4c3b] rounded-xl shadow-2xl overflow-hidden" data-aos="zoom-in">
          {/* Illustrated Map Container */}
          <div className="relative w-full h-96 md:h-[600px] bg-gradient-to-br from-[#7FB069] via-[#8FBC8F] to-[#6B8E23] overflow-hidden">
            
            {/* Organic Terrain Background */}
            <div className="absolute inset-0">
              <svg width="100%" height="100%" viewBox="0 0 800 600" className="opacity-40">
                <defs>
                  {/* Tree Pattern */}
                  <pattern id="treePattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="25" r="12" fill="#2D5016" opacity="0.7"/>
                    <rect x="18" y="30" width="4" height="8" fill="#8B4513" opacity="0.8"/>
                    <circle cx="60" cy="40" r="10" fill="#228B22" opacity="0.6"/>
                    <rect x="58" y="45" width="4" height="6" fill="#8B4513" opacity="0.8"/>
                    <circle cx="80" cy="15" r="8" fill="#32CD32" opacity="0.5"/>
                    <rect x="78" y="20" width="4" height="5" fill="#8B4513" opacity="0.8"/>
                  </pattern>
                  
                  {/* Trail Pattern */}
                  <pattern id="trailPattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                    <path d="M 20,100 Q 100,80 180,100 Q 160,120 80,120 Q 40,110 20,100" 
                          stroke="#D2B48C" strokeWidth="4" fill="none" opacity="0.6"/>
                    <path d="M 100,20 Q 120,100 100,180 Q 80,160 100,80 Q 110,40 100,20" 
                          stroke="#D2B48C" strokeWidth="3" fill="none" opacity="0.5"/>
                  </pattern>
                  
                  {/* Rock Pattern */}
                  <pattern id="rockPattern" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
                    <ellipse cx="30" cy="40" rx="15" ry="8" fill="#696969" opacity="0.7"/>
                    <ellipse cx="100" cy="80" rx="20" ry="12" fill="#708090" opacity="0.6"/>
                    <ellipse cx="70" cy="120" rx="12" ry="6" fill="#778899" opacity="0.5"/>
                  </pattern>
                </defs>
                
                {/* Apply patterns */}
                <rect width="100%" height="100%" fill="url(#treePattern)"/>
                <rect width="100%" height="100%" fill="url(#trailPattern)"/>
                <rect width="100%" height="100%" fill="url(#rockPattern)"/>
              </svg>
            </div>

            {/* Gentle Hills */}
            <div className="absolute inset-0">
              <svg width="100%" height="100%" viewBox="0 0 800 600">
                <path d="M 0,300 Q 200,250 400,280 Q 600,320 800,290 L 800,600 L 0,600 Z" 
                      fill="url(#hillGradient)" opacity="0.3"/>
                <path d="M 0,400 Q 150,350 300,370 Q 500,390 800,360 L 800,600 L 0,600 Z" 
                      fill="url(#hillGradient2)" opacity="0.2"/>
                
                <defs>
                  <linearGradient id="hillGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#9ACD32" stopOpacity="0.6"/>
                    <stop offset="100%" stopColor="#6B8E23" stopOpacity="0.3"/>
                  </linearGradient>
                  <linearGradient id="hillGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#8FBC8F" stopOpacity="0.5"/>
                    <stop offset="100%" stopColor="#556B2F" stopOpacity="0.2"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* The Lake - More Organic Shape */}
            <motion.div 
              className="absolute"
              style={{ 
                left: '20%', 
                top: '45%', 
                width: '45%', 
                height: '35%' 
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <svg width="100%" height="100%" viewBox="0 0 100 100" className="drop-shadow-lg">
                <defs>
                  <radialGradient id="lakeGradient" cx="50%" cy="40%" r="60%">
                    <stop offset="0%" stopColor="#87CEEB" stopOpacity="0.9"/>
                    <stop offset="50%" stopColor="#4682B4" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#2F4F4F" stopOpacity="0.7"/>
                  </radialGradient>
                  <filter id="waterRipple">
                    <feTurbulence baseFrequency="0.02" numOctaves="2"/>
                    <feDisplacementMap in="SourceGraphic" scale="1"/>
                  </filter>
                </defs>
                
                <path d="M 15,40 Q 30,20 50,25 Q 70,30 85,45 Q 90,60 80,75 Q 65,85 45,80 Q 25,85 15,70 Q 10,55 15,40 Z" 
                      fill="url(#lakeGradient)" 
                      stroke="#4682B4" 
                      strokeWidth="0.5"
                      filter="url(#waterRipple)"/>
                
                {/* Water depth indicators */}
                <ellipse cx="45" cy="50" rx="15" ry="10" fill="#2F4F4F" opacity="0.3"/>
                <ellipse cx="55" cy="60" rx="8" ry="6" fill="#2F4F4F" opacity="0.2"/>
              </svg>
            </motion.div>

            {/* Winding Trails */}
            <svg width="100%" height="100%" viewBox="0 0 800 600" className="absolute inset-0 opacity-60">
              <path d="M 50,300 Q 200,250 350,280 Q 500,320 650,290" 
                    stroke="#D2B48C" strokeWidth="6" fill="none" strokeDasharray="10,5"/>
              <path d="M 300,100 Q 400,200 500,150 Q 600,100 700,180" 
                    stroke="#CD853F" strokeWidth="4" fill="none" strokeDasharray="8,4"/>
            </svg>

            {/* Compass Rose */}
            <div className="absolute top-4 left-4 w-16 h-16 text-[#8B4513] opacity-90 bg-white/20 rounded-full p-2">
              <svg viewBox="0 0 64 64" className="w-full h-full">
                <circle cx="32" cy="32" r="28" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M32,8 L36,28 L32,32 L28,28 Z" fill="#DC143C"/>
                <path d="M32,56 L36,36 L32,32 L28,36 Z" fill="currentColor"/>
                <text x="32" y="12" textAnchor="middle" fontSize="8" fill="currentColor" fontWeight="bold">N</text>
                <text x="52" y="36" textAnchor="middle" fontSize="6" fill="currentColor">E</text>
                <text x="32" y="56" textAnchor="middle" fontSize="6" fill="currentColor">S</text>
                <text x="12" y="36" textAnchor="middle" fontSize="6" fill="currentColor">W</text>
              </svg>
            </div>

            {/* Modern Scale Bar */}
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center space-x-3 text-gray-700">
                <div className="flex items-center space-x-1">
                  <div className="w-8 h-1 bg-gray-800"></div>
                  <div className="w-8 h-1 bg-white border border-gray-800"></div>
                </div>
                <span className="text-xs font-medium">1 km</span>
              </div>
            </div>

            {/* Map Locations with uniform styling */}
            {locations.map((location, index) => (
              <motion.button
                key={location.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-10"
                style={{ left: `${location.x}%`, top: `${location.y}%` }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedLocation(location)}
              >
                <div className="relative">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#2F4F4F] shadow-lg border-2 border-[#4682B4] group-hover:bg-[#E0F6FF] transition-all duration-300 backdrop-blur-sm">
                    {location.icon}
                  </div>
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900/90 text-white px-3 py-1 rounded-md text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap backdrop-blur-sm">
                    {location.name}
                  </div>
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-[#4682B4]/50"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  {/* Icon shadow */}
                  <div className="absolute inset-0 rounded-full bg-black/10 transform translate-y-1 -z-10"></div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Enhanced Legend */}
          <div className="p-6 bg-gradient-to-r from-[#0f1b15]/90 to-[#162821]/90 border-t border-[#2c4c3b]">
            <h3 className="text-[#e9b872] font-bold mb-4 flex items-center">
              <Info className="mr-2 h-5 w-5" />
              Map Legend
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
              {locations.map((location) => (
                <div key={location.id} className="flex items-center space-x-3 text-sm hover:text-[#e9b872] transition-colors duration-200">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#2F4F4F] border border-[#4682B4] shadow-sm">
                    {React.cloneElement(location.icon as React.ReactElement, { className: "h-4 w-4" })}
                  </div>
                  <span className="font-medium">{location.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Location Detail Modal */}
        <AnimatePresence>
          {selectedLocation && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedLocation(null)}
              />
              <motion.div
                className="fixed inset-4 md:inset-10 lg:inset-20 bg-[#162821] border border-[#2c4c3b] rounded-xl shadow-2xl z-50 overflow-hidden"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
              >
                <div className="relative h-full flex flex-col">
                  <button
                    onClick={() => setSelectedLocation(null)}
                    className="absolute top-4 right-4 z-10 w-8 h-8 bg-[#2c4c3b] hover:bg-[#e9b872] text-[#e9b872] hover:text-[#0f1b15] rounded-full flex items-center justify-center transition-colors duration-200"
                  >
                    <X className="h-4 w-4" />
                  </button>

                  <div className="p-8 flex-1 overflow-y-auto">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#2F4F4F] mr-4 border-2 border-[#4682B4] shadow-lg">
                        {React.cloneElement(selectedLocation.icon as React.ReactElement, { className: "h-8 w-8" })}
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-merriweather font-bold text-[#e9b872]">
                          {selectedLocation.title}
                        </h3>
                        <p className="text-[#a3c9a8] font-medium">{selectedLocation.name}</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">What Happened Here</h4>
                        <p className="text-gray-300 leading-relaxed">{selectedLocation.description}</p>
                      </div>

                      <div className="bg-[#0f1b15] p-4 rounded-lg border-l-4 border-[#e9b872]">
                        <h4 className="text-lg font-bold text-[#a3c9a8] mb-2">Quote from the Book</h4>
                        <blockquote className="text-gray-300 italic">{selectedLocation.quote}</blockquote>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">Why This Place Matters</h4>
                        <p className="text-gray-300 leading-relaxed">{selectedLocation.importance}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HatchetInteractiveMap;
