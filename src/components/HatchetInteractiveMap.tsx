
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
  detailedAnalysis: string;
  symbolism: string;
  characterDevelopment: string;
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
      description: 'This is where it all began - Brian\'s terrifying introduction to the wilderness when the pilot had a heart attack and the plane crashed into the lake. The crash happened suddenly and without warning, throwing Brian from his comfortable life as a city kid into a fight for survival.',
      quote: '"The plane had gone down into the water and he had somehow pulled himself out."',
      importance: 'The crash site represents the end of Brian\'s old life and the beginning of his survival journey. It\'s the moment everything changed forever.',
      detailedAnalysis: 'The plane crash serves as the inciting incident that transforms Brian from a dependent teenager into someone who must learn to survive on his own. Paulsen uses this location to establish the isolation and danger that will define Brian\'s experience. The fact that the plane sinks into the lake creates both immediate danger and long-term consequences, as Brian will later need to dive down to retrieve the survival pack. This location also represents Brian\'s connection to the outside world - it contains the radio that could save him, but it\'s literally submerged and out of reach for most of the story.',
      symbolism: 'The crash site symbolizes the violent separation between Brian\'s old life and his new reality. The submerged plane represents his buried past and the civilization he\'s lost. Water, as an element, often represents rebirth in literature, and Brian\'s emergence from the lake after the crash can be seen as his symbolic birth into a new life.',
      characterDevelopment: 'At the crash site, we see Brian at his most vulnerable and afraid. He\'s still thinking like a city kid, panicking and not yet developed the survival instincts that will keep him alive. This location shows us Brian\'s starting point so we can measure how much he grows throughout his ordeal.'
    },
    {
      id: 'shelter',
      name: 'Brian\'s Shelter',
      x: 45,
      y: 50,
      icon: <Tent className="h-5 w-5" />,
      title: 'The Rock Shelter',
      description: 'Brian found this natural shelter formed by a rock overhang near the lake. This became his home for 54 days, providing protection from the elements and wild animals. The shelter faced east, giving Brian morning sunlight and a view of the lake where he could watch for planes and monitor the weather.',
      quote: '"It was a good place, he thought. A good place to be."',
      importance: 'The shelter represents safety and Brian\'s first step toward making the wilderness livable. It becomes his base of operations and the center of his survival efforts.',
      detailedAnalysis: 'The rock shelter is Brian\'s first major survival decision, and it demonstrates his growing ability to think practically about his situation. Paulsen describes how Brian considers multiple factors: protection from rain and wind, proximity to water, defensibility against animals, and visibility for potential rescue planes. The shelter becomes more than just protection - it becomes Brian\'s home, and he personalizes it by organizing his few possessions and creating specific areas for different activities. The morning sun that hits the shelter provides both warmth and a sense of hope, while the view of the lake keeps him connected to the possibility of rescue.',
      symbolism: 'The shelter represents Brian\'s first attempt to create order and safety in the chaotic wilderness. It symbolizes humanity\'s fundamental need for security and belonging. The fact that it\'s made from natural materials shows Brian\'s growing harmony with his environment.',
      characterDevelopment: 'Choosing and improving the shelter shows Brian\'s evolution from reactive survival to proactive planning. He begins to think long-term about his situation rather than just reacting to immediate dangers. This is where we first see Brian starting to accept that his rescue might not come quickly.'
    },
    {
      id: 'fire-site',
      name: 'First Fire',
      x: 50,
      y: 45,
      icon: <Flame className="h-5 w-5" />,
      title: 'Where Brian Made Fire',
      description: 'The spot where Brian finally succeeded in making fire using his hatchet and birch bark - a turning point in his survival. After days of failed attempts and growing desperation, Brian discovered that striking his hatchet against the rock wall created sparks that could ignite the fine birch bark tinder he had prepared.',
      quote: '"I have fire, he thought. I have fire."',
      importance: 'Fire changed everything for Brian - it meant warmth, cooked food, protection from animals, and most importantly, hope. It represented his mastery over his environment.',
      detailedAnalysis: 'The creation of fire marks Brian\'s transformation from victim to survivor. Paulsen builds tremendous tension around Brian\'s struggles to make fire, showing his repeated failures and growing frustration. When Brian finally succeeds, it\'s through a combination of observation, experimentation, and persistence - qualities that define his character growth. The fire becomes central to Brian\'s daily routine: he must constantly tend it, gather fuel, and protect it from rain. This responsibility gives structure to his days and represents his growing competence in wilderness survival.',
      symbolism: 'Fire is one of humanity\'s oldest symbols of civilization and knowledge. Brian\'s ability to create fire represents his evolution from helpless child to capable human being. The fire also symbolizes hope - its light pushes back the darkness both literally and metaphorically.',
      characterDevelopment: 'Making fire represents Brian\'s first major triumph over his environment. It boosts his confidence and proves to himself that he can learn and adapt. The fire also connects him to his ancestors and to the fundamental human ability to survive through intelligence and tool use.'
    },
    {
      id: 'berry-patch',
      name: 'Berry Patch',
      x: 70,
      y: 35,
      icon: <TreePine className="h-5 w-5" />,
      title: 'The Berry Patch',
      description: 'Brian discovered these gut cherries that made him violently sick at first, but later became an important food source once he learned to eat them in moderation. The berry patch was located about a quarter mile from his shelter, requiring careful navigation to find again. The area was rich with wildlife, and Brian often saw birds and small animals feeding on the same berries.',
      quote: '"Gut cherries, he thought. That\'s what they are. Gut cherries."',
      importance: 'This taught Brian that nature could provide food, but he had to learn what was safe to eat and in what quantities. It was his first lesson in wilderness nutrition.',
      detailedAnalysis: 'The berry patch represents Brian\'s first encounter with the complex relationship between humans and wild food sources. Paulsen uses this experience to show how survival requires not just finding food, but understanding it. Brian\'s initial gorging on the berries and subsequent illness teaches him about moderation and the importance of gradual dietary changes. The patch becomes a regular part of Brian\'s foraging routine, and he learns to time his visits for when the berries are ripest. He also observes which animals eat the berries, using this knowledge to validate their safety.',
      symbolism: 'The berry patch symbolizes the double-edged nature of the wilderness - it can provide sustenance, but it can also harm those who don\'t understand its rules. The berries represent the knowledge Brian must acquire to truly survive.',
      characterDevelopment: 'Brian\'s experience with the berries shows his growing wisdom and self-control. He learns from his mistakes and develops the patience to eat carefully rather than desperately. This location marks his evolution from someone who takes without thinking to someone who observes and learns.'
    },
    {
      id: 'survival-pack',
      name: 'Survival Pack',
      x: 20,
      y: 40,
      icon: <Box className="h-5 w-5" />,
      title: 'The Survival Pack Location',
      description: 'After a tornado partially exposed the submerged plane, Brian made the dangerous decision to dive into the murky lake water to retrieve the survival pack. The pack was located in the tail section of the plane, requiring Brian to hold his breath and navigate the dark, confined space of the crashed aircraft. This was one of the most physically and emotionally challenging tasks Brian faced during his ordeal.',
      quote: '"There it was. The survival pack."',
      importance: 'The survival pack contained the emergency transmitter that ultimately led to Brian\'s rescue, along with food, tools, and other supplies that made his final days in the wilderness more comfortable.',
      detailedAnalysis: 'Retrieving the survival pack represents Brian\'s most dangerous and courageous act in the wilderness. Paulsen builds intense suspense around this scene, emphasizing the physical dangers of diving into the lake and the psychological challenge of entering the plane where the pilot\'s body remains. Brian\'s decision to attempt this rescue shows how much he has changed - the scared boy from the beginning of the story would never have attempted such a dangerous task. The pack itself becomes a symbol of the thin line between civilization and wilderness - it contains both life-saving technology and luxury items that seem almost absurd in Brian\'s survival context.',
      symbolism: 'The survival pack represents the promise and burden of civilization. While it contains items that can help Brian survive, it also reminds him of the world he\'s lost. The emergency transmitter inside symbolizes hope and connection to the outside world.',
      characterDevelopment: 'Brian\'s willingness to risk his life for the pack shows his growth in courage and determination. He has learned to take calculated risks and push through fear when necessary. The successful retrieval of the pack proves to himself that he can accomplish difficult tasks through persistence and bravery.'
    },
    {
      id: 'restricted-area',
      name: 'Dangerous Area',
      x: 75,
      y: 65,
      icon: <Ban className="h-5 w-5" />,
      title: 'Restricted Wilderness Area',
      description: 'A dangerous area with steep cliffs and unstable terrain that Brian learned to avoid during his survival. This region was characterized by loose rocks, sudden drop-offs, and areas where a fall could be fatal. Brian discovered this area while exploring early in his stay and quickly realized that some parts of the wilderness were simply too dangerous to risk entering, no matter what resources they might contain.',
      quote: '"He would have to be more careful, think more carefully."',
      importance: 'This area taught Brian the importance of being cautious and observant in the wilderness. It showed him that survival sometimes means knowing when NOT to take risks.',
      detailedAnalysis: 'The dangerous area serves as a crucial lesson in risk assessment and the limits of exploration. Paulsen uses this location to demonstrate that the wilderness contains genuine threats that cannot be overcome through determination alone. Brian\'s encounter with this area forces him to develop better judgment about which risks are worth taking and which should be avoided. The area also serves as a physical boundary to Brian\'s world, reminding him that even in his 54-day stay, there are parts of the wilderness he never fully explored or understood.',
      symbolism: 'This restricted area symbolizes the ultimate power and danger of nature. It represents the limits of human control and the importance of respecting natural forces that are beyond our ability to master.',
      characterDevelopment: 'Brian\'s decision to avoid this area shows his growing wisdom and mature judgment. He learns that true survival skills include knowing when to retreat and when to respect dangers that cannot be overcome. This represents a crucial shift from reckless bravery to intelligent caution.'
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
            
            {/* Enhanced Terrain Background */}
            <div className="absolute inset-0">
              <svg width="100%" height="100%" viewBox="0 0 800 600" className="opacity-40">
                <defs>
                  {/* Enhanced Tree Pattern */}
                  <pattern id="treePattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                    <circle cx="25" cy="30" r="15" fill="#2D5016" opacity="0.8"/>
                    <rect x="22" y="35" width="6" height="12" fill="#8B4513" opacity="0.9"/>
                    <circle cx="70" cy="45" r="12" fill="#228B22" opacity="0.7"/>
                    <rect x="68" y="50" width="4" height="10" fill="#8B4513" opacity="0.9"/>
                    <circle cx="95" cy="20" r="10" fill="#32CD32" opacity="0.6"/>
                    <rect x="93" y="25" width="4" height="8" fill="#8B4513" opacity="0.9"/>
                    <circle cx="45" cy="80" r="8" fill="#2D5016" opacity="0.7"/>
                    <rect x="43" y="85" width="4" height="6" fill="#8B4513" opacity="0.9"/>
                  </pattern>
                  
                  {/* Enhanced Trail Pattern */}
                  <pattern id="trailPattern" x="0" y="0" width="250" height="250" patternUnits="userSpaceOnUse">
                    <path d="M 30,125 Q 125,100 220,125 Q 200,145 100,145 Q 50,135 30,125" 
                          stroke="#D2B48C" strokeWidth="5" fill="none" opacity="0.7"/>
                    <path d="M 125,30 Q 145,125 125,220 Q 105,200 125,100 Q 135,50 125,30" 
                          stroke="#CD853F" strokeWidth="4" fill="none" opacity="0.6"/>
                  </pattern>
                  
                  {/* Enhanced Rock Pattern */}
                  <pattern id="rockPattern" x="0" y="0" width="180" height="180" patternUnits="userSpaceOnUse">
                    <ellipse cx="40" cy="50" rx="18" ry="10" fill="#696969" opacity="0.8"/>
                    <ellipse cx="120" cy="90" rx="25" ry="15" fill="#708090" opacity="0.7"/>
                    <ellipse cx="80" cy="140" rx="15" ry="8" fill="#778899" opacity="0.6"/>
                    <ellipse cx="150" cy="40" rx="12" ry="7" fill="#2F4F4F" opacity="0.7"/>
                  </pattern>

                  {/* Ground Texture Pattern */}
                  <pattern id="groundTexture" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <rect width="100" height="100" fill="#8FBC8F" opacity="0.3"/>
                    <circle cx="20" cy="30" r="2" fill="#654321" opacity="0.5"/>
                    <circle cx="60" cy="70" r="1.5" fill="#8B4513" opacity="0.6"/>
                    <circle cx="80" cy="20" r="1" fill="#A0522D" opacity="0.4"/>
                  </pattern>
                </defs>
                
                {/* Apply enhanced patterns */}
                <rect width="100%" height="100%" fill="url(#groundTexture)"/>
                <rect width="100%" height="100%" fill="url(#treePattern)"/>
                <rect width="100%" height="100%" fill="url(#trailPattern)"/>
                <rect width="100%" height="100%" fill="url(#rockPattern)"/>
              </svg>
            </div>

            {/* Contour Lines */}
            <div className="absolute inset-0">
              <svg width="100%" height="100%" viewBox="0 0 800 600" className="opacity-30">
                <path d="M 50,200 Q 200,180 400,200 Q 600,220 750,200" 
                      stroke="#2F4F4F" strokeWidth="1" fill="none"/>
                <path d="M 100,350 Q 250,330 450,350 Q 650,370 800,350" 
                      stroke="#2F4F4F" strokeWidth="1" fill="none"/>
                <path d="M 0,450 Q 150,430 350,450 Q 550,470 700,450" 
                      stroke="#2F4F4F" strokeWidth="1" fill="none"/>
              </svg>
            </div>

            {/* Enhanced Hills with more realistic shapes */}
            <div className="absolute inset-0">
              <svg width="100%" height="100%" viewBox="0 0 800 600">
                <path d="M 0,320 Q 150,280 300,300 Q 450,320 600,290 Q 750,270 800,310 L 800,600 L 0,600 Z" 
                      fill="url(#hillGradient)" opacity="0.4"/>
                <path d="M 0,420 Q 100,380 250,400 Q 400,420 550,390 Q 700,370 800,410 L 800,600 L 0,600 Z" 
                      fill="url(#hillGradient2)" opacity="0.3"/>
                
                <defs>
                  <linearGradient id="hillGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#9ACD32" stopOpacity="0.7"/>
                    <stop offset="100%" stopColor="#6B8E23" stopOpacity="0.4"/>
                  </linearGradient>
                  <linearGradient id="hillGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#8FBC8F" stopOpacity="0.6"/>
                    <stop offset="100%" stopColor="#556B2F" stopOpacity="0.3"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* The Lake - Enhanced with more realistic features */}
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
                  <radialGradient id="lakeGradient" cx="45%" cy="35%" r="65%">
                    <stop offset="0%" stopColor="#87CEEB" stopOpacity="0.95"/>
                    <stop offset="30%" stopColor="#4682B4" stopOpacity="0.9"/>
                    <stop offset="70%" stopColor="#2F4F4F" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#1e3a3a" stopOpacity="0.9"/>
                  </radialGradient>
                  <filter id="waterRipple">
                    <feTurbulence baseFrequency="0.03" numOctaves="3"/>
                    <feDisplacementMap in="SourceGraphic" scale="1.5"/>
                  </filter>
                </defs>
                
                <path d="M 15,42 Q 25,20 45,22 Q 65,25 85,40 Q 92,55 88,72 Q 80,85 60,88 Q 40,90 25,82 Q 12,70 10,55 Q 8,45 15,42 Z" 
                      fill="url(#lakeGradient)" 
                      stroke="#2F4F4F" 
                      strokeWidth="0.8"
                      filter="url(#waterRipple)"/>
                
                {/* Enhanced water depth and features */}
                <ellipse cx="45" cy="52" rx="18" ry="12" fill="#1e3a3a" opacity="0.4"/>
                <ellipse cx="55" cy="62" rx="10" ry="8" fill="#1e3a3a" opacity="0.3"/>
                <ellipse cx="35" cy="45" rx="8" ry="5" fill="#2F4F4F" opacity="0.3"/>
                
                {/* Shoreline details */}
                <path d="M 20,50 Q 30,48 40,52" stroke="#8B4513" strokeWidth="0.5" fill="none" opacity="0.6"/>
                <path d="M 70,65 Q 75,62 82,68" stroke="#8B4513" strokeWidth="0.5" fill="none" opacity="0.6"/>
              </svg>
            </motion.div>

            {/* Enhanced Winding Trails */}
            <svg width="100%" height="100%" viewBox="0 0 800 600" className="absolute inset-0 opacity-70">
              <path d="M 60,320 Q 180,280 320,300 Q 460,330 580,310 Q 680,290 750,320" 
                    stroke="#D2B48C" strokeWidth="8" fill="none" strokeDasharray="12,6" opacity="0.8"/>
              <path d="M 320,120 Q 420,180 480,160 Q 580,140 680,200 Q 720,220 760,180" 
                    stroke="#CD853F" strokeWidth="6" fill="none" strokeDasharray="10,5" opacity="0.7"/>
              <path d="M 100,480 Q 200,460 300,480 Q 400,500 500,480 Q 600,460 700,480" 
                    stroke="#D2B48C" strokeWidth="5" fill="none" strokeDasharray="8,4" opacity="0.6"/>
            </svg>

            {/* Enhanced Compass Rose */}
            <div className="absolute top-4 left-4 w-20 h-20 text-[#8B4513] opacity-95 bg-white/25 rounded-full p-3 border border-white/30">
              <svg viewBox="0 0 64 64" className="w-full h-full">
                <circle cx="32" cy="32" r="30" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="32" cy="32" r="25" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
                <path d="M32,6 L36,28 L32,32 L28,28 Z" fill="#DC143C"/>
                <path d="M32,58 L36,36 L32,32 L28,36 Z" fill="currentColor"/>
                <path d="M6,32 L28,28 L32,32 L28,36 Z" fill="currentColor" opacity="0.7"/>
                <path d="M58,32 L36,28 L32,32 L36,36 Z" fill="currentColor" opacity="0.7"/>
                <text x="32" y="12" textAnchor="middle" fontSize="8" fill="currentColor" fontWeight="bold">N</text>
                <text x="52" y="36" textAnchor="middle" fontSize="6" fill="currentColor">E</text>
                <text x="32" y="56" textAnchor="middle" fontSize="6" fill="currentColor">S</text>
                <text x="12" y="36" textAnchor="middle" fontSize="6" fill="currentColor">W</text>
              </svg>
            </div>

            {/* Enhanced Scale Bar */}
            <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-lg shadow-lg border border-gray-300">
              <div className="flex items-center space-x-4 text-gray-700">
                <div className="flex items-center space-x-1">
                  <div className="w-10 h-1.5 bg-gray-800"></div>
                  <div className="w-10 h-1.5 bg-white border border-gray-800"></div>
                  <div className="w-10 h-1.5 bg-gray-800"></div>
                </div>
                <span className="text-sm font-semibold">1 km</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">Canadian Wilderness</div>
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

        {/* Enhanced Location Detail Modal */}
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
                className="fixed inset-4 md:inset-8 lg:inset-16 bg-[#162821] border border-[#2c4c3b] rounded-xl shadow-2xl z-50 overflow-hidden"
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

                    <div className="space-y-8">
                      <div>
                        <h4 className="text-lg font-bold text-white mb-3">What Happened Here</h4>
                        <p className="text-gray-300 leading-relaxed text-base">{selectedLocation.description}</p>
                      </div>

                      <div className="bg-[#0f1b15] p-6 rounded-lg border-l-4 border-[#e9b872]">
                        <h4 className="text-lg font-bold text-[#a3c9a8] mb-3">Quote from the Book</h4>
                        <blockquote className="text-gray-300 italic text-base leading-relaxed">{selectedLocation.quote}</blockquote>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-white mb-3">Why This Place Matters</h4>
                        <p className="text-gray-300 leading-relaxed text-base">{selectedLocation.importance}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-white mb-3">Detailed Analysis</h4>
                        <p className="text-gray-300 leading-relaxed text-base">{selectedLocation.detailedAnalysis}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-white mb-3">Symbolism and Themes</h4>
                        <p className="text-gray-300 leading-relaxed text-base">{selectedLocation.symbolism}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-white mb-3">Character Development</h4>
                        <p className="text-gray-300 leading-relaxed text-base">{selectedLocation.characterDevelopment}</p>
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
