
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HatchetQuotes = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  
  const quotes = [
    {
      text: "He was not the same. The plane passing changed him, the disappointment cut him down and made him new.",
      context: "After realizing rescue might not come"
    },
    {
      text: "Patience, he thought. So much of this was patience - waiting, and thinking and doing things right.",
      context: "Learning survival skills"
    },
    {
      text: "He had learned the most important thing, the truly vital thing - self-pity does no good.",
      context: "Overcoming despair"
    }
  ];

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <div className="bg-gradient-to-br from-blue-900/30 to-green-900/30 backdrop-blur-sm p-8 rounded-xl border border-blue-500/20 shadow-lg">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-blue-300 mb-2">Memorable Quotes</h3>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto"></div>
      </div>
      
      <div className="relative min-h-[120px] flex items-center">
        <button 
          onClick={prevQuote}
          className="absolute left-0 text-blue-400 hover:text-blue-300 transition-colors duration-200 z-10"
        >
          <ChevronLeft size={24} />
        </button>
        
        <div className="text-center px-12 w-full">
          <blockquote className="text-lg text-white italic mb-4 leading-relaxed">
            "{quotes[currentQuote].text}"
          </blockquote>
          <p className="text-sm text-gray-400">
            {quotes[currentQuote].context}
          </p>
        </div>
        
        <button 
          onClick={nextQuote}
          className="absolute right-0 text-blue-400 hover:text-blue-300 transition-colors duration-200 z-10"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      
      <div className="flex justify-center mt-4 space-x-2">
        {quotes.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentQuote(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === currentQuote ? 'bg-blue-400' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HatchetQuotes;
