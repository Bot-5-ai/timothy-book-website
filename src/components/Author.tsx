
import React from 'react';
import { User, Award, Globe, BookOpen } from 'lucide-react';

const Author = () => {
  return (
    <section id="author" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-4 text-gray-800">
            About the Author
          </h2>
          <div className="w-20 h-1 bg-bookblue-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12" data-aos="fade-up" data-aos-delay="200">
            <div className="md:flex items-center">
              <div className="md:w-1/3 bg-gradient-to-br from-bookblue-400 to-bookblue-600 py-8 px-6">
                <div className="text-center">
                  <div className="inline-block rounded-full border-4 border-white p-2 mb-4 overflow-hidden">
                    <img 
                      src="/lovable-uploads/bf953bbd-2af1-455e-8b7c-bf24f14e79a1.png" 
                      alt="Gary Paulsen"
                      className="h-48 w-48 rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">Gary Paulsen</h3>
                  <p className="text-bookblue-100 mb-4">Survival Story Master</p>
                  
                  <div className="bg-white/20 rounded-lg p-4 mt-4">
                    <h4 className="text-white font-bold text-sm mb-2">Famous Books:</h4>
                    <ul className="text-bookblue-100 text-sm space-y-1">
                      <li>• Hatchet</li>
                      <li>• Brian's Winter</li>
                      <li>• Dogsong</li>
                    </ul>
                    <div className="mt-2 text-yellow-300 text-xs font-semibold">
                      🏆 3 Newbery Honor Awards
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8 md:w-2/3">
                <p className="text-gray-700 mb-4">
                  Here's the thing about Gary Paulsen - this guy didn't just write about adventure and survival from behind a desk. He actually lived it. Born in 1939, Paulsen had what you might call a pretty rough childhood. His parents moved around a lot, and he often felt like an outsider. But instead of letting that break him down, he turned to the wilderness and found something there that would shape his entire life.
                </p>
                
                <p className="text-gray-700 mb-4">
                  What makes Paulsen's writing so real is that he's actually done most of the stuff his characters do. He's run sled dogs in Alaska, lived off the land, and faced those moments where nature tests everything you've got. When Brian struggles to make fire in Hatchet, Paulsen knows exactly what that desperation feels like because he's been there himself. That's why reading his books feels less like fiction and more like getting survival advice from someone who really knows what they're talking about.
                </p>
                
                <p className="text-gray-700">
                  Paulsen has this amazing gift for writing about young people who discover they're way tougher than they ever imagined. His stories aren't just about surviving in the wilderness - they're about finding out who you really are when everything comfortable gets stripped away. He's written over 200 books, but it's his survival stories like Hatchet that really show his genius for understanding what it means to grow up and find your inner strength.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="400">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-bookblue-500 hover:shadow-lg transition-shadow">
              <div className="text-bookblue-500 mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h4 className="font-merriweather font-bold text-lg mb-2">Recognition</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Three-time Newbery Honor winner</li>
                <li>• Margaret A. Edwards Award recipient</li>
                <li>• Over 35 million books sold worldwide</li>
                <li>• Young Adult Literature Hall of Fame</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-bookblue-500 hover:shadow-lg transition-shadow">
              <div className="text-bookblue-500 mb-4">
                <BookOpen className="h-8 w-8" />
              </div>
              <h4 className="font-merriweather font-bold text-lg mb-2">Real-Life Adventures</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Completed the Iditarod sled dog race</li>
                <li>• Sailed across the Pacific Ocean</li>
                <li>• Lived in the wilderness for months</li>
                <li>• Served in the Army and worked many jobs</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-bookblue-500 hover:shadow-lg transition-shadow">
              <div className="text-bookblue-500 mb-4">
                <Globe className="h-8 w-8" />
              </div>
              <h4 className="font-merriweather font-bold text-lg mb-2">Writing Legacy</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Over 200 books and articles published</li>
                <li>• Inspired countless young readers</li>
                <li>• Champion of literacy and reading</li>
                <li>• Master of young adult adventure fiction</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Author;
