
import React, { useState, useRef, useEffect } from 'react';

const HatchetInteractiveMap = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const mapRef = useRef(null);

  const locations = [
    {
      id: 1,
      name: "Crash Site",
      x: 45,
      y: 25,
      icon: "📍",
      description: "The remote wilderness location where Brian's plane crashed after the pilot suffered a heart attack. This marks the beginning of Brian's incredible survival journey.",
      details: "The crash site represents the moment Brian's life changed forever. The wreckage of the small Cessna 406 bush plane lies scattered in the dense Canadian wilderness, far from any civilization. Brian was thrown clear of the aircraft during the crash, sustaining minor injuries but finding himself completely alone with nothing but the clothes on his back and a hatchet - a gift from his mother. The crash site serves as both his first shelter attempt and a constant reminder of his isolation. The plane's emergency transmitter was damaged in the crash, cutting off his only hope of immediate rescue. This location symbolizes the beginning of Brian's transformation from a city boy into a wilderness survivor."
    },
    {
      id: 2,
      name: "Emergency Shelter",
      x: 60,
      y: 35,
      icon: "🏠",
      description: "Brian's first makeshift shelter built against a rock overhang, providing basic protection from the elements and wildlife.",
      details: "After wandering aimlessly for hours following the crash, Brian discovers this natural rock formation that becomes his first real shelter. The overhang provides protection from rain and wind, while the nearby cave-like depression offers a sense of security. Brian learns to reinforce the shelter using branches, leaves, and debris from the forest floor. This location becomes his base of operations for the first several weeks, where he stores his limited supplies and attempts to signal for rescue. The shelter represents Brian's first successful adaptation to wilderness life, though it's not perfect - he still struggles with keeping warm, dry, and safe from curious wildlife. It's here that Brian first truly grasps the reality of his situation and begins to understand that rescue may not come quickly."
    },
    {
      id: 3,
      name: "Berry Patch",
      x: 30,
      y: 50,
      icon: "🫐",
      description: "A cluster of raspberry and blueberry bushes that provided Brian with his first reliable food source, teaching him about foraging.",
      details: "This berry patch becomes Brian's salvation during his most desperate hunger. Located about a quarter-mile from his shelter, the patch contains a mix of wild raspberries, blueberries, and other edible berries. Brian's discovery of this food source marks a turning point in his survival story - it's his first successful foraging attempt and gives him the energy and hope he needs to continue. However, his first encounter with the berries also teaches him hard lessons about wilderness survival. He initially eats too many and becomes violently ill, learning the importance of moderation and gradually introducing new foods to his system. The berry patch also attracts wildlife, including bears, which forces Brian to be more cautious and aware of his surroundings. This location represents Brian's growing understanding of the forest ecosystem and his place within it."
    },
    {
      id: 4,
      name: "Fire Making Site",
      x: 55,
      y: 45,
      icon: "🔥",
      description: "The location where Brian finally succeeds in making fire using his hatchet and a piece of flint, a pivotal moment in his survival.",
      details: "This site marks one of the most crucial achievements in Brian's survival journey. After days of failed attempts and growing desperation, Brian finally masters the art of fire-making here using his hatchet to strike sparks from a piece of flint he discovered. The location is strategically chosen - close enough to his shelter for convenience, but positioned to avoid setting the forest ablaze. The fire ring Brian creates becomes the heart of his survival efforts, providing warmth, light, protection from insects and predators, and most importantly, a way to cook food and purify water. The psychological impact of having fire cannot be overstated - it gives Brian a sense of control over his environment and connects him to his primitive ancestors. This location also becomes his signal fire site, where he maintains a constant smoke signal hoping to attract rescue aircraft. The mastery of fire represents Brian's evolution from helpless victim to capable survivor."
    },
    {
      id: 5,
      name: "Fishing Spot",
      x: 40,
      y: 60,
      icon: "🎣",
      description: "A productive fishing area along the lake where Brian learns to catch fish, becoming his primary protein source.",
      details: "Located along a shallow inlet of the L-shaped lake, this fishing spot becomes Brian's most reliable source of protein. Initially, Brian struggles to catch fish with makeshift spears and his bare hands, but eventually develops effective techniques using a bow and arrow he crafts from birch wood and his shoelaces. The spot is ideal because the water is shallow enough to see the fish clearly, and the rocky bottom provides good footing. Brian learns to read the water, understanding fish behavior and the best times to hunt. He discovers that early morning and evening are most productive, and that patience is essential. This location teaches Brian about the abundance that nature can provide to those who understand its rhythms. The fishing spot also becomes a place of meditation and reflection for Brian, where he often sits and thinks about his family, his situation, and his growing confidence in his ability to survive. It represents his mastery of procuring food and his deep connection to the natural world."
    },
    {
      id: 6,
      name: "Wolf Territory",
      x: 75,
      y: 30,
      icon: "🚫",
      description: "A dangerous area that Brian learns to avoid after encountering wolves, teaching him about wilderness hazards.",
      details: "This heavily forested area becomes a crucial lesson in wilderness awareness and respect for wildlife. Brian's encounter with wolves here teaches him that the forest has its own rules and hierarchies that he must understand and respect. The wolves are not necessarily aggressive toward Brian, but their presence makes it clear that this is their domain. Brian learns to read the signs of wolf activity - tracks, scat, territorial markings, and the distinctive howling that carries through the forest at night. This experience teaches him about the importance of avoiding certain areas, especially during hunting times or when wolves are protecting their young. The encounter also reinforces Brian's understanding that he is not the apex predator in this environment and must remain constantly vigilant. This location represents the wildness and danger that always lurk in the background of Brian's survival story, reminding him that nature is both provider and potential destroyer. It's a lesson in humility and the importance of coexisting with, rather than trying to dominate, the natural world."
    }
  ];

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };

  useEffect(() => {
    const AOS = window.AOS;
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-green-50 to-green-100">
      <div className="text-center mb-16" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-4 text-green-800">
          Brian's Journey in Hatchet
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Explore the key locations that shaped Brian's incredible 54-day survival experience in the Canadian wilderness.
        </p>
        <div className="w-20 h-1 bg-green-500 mx-auto mt-6"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Interactive Map */}
          <div className="relative" data-aos="fade-right">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-green-200">
              <svg
                ref={mapRef}
                width="100%"
                height="auto"
                viewBox="0 0 100 80"
                preserveAspectRatio="xMidYMid meet"
              >
                <image
                  href="/lovable-uploads/map-hatchet-book.jpg"
                  width="100"
                  height="80"
                />
                {locations.map((location) => (
                  <g
                    key={location.id}
                    className="location-marker"
                    transform={`translate(${location.x}, ${location.y})`}
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleLocationClick(location)}
                  >
                    <circle cx="0" cy="0" r="2" fill="green" />
                    <text x="5" y="2" fontSize="4" fill="green">
                      {location.icon}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </div>

          {/* Location Information Panel */}
          <div className="space-y-6" data-aos="fade-left">
            {selectedLocation ? (
              <div className="bg-white p-8 rounded-xl shadow-lg border border-green-200">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">{selectedLocation.icon}</span>
                  <h3 className="text-2xl font-bold text-green-800">{selectedLocation.name}</h3>
                </div>
                <p className="text-green-700 mb-4 text-lg leading-relaxed">{selectedLocation.description}</p>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <p className="text-green-800 leading-relaxed">{selectedLocation.details}</p>
                </div>
              </div>
            ) : (
              <div className="bg-white p-8 rounded-xl shadow-lg border border-green-200">
                <h3 className="text-2xl font-bold text-green-800 mb-4">Explore Brian's Journey</h3>
                <p className="text-green-700 mb-6">
                  Click on any location marker to discover the crucial spots that shaped Brian's 54-day survival experience. Each location tells a story of adaptation, learning, and growth in the unforgiving Canadian wilderness.
                </p>
                <div className="space-y-3">
                  {locations.map((location) => (
                    <button
                      key={location.id}
                      onClick={() => setSelectedLocation(location)}
                      className="flex items-center p-3 w-full text-left rounded-lg border border-green-200 hover:bg-green-50 transition-colors"
                    >
                      <span className="text-2xl mr-3">{location.icon}</span>
                      <span className="text-green-800 font-medium">{location.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HatchetInteractiveMap;
