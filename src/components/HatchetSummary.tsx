
import React from 'react';

const HatchetSummary = () => {
  return (
    <div className="bg-gradient-to-br from-green-900/30 to-orange-900/30 backdrop-blur-sm p-8 rounded-xl border border-green-500/20 shadow-lg">
      <div className="flex items-center mb-6">
        <div className="text-orange-400 mr-4">
          <i className="fas fa-book-open text-2xl"></i>
        </div>
        <h3 className="text-2xl font-bold text-orange-300">Book Summary</h3>
      </div>
      
      <div className="space-y-4">
        <p className="text-gray-300 transition-colors duration-200 hover:text-white">
          The book "Hatchet" written by Gary Paulsen is about a 13 year old boy that is names Brian Robeson. He was on the way to visit his dad but on his way, his pilot unfortunately has a heart attack and dies. This leaves Brian all alone in the Canadian wilderness all alone with nothing but a hatchet that he has received from his mom.
        </p>
        
        <p className="text-gray-300 transition-colors duration-200 hover:text-white">
          At first, Brian has no clue what he is doing as he was just a city boy who never had to survive on his own all alone. As the book progresses, he starts to learn how to make fire, find food and build shelter. He builds up his confidence and he faces all kinds of challenges from bad weather to dangerous predators.
        </p>
        
        <p className="text-gray-300 transition-colors duration-200 hover:text-white">
          He was out in the Canadian wilderness for 54 straight days. He isn't just trying to survive, he was also dealing with the divorce of his parents and the big secret that he knows about his mom. So, this isn't just physically challenging for him, but also mentally and emotionally.
        </p>
        
        <p className="text-gray-300 transition-colors duration-200 hover:text-white">
          The cool thing about this novel is how much we see Brian changes throughout this book. He goes from someone that is clueless on how to survive alone to a kid who actually knows how to survive and take care of himself. He learns that he has to be patient to himself and he has to think things through. Even though that he was afraid if he was going to make it out alive, he built up his inner man and never gave up until the very end.
        </p>
        
        <p className="text-gray-300 transition-colors duration-200 hover:text-white">
          By the end of the book, a pilot does eventually spot him and he gets rescued. When he gets back home, instead of going back to being a city boy, he is just a completely new person. The lessons that he learned in the forest had stuck with and now, he is much more mature and confident. It is amazing to see how someone can change so much from just experiencing something new.
        </p>
      </div>
    </div>
  );
};

export default HatchetSummary;
