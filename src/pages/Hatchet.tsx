import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Axe, Compass, Trees, TreePine, Mountain, ArrowLeft, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HatchetVideos from '@/components/HatchetVideos';
import HatchetResources from '@/components/HatchetResources';
import OtherBooks from '@/components/OtherBooks';

const Hatchet = () => {
  const [activeTab, setActiveTab] = useState('passage1');
  const [showSurvivalTip, setShowSurvivalTip] = useState(false);
  
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
            <Link to="/about-me" className="text-gray-300 hover:text-[#e9b872] transition-colors">About Me</Link>
          </nav>
          
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-[#e9b872]">
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </header>
      
      {/* Back to Home button */}
      <div className="fixed bottom-4 left-4 z-40">
        <Link to="/">
          <Button variant="outline" size="sm" className="bg-black/30 text-[#e9b872] border-[#e9b872]/30 hover:bg-[#2c4c3b]/40 backdrop-blur-md">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back Home
          </Button>
        </Link>
      </div>
      
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
            
            <a href="#resources" className="px-6 py-3 border-2 border-[#e9b872] text-[#e9b872] rounded-md font-medium hover:bg-[#e9b872]/20 transition-colors shadow-lg flex items-center">
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
      
      {/* Book Summary & Cover */}
      <section id="summary" className="py-16 bg-[#0f1b15]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Book Summary
            </h2>
            <div className="w-24 h-1 bg-[#e9b872] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Book Cover & Summary */}
            <div data-aos="fade-right">
              <div className="bg-[#162821] p-8 rounded-lg border border-[#2c4c3b] shadow-lg h-full flex flex-col">
                <div className="flex justify-center mb-6">
                  <div className="relative w-48 h-auto shadow-xl">
                    <img 
                      src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781442403321/hatchet-9781442403321_hr.jpg" 
                      alt="Hatchet Book Cover" 
                      className="w-full h-auto rounded-md border-4 border-[#2c4c3b] object-cover transform transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute -bottom-3 -right-3 bg-[#e9b872] text-[#0f1b15] px-3 py-1 rounded-full text-sm font-bold rotate-[-5deg] shadow-lg">
                      Classic!
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 flex items-center text-[#e9b872]">
                  <i className="fas fa-fire text-orange-400 mr-3"></i>
                  Book Summary
                </h3>
                
                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#638b6d]/50 to-transparent mb-6"></div>
                
                <div className="flex-grow">
                  <p className="text-gray-300 mb-4">
                    "Hatchet" is a powerful coming-of-age novel about thirteen-year-old Brian Robeson who must learn to survive alone in the Canadian wilderness after a plane crash. Armed with only a hatchet given to him by his mother, Brian must overcome numerous challenges and learn to live off the land.
                  </p>
                  
                  <p className="text-gray-300 mb-4">
                    As the only survivor of a small plane crash, Brian finds himself stranded deep in the wilderness with no supplies except for a hatchet his mother gave him. Initially overwhelmed by his circumstances, he gradually develops crucial survival skills: building shelter, finding food, making fire, and crafting tools.
                  </p>
                  
                  <p className="text-gray-300 mb-4">
                    Throughout his 54-day ordeal, Brian undergoes a profound transformation, developing resilience, self-reliance, and an appreciation for nature. He faces numerous challenges including encounters with wildlife, weather events, and the psychological burden of isolation and abandonment.
                  </p>
                  
                  <p className="text-gray-300 mb-4">
                    The novel explores themes of survival, self-discovery, resilience, and humanity's relationship with the natural world. Brian's journey is not only about physical survival but also emotional and psychological growth as he processes his parents' divorce and his mother's affair ("The Secret").
                  </p>
                  
                  <p className="text-gray-300">
                    By the story's end, Brian is no longer the same city boy who boarded the plane. His experiences have matured him, teaching him patience, resourcefulness, and a deeper understanding of himself and the natural world. Even after his eventual rescue, these lessons remain with him, forever changing his perspective on life.
                  </p>
                </div>
                
                <div className="mt-6 flex justify-center">
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
            
            {/* Author Bio Box */}
            <div data-aos="fade-left">
              <div className="bg-[#162821] p-8 rounded-lg border border-[#2c4c3b] shadow-lg h-full">
                <h3 className="text-2xl font-bold mb-4 flex items-center text-[#e9b872]">
                  <i className="fas fa-user text-[#a3c9a8] mr-3"></i>
                  About Gary Paulsen
                </h3>
                
                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#638b6d]/50 to-transparent mb-6"></div>
                
                <div className="flex flex-col sm:flex-row gap-6 mb-6">
                  <div className="sm:w-1/3">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL0qtld_Cr0u4WlFTXmPnAFlPXpywEfUm5rg&s" 
                      alt="Gary Paulsen" 
                      className="rounded-lg border-2 border-[#2c4c3b] w-full shadow-lg"
                    />
                  </div>
                  
                  <div className="sm:w-2/3">
                    <p className="text-gray-300 mb-4">
                      Gary Paulsen (1939-2021) was a renowned American author of young adult literature, best known for his coming-of-age stories set in the wilderness. His own difficult childhood and diverse experiences deeply influenced his writing.
                    </p>
                    
                    <p className="text-gray-300">
                      Paulsen ran away from home at 14 and later worked as a farmhand, construction worker, ranch hand, truck driver, sailor, and even competed in the Iditarod Trail Sled Dog Race twice. These real-world survival experiences gave authenticity to his wilderness narratives.
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">
                  Paulsen wrote more than 200 books and over 200 magazine articles and short stories, selling more than 35 million copies of his work. He was awarded the Margaret A. Edwards Award for his lifetime contribution to young adult literature.
                </p>
                
                <p className="text-gray-300 mb-4">
                  His most famous works include the "Hatchet" series (Brian's Saga), "Dogsong," and "The Winter Room." Many of his stories feature protagonists facing extreme situations in the wilderness, forcing them to develop self-reliance and resilience.
                </p>
                
                <p className="text-gray-300">
                  Paulsen was known for his sparse, direct writing style and his ability to capture the challenges and beauty of survival situations. His personal motto was "The most important thing you can do is read," reflecting his belief in the transformative power of literature.
                </p>
                
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <i className="fas fa-book text-[#a3c9a8] mr-2"></i>
                    <span className="text-gray-300">Notable Works: Hatchet, Brian's Winter, Dogsong</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-award text-[#a3c9a8] mr-2"></i>
                    <span className="text-gray-300">3 Newbery Honor Awards</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Books by Gary Paulsen */}
      <OtherBooks />
      
      {/* Add the other components we created */}
      <HatchetVideos />
      <HatchetResources />
      
      {/* Continue with the rest of the Hatchet page content */}
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
                    <i className="fas fa-fire text-orange-400 mr-3"></i>
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
                      Transformation - A New Brian
                    </h3>
                  </div>
                  
                  <div className="passage-card">
                    <blockquote className="backdrop-blur-sm bg-[#0a1510] border-l-4 border-[#a3c9a8] pl-5 py-4 mb-6 italic text-gray-200 rounded-r-lg">
                      "He was not the same now—the Brian that stood and watched the wolves move away and nodded to them was completely changed. Time had come, time that he measured but didn't care about; time had come into his life and moved out and left him different."
                      <div className="text-right mt-2 text-sm text-[#a3c9a8]">- Hatchet, Page 153</div>
                    </blockquote>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="space-y-3">
                        <h4 className="text-[#e9b872] font-bold text-lg">Analysis</h4>
                        <p className="text-gray-300">
                          This passage illustrates the profound transformation Brian undergoes during his time in the wilderness. The repetition of "time" underscores how his experience of it has shifted from the urgency of survival to a deeper, more natural rhythm.
                        </p>
                        <p className="text-gray-300">
                          The interaction with the wolves symbolizes Brian's integration into the natural world and his newfound ability to coexist with it rather than simply battle against it.
                        </p>
                        <p className="text-gray-300">
                          Paulsen uses simple declarative statements ("He was not the same now") to emphasize the finality and completeness of Brian's transformation.
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="text-[#a3c9a8] font-bold text-lg">Key Changes in Brian</h4>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-start">
                            <i className="fas fa-arrow-right text-[#a3c9a8] mt-1 mr-2"></i>
                            <span>From fear of nature to understanding and respect for it</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-arrow-right text-[#a3c9a8] mt-1 mr-2"></i>
                            <span>From dependence on technology to reliance on his own skills</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-arrow-right text-[#a3c9a8] mt-1 mr-2"></i>
                            <span>From seeing time as a stress-inducing constraint to experiencing it naturally</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-arrow-right text-[#a3c9a8] mt-1 mr-2"></i>
                            <span>From being consumed by "The Secret" to finding peace with his circumstances</span>
                          </li>
                        </ul>
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
                      New Understanding - The Secret
                    </h3>
                  </div>
                  
                  <div className="passage-card">
                    <blockquote className="backdrop-blur-sm bg-[#0a1510] border-l-4 border-[#e9b872] pl-5 py-4 mb-6 italic text-gray-200 rounded-r-lg">
                      "The Secret that had caused so much trouble came to him now and he opened it and looked at it and understood it was part of him, would always be part of him, but did not have to govern his life. Not now, not for the rest of his life. The Secret was gone, finally gone."
                      <div className="text-right mt-2 text-sm text-[#e9b872]">- Hatchet, Page 116</div>
                    </blockquote>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="space-y-3">
                        <h4 className="text-[#e9b872] font-bold text-lg">Analysis</h4>
                        <p className="text-gray-300">
                          This passage represents Brian's emotional breakthrough regarding "The Secret" - his knowledge of his mother's affair that led to his parents' divorce.
                        </p>
                        <p className="text-gray-300">
                          Paulsen capitalizes "Secret" throughout the novel, emphasizing its weight and power over Brian. In this moment, Brian achieves emotional maturity by accepting this painful reality without letting it control him.
                        </p>
                        <p className="text-gray-300">
                          The repetition of "gone, finally gone" signals both relief and closure, marking an important step in Brian's psychological healing.
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="text-[#a3c9a8] font-bold text-lg">Psychological Growth</h4>
                        <p className="text-gray-300">
                          This passage illustrates several aspects of Brian's psychological development:
                        </p>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-start">
                            <i className="fas fa-check-circle text-[#a3c9a8] mt-1 mr-2"></i>
                            <span>Acceptance: Brian acknowledges the reality of his parents' situation</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-check-circle text-[#a3c9a8] mt-1 mr-2"></i>
                            <span>Integration: He recognizes that painful experiences become part of us</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-check-circle text-[#a3c9a8] mt-1 mr-2"></i>
                            <span>Agency: He realizes he has control over how much influence past trauma has</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-check-circle text-[#a3c9a8] mt-1 mr-2"></i>
                            <span>Release: The wilderness has provided him space to process his emotions</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-10 bg-[#0a1510] border-t border-[#2c4c3b]/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center">
                <Axe className="h-6 w-6 text-[#e9b872] mr-2" />
                <h3 className="text-[#e9b872] text-xl font-bold">Survival Literature</h3>
              </div>
              <p className="text-gray-400 mt-2 text-sm">
                Exploring themes of resilience and self-discovery
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
                <i className="fab fa-goodreads-g"></i>
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
        </div>
      </footer>
    </div>
  );
};

export default Hatchet;
