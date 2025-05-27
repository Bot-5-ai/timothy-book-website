
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, X, Info, Compass, TreePine, Flame, Package, Tent } from 'lucide-react';

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
      id: 'lake',
      name: 'The Lake',
      x: 40,
      y: 60,
      icon: <Compass className="h-5 w-5" />,
      title: 'The Lake',
      description: 'The large lake provided Brian with water, fish, and eventually led him to the survival pack in the sunken plane.',
      quote: '"The lake was everything - his water, his mirror, his highway."',
      importance: 'The lake was Brian\'s lifeline, providing water, food, and eventually his rescue.'
    },
    {
      id: 'survival-pack',
      name: 'Survival Pack',
      x: 20,
      y: 40,
      icon: <Package className="h-5 w-5" />,
      title: 'The Survival Pack Location',
      description: 'After the tornado, Brian dove into the lake to retrieve the survival pack from the crashed plane.',
      quote: '"There it was. The survival pack."',
      importance: 'The survival pack contained the emergency transmitter that ultimately led to Brian\'s rescue.'
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
          {/* Realistic Map Container */}
          <div className="relative w-full h-96 md:h-[600px] bg-gradient-to-br from-[#8B7355] via-[#A0826D] to-[#6B5B47] overflow-hidden">
            
            {/* Topographic Background */}
            <div className="absolute inset-0">
              <svg width="100%" height="100%" viewBox="0 0 800 600" className="opacity-30">
                <defs>
                  <pattern id="contourLines" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                    <path d="M 10,40 Q 40,20 70,40" stroke="#5D4E37" strokeWidth="0.5" fill="none" opacity="0.4"/>
                    <path d="M 0,60 Q 30,40 60,60" stroke="#5D4E37" strokeWidth="0.5" fill="none" opacity="0.3"/>
                  </pattern>
                  <pattern id="forestPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                    <circle cx="15" cy="15" r="2" fill="#2D5016" opacity="0.6"/>
                    <circle cx="30" cy="25" r="1.5" fill="#2D5016" opacity="0.5"/>
                    <circle cx="45" cy="10" r="2.5" fill="#2D5016" opacity="0.7"/>
                    <circle cx="10" cy="40" r="1" fill="#2D5016" opacity="0.4"/>
                    <circle cx="50" cy="45" r="2" fill="#2D5016" opacity="0.6"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#contourLines)"/>
                <rect width="100%" height="100%" fill="url(#forestPattern)"/>
              </svg>
            </div>

            {/* Forest Areas */}
            <div className="absolute inset-0">
              {/* Dense forest areas */}
              <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#2D5016]/40 to-transparent"></div>
              <div className="absolute bottom-0 right-0 w-2/3 h-1/2 bg-gradient-to-tl from-[#2D5016]/40 to-transparent"></div>
              <div className="absolute top-1/4 left-3/4 w-1/4 h-1/3 bg-gradient-to-br from-[#2D5016]/50 to-transparent rounded-full"></div>
            </div>

            {/* Rocky Areas */}
            <div className="absolute top-1/3 left-1/4 w-16 h-12 bg-[#696969]/60 rounded-lg transform rotate-12"></div>
            <div className="absolute bottom-1/4 right-1/3 w-20 h-8 bg-[#696969]/50 rounded-lg transform -rotate-6"></div>
            <div className="absolute top-1/2 left-1/6 w-12 h-10 bg-[#696969]/70 rounded-lg transform rotate-45"></div>

            {/* The Lake - More Realistic */}
            <motion.div 
              className="absolute bg-gradient-to-br from-[#4682B4]/80 via-[#5F9EA0]/70 to-[#2F4F4F]/60 rounded-full border-2 border-[#4682B4]/40"
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
              {/* Water ripples effect */}
              <div className="absolute inset-2 rounded-full border border-[#87CEEB]/30"></div>
              <div className="absolute inset-4 rounded-full border border-[#87CEEB]/20"></div>
              
              {/* Lake depth variations */}
              <div className="absolute top-1/4 left-1/3 w-1/3 h-1/3 bg-[#2F4F4F]/40 rounded-full"></div>
              <div className="absolute bottom-1/4 right-1/4 w-1/4 h-1/4 bg-[#2F4F4F]/30 rounded-full"></div>
            </motion.div>

            {/* Streams connecting to lake */}
            <div className="absolute top-1/4 left-1/2 w-1 h-24 bg-[#4682B4]/50 transform rotate-45 rounded-full"></div>
            <div className="absolute bottom-1/3 right-1/4 w-1 h-16 bg-[#4682B4]/40 transform -rotate-12 rounded-full"></div>

            {/* Compass Rose */}
            <div className="absolute top-4 left-4 w-16 h-16 text-[#8B7355] opacity-80">
              <svg viewBox="0 0 64 64" className="w-full h-full">
                <circle cx="32" cy="32" r="30" fill="none" stroke="currentColor" strokeWidth="1"/>
                <path d="M32,8 L36,28 L32,32 L28,28 Z" fill="currentColor"/>
                <text x="32" y="12" textAnchor="middle" fontSize="8" fill="currentColor">N</text>
                <text x="52" y="36" textAnchor="middle" fontSize="6" fill="currentColor">E</text>
                <text x="32" y="56" textAnchor="middle" fontSize="6" fill="currentColor">S</text>
                <text x="12" y="36" textAnchor="middle" fontSize="6" fill="currentColor">W</text>
              </svg>
            </div>

            {/* Scale indicator */}
            <div className="absolute bottom-4 right-4 bg-black/60 px-3 py-2 rounded text-white text-xs">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-0.5 bg-white"></div>
                <span>1 km</span>
              </div>
            </div>

            {/* Map Locations */}
            {locations.map((location, index) => (
              <motion.button
                key={location.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-10"
                style={{ left: `${location.x}%`, top: `${location.y}%` }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedLocation(location)}
              >
                <div className="relative">
                  <div className="w-12 h-12 bg-[#e9b872] rounded-full flex items-center justify-center text-[#0f1b15] shadow-lg border-2 border-[#a3c9a8] group-hover:bg-[#a3c9a8] transition-all duration-300">
                    {location.icon}
                  </div>
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#0f1b15] text-[#e9b872] px-2 py-1 rounded text-xs font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                    {location.name}
                  </div>
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-[#e9b872]"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.button>
            ))}
          </div>

          {/* Legend */}
          <div className="p-6 bg-[#0f1b15]/80 border-t border-[#2c4c3b]">
            <h3 className="text-[#e9b872] font-bold mb-4 flex items-center">
              <Info className="mr-2 h-5 w-5" />
              Map Legend
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
              {locations.map((location) => (
                <div key={location.id} className="flex items-center space-x-2 text-sm">
                  <div className="w-6 h-6 bg-[#e9b872] rounded-full flex items-center justify-center text-[#0f1b15]">
                    {React.cloneElement(location.icon as React.ReactElement, { className: "h-3 w-3" })}
                  </div>
                  <span>{location.name}</span>
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
                      <div className="w-16 h-16 bg-[#e9b872] rounded-full flex items-center justify-center text-[#0f1b15] mr-4">
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
