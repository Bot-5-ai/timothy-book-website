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
                  <p className="text-bookblue-100 mb-4">Author & Outdoorsman</p>
                  
                  {/* Famous Books section */}
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
                  Gary Paulsen lived the kind of life that most people only read about in adventure novels. Growing up wasn't easy for him - his parents struggled with alcoholism, and he often found himself on his own. But instead of letting these challenges define him, Paulsen discovered something magical: the wilderness became his teacher, his refuge, and eventually, his greatest inspiration.
                </p>
                
                <p className="text-gray-700 mb-4">
                  What makes Paulsen's writing so powerful is that he actually lived these adventures. He didn't just imagine what it would be like to survive in the wild - he did it. He ran the Iditarod (that brutal 1,150-mile dog sled race across Alaska), lived off the land, and experienced firsthand the raw beauty and danger of nature. When he writes about Brian struggling to make fire or catch fish, you can feel the authenticity in every word.
                </p>
                
                <p className="text-gray-700">
                  Paulsen had this incredible gift for connecting with young readers because he never talked down to them. He understood that kids could handle real, gritty stories about survival, courage, and growing up. His books, especially Hatchet, have become classics because they respect young people's intelligence while delivering genuine thrills and life lessons. Sadly, we lost this literary giant in 2021, but his stories continue to inspire new generations of readers to look at nature - and themselves - with fresh eyes.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="400">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-bookblue-500 hover:shadow-lg transition-shadow">
              <div className="text-bookblue-500 mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h4 className="font-merriweather font-bold text-lg mb-2">Career Highlights</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Award-winning young adult author</li>
                <li>• Three-time Newbery Honor recipient</li>
                <li>• Iditarod sled dog racer</li>
                <li>• Over 200 published books</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-bookblue-500 hover:shadow-lg transition-shadow">
              <div className="text-bookblue-500 mb-4">
                <BookOpen className="h-8 w-8" />
              </div>
              <h4 className="font-merriweather font-bold text-lg mb-2">Notable Works</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• "Hatchet" series (5 books)</li>
                <li>• "Brian's Saga" continuation</li>
                <li>• "Dogsong" (Newbery Honor)</li>
                <li>• "The Winter Room" (Newbery Honor)</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-bookblue-500 hover:shadow-lg transition-shadow">
              <div className="text-bookblue-500 mb-4">
                <Globe className="h-8 w-8" />
              </div>
              <h4 className="font-merriweather font-bold text-lg mb-2">Legacy & Impact</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Inspired countless young readers</li>
                <li>• Champion of outdoor education</li>
                <li>• Authentic wilderness adventure stories</li>
                <li>• Enduring influence on YA literature</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Author;
