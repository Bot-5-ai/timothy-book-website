
import React from 'react';
import { Book, Star, Clock, Users } from 'lucide-react';

const Summary = () => {
  return (
    <section id="summary" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-4 text-gray-800">
            Book Summary
          </h2>
          <div className="w-20 h-1 bg-bookblue-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-bookblue-50 to-green-50 rounded-xl shadow-lg p-8 mb-12" data-aos="fade-up" data-aos-delay="200">
            <div className="flex items-start mb-6">
              <Book className="h-8 w-8 text-bookblue-500 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-merriweather font-bold text-gray-800 mb-4">
                  Hatchet: A Story of Survival and Discovery
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Picture this: you're thirteen years old, flying to visit your dad for the summer, when suddenly the pilot has a heart attack and you're crashing into the Canadian wilderness. That's exactly what happens to Brian Robeson, and honestly, it's every kid's worst nightmare come true. But here's the thing - this story isn't just about surviving in the wild, it's about discovering who you really are when everything familiar gets stripped away.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  Gary Paulsen doesn't sugarcoat anything in this book. Brian isn't some superhero kid who magically knows how to survive - he's just a regular teenager dealing with his parents' messy divorce, and now he's got to figure out how to stay alive with nothing but a hatchet his mom gave him. You feel every mosquito bite, every failed attempt at making fire, and every moment of pure terror when he realizes just how alone he really is.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  What really gets you is watching Brian change throughout the story. At first, he's this city kid who doesn't know the first thing about the outdoors. But slowly, day by day, he starts learning from his mistakes. He figures out how to make fire, how to catch fish, and most importantly, how to keep going even when everything seems hopeless. It's not just about physical survival - it's about growing up fast and finding strength you never knew you had.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  The wilderness becomes almost like another character in the story. It's beautiful and terrifying at the same time, constantly testing Brian but also teaching him lessons he never would have learned back in the city. By the time rescue finally comes, Brian isn't the same scared kid who crashed in the woods - he's someone completely different, someone who's learned that he's way tougher than he ever imagined.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="400">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-bookblue-500 hover:shadow-lg transition-shadow">
              <div className="text-bookblue-500 mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h4 className="font-merriweather font-bold text-lg mb-2">Age Range</h4>
              <p className="text-gray-700">Perfect for ages 10-14, though anyone can enjoy this gripping survival story</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-bookblue-500 hover:shadow-lg transition-shadow">
              <div className="text-bookblue-500 mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h4 className="font-merriweather font-bold text-lg mb-2">Reading Time</h4>
              <p className="text-gray-700">About 3-4 hours - you'll probably read it in one sitting!</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-bookblue-500 hover:shadow-lg transition-shadow">
              <div className="text-bookblue-500 mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h4 className="font-merriweather font-bold text-lg mb-2">Why It Matters</h4>
              <p className="text-gray-700">Teaches resilience, problem-solving, and shows that we're all stronger than we think</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;
