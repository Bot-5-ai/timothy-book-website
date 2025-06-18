
import React, { useState } from 'react';
import { Book, Calendar, Flame, GraduationCap, Home, Lightbulb, List, MapPin, MessageSquare, Search, Send, User, Youtube } from 'lucide-react';
import HatchetInteractiveMap from '@/components/HatchetInteractiveMap';
import GaryPaulsenTimeline from '@/components/GaryPaulsenTimeline';

export default function Hatchet() {
  const [activeSection, setActiveSection] = useState('summary');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1510] via-[#1a2a1f] to-[#2a3a2f]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0a1510]/90 backdrop-blur-sm border-b border-[#2c4c3b]">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src="/favicon.ico" alt="Hatchet Icon" width={32} height={32} className="rounded-full" />
            <span className="text-[#e9b872] font-bold text-lg">Hatchet</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#summary" onClick={() => scrollToSection('summary')} className={`text-gray-300 hover:text-[#a3c9a8] transition-colors ${activeSection === 'summary' ? 'text-[#a3c9a8]' : ''}`}>Summary</a>
            <a href="#map" onClick={() => scrollToSection('map')} className={`text-gray-300 hover:text-[#a3c9a8] transition-colors ${activeSection === 'map' ? 'text-[#a3c9a8]' : ''}`}>Map</a>
            <a href="#author" onClick={() => scrollToSection('author')} className={`text-gray-300 hover:text-[#a3c9a8] transition-colors ${activeSection === 'author' ? 'text-[#a3c9a8]' : ''}`}>Author</a>
            <a href="#skills" onClick={() => scrollToSection('skills')} className={`text-gray-300 hover:text-[#a3c9a8] transition-colors ${activeSection === 'skills' ? 'text-[#a3c9a8]' : ''}`}>Skills</a>
            <a href="#resources" onClick={() => scrollToSection('resources')} className={`text-gray-300 hover:text-[#a3c9a8] transition-colors ${activeSection === 'resources' ? 'text-[#a3c9a8]' : ''}`}>Resources</a>
          </div>
          <div className="md:hidden">
            <button className="text-gray-300 focus:outline-none">
              <List className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#e9b872] mb-6">Hatchet</h1>
          <p className="text-xl text-gray-300 mb-8">A survival story by Gary Paulsen</p>
          <img
            src="/lovable-uploads/e544979a-9661-451a-a949-e89981b94599.jpg"
            alt="Hatchet Book Cover"
            width={300}
            height={450}
            className="rounded-lg shadow-xl mx-auto"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[#0a1510] opacity-20"></div>
      </section>

      {/* Book Summary */}
      <section id="summary" className="py-16 px-4 bg-[#1a2a1f]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#e9b872] mb-4">Book Summary</h2>
            <div className="w-20 h-1 bg-[#a3c9a8] mx-auto"></div>
          </div>
          
          <div className="bg-[#0a1510] border border-[#2c4c3b] rounded-lg p-8 shadow-lg">
            <div className="prose prose-lg max-w-none text-gray-300">
              <p className="text-lg leading-relaxed mb-6">
                The book "Hatchet" written by Gary Paulsen is about a 13 year old boy that is names Brian Robeson. He was on the way to visit his dad but on his way, his pilot unfortunately has a heart attack and dies. This leaves Brian all alone in the Canadian wilderness all alone with nothing but a hatchet that he has received from his mom.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                At first, Brian has no clue what he is doing as he was just a city boy who never had to survive on his own all alone. As the book progresses, he starts to learn how to make fire, find food and build shelter. He builds up his confidence and he faces all kinds of challenges from bad weather to dangerous predators.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                He was out in the Canadian wilderness for 54 straight days. He isn't just trying to survive, he was also dealing with the divorce of his parents and the big secret that he knows about his mom. So, this isn't just physically challenging for him, but also mentally and emotionally.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                The cool thing about this novel is how much we see Brian changes throughout this book. He goes from someone that is clueless on how to survive alone to a kid who actually knows how to survive and take care of himself. He learns that he has to be patient to himself and he has to think things through. Even though that he was afraid if he was going to make it out alive, he built up his inner man and never gave up until the very end.
              </p>
              
              <p className="text-lg leading-relaxed">
                By the end of the book, a pilot does eventually spot him and he gets rescued. When he gets back home, instead of going back to being a city boy, he is just a completely new person. The lessons that he learned in the forest had stuck with and now, he is much more mature and confident. It is amazing to see how someone can change so much from just experiencing something new.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Wilderness Map */}
      <section id="map" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#e9b872] mb-4">Brian's Wilderness Journey</h2>
            <p className="text-xl text-gray-300">Explore the key locations from Hatchet</p>
          </div>
          <HatchetInteractiveMap />
        </div>
      </section>

      {/* Author Section */}
      <section id="author" className="py-16 px-4 bg-[#1a2a1f]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#e9b872] mb-4">About Gary Paulsen</h2>
            <div className="w-20 h-1 bg-[#a3c9a8] mx-auto"></div>
          </div>
          
          <div className="bg-[#0a1510] border border-[#2c4c3b] rounded-lg p-8 shadow-lg">
            <div className="md:flex items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="md:w-1/3 text-center">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-[#2c4c3b] shadow-lg mb-4">
                  <img 
                    src="/lovable-uploads/e24a62e6-7820-423b-8b2b-15176df81136.png" 
                    alt="Gary Paulsen" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#e9b872] mb-2">Gary Paulsen</h3>
                <p className="text-[#a3c9a8]">(1939-2021)</p>
              </div>
              
              <div className="md:w-2/3">
                <div className="prose prose-lg max-w-none text-gray-300">
                  <p className="text-lg leading-relaxed mb-6">
                    Gary Paulsen is an author that enjoys to write book that is targeted towards the younger audience. He enjoys to write books that are related to survival and the wilderness and relates his books to some of his experiences. He does this because he had a tough life when he was younger and then ended up running away from home at the age of 14.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    Besides that, he has done a lot of crazy things in his life such as working on farms, driving trucks, sailing boats and even raced in Iditarod which is a famous dog sled race in Alaska twice. He incorporates his life events with a strong use of imagery to give you the sense that his books are non fiction even though that they aren't
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    Throughout his lifetime, Gary Paulsen had wrote over 200 books and together, they had sold over 35 million copies. On top of that, he had also won a lot of awards along the way which includes: three Newberry Honor Awards, ALA Best Book Awards, Parent's Choice Awards and many more.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    Besides Hatchet, he had also written a lot of other popular books as well including: "Brian's Winter", "Dogsong" and "The Winter Room". All these books have a pretty similar situation which is younger kids who are thrown into tough situations in life then them trying to survive with their own skills.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    Paulsen had this way to write where he attracts the attention of many people. His writing style makes you feel that you were in the book right beside the characters. He had said that "The most important thing you can do is read". He believes that reading is what can change people's lives so he came up with a writing style that attracts everyone's attention.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    Paulsen had live a fulfilling and amazing life. He lived the way he always had wanted to and wrote amazing books to teach young children. He sadly passed away in 2021 and may he rest in peace.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <GaryPaulsenTimeline />
        </div>
      </section>

      {/* Survival Skills Section */}
      <section id="skills" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#e9b872] mb-4">Survival Skills from Hatchet</h2>
            <p className="text-xl text-gray-300">Key skills Brian learns to survive in the wilderness</p>
            <div className="w-20 h-1 bg-[#a3c9a8] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#0a1510] border border-[#2c4c3b] rounded-lg p-6 shadow-lg">
              <Flame className="h-8 w-8 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-[#e9b872] mb-2">Fire Starting</h3>
              <p className="text-gray-300">Brian learns to create fire using the hatchet and birch bark, providing warmth and a sense of security.</p>
            </div>
            
            <div className="bg-[#0a1510] border border-[#2c4c3b] rounded-lg p-6 shadow-lg">
              <MapPin className="h-8 w-8 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-[#e9b872] mb-2">Shelter Building</h3>
              <p className="text-gray-300">Constructing a sturdy shelter from natural materials protects Brian from the elements and predators.</p>
            </div>
            
            <div className="bg-[#0a1510] border border-[#2c4c3b] rounded-lg p-6 shadow-lg">
              <Search className="h-8 w-8 text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-[#e9b872] mb-2">Finding Food</h3>
              <p className="text-gray-300">Identifying edible plants and learning to hunt and fish are crucial for Brian's survival.</p>
            </div>
            
            <div className="bg-[#0a1510] border border-[#2c4c3b] rounded-lg p-6 shadow-lg">
              <Send className="h-8 w-8 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold text-[#e9b872] mb-2">Signaling</h3>
              <p className="text-gray-300">Brian learns to create smoke signals to attract potential rescuers.</p>
            </div>
            
            <div className="bg-[#0a1510] border border-[#2c4c3b] rounded-lg p-6 shadow-lg">
              <Lightbulb className="h-8 w-8 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold text-[#e9b872] mb-2">Resourcefulness</h3>
              <p className="text-gray-300">Brian uses his hatchet and surroundings to create tools and solve problems.</p>
            </div>
            
            <div className="bg-[#0a1510] border border-[#2c4c3b] rounded-lg p-6 shadow-lg">
              <User className="h-8 w-8 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-[#e9b872] mb-2">Resilience</h3>
              <p className="text-gray-300">Brian's mental fortitude and determination are key to overcoming challenges.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-16 px-4 bg-[#1a2a1f]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#e9b872] mb-4">Additional Resources</h2>
            <p className="text-xl text-gray-300">Explore more about Hatchet and survival skills</p>
            <div className="w-20 h-1 bg-[#a3c9a8] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0a1510] border border-[#2c4c3b] rounded-lg p-6 shadow-lg">
              <Youtube className="h-8 w-8 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-[#e9b872] mb-2">Survival Skills Videos</h3>
              <p className="text-gray-300">Watch videos demonstrating the survival skills Brian uses in the book.</p>
              <a href="#" className="text-[#a3c9a8] hover:text-[#e9b872] mt-4 inline-block">Explore Videos</a>
            </div>
            
            <div className="bg-[#0a1510] border border-[#2c4c3b] rounded-lg p-6 shadow-lg">
              <GraduationCap className="h-8 w-8 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-[#e9b872] mb-2">Study Guides</h3>
              <p className="text-gray-300">Access study guides and lesson plans for "Hatchet".</p>
              <a href="#" className="text-[#a3c9a8] hover:text-[#e9b872] mt-4 inline-block">View Guides</a>
            </div>
            
            <div className="bg-[#0a1510] border border-[#2c4c3b] rounded-lg p-6 shadow-lg">
              <Book className="h-8 w-8 text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-[#e9b872] mb-2">Related Books</h3>
              <p className="text-gray-300">Discover other survival stories and books by Gary Paulsen.</p>
              <a href="#" className="text-[#a3c9a8] hover:text-[#e9b872] mt-4 inline-block">See More Books</a>
            </div>
            
            <div className="bg-[#0a1510] border border-[#2c4c3b] rounded-lg p-6 shadow-lg">
              <MessageSquare className="h-8 w-8 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold text-[#e9b872] mb-2">Discussion Forums</h3>
              <p className="text-gray-300">Join discussions and share your thoughts on "Hatchet".</p>
              <a href="#" className="text-[#a3c9a8] hover:text-[#e9b872] mt-4 inline-block">Join Forum</a>
            </div>
          </div>
        </div>
      </section>

      {/* Quotes Section */}
      <section id="quotes" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#e9b872] mb-4">Memorable Quotes</h2>
            <p className="text-xl text-gray-300">Inspirational quotes from "Hatchet"</p>
            <div className="w-20 h-1 bg-[#a3c9a8] mx-auto"></div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-[#0a1510] border border-[#2c4c3b] rounded-lg p-6 shadow-lg">
              <p className="text-lg italic text-gray-300">"He could not quit. And maybe that was the difference."</p>
              <p className="text-gray-400 mt-2">- Gary Paulsen, Hatchet</p>
            </div>
            
            <div className="bg-[#0a1510] border border-[#2c4c3b] rounded-lg p-6 shadow-lg">
              <p className="text-lg italic text-gray-300">"If he was going to live, he had to start thinking."</p>
              <p className="text-gray-400 mt-2">- Gary Paulsen, Hatchet</p>
            </div>
            
            <div className="bg-[#0a1510] border border-[#2c4c3b] rounded-lg p-6 shadow-lg">
              <p className="text-lg italic text-gray-300">"Mistakes were কী to new knowledge."</p>
              <p className="text-gray-400 mt-2">- Gary Paulsen, Hatchet</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Analysis Section */}
      <section id="videos" className="py-16 px-4 bg-[#1a2a1f]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#e9b872] mb-4">Video Analysis</h2>
            <p className="text-xl text-gray-300">In-depth video analysis of Hatchet</p>
            <div className="w-20 h-1 bg-[#a3c9a8] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0a1510] border border-[#2c4c3b] rounded-lg p-6 shadow-lg">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/videoseries?list=PLZUkFw3J_0y3J-XZNd7jSoeJYu-fPKy6g"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h3 className="text-xl font-bold text-[#e9b872] mt-4">Hatchet Analysis</h3>
              <p className="text-gray-300">A detailed analysis of the themes and characters in Hatchet.</p>
            </div>
            
            <div className="bg-[#0a1510] border border-[#2c4c3b] rounded-lg p-6 shadow-lg">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/B9r0JY2P-J8"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h3 className="text-xl font-bold text-[#e9b872] mt-4">Survival Tips from Hatchet</h3>
              <p className="text-gray-300">Learn practical survival tips inspired by Brian's experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-400 border-t border-[#2c4c3b]">
        <p>&copy; 2024 Hatchet - A Gary Paulsen Novel</p>
      </footer>
    </div>
  );
}
