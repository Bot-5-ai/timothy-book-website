
import React, { useState } from 'react';
import { MapPin, Trees, Flame, Home, Waves } from 'lucide-react';

const HatchetInteractiveMap = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const locations = [
    {
      id: 1,
      name: "Crash Site",
      x: 65,
      y: 25,
      icon: "💥",
      description: "Where the plane crashed into the L-shaped lake. Brian's survival journey begins here.",
      details: "The Cessna 406 went down near the shore, partially submerged. Brian managed to retrieve the survival pack from the tail section after learning to dive.",
      chapter: "Chapters 1-3"
    },
    {
      id: 2,
      name: "The Shelter",
      x: 45,
      y: 40,
      icon: "🏠",
      description: "Brian's lean-to shelter built against a rock wall near the lake.",
      details: "Constructed from branches and pine boughs, this shelter protected Brian from wind and rain. The overhang provided crucial protection during storms.",
      chapter: "Chapter 7"
    },
    {
      id: 3,
      name: "First Fire",
      x: 35,
      y: 55,
      icon: "🔥",
      description: "Where Brian first successfully created fire using his hatchet and stone.",
      details: "After discovering sparks from striking his hatchet against stone, Brian learned to nurture tinder into flame. This fire spot became central to his survival.",
      chapter: "Chapter 8"
    },
    {
      id: 4,
      name: "Berry Patch",
      x: 20,
      y: 30,
      icon: "🫐",
      description: "The raspberry patch where Brian first found food and encountered the bear.",
      details: "These gut cherries provided Brian's first substantial meal but also taught him about food poisoning. The bear encounter here was a crucial learning experience.",
      chapter: "Chapter 6"
    },
    {
      id: 5,
      name: "Wolf Den",
      x: 80,
      y: 60,
      icon: "🐺",
      description: "The area where Brian encountered wolves during his exploration.",
      details: "Brian's encounter with the wolf pack taught him about mutual respect in nature. The wolves showed him that not all wild animals were threats.",
      chapter: "Chapter 15"
    }
  ];

  const legendItems = [
    { icon: <Trees className="h-5 w-5 text-green-500" />, label: "Dense Forest", color: "bg-green-800" },
    { icon: <Waves className="h-5 w-5 text-blue-500" />, label: "L-Shaped Lake", color: "bg-blue-600" },
    { icon: <MapPin className="h-5 w-5 text-red-500" />, label: "Key Locations", color: "bg-red-600" },
    { icon: <Flame className="h-5 w-5 text-orange-500" />, label: "Fire Sites", color: "bg-orange-600" },
    { icon: <Home className="h-5 w-5 text-amber-500" />, label: "Shelter Areas", color: "bg-amber-600" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-green-900 via-green-800 to-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-cabin font-bold mb-4 text-amber-400">
            Interactive Wilderness Map
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Explore the Canadian wilderness where Brian's survival story unfolds. Click on locations to learn more about key events.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Map Area */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-green-900/50 to-blue-900/30 rounded-xl p-6 border border-amber-500/30 backdrop-blur-sm">
                <div className="relative bg-gradient-to-br from-green-700 via-green-600 to-blue-500 rounded-lg h-96 overflow-hidden shadow-2xl">
                  {/* Forest texture overlay */}
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='3'/%3E%3Ccircle cx='53' cy='53' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                  }}></div>
                  
                  {/* Lake */}
                  <div className="absolute bottom-0 right-0 w-48 h-32 bg-blue-400 rounded-tl-3xl opacity-80"></div>
                  <div className="absolute bottom-8 right-16 w-20 h-24 bg-blue-500 rounded-lg opacity-70"></div>
                  
                  {/* Rivers */}
                  <div className="absolute bottom-16 left-1/4 w-2 h-20 bg-blue-400 transform rotate-45 opacity-60"></div>
                  <div className="absolute top-1/3 right-1/3 w-1 h-16 bg-blue-300 transform -rotate-12 opacity-60"></div>
                  
                  {/* Location markers */}
                  {locations.map((location) => (
                    <div
                      key={location.id}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                      style={{ left: `${location.x}%`, top: `${location.y}%` }}
                      onClick={() => setSelectedLocation(location)}
                    >
                      <div className="relative">
                        <div className="text-2xl animate-bounce group-hover:scale-110 transition-transform duration-200 bg-white/90 rounded-full p-1 shadow-lg backdrop-blur-sm">
                          {location.icon}
                        </div>
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900/90 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 backdrop-blur-sm">
                          {location.name}
                        </div>
                      </div>
                      {/* Pulse effect */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-amber-400/30 rounded-full animate-ping"></div>
                    </div>
                  ))}
                  
                  {/* Compass */}
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-full p-3">
                    <div className="text-white text-sm font-bold">
                      <div className="text-center mb-1">N</div>
                      <div className="flex justify-between items-center">
                        <span>W</span>
                        <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span>E</span>
                      </div>
                      <div className="text-center mt-1">S</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Legend and Info Panel */}
            <div className="space-y-6">
              {/* Legend */}
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 rounded-xl p-6 border border-amber-500/30 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-amber-400 mb-4 flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Map Legend
                </h3>
                <div className="space-y-3">
                  {legendItems.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded ${item.color}`}></div>
                      {item.icon}
                      <span className="text-gray-300 text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location Info */}
              {selectedLocation && (
                <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded-xl p-6 border border-amber-500/40 backdrop-blur-sm animate-fade-in">
                  <h3 className="text-xl font-bold text-amber-400 mb-3 flex items-center">
                    <span className="text-2xl mr-2">{selectedLocation.icon}</span>
                    {selectedLocation.name}
                  </h3>
                  <p className="text-gray-300 mb-3">{selectedLocation.description}</p>
                  <p className="text-gray-400 text-sm mb-3">{selectedLocation.details}</p>
                  <div className="bg-amber-600/20 rounded-lg p-3">
                    <span className="text-amber-300 font-semibold text-sm">{selectedLocation.chapter}</span>
                  </div>
                </div>
              )}

              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 rounded-xl p-6 border border-amber-500/30 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-amber-400 mb-4">Survival Stats</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Days Survived:</span>
                    <span className="text-white font-bold">54 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Temperature Range:</span>
                    <span className="text-white font-bold">40°F - 85°F</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Lake Size:</span>
                    <span className="text-white font-bold">~2 miles long</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Forest Type:</span>
                    <span className="text-white font-bold">Boreal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HatchetInteractiveMap;
