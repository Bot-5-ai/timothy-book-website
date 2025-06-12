
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, X, Info, Box, Tent, TreePine, Flame, Ban, Droplets } from 'lucide-react';

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
      x: 60,
      y: 45,
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
      x: 65,
      y: 50,
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
      x: 75,
      y: 30,
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
      id: 'lake',
      name: 'The Lake',
      x: 40,
      y: 55,
      icon: <Droplets className="h-5 w-5" />,
      title: 'The Central Lake',
      description: 'The pristine wilderness lake that became the center of Brian\'s world. This body of water provided drinking water, fish for food, and served as his primary landmark for navigation. The lake was where the plane crashed, where Brian learned to fish, and where he would scan the skies daily hoping for rescue planes to spot him.',
      quote: '"The lake was everything - his highway, his refrigerator, his hope."',
      importance: 'The lake represents both life and death in Brian\'s story. It nearly killed him in the crash, but then sustained him throughout his ordeal.',
      detailedAnalysis: 'The lake serves as the geographical and symbolic heart of the story. Paulsen uses it to represent the duality of nature - both nurturing and dangerous. The clear, clean water provides Brian with his most essential need, while the fish beneath its surface become his primary protein source once he learns to catch them. The lake also serves as Brian\'s calendar and clock, as he measures the passing days by the changing light on its surface and uses it to track weather patterns.',
      symbolism: 'Water traditionally symbolizes life, purification, and renewal. For Brian, the lake represents all of these things - it\'s where he\'s reborn as a survivor, where he cleanses himself of his old, dependent self, and where he finds the sustenance to continue living.',
      characterDevelopment: 'Brian\'s relationship with the lake shows his growing understanding of nature. Initially, he sees it as an obstacle or danger, but gradually he learns to read its moods, understand its rhythms, and work with it rather than against it.'
    },
    {
      id: 'survival-pack',
      name: 'Survival Pack',
      x: 22,
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
      x: 80,
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
    <section className="py-20 bg-gradient-to-b from-[#2d5016] via-[#4a7c59] to-[#6b8e23] relative overflow-hidden">
      {/* Atmospheric Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 800 600">
          <defs>
            <pattern id="pineBranches" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path d="M 20,50 Q 30,30 40,50 Q 50,70 60,50 M 120,80 Q 130,60 140,80 Q 150,100 160,80" 
                    stroke="#1a3d0c" strokeWidth="2" fill="none" opacity="0.6"/>
              <path d="M 80,120 Q 90,100 100,120 Q 110,140 120,120 M 40,160 Q 50,140 60,160 Q 70,180 80,160" 
                    stroke="#1a3d0c" strokeWidth="2" fill="none" opacity="0.4"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pineBranches)"/>
        </svg>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-4 text-[#f4e6a1] drop-shadow-lg">
            Brian's Wilderness Journey
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#d4af37] to-[#8b7355] mx-auto mb-6 rounded-full"></div>
          <p className="text-[#e8d5b7] max-w-2xl mx-auto text-lg drop-shadow-sm">
            Navigate through the untamed Canadian wilderness where Brian survived for 54 days. 
            Click on each hand-drawn location to discover the pivotal moments of his journey.
          </p>
        </div>

        <div className="relative bg-[#f5f1e8] rounded-3xl shadow-2xl overflow-hidden border-8 border-[#8b4513] border-opacity-60" 
             style={{
               background: `
                 radial-gradient(circle at 20% 30%, rgba(139, 69, 19, 0.1) 0%, transparent 50%),
                 radial-gradient(circle at 80% 70%, rgba(101, 67, 33, 0.08) 0%, transparent 50%),
                 linear-gradient(45deg, #f5f1e8 0%, #e8dcc0 25%, #f0e5d0 50%, #e8dcc0 75%, #f5f1e8 100%)
               `,
               boxShadow: 'inset 0 0 100px rgba(139, 69, 19, 0.15), 0 20px 40px rgba(0,0,0,0.3)',
               backgroundSize: '200px 200px, 150px 150px, 100% 100%'
             }} 
             data-aos="zoom-in">
          
          {/* Parchment Texture Overlay */}
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 800 600">
              <defs>
                <filter id="parchmentTexture">
                  <feTurbulence baseFrequency="0.9" numOctaves="4" result="noise"/>
                  <feColorMatrix in="noise" type="saturate" values="0"/>
                  <feComponentTransfer>
                    <feFuncA type="discrete" tableValues="0.1 0.2 0.3 0.1 0.2"/>
                  </feComponentTransfer>
                  <feComposite operator="multiply" in2="SourceGraphic"/>
                </filter>
              </defs>
              <rect width="100%" height="100%" fill="#8b7355" filter="url(#parchmentTexture)" opacity="0.3"/>
            </svg>
          </div>

          {/* Weathered Edges */}
          <div className="absolute inset-0 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 800 600">
              <defs>
                <filter id="weatheredEdge">
                  <feTurbulence baseFrequency="0.02" numOctaves="3"/>
                  <feDisplacementMap in="SourceGraphic" scale="3"/>
                </filter>
              </defs>
              <path d="M 0,0 Q 50,10 100,5 Q 200,15 300,8 Q 500,12 700,6 Q 750,8 800,0 L 800,20 L 0,20 Z" 
                    fill="#8b4513" opacity="0.4" filter="url(#weatheredEdge)"/>
              <path d="M 0,580 Q 50,590 100,585 Q 200,595 300,588 Q 500,592 700,586 Q 750,588 800,580 L 800,600 L 0,600 Z" 
                    fill="#8b4513" opacity="0.4" filter="url(#weatheredEdge)"/>
            </svg>
          </div>

          {/* Hand-Drawn Map Container */}
          <div className="relative w-full h-96 md:h-[600px] overflow-hidden p-8">
            
            {/* Base Terrain with Parchment Style */}
            <div className="absolute inset-8 rounded-2xl" 
                 style={{
                   background: 'radial-gradient(circle at 40% 30%, #7fb069 0%, #8fbc8f 30%, #6b8e23 60%, #556b2f 100%)'
                 }}>
              
              {/* Hand-Drawn Texture Overlay */}
              <svg width="100%" height="100%" viewBox="0 0 800 600" className="absolute inset-0 opacity-30">
                <defs>
                  <filter id="roughPaper">
                    <feTurbulence baseFrequency="0.04" numOctaves="4" result="noise"/>
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="2"/>
                  </filter>
                  
                  <pattern id="handDrawnTrees" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                    <g filter="url(#roughPaper)">
                      <circle cx="20" cy="20" r="8" fill="#2d5016" opacity="0.7"/>
                      <rect x="18" y="25" width="4" height="8" fill="#8b4513" opacity="0.8"/>
                      <circle cx="60" cy="35" r="6" fill="#228b22" opacity="0.6"/>
                      <rect x="58" y="38" width="4" height="6" fill="#8b4513" opacity="0.8"/>
                      <circle cx="45" cy="60" r="5" fill="#32cd32" opacity="0.5"/>
                      <rect x="43" y="62" width="4" height="5" fill="#8b4513" opacity="0.8"/>
                    </g>
                  </pattern>
                  
                  <pattern id="handDrawnGrass" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                    <g opacity="0.4">
                      <path d="M 10,50 Q 12,40 10,45 Q 8,50 10,50" stroke="#4a7c59" strokeWidth="1" fill="none"/>
                      <path d="M 25,45 Q 27,35 25,40 Q 23,45 25,45" stroke="#4a7c59" strokeWidth="1" fill="none"/>
                      <path d="M 40,55 Q 42,45 40,50 Q 38,55 40,55" stroke="#4a7c59" strokeWidth="1" fill="none"/>
                      <path d="M 50,40 Q 52,30 50,35 Q 48,40 50,40" stroke="#4a7c59" strokeWidth="1" fill="none"/>
                    </g>
                  </pattern>
                </defs>
                
                <rect width="100%" height="100%" fill="url(#handDrawnTrees)"/>
                <rect width="100%" height="100%" fill="url(#handDrawnGrass)"/>
              </svg>

              {/* Hand-Drawn Rolling Hills */}
              <svg width="100%" height="100%" viewBox="0 0 800 600" className="absolute inset-0">
                <defs>
                  <linearGradient id="hillShading" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#9acd32" stopOpacity="0.6"/>
                    <stop offset="50%" stopColor="#7fb069" stopOpacity="0.4"/>
                    <stop offset="100%" stopColor="#556b2f" stopOpacity="0.3"/>
                  </linearGradient>
                </defs>
                
                {/* Background Hills with Hand-Drawn Style */}
                <path d="M 0,350 Q 100,320 200,340 Q 300,360 400,330 Q 500,300 600,320 Q 700,340 800,310 L 800,600 L 0,600 Z" 
                      fill="url(#hillShading)" 
                      stroke="#6b8e23" 
                      strokeWidth="2" 
                      strokeDasharray="3,2"
                      opacity="0.7"/>
                
                <path d="M 0,450 Q 150,420 300,440 Q 450,460 600,430 Q 750,400 800,420 L 800,600 L 0,600 Z" 
                      fill="url(#hillShading)" 
                      opacity="0.5"/>
              </svg>

              {/* The Central Lake - Hand-Drawn Style */}
              <motion.div 
                className="absolute"
                style={{ 
                  left: '25%', 
                  top: '40%', 
                  width: '40%', 
                  height: '30%' 
                }}
                initial={{ scale: 0, rotate: -5 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1.2, delay: 0.5, type: "spring" }}
              >
                <svg width="100%" height="100%" viewBox="0 0 100 100" className="drop-shadow-xl">
                  <defs>
                    <radialGradient id="lakeWater" cx="45%" cy="35%" r="70%">
                      <stop offset="0%" stopColor="#87ceeb" stopOpacity="0.95"/>
                      <stop offset="30%" stopColor="#4682b4" stopOpacity="0.9"/>
                      <stop offset="70%" stopColor="#2f4f4f" stopOpacity="0.85"/>
                      <stop offset="100%" stopColor="#1e3a3a" stopOpacity="0.9"/>
                    </radialGradient>
                    
                    <filter id="lakeTexture">
                      <feTurbulence baseFrequency="0.02" numOctaves="2"/>
                      <feDisplacementMap in="SourceGraphic" scale="1"/>
                    </filter>
                  </defs>
                  
                  {/* Lake Shape - Irregular, Hand-Drawn */}
                  <path d="M 18,45 Q 28,22 48,25 Q 68,28 85,42 Q 90,58 86,74 Q 78,87 58,89 Q 38,91 23,83 Q 12,72 10,57 Q 8,47 18,45 Z" 
                        fill="url(#lakeWater)" 
                        stroke="#2f4f4f" 
                        strokeWidth="1.5"
                        strokeDasharray="2,1"
                        filter="url(#lakeTexture)"/>
                  
                  {/* Lake Depth Variations */}
                  <ellipse cx="50" cy="55" rx="15" ry="10" fill="#1e3a3a" opacity="0.4"/>
                  <ellipse cx="38" cy="48" rx="8" ry="6" fill="#2f4f4f" opacity="0.3"/>
                  
                  {/* Hand-Drawn Shoreline Details */}
                  <path d="M 22,52 Q 32,50 42,54" stroke="#8b7355" strokeWidth="1.5" fill="none" opacity="0.7"/>
                  <path d="M 72,67 Q 77,64 83,70" stroke="#8b7355" strokeWidth="1.5" fill="none" opacity="0.7"/>
                  
                  {/* Water Ripples */}
                  <ellipse cx="45" cy="50" rx="12" ry="3" fill="none" stroke="#b0e0e6" strokeWidth="0.5" opacity="0.6"/>
                  <ellipse cx="55" cy="62" rx="8" ry="2" fill="none" stroke="#b0e0e6" strokeWidth="0.5" opacity="0.5"/>
                </svg>
              </motion.div>

              {/* Treasure Map Trail - Dotted Line from Edge to Shelter */}
              <svg width="100%" height="100%" viewBox="0 0 800 600" className="absolute inset-0">
                <defs>
                  <filter id="trailGlow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Main treasure trail from map edge to shelter */}
                <path d="M 50,50 Q 120,80 200,120 Q 300,140 400,180 Q 450,200 480,270" 
                      stroke="#d4af37" 
                      strokeWidth="4" 
                      fill="none" 
                      strokeDasharray="12,8" 
                      opacity="0.9"
                      filter="url(#trailGlow)"
                      className="animate-pulse"/>
                
                {/* Secondary trails */}
                <path d="M 480,270 Q 520,280 560,240 Q 580,220 600,180" 
                      stroke="#cd853f" 
                      strokeWidth="3" 
                      fill="none" 
                      strokeDasharray="8,6" 
                      opacity="0.7"/>
                
                {/* X marks near shelter */}
                <g transform="translate(475, 265)" className="animate-pulse">
                  <path d="M -8,-8 L 8,8 M 8,-8 L -8,8" stroke="#d4af37" strokeWidth="3" opacity="0.8"/>
                  <circle cx="0" cy="0" r="12" fill="none" stroke="#d4af37" strokeWidth="2" opacity="0.6"/>
                </g>
              </svg>

              {/* Hand-Drawn Rocky Ridge */}
              <div className="absolute right-8 top-16 w-32 h-24">
                <svg width="100%" height="100%" viewBox="0 0 100 80">
                  <defs>
                    <linearGradient id="rockShading" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#d3d3d3"/>
                      <stop offset="50%" stopColor="#a9a9a9"/>
                      <stop offset="100%" stopColor="#696969"/>
                    </linearGradient>
                  </defs>
                  
                  <path d="M 10,70 Q 20,40 35,45 Q 50,30 65,40 Q 80,25 90,45 L 90,70 Z" 
                        fill="url(#rockShading)" 
                        stroke="#556b2f" 
                        strokeWidth="1.5" 
                        strokeDasharray="2,1"/>
                  
                  <path d="M 25,65 Q 35,50 45,55 Q 55,45 65,55 L 65,65 Z" 
                        fill="#a9a9a9" 
                        opacity="0.8"/>
                </svg>
              </div>

              {/* Hand-Drawn Berry Patches */}
              <div className="absolute top-20 right-16 w-20 h-16">
                <svg width="100%" height="100%" viewBox="0 0 80 60">
                  <g opacity="0.8">
                    <circle cx="15" cy="15" r="2" fill="#8b0000"/>
                    <circle cx="25" cy="20" r="2" fill="#dc143c"/>
                    <circle cx="35" cy="18" r="2" fill="#b22222"/>
                    <circle cx="45" cy="25" r="2" fill="#8b0000"/>
                    <circle cx="20" cy="35" r="2" fill="#dc143c"/>
                    <circle cx="40" cy="40" r="2" fill="#b22222"/>
                    <path d="M 10,10 Q 15,5 20,10 M 30,15 Q 35,10 40,15 M 15,30 Q 20,25 25,30" 
                          stroke="#228b22" strokeWidth="1" fill="none"/>
                  </g>
                </svg>
              </div>

              {/* Enhanced Decorative Compass Rose */}
              <div className="absolute top-6 left-6 w-28 h-28 text-[#8b4513] bg-[#f5f1e8] rounded-full p-4 border-3 border-[#d4af37] shadow-xl" 
                   style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))' }}>
                <svg viewBox="0 0 64 64" className="w-full h-full">
                  {/* Ornate outer ring */}
                  <circle cx="32" cy="32" r="30" fill="none" stroke="#d4af37" strokeWidth="2"/>
                  <circle cx="32" cy="32" r="26" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4,2"/>
                  <circle cx="32" cy="32" r="22" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
                  
                  {/* Ornate North Arrow - Red */}
                  <path d="M32,6 L38,28 L32,32 L26,28 Z" fill="#dc143c" stroke="#8b4513" strokeWidth="0.8"/>
                  <path d="M32,58 L38,36 L32,32 L26,36 Z" fill="currentColor"/>
                  <path d="M6,32 L28,26 L32,32 L28,38 Z" fill="currentColor" opacity="0.7"/>
                  <path d="M58,32 L36,26 L32,32 L36,38 Z" fill="currentColor" opacity="0.7"/>
                  
                  {/* Decorative cardinal points */}
                  <text x="32" y="12" textAnchor="middle" fontSize="8" fill="#dc143c" fontWeight="bold" fontFamily="serif">N</text>
                  <text x="52" y="36" textAnchor="middle" fontSize="6" fill="currentColor" fontFamily="serif">E</text>
                  <text x="32" y="56" textAnchor="middle" fontSize="6" fill="currentColor" fontFamily="serif">S</text>
                  <text x="12" y="36" textAnchor="middle" fontSize="6" fill="currentColor" fontFamily="serif">W</text>
                  
                  {/* Center ornament */}
                  <circle cx="32" cy="32" r="4" fill="#d4af37"/>
                  <circle cx="32" cy="32" r="2" fill="currentColor"/>
                  
                  {/* Decorative flourishes */}
                  <path d="M 18,18 Q 25,25 18,32 M 46,18 Q 39,25 46,32 M 18,46 Q 25,39 18,32 M 46,46 Q 39,39 46,32" 
                        stroke="#d4af37" strokeWidth="0.8" fill="none" opacity="0.8"/>
                </svg>
              </div>

              {/* Enhanced Rustic Scale Bar */}
              <div className="absolute bottom-6 right-6 bg-[#f5f1e8] backdrop-blur-sm px-8 py-6 rounded-xl shadow-xl border-3 border-[#d4af37]"
                   style={{ 
                     background: 'linear-gradient(135deg, #f5f1e8 0%, #e8dcc0 100%)',
                     filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))'
                   }}>
                <div className="flex items-center space-x-4 text-[#8b4513]">
                  <div className="flex items-center space-x-1">
                    <div className="w-16 h-3 bg-[#8b4513] rounded-sm transform rotate-1"></div>
                    <div className="w-16 h-3 bg-[#f5f1e8] border-2 border-[#8b4513] rounded-sm transform -rotate-1"></div>
                    <div className="w-16 h-3 bg-[#8b4513] rounded-sm transform rotate-1"></div>
                  </div>
                  <span className="text-lg font-bold font-serif transform -rotate-1">1 km</span>
                </div>
                <div className="text-sm text-[#6b4e3d] mt-2 font-serif italic transform rotate-1">~ Canadian Wilderness ~</div>
              </div>

              {/* Hand-Drawn Location Markers */}
              {locations.map((location, index) => (
                <motion.button
                  key={location.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-20"
                  style={{ left: `${location.x}%`, top: `${location.y}%` }}
                  initial={{ scale: 0, opacity: 0, rotate: -10 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.3, type: "spring" }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedLocation(location)}
                >
                  <div className="relative">
                    {/* Hand-Drawn Marker Base with Treasure Map Style */}
                    <div className="w-16 h-16 bg-[#f5f1e8] rounded-full flex items-center justify-center text-[#8b4513] shadow-xl border-3 border-[#d4af37] group-hover:bg-[#fff8e7] transition-all duration-300"
                         style={{
                           boxShadow: '0 6px 12px rgba(139, 69, 19, 0.4), inset 0 2px 4px rgba(245, 241, 232, 0.8)',
                           transform: `rotate(${Math.sin(index) * 5}deg)`
                         }}>
                      {React.cloneElement(location.icon as React.ReactElement, { className: "h-7 w-7" })}
                    </div>
                    
                    {/* Hand-Drawn Label with Parchment Style */}
                    <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-[#8b4513]/95 text-[#f5f1e8] px-4 py-2 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap font-serif border-2 border-[#d4af37]"
                         style={{ 
                           transform: `translateX(-50%) rotate(${Math.sin(index + 1) * 3}deg)`,
                           filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))'
                         }}>
                      {location.name}
                    </div>
                    
                    {/* Enhanced Pulsing Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-3 border-[#d4af37]/60"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0, 0.8] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                    
                    {/* Hand-Drawn Shadow with perspective */}
                    <div className="absolute inset-1 rounded-full bg-[#8b4513]/30 transform translate-y-2 translate-x-1 -z-10 blur-md"
                         style={{ transform: `translate(2px, 4px) rotate(${Math.sin(index) * 3}deg)` }}></div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Enhanced Legend with Treasure Map Style */}
          <div className="p-8 bg-gradient-to-r from-[#f5f1e8]/98 to-[#e8dcc0]/98 border-t-4 border-[#d4af37] border-dashed">
            <h3 className="text-[#8b4513] font-bold mb-6 flex items-center text-xl font-serif">
              <Info className="mr-3 h-7 w-7 text-[#d4af37]" />
              ~ Wilderness Map Legend ~
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-[#6b4e3d]">
              {locations.map((location, index) => (
                <div key={location.id} className="flex items-center space-x-4 text-sm hover:text-[#8b4513] transition-colors duration-200 cursor-pointer p-3 rounded-lg hover:bg-[#f5f1e8]/70 border border-[#d4af37]/30"
                     style={{ transform: `rotate(${Math.sin(index) * 1}deg)` }}>
                  <div className="w-12 h-12 bg-[#f5f1e8] rounded-full flex items-center justify-center text-[#8b4513] border-2 border-[#d4af37] shadow-md transform rotate-2">
                    {React.cloneElement(location.icon as React.ReactElement, { className: "h-6 w-6" })}
                  </div>
                  <span className="font-semibold font-serif">{location.name}</span>
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
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedLocation(null)}
              />
              <motion.div
                className="fixed inset-4 md:inset-8 lg:inset-16 bg-[#f5f1e8] border-4 border-[#d4af37] rounded-2xl shadow-2xl z-50 overflow-hidden"
                style={{ 
                  background: 'linear-gradient(135deg, #f5f1e8 0%, #e8dcc0 100%)',
                  filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.3))'
                }}
                initial={{ scale: 0.8, opacity: 0, rotate: -2 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                exit={{ scale: 0.8, opacity: 0, rotate: 2 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
              >
                <div className="relative h-full flex flex-col">
                  <button
                    onClick={() => setSelectedLocation(null)}
                    className="absolute top-6 right-6 z-10 w-12 h-12 bg-[#8b4513] hover:bg-[#d4af37] text-[#f5f1e8] hover:text-[#8b4513] rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg border-2 border-[#d4af37]"
                  >
                    <X className="h-6 w-6" />
                  </button>

                  <div className="p-8 flex-1 overflow-y-auto">
                    <div className="flex items-center mb-8">
                      <div className="w-24 h-24 bg-[#f5f1e8] rounded-full flex items-center justify-center text-[#8b4513] mr-6 border-4 border-[#d4af37] shadow-lg transform rotate-3">
                        {React.cloneElement(selectedLocation.icon as React.ReactElement, { className: "h-12 w-12" })}
                      </div>
                      <div>
                        <h3 className="text-3xl md:text-4xl font-merriweather font-bold text-[#8b4513] mb-2">
                          {selectedLocation.title}
                        </h3>
                        <p className="text-[#6b4e3d] font-semibold text-lg font-serif">{selectedLocation.name}</p>
                      </div>
                    </div>

                    <div className="space-y-8">
                      <div>
                        <h4 className="text-xl font-bold text-[#8b4513] mb-4 font-serif">What Happened Here</h4>
                        <p className="text-[#5d4e37] leading-relaxed text-base">{selectedLocation.description}</p>
                      </div>

                      <div className="bg-[#e8dcc0] p-6 rounded-xl border-l-4 border-[#d4af37] shadow-inner">
                        <h4 className="text-xl font-bold text-[#6b4e3d] mb-4 font-serif">Quote from the Book</h4>
                        <blockquote className="text-[#5d4e37] italic text-base leading-relaxed font-serif">{selectedLocation.quote}</blockquote>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-[#8b4513] mb-4 font-serif">Why This Place Matters</h4>
                        <p className="text-[#5d4e37] leading-relaxed text-base">{selectedLocation.importance}</p>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-[#8b4513] mb-4 font-serif">Detailed Analysis</h4>
                        <p className="text-[#5d4e37] leading-relaxed text-base">{selectedLocation.detailedAnalysis}</p>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-[#8b4513] mb-4 font-serif">Symbolism and Themes</h4>
                        <p className="text-[#5d4e37] leading-relaxed text-base">{selectedLocation.symbolism}</p>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-[#8b4513] mb-4 font-serif">Character Development</h4>
                        <p className="text-[#5d4e37] leading-relaxed text-base">{selectedLocation.characterDevelopment}</p>
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
