
import React, { useState } from 'react';
import { MapPin, Trees, Mountain, Waves, Home, Flame, Fish, Search } from 'lucide-react';

const HatchetInteractiveMap = () => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  const locations = [
    {
      id: 'crash-site',
      name: 'Plane Crash Site',
      x: 15,
      y: 25,
      icon: MapPin,
      color: 'text-red-500',
      description: 'Where Brian\'s journey begins after the pilot\'s heart attack',
      details: 'The small Cessna 406 crashes into the Canadian wilderness, leaving 13-year-old Brian as the sole survivor.'
    },
    {
      id: 'lake',
      name: 'L-Shaped Lake',
      x: 35,
      y: 40,
      icon: Waves,
      color: 'text-blue-500',
      description: 'The central water source where Brian finds fish and builds his shelter',
      details: 'This lake becomes Brian\'s lifeline, providing water, fish, and a landmark for navigation.'
    },
    {
      id: 'shelter',
      name: 'Rock Shelter',
      x: 45,
      y: 35,
      icon: Home,
      color: 'text-yellow-600',
      description: 'Brian\'s makeshift home built into a rocky overhang',
      details: 'Using his hatchet and natural materials, Brian creates a secure shelter that protects him from weather and animals.'
    },
    {
      id: 'fire-spot',
      name: 'First Fire',
      x: 47,
      y: 38,
      icon: Flame,
      color: 'text-orange-500',
      description: 'Where Brian discovers fire-making with his hatchet and stone',
      details: 'After days of frustration, Brian learns to create sparks by striking his hatchet against stone.'
    },
    {
      id: 'berry-patch',
      name: 'Berry Patches',
      x: 25,
      y: 60,
      icon: Trees,
      color: 'text-purple-500',
      description: 'Wild raspberry and other berry bushes that provide crucial nutrition',
      details: 'These berry patches become Brian\'s first reliable food source, though he learns to be careful of bears.'
    },
    {
      id: 'fishing-spot',
      name: 'Fishing Areas',
      x: 30,
      y: 45,
      icon: Fish,
      color: 'text-teal-500',
      description: 'Prime fishing locations where Brian catches fish for survival',
      details: 'Brian develops fishing skills using makeshift spears and eventually his hands to catch fish.'
    },
    {
      id: 'ridge',
      name: 'High Ridge',
      x: 65,
      y: 20,
      icon: Mountain,
      color: 'text-gray-600',
      description: 'Elevated area for scouting and signal fires',
      details: 'From this vantage point, Brian can survey the wilderness and eventually spot rescue aircraft.'
    },
    {
      id: 'rescue-spot',
      name: 'Rescue Location',
      x: 70,
      y: 55,
      icon: Search,
      color: 'text-green-500',
      description: 'Where Brian is finally spotted and rescued after 54 days',
      details: 'A fur trader\'s plane spots Brian\'s signal fire and lands to rescue him after nearly two months in the wilderness.'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-green-50 to-green-100 p-8 rounded-xl shadow-lg">
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-bold text-green-800 mb-2">Brian's Wilderness Journey</h3>
        <p className="text-green-700">Interactive map of key locations from Hatchet</p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Map Container */}
        <div className="lg:w-2/3">
          <div 
            className="relative w-full bg-gradient-to-br from-green-200 via-green-300 to-blue-200 rounded-lg overflow-hidden shadow-inner"
            style={{ 
              height: '500px',
              backgroundImage: `
                radial-gradient(circle at 35% 40%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 70% 30%, rgba(34, 197, 94, 0.4) 0%, transparent 40%),
                radial-gradient(circle at 20% 70%, rgba(34, 197, 94, 0.3) 0%, transparent 30%)
              `
            }}
          >
            {/* Forest pattern overlay */}
            <div className="absolute inset-0 opacity-20">
              {[...Array(30)].map((_, i) => (
                <Trees 
                  key={i}
                  className="absolute text-green-800"
                  style={{
                    left: `${Math.random() * 90}%`,
                    top: `${Math.random() * 90}%`,
                    transform: `rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random() * 0.5})`,
                    fontSize: `${12 + Math.random() * 8}px`
                  }}
                />
              ))}
            </div>

            {/* Interactive Locations */}
            {locations.map((location) => {
              const IconComponent = location.icon;
              const isSelected = selectedLocation === location.id;
              const isHovered = hoveredLocation === location.id;
              
              return (
                <div
                  key={location.id}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-200 ${
                    isSelected || isHovered ? 'scale-125 z-20' : 'scale-100 z-10'
                  }`}
                  style={{ left: `${location.x}%`, top: `${location.y}%` }}
                  onClick={() => setSelectedLocation(location.id)}
                  onMouseEnter={() => setHoveredLocation(location.id)}
                  onMouseLeave={() => setHoveredLocation(null)}
                >
                  <div className={`
                    p-3 rounded-full bg-white shadow-lg border-2 transition-all duration-200
                    ${isSelected ? 'border-yellow-400 shadow-xl' : 'border-gray-200'}
                    ${isHovered ? 'shadow-lg' : ''}
                    hover:shadow-xl
                  `}>
                    <IconComponent className={`h-6 w-6 ${location.color}`} />
                  </div>
                  
                  {/* Location label */}
                  <div className={`
                    absolute top-full mt-2 left-1/2 transform -translate-x-1/2 
                    bg-white px-2 py-1 rounded shadow-lg text-xs font-medium whitespace-nowrap
                    transition-opacity duration-200
                    ${isHovered || isSelected ? 'opacity-100' : 'opacity-0'}
                  `}>
                    {location.name}
                  </div>
                </div>
              );
            })}

            {/* Compass */}
            <div className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg">
              <div className="text-xs font-bold text-center">
                <div className="text-red-500">N</div>
                <div className="flex justify-between items-center my-1 text-gray-600">
                  <span>W</span>
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>E</span>
                </div>
                <div className="text-gray-600">S</div>
              </div>
            </div>

            {/* Scale indicator */}
            <div className="absolute bottom-4 left-4 bg-white p-2 rounded shadow-lg text-xs">
              <div className="font-semibold mb-1 text-black">Scale</div>
              <div className="flex items-center text-black">
                <div className="w-8 h-0.5 bg-black mr-2"></div>
                <span>~5 miles</span>
              </div>
            </div>
          </div>
        </div>

        {/* Location Details Panel */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-lg p-6 h-full">
            <h4 className="text-lg font-bold text-gray-800 mb-4">Location Details</h4>
            
            {selectedLocation ? (
              (() => {
                const location = locations.find(l => l.id === selectedLocation);
                if (!location) return null;
                const IconComponent = location.icon;
                
                return (
                  <div>
                    <div className="flex items-center mb-3">
                      <IconComponent className={`h-8 w-8 ${location.color} mr-3`} />
                      <h5 className="text-xl font-semibold text-gray-800">{location.name}</h5>
                    </div>
                    <p className="text-gray-600 mb-3">{location.description}</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{location.details}</p>
                  </div>
                );
              })()
            ) : (
              <div className="text-center text-gray-500">
                <MapPin className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                <p>Click on any location marker to learn more about Brian's survival journey.</p>
              </div>
            )}

            {/* Legend */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h5 className="font-semibold text-gray-800 mb-3">Map Legend</h5>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-black">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <span>Crash & Emergency Sites</span>
                </div>
                <div className="flex items-center text-black">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span>Water Sources</span>
                </div>
                <div className="flex items-center text-black">
                  <div className="w-3 h-3 bg-yellow-600 rounded-full mr-2"></div>
                  <span>Shelter & Camp</span>
                </div>
                <div className="flex items-center text-black">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                  <span>Food Sources</span>
                </div>
                <div className="flex items-center text-black">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span>Rescue Location</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HatchetInteractiveMap;
