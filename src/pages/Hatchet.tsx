
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Axe, Compass, Tree, TreePine, Mountain, Water, Campfire } from 'lucide-react';

const Hatchet = () => {
  const [activeTab, setActiveTab] = useState('passage1');

  useEffect(() => {
    // Initialize animations and effects
    if (typeof window.AOS !== 'undefined') {
      window.AOS.init({
        duration: 1000,
        once: false
      });
    }

    // Add forest ambient sound effect
    const ambientSound = document.getElementById('ambient-sound');
    if (ambientSound instanceof HTMLAudioElement) {
      ambientSound.volume = 0.2;
    }
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });
    
    return () => {
      // Clean up event listeners
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0f1b15] text-gray-100 font-roboto">
      {/* Background ambient sound */}
      <audio id="ambient-sound" loop>
        <source src="https://soundbible.com/mp3/forest_ambient-Mike_Koenig-1145364729.mp3" type="audio/mpeg" />
      </audio>
      
      {/* Navigation */}
      <header className="py-4 px-6 bg-[#0a1510] border-b border-[#2c4c3b]/30 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Axe className="h-8 w-8 mr-3 text-[#e9b872]" />
            <h1 className="text-[#e9b872] text-2xl font-bold">Survival Literature</h1>
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-300 hover:text-[#e9b872] transition-colors">Home</Link>
            <Link to="/hatchet" className="text-[#e9b872] transition-colors">Hatchet</Link>
            <Link to="/our-final-invention" className="text-gray-300 hover:text-[#e9b872] transition-colors">AI Book</Link>
          </nav>
          
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-[#e9b872]">
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-[url('https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f1b15]"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-float opacity-70">
          <Axe className="h-10 w-10 text-[#e9b872]" />
        </div>
        
        <div className="absolute top-40 right-20 animate-float-delayed opacity-70">
          <Compass className="h-12 w-12 text-[#a3c9a8]" />
        </div>

        <div className="absolute bottom-40 left-30 animate-float-reverse opacity-70">
          <TreePine className="h-16 w-16 text-[#638b6d]/80" />
        </div>
        
        <div className="relative container mx-auto px-6 text-center z-10">
          <div className="mb-6 inline-block animate__animated animate__fadeIn">
            <Axe className="mx-auto h-12 w-12 text-[#e9b872] animate-pulse-light" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate__animated animate__fadeIn">
            <span className="text-[#e9b872]">HATCHET</span>
          </h1>
          
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-6 text-gray-300 animate__animated animate__fadeIn animate__delay-1s">
            A gripping tale of wilderness survival by Gary Paulsen
          </p>
          
          <div className="inline-block mb-10 p-2 px-6 backdrop-blur-md bg-[#1f3d2a]/50 text-[#a3c9a8] rounded-full text-sm font-mono border border-[#638b6d]/30 shadow-lg animate__animated animate__fadeIn animate__delay-2s">
            <span>"The most important rule of survival is staying calm."</span>
          </div>
          
          <div className="animate__animated animate__fadeInUp animate__delay-3s flex flex-wrap justify-center gap-4">
            <a href="#summary" className="px-6 py-3 bg-[#2c4c3b] text-white rounded-md font-medium hover:bg-[#3a5d4a] transition-all shadow-lg flex items-center group">
              <span className="relative z-10">Read Summary</span>
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-md"></span>
            </a>
            
            <a href="#buy" className="px-6 py-3 border-2 border-[#e9b872] text-[#e9b872] rounded-md font-medium hover:bg-[#e9b872]/20 transition-colors shadow-lg flex items-center">
              <i className="fas fa-book mr-2"></i> Purchase Book
            </a>
          </div>
        </div>
        
        {/* Animated scroll down indicator */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <a 
            href="#summary" 
            className="p-2 rounded-full bg-[#2c4c3b]/50 backdrop-blur-md text-[#a3c9a8] hover:text-[#e9b872] hover:bg-[#2c4c3b]/70 transition-colors focus:outline-none border border-[#638b6d]/30"
            aria-label="Scroll down"
          >
            <i className="fas fa-chevron-down text-2xl"></i>
          </a>
        </div>
      </section>
      
      {/* Book Summary */}
      <section id="summary" className="py-16 bg-[#0f1b15]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Book Summary
            </h2>
            <div className="w-24 h-1 bg-[#e9b872] mx-auto"></div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2" data-aos="fade-right">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Forest representing Hatchet's setting" 
                  className="rounded-lg shadow-xl border-4 border-[#2c4c3b] h-[500px] object-cover"
                />
                <div className="absolute -bottom-5 -right-5 bg-[#e9b872]/90 rounded-full p-3 shadow-xl">
                  <Axe className="h-10 w-10 text-[#0f1b15]" />
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2" data-aos="fade-left">
              <div className="bg-[#162821] p-8 rounded-lg border border-[#2c4c3b] shadow-lg">
                <h3 className="text-2xl font-bold mb-4 flex items-center text-[#e9b872]">
                  <Campfire className="text-orange-400 mr-3 h-6 w-6" />
                  Hatchet by Gary Paulsen
                </h3>
                
                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#638b6d]/50 to-transparent mb-6"></div>
                
                <p className="text-gray-300 mb-4">
                  "Hatchet" is a powerful coming-of-age novel about thirteen-year-old Brian Robeson who must learn to survive alone in the Canadian wilderness after a plane crash. Armed with only a hatchet given to him by his mother, Brian must overcome numerous challenges and learn to live off the land.
                </p>
                
                <p className="text-gray-300 mb-6">
                  Throughout his 54-day ordeal, Brian undergoes a profound transformation, developing resilience, self-reliance, and an appreciation for nature. The novel explores themes of survival, self-discovery, resilience, and humanity's relationship with the natural world.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <i className="fas fa-calendar-alt text-[#a3c9a8] mr-2"></i>
                    <span className="text-gray-300">Published: 1987</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-award text-[#a3c9a8] mr-2"></i>
                    <span className="text-gray-300">Newbery Honor</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-map-marked text-[#a3c9a8] mr-2"></i>
                    <span className="text-gray-300">Setting: Canadian wilderness</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-book text-[#a3c9a8] mr-2"></i>
                    <span className="text-gray-300">Genre: Young Adult Survival</span>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <div className="inline-flex items-center space-x-1 bg-[#2c4c3b]/60 px-4 py-2 rounded-full text-sm">
                    <i className="fas fa-star text-[#e9b872]"></i>
                    <i className="fas fa-star text-[#e9b872]"></i>
                    <i className="fas fa-star text-[#e9b872]"></i>
                    <i className="fas fa-star text-[#e9b872]"></i>
                    <i className="fas fa-star-half-alt text-[#e9b872]"></i>
                    <span className="ml-2 text-white">4.8/5 - Over 10,000 reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Plot, Setting, and Characters */}
      <section className="py-16 bg-[url('https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=60')] bg-fixed bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1b15] to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1b15] to-transparent"></div>
        
        <div className="relative container mx-auto px-6 z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plot Section */}
            <div className="bg-[#162821]/90 border border-[#2c4c3b] rounded-lg overflow-hidden shadow-xl" data-aos="fade-up" data-aos-delay="100">
              <div className="p-1 bg-gradient-to-r from-[#2c4c3b] to-[#e9b872]"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#2c4c3b] flex items-center justify-center mr-3">
                    <i className="fas fa-book-open text-[#e9b872]"></i>
                  </div>
                  <h3 className="text-xl font-bold text-[#e9b872]">The Plot</h3>
                </div>
                
                <div className="space-y-3 text-gray-300">
                  <p>
                    After his parents' divorce, Brian is traveling to visit his father in Canada when the small plane he's in crashes in the wilderness after the pilot suffers a heart attack.
                  </p>
                  <p>
                    Alone and with only his hatchet, Brian must learn how to survive in the wild. He faces numerous challenges including finding food, building shelter, and making fire.
                  </p>
                  <p>
                    Brian experiences several setbacks, including encounters with wildlife, a tornado that changes his circumstances, and the emotional weight of "The Secret" - his knowledge of his mother's affair.
                  </p>
                  <p>
                    Through perseverance and adaptation, Brian undergoes a profound transformation, both physically and mentally. After 54 days in the wilderness, he is eventually rescued when he recovers a survival pack from the plane.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Setting Section */}
            <div className="bg-[#162821]/90 border border-[#2c4c3b] rounded-lg overflow-hidden shadow-xl" data-aos="fade-up" data-aos-delay="200">
              <div className="p-1 bg-gradient-to-r from-[#e9b872] to-[#2c4c3b]"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#2c4c3b] flex items-center justify-center mr-3">
                    <Mountain className="h-5 w-5 text-[#e9b872]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#e9b872]">The Setting</h3>
                </div>
                
                <div className="space-y-3 text-gray-300">
                  <p>
                    <span className="font-bold text-[#a3c9a8]">Location:</span> The Canadian wilderness, specifically the North Woods of Canada, in a densely forested area with a lake.
                  </p>
                  <p>
                    <span className="font-bold text-[#a3c9a8]">Environment:</span> Dense forest surrounds a clear lake that becomes Brian's home. The area is populated with diverse wildlife including bears, wolves, moose, fish, birds, and various plants.
                  </p>
                  <p>
                    <span className="font-bold text-[#a3c9a8]">Time Period:</span> Contemporary setting (1980s when written), taking place during summer months.
                  </p>
                  <p>
                    <span className="font-bold text-[#a3c9a8]">Weather:</span> Brian experiences various weather conditions from pleasant summer days to violent storms, including a tornado that dramatically changes his circumstances.
                  </p>
                  <p>
                    <span className="font-bold text-[#a3c9a8]">Significance:</span> The wilderness setting serves as both antagonist and teacher, challenging Brian while also providing the means for his survival and transformation.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Characters Section */}
            <div className="bg-[#162821]/90 border border-[#2c4c3b] rounded-lg overflow-hidden shadow-xl" data-aos="fade-up" data-aos-delay="300">
              <div className="p-1 bg-gradient-to-r from-[#2c4c3b] to-[#e9b872]"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#2c4c3b] flex items-center justify-center mr-3">
                    <i className="fas fa-users text-[#e9b872]"></i>
                  </div>
                  <h3 className="text-xl font-bold text-[#e9b872]">The Characters</h3>
                </div>
                
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h4 className="text-[#a3c9a8] font-bold">Major Characters</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li><span className="font-bold">Brian Robeson</span> - The thirteen-year-old protagonist who must learn to survive alone</li>
                      <li><span className="font-bold">The Pilot</span> - Who suffers a fatal heart attack, leaving Brian alone</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-[#a3c9a8] font-bold">Minor Characters</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li><span className="font-bold">Brian's Mother</span> - Who gives him the hatchet before his journey</li>
                      <li><span className="font-bold">Brian's Father</span> - Who Brian was traveling to visit in Canada</li>
                      <li><span className="font-bold">The Man with Whom Brian's Mother Had an Affair</span> - Part of "The Secret" that weighs on Brian</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-[#a3c9a8] font-bold">Natural "Characters"</h4>
                    <p>The wilderness itself and its wildlife (bear, moose, wolf, porcupine) function almost as characters, challenging and teaching Brian throughout his journey.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Themes & Literary Devices */}
      <section className="py-16 bg-[#0f1b15]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Literary Analysis
            </h2>
            <div className="w-24 h-1 bg-[#e9b872] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Key Themes */}
            <div className="bg-[#162821] rounded-lg border border-[#2c4c3b] p-8 shadow-lg" data-aos="fade-right">
              <h3 className="text-2xl font-bold mb-6 text-[#e9b872] flex items-center">
                <i className="fas fa-lightbulb text-[#e9b872] mr-3"></i>
                Key Themes
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-[#0f1b15] rounded-lg border border-[#2c4c3b]/60">
                  <h4 className="font-bold text-[#a3c9a8] mb-2">Survival & Self-Reliance</h4>
                  <p className="text-gray-300">
                    The most prominent theme explores how Brian learns to provide for his own needs in the wilderness, developing practical skills and mental fortitude.
                  </p>
                </div>
                
                <div className="p-4 bg-[#0f1b15] rounded-lg border border-[#2c4c3b]/60">
                  <h4 className="font-bold text-[#a3c9a8] mb-2">Coming of Age & Transformation</h4>
                  <p className="text-gray-300">
                    Brian undergoes a profound physical and psychological change, maturing from a dependent city boy to a self-reliant young man with a deep connection to nature.
                  </p>
                </div>
                
                <div className="p-4 bg-[#0f1b15] rounded-lg border border-[#2c4c3b]/60">
                  <h4 className="font-bold text-[#a3c9a8] mb-2">Man vs. Nature</h4>
                  <p className="text-gray-300">
                    Brian's struggle against the wilderness highlights both the harshness of nature and its beauty, showing that nature is neither malevolent nor benevolent.
                  </p>
                </div>
                
                <div className="p-4 bg-[#0f1b15] rounded-lg border border-[#2c4c3b]/60">
                  <h4 className="font-bold text-[#a3c9a8] mb-2">Perseverance & Resilience</h4>
                  <p className="text-gray-300">
                    Through numerous setbacks and challenges, Brian demonstrates remarkable tenacity, adapting and pushing forward despite overwhelming odds.
                  </p>
                </div>
                
                <div className="p-4 bg-[#0f1b15] rounded-lg border border-[#2c4c3b]/60">
                  <h4 className="font-bold text-[#a3c9a8] mb-2">Dealing with Divorce & Family Conflict</h4>
                  <p className="text-gray-300">
                    Brian grapples with his parents' divorce and "The Secret" of his mother's affair, eventually learning to process these emotions in the wilderness.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Literary Devices */}
            <div className="bg-[#162821] rounded-lg border border-[#2c4c3b] p-8 shadow-lg" data-aos="fade-left">
              <h3 className="text-2xl font-bold mb-6 text-[#e9b872] flex items-center">
                <i className="fas fa-feather text-[#e9b872] mr-3"></i>
                Literary Devices
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-[#0f1b15] rounded-lg border border-[#2c4c3b]/60">
                  <h4 className="font-bold text-[#a3c9a8] mb-2">Symbolism</h4>
                  <p className="text-gray-300">
                    The hatchet symbolizes both survival and Brian's connection to civilization. The lake represents clarity and rebirth.
                  </p>
                </div>
                
                <div className="p-4 bg-[#0f1b15] rounded-lg border border-[#2c4c3b]/60">
                  <h4 className="font-bold text-[#a3c9a8] mb-2">Imagery</h4>
                  <p className="text-gray-300">
                    Paulsen uses vivid, sensory descriptions to immerse the reader in Brian's experiences, from the taste of wild berries to the sounds of the forest at night.
                  </p>
                </div>
                
                <div className="p-4 bg-[#0f1b15] rounded-lg border border-[#2c4c3b]/60">
                  <h4 className="font-bold text-[#a3c9a8] mb-2">Internal Monologue</h4>
                  <p className="text-gray-300">
                    The novel frequently uses Brian's thoughts to convey his emotional state and development, creating intimacy with the character.
                  </p>
                </div>
                
                <div className="p-4 bg-[#0f1b15] rounded-lg border border-[#2c4c3b]/60">
                  <h4 className="font-bold text-[#a3c9a8] mb-2">Foreshadowing</h4>
                  <p className="text-gray-300">
                    Early mentions of the hatchet and survival training foreshadow their importance later in the story.
                  </p>
                </div>
                
                <div className="p-4 bg-[#0f1b15] rounded-lg border border-[#2c4c3b]/60">
                  <h4 className="font-bold text-[#a3c9a8] mb-2">Repetition</h4>
                  <p className="text-gray-300">
                    Repeated phrases like "Secret" and "tough times don't last, but tough people do" emphasize key themes and Brian's mental state.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Passage Analysis */}
      <section className="py-16 bg-[#162821]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Passage Analysis
            </h2>
            <div className="w-24 h-1 bg-[#e9b872] mx-auto"></div>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Key excerpts from "Hatchet" with detailed literary analysis
            </p>
          </div>
          
          <div className="bg-[#0f1b15] border border-[#2c4c3b] rounded-lg shadow-xl overflow-hidden" data-aos="fade-up">
            <div className="mb-6 flex flex-wrap border-b border-[#2c4c3b]">
              <button 
                onClick={() => setActiveTab('passage1')} 
                className={`px-6 py-3 font-medium text-sm transition-all duration-300 flex items-center ${
                  activeTab === 'passage1' 
                    ? 'border-b-2 border-[#e9b872] text-[#e9b872] bg-[#2c4c3b]/30' 
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                <div className="flex items-center">
                  <i className="fas fa-fire mr-2"></i>
                  <span>Fire & Survival</span>
                  <span className="ml-2 px-1.5 py-0.5 text-xs rounded-full bg-[#2c4c3b]/60 text-[#a3c9a8]">p.49</span>
                </div>
              </button>
              
              <button 
                onClick={() => setActiveTab('passage2')} 
                className={`px-6 py-3 font-medium text-sm transition-all duration-300 flex items-center ${
                  activeTab === 'passage2' 
                    ? 'border-b-2 border-[#e9b872] text-[#e9b872] bg-[#2c4c3b]/30' 
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                <div className="flex items-center">
                  <i className="fas fa-sync-alt mr-2"></i>
                  <span>Transformation</span>
                  <span className="ml-2 px-1.5 py-0.5 text-xs rounded-full bg-[#2c4c3b]/60 text-[#a3c9a8]">p.153</span>
                </div>
              </button>
              
              <button 
                onClick={() => setActiveTab('passage3')} 
                className={`px-6 py-3 font-medium text-sm transition-all duration-300 flex items-center ${
                  activeTab === 'passage3' 
                    ? 'border-b-2 border-[#e9b872] text-[#e9b872] bg-[#2c4c3b]/30' 
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                <div className="flex items-center">
                  <i className="fas fa-lightbulb mr-2"></i>
                  <span>New Understanding</span>
                  <span className="ml-2 px-1.5 py-0.5 text-xs rounded-full bg-[#2c4c3b]/60 text-[#a3c9a8]">p.116</span>
                </div>
              </button>
            </div>
            
            <div className="p-8">
              {activeTab === 'passage1' && (
                <div className="animate__animated animate__fadeIn">
                  <div className="flex items-center mb-4">
                    <Campfire className="text-orange-400 mr-3 h-6 w-6" />
                    <h3 className="text-xl font-bold text-white">
                      Fire - The Turning Point
                    </h3>
                  </div>
                  
                  <div className="passage-card">
                    <blockquote className="backdrop-blur-sm bg-[#0a1510] border-l-4 border-orange-400 pl-5 py-4 mb-6 italic text-gray-200 rounded-r-lg">
                      "When he opened his eyes it was still there. The fire still burned, sending smoke up in a thick column through the trees. He had fire. He sat up, looked at it almost in disbelief. The flames had burned down, but the wood he had piled on had caught and was burning well now. He had fire. He scrambled to his knees and added more sticks to the flames, then larger branches and small logs. The hatchet had done it. A spark had caught in the bark and he had fire. All those hours of trying and trying, and finally he had fire. I have fire, he thought. I have fire."
                      <div className="text-right mt-2 text-sm text-orange-300">- Hatchet, Page 49</div>
                    </blockquote>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="space-y-3">
                        <h4 className="text-[#e9b872] font-bold text-lg">Analysis</h4>
                        <p className="text-gray-300">
                          This passage marks a crucial turning point in Brian's survival journey. The repetition of "He had fire" and "I have fire" emphasizes the monumental importance of this achievement.
                        </p>
                        <p className="text-gray-300">
                          The description shows both Brian's disbelief and his growing confidence. Fire represents not just warmth and protection, but Brian's first major triumph over nature and his increasing self-reliance.
                        </p>
                        <p className="text-gray-300">
                          Paulsen's simple, direct language mimics Brian's thought processes, creating an immediate connection between reader and protagonist during this pivotal moment.
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="text-[#a3c9a8] font-bold text-lg">Significance</h4>
                        <p className="text-gray-300">
                          This is the first major milestone in Brian's survival journey - gaining the ability to make fire gives him:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                          <li className="flex items-start">
                            <i className="fas fa-check-circle text-[#a3c9a8] mt-1 mr-2"></i>
                            <span>Protection from predators</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-check-circle text-[#a3c9a8] mt-1 mr-2"></i>
                            <span>A means to cook food and purify water</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-check-circle text-[#a3c9a8] mt-1 mr-2"></i>
                            <span>Psychological comfort and hope</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-check-circle text-[#a3c9a8] mt-1 mr-2"></i>
                            <span>The first concrete evidence that he can survive</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'passage2' && (
                <div className="animate__animated animate__fadeIn">
                  <div className="flex items-center mb-4">
                    <i className="fas fa-sync-alt text-[#a3c9a8] mr-3"></i>
                    <h3 className="text-xl font-bold text-white">
                      Brian's Transformation
                    </h3>
                  </div>
                  
                  <div className="passage-card">
                    <blockquote className="backdrop-blur-sm bg-[#0a1510] border-l-4 border-[#a3c9a8] pl-5 py-4 mb-6 italic text-gray-200 rounded-r-lg">
                      "He was not the same now—the Brian that stood and watched the wolf was completely changed. Time had come, time that he measured but didn't care about; time had come and he had changed. He was not the same and would never be again like he had been. That was one of the true things, the new things. And the truth was that he might be hurt, he might make mistakes, but he would not be caught off guard."
                      <div className="text-right mt-2 text-sm text-[#a3c9a8]">- Hatchet, Page 153</div>
                    </blockquote>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="space-y-3">
                        <h4 className="text-[#e9b872] font-bold text-lg">Analysis</h4>
                        <p className="text-gray-300">
                          This passage directly addresses the theme of transformation. Paulsen uses repetition ("he was not the same") to emphasize the permanence and profundity of Brian's change.
                        </p>
                        <p className="text-gray-300">
                          The encounter with the wolf represents a moment of mutual respect between Brian and the natural world. He has become part of the wilderness rather than just surviving within it.
                        </p>
                        <p className="text-gray-300">
                          The phrase "the true things, the new things" suggests Brian has gained wisdom and insight that transcends his immediate survival needs - he has developed a new philosophical outlook.
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="text-[#a3c9a8] font-bold text-lg">Significance</h4>
                        <p className="text-gray-300">
                          This moment represents the completion of Brian's psychological journey from:
                        </p>
                        <div className="flex items-center justify-center mb-4">
                          <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-[#2c4c3b] flex items-center justify-center mb-2">
                              <i className="fas fa-child text-[#e9b872] text-xl"></i>
                            </div>
                            <span className="text-xs text-gray-400">City Boy</span>
                          </div>
                          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#e9b872] to-transparent mx-4"></div>
                          <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-[#2c4c3b] flex items-center justify-center mb-2">
                              <i className="fas fa-mountain text-[#e9b872] text-xl"></i>
                            </div>
                            <span className="text-xs text-gray-400">Wilderness Survivor</span>
                          </div>
                        </div>
                        <p className="text-gray-300">
                          The passage marks Brian's integration of his new identity - he has not only learned skills but has fundamentally changed his perception of himself and his place in the world.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'passage3' && (
                <div className="animate__animated animate__fadeIn">
                  <div className="flex items-center mb-4">
                    <i className="fas fa-lightbulb text-[#e9b872] mr-3"></i>
                    <h3 className="text-xl font-bold text-white">
                      The New Understanding
                    </h3>
                  </div>
                  
                  <div className="passage-card">
                    <blockquote className="backdrop-blur-sm bg-[#0a1510] border-l-4 border-[#e9b872] pl-5 py-4 mb-6 italic text-gray-200 rounded-r-lg">
                      "Brian had learned the most important thing, the truly vital knowledge that drives all creatures in the forest—food is all. Food was simply everything. All things in the woods, from insects to fish to bears, were always, always looking for food—it was the great, single driving influence in nature. To eat. All must eat."
                      <div className="text-right mt-2 text-sm text-[#e9b872]">- Hatchet, Page 116</div>
                    </blockquote>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="space-y-3">
                        <h4 className="text-[#e9b872] font-bold text-lg">Analysis</h4>
                        <p className="text-gray-300">
                          This passage reveals Brian's growing understanding of natural systems. The repetition of "food" and "eat" emphasizes the fundamental importance of this insight.
                        </p>
                        <p className="text-gray-300">
                          Paulsen uses simple, declarative sentences to convey this realization as an absolute truth: "Food was simply everything." The simplicity reflects the fundamental nature of this knowledge.
                        </p>
                        <p className="text-gray-300">
                          By connecting Brian to all other creatures ("from insects to fish to bears"), Paulsen shows how Brian has become integrated into the natural ecosystem rather than standing apart from it.
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="text-[#a3c9a8] font-bold text-lg">Significance</h4>
                        <p className="text-gray-300">
                          This passage represents an intellectual breakthrough that has practical implications:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                          <li className="flex items-start">
                            <i className="fas fa-lightbulb text-[#e9b872] mt-1 mr-2"></i>
                            <span>Brian understands that his own hunger is not unique but part of nature's cycle</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-lightbulb text-[#e9b872] mt-1 mr-2"></i>
                            <span>He recognizes that by understanding food sources, he can predict animal behavior</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-lightbulb text-[#e9b872] mt-1 mr-2"></i>
                            <span>His perspective shifts from seeing nature as hostile to seeing it as a systematic, comprehensible environment</span>
                          </li>
                        </ul>
                        <p className="text-gray-300 mt-4">
                          This realization marks Brian's transition from merely surviving in the wilderness to truly understanding and living within it.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="mt-8 pt-6 border-t border-[#2c4c3b]">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                  <div className="text-sm text-gray-400 mb-4 sm:mb-0">
                    <i className="fas fa-info-circle mr-2"></i>
                    These passages highlight key moments in Brian's wilderness journey and personal transformation.
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className="px-4 py-2 rounded-md bg-[#2c4c3b]/40 text-[#a3c9a8] text-sm border border-[#638b6d]/30 hover:bg-[#2c4c3b]/60 transition-colors" onClick={() => setActiveTab(activeTab === 'passage1' ? 'passage3' : activeTab === 'passage2' ? 'passage1' : 'passage2')}>
                      <i className="fas fa-arrow-left mr-2"></i> Previous
                    </button>
                    
                    <button className="px-4 py-2 rounded-md bg-[#2c4c3b]/40 text-[#a3c9a8] text-sm border border-[#638b6d]/30 hover:bg-[#2c4c3b]/60 transition-colors" onClick={() => setActiveTab(activeTab === 'passage1' ? 'passage2' : activeTab === 'passage2' ? 'passage3' : 'passage1')}>
                      Next <i className="fas fa-arrow-right ml-2"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Book Reviews */}
      <section className="py-16 bg-[#0f1b15]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Reviews
            </h2>
            <div className="w-24 h-1 bg-[#e9b872] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-[#162821] border border-[#2c4c3b] rounded-lg p-6 shadow-lg relative" data-aos="fade-up" data-aos-delay="100">
              <div className="absolute -top-4 -right-4 bg-[#e9b872] rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                <i className="fas fa-quote-right text-[#0f1b15] text-lg"></i>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="mr-3">
                  <i className="fas fa-star text-[#e9b872]"></i>
                  <i className="fas fa-star text-[#e9b872]"></i>
                  <i className="fas fa-star text-[#e9b872]"></i>
                  <i className="fas fa-star text-[#e9b872]"></i>
                  <i className="fas fa-star text-[#e9b872]"></i>
                </div>
                <span className="text-sm text-gray-400">5.0/5.0</span>
              </div>
              
              <blockquote className="text-gray-200 mb-4">
                "This book captured my attention from the very first page and never let go. Paulsen's vivid descriptions make you feel like you're right there with Brian, experiencing every challenge and triumph. A masterpiece of survival literature that belongs in every classroom."
              </blockquote>
              
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-[#2c4c3b] flex items-center justify-center text-[#e9b872] font-bold mr-3">
                  SL
                </div>
                <div>
                  <p className="font-bold text-white">Sarah L.</p>
                  <p className="text-xs text-gray-400">English Teacher</p>
                </div>
              </div>
              
              <div className="mt-4 text-sm text-gray-400 italic">
                Published in The New York Times
              </div>
            </div>
            
            {/* Review 2 */}
            <div className="bg-[#162821] border border-[#2c4c3b] rounded-lg p-6 shadow-lg relative" data-aos="fade-up" data-aos-delay="200">
              <div className="absolute -top-4 -right-4 bg-[#e9b872] rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                <i className="fas fa-quote-right text-[#0f1b15] text-lg"></i>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="mr-3">
                  <i className="fas fa-star text-[#e9b872]"></i>
                  <i className="fas fa-star text-[#e9b872]"></i>
                  <i className="fas fa-star text-[#e9b872]"></i>
                  <i className="fas fa-star text-[#e9b872]"></i>
                  <i className="fas fa-star-half-alt text-[#e9b872]"></i>
                </div>
                <span className="text-sm text-gray-400">4.5/5.0</span>
              </div>
              
              <blockquote className="text-gray-200 mb-4">
                "As a wilderness guide, I appreciate how accurately Paulsen portrays survival scenarios. This isn't just a compelling story—it's also packed with practical information that could save your life. The psychological aspects of survival are particularly well rendered."
              </blockquote>
              
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-[#2c4c3b] flex items-center justify-center text-[#e9b872] font-bold mr-3">
                  MJ
                </div>
                <div>
                  <p className="font-bold text-white">Michael J.</p>
                  <p className="text-xs text-gray-400">Wilderness Survival Instructor</p>
                </div>
              </div>
              
              <div className="mt-4 text-sm text-gray-400 italic">
                Outdoor Magazine Review
              </div>
            </div>
            
            {/* Review 3 */}
            <div className="bg-[#162821] border border-[#2c4c3b] rounded-lg p-6 shadow-lg relative" data-aos="fade-up" data-aos-delay="300">
              <div className="absolute -top-4 -right-4 bg-[#e9b872] rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                <i className="fas fa-quote-right text-[#0f1b15] text-lg"></i>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="mr-3">
                  <i className="fas fa-star text-[#e9b872]"></i>
                  <i className="fas fa-star text-[#e9b872]"></i>
                  <i className="fas fa-star text-[#e9b872]"></i>
                  <i className="fas fa-star text-[#e9b872]"></i>
                  <i className="fas fa-star text-[#e9b872]"></i>
                </div>
                <span className="text-sm text-gray-400">5.0/5.0</span>
              </div>
              
              <blockquote className="text-gray-200 mb-4">
                "I read this book when I was twelve, and it changed my life. Brian's perseverance taught me that I could overcome my own challenges. Twenty years later, I still think about this story whenever I face difficulties. A timeless classic that speaks to readers of all ages."
              </blockquote>
              
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-[#2c4c3b] flex items-center justify-center text-[#e9b872] font-bold mr-3">
                  AK
                </div>
                <div>
                  <p className="font-bold text-white">Alex K.</p>
                  <p className="text-xs text-gray-400">Reader & Software Engineer</p>
                </div>
              </div>
              
              <div className="mt-4 text-sm text-gray-400 italic">
                Goodreads Featured Review
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Video Interviews */}
      <section id="videos" className="py-16 bg-[#162821]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Gary Paulsen Interviews
            </h2>
            <div className="w-24 h-1 bg-[#e9b872] mx-auto"></div>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Explore interviews with the author about his life, writing process, and wilderness experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Video 1 */}
            <div className="bg-[#0f1b15] border border-[#2c4c3b] rounded-lg overflow-hidden shadow-lg" data-aos="fade-up" data-aos-delay="100">
              <div className="aspect-video relative overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Gary Paulsen Interview Thumbnail" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full bg-[#e9b872]/80 flex items-center justify-center hover:bg-[#e9b872] transition-colors">
                    <i className="fas fa-play text-[#0f1b15] text-xl"></i>
                  </a>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-[#e9b872] font-bold text-lg mb-2 line-clamp-2">Gary Paulsen: The Power of Survival Stories</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  Gary Paulsen discusses how his real-life wilderness experiences informed his writing of "Hatchet" and other survival novels.
                </p>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span><i className="fas fa-clock mr-1"></i> 18:24</span>
                  <span><i className="fas fa-eye mr-1"></i> 1.2M views</span>
                </div>
              </div>
            </div>
            
            {/* Video 2 */}
            <div className="bg-[#0f1b15] border border-[#2c4c3b] rounded-lg overflow-hidden shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <div className="aspect-video relative overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Gary Paulsen on Writing Thumbnail" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full bg-[#e9b872]/80 flex items-center justify-center hover:bg-[#e9b872] transition-colors">
                    <i className="fas fa-play text-[#0f1b15] text-xl"></i>
                  </a>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-[#e9b872] font-bold text-lg mb-2 line-clamp-2">Gary Paulsen on Writing and Adventure</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  In this in-depth interview, Paulsen shares his philosophy on writing for young adults and how nature serves as both teacher and inspiration.
                </p>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span><i className="fas fa-clock mr-1"></i> 24:56</span>
                  <span><i className="fas fa-eye mr-1"></i> 843K views</span>
                </div>
              </div>
            </div>
            
            {/* Video 3 */}
            <div className="bg-[#0f1b15] border border-[#2c4c3b] rounded-lg overflow-hidden shadow-lg" data-aos="fade-up" data-aos-delay="300">
              <div className="aspect-video relative overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="The Man Behind Hatchet Thumbnail" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full bg-[#e9b872]/80 flex items-center justify-center hover:bg-[#e9b872] transition-colors">
                    <i className="fas fa-play text-[#0f1b15] text-xl"></i>
                  </a>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-[#e9b872] font-bold text-lg mb-2 line-clamp-2">Gary Paulsen: The Man Behind Hatchet</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  This biographical documentary explores Paulsen's remarkable life, from his difficult childhood to becoming one of America's most beloved wilderness authors.
                </p>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span><i className="fas fa-clock mr-1"></i> 32:17</span>
                  <span><i className="fas fa-eye mr-1"></i> 1.5M views</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Buy the Book Section */}
      <section id="buy" className="py-16 bg-[#0f1b15]">
        <div className="container mx-auto px-6">
          <div className="bg-[url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center rounded-xl overflow-hidden">
            <div className="backdrop-blur-sm bg-black/60 p-8 md:p-12">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white" data-aos="fade-up">
                  Get Your Copy of <span className="text-[#e9b872]">Hatchet</span>
                </h2>
                
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                  Experience Brian's journey of survival and self-discovery in the Canadian wilderness. This award-winning novel has inspired readers of all ages for generations.
                </p>
                
                <div className="flex flex-wrap justify-center gap-6" data-aos="fade-up" data-aos-delay="200">
                  <a 
                    href="https://www.amazon.com/Hatchet-Gary-Paulsen/dp/1416936475/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#e9b872] text-[#0f1b15] rounded-md font-bold hover:bg-[#d9a862] transition-colors shadow-lg flex items-center"
                  >
                    <i className="fab fa-amazon mr-2"></i> Buy on Amazon
                  </a>
                  
                  <a 
                    href="https://www.barnesandnoble.com/w/hatchet-gary-paulsen/1100552925" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-6 py-3 bg-[#2c4c3b] text-white rounded-md font-bold hover:bg-[#3a5d4a] transition-colors shadow-lg flex items-center"
                  >
                    <i className="fas fa-book mr-2"></i> Barnes & Noble
                  </a>
                  
                  <a 
                    href="https://www.indiebound.org/book/9781416936473" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-6 py-3 border-2 border-white text-white rounded-md font-bold hover:bg-white/20 transition-colors shadow-lg flex items-center"
                  >
                    <i className="fas fa-store mr-2"></i> Local Bookstore
                  </a>
                </div>
                
                <div className="mt-10 pt-6 border-t border-gray-500/30">
                  <a 
                    href="https://www.garypaulsen.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-[#a3c9a8] hover:text-[#e9b872] transition-colors"
                    data-aos="fade-up" data-aos-delay="300"
                  >
                    <i className="fas fa-external-link-alt mr-2"></i>
                    Visit Gary Paulsen's Official Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-10 bg-[#0a1510] border-t border-[#2c4c3b]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center">
                <Axe className="h-8 w-8 mr-3 text-[#e9b872]" />
                <h3 className="text-[#e9b872] text-xl font-bold">Survival Literature</h3>
              </div>
              <p className="text-gray-400 mt-2 text-sm">
                Exploring the wilderness of great survival stories
              </p>
            </div>
            
            <div className="flex space-x-6 mb-6 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-[#e9b872] transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#e9b872] transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#e9b872] transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#e9b872] transition-colors">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2025 Survival Literature
              </p>
              <p className="text-gray-500 text-xs mt-1">
                All rights reserved
              </p>
            </div>
          </div>
          
          <div className="mt-8 w-full h-px bg-gradient-to-r from-transparent via-[#2c4c3b] to-transparent"></div>
          
          <div className="mt-8 text-center text-gray-500 text-xs">
            <p>Gary Paulsen illustration and book covers are copyright their respective owners. This is a fan site.</p>
          </div>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          
          .animate-float {
            animation: float 8s ease-in-out infinite;
          }
          
          .animate-float-delayed {
            animation: float 12s ease-in-out infinite;
            animation-delay: 2s;
          }
          
          .animate-float-reverse {
            animation: float 10s ease-in-out infinite reverse;
            animation-delay: 1s;
          }
          
          .animate-pulse-light {
            animation: pulse-light 2s ease-in-out infinite;
          }
          
          @keyframes pulse-light {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.8; }
          }
          
          .card-hover {
            transition: all 0.3s ease;
          }
          
          .card-hover:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
            border-color: #e9b872;
          }
        `}
      </style>
    </div>
  );
};

export default Hatchet;
