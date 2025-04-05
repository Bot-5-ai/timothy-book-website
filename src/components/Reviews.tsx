
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    source: "The New York Times",
    content: "Barrat's book is a thoughtful and well-researched exploration of the potential risks of advanced artificial intelligence. His warning about the unchecked development of thinking machines that could eventually outthink their creators is both sobering and compelling.",
    rating: 4,
    reviewer: "Technology Review"
  },
  {
    source: "Scientific American",
    content: "A clear-eyed, rational look at the risks of developing artificial intelligence... The book presents a carefully reasoned, impeccably researched examination of the plausible risks of advancing AI technology beyond its ability to be controlled by its creators.",
    rating: 5,
    reviewer: "Science Desk"
  },
  {
    source: "Goodreads",
    content: "Our Final Invention provides an accessible introduction to the problem of ensuring that superintelligent machines serve human ends rather than carelessly destroying us. This is a valuable contribution to a growing debate about how to ensure that AI development remains beneficial.",
    rating: 4,
    reviewer: "Average User Rating"
  },
  {
    source: "Publishers Weekly",
    content: "Barrat provides a sobering look at the looming potential of mankind's most powerful technology to change everything on Earth and beyond. His thoughtful exploration of AI risks combines solid technical discussions with clear explanations for general readers.",
    rating: 4,
    reviewer: "Book Review"
  },
  {
    source: "Kirkus Reviews",
    content: "With artificial intelligence on humanity's horizon, Barrat delivers a thoughtful discussion of both its promises and perils. His arguments about the risks of uncontrolled AI development make for compelling reading for both specialists and general readers.",
    rating: 4,
    reviewer: "Literary Journal"
  }
];

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-5 w-5 ${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 px-4 bg-gradient-to-br from-bookblue-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-4 text-gray-800">
            Book Reviews
          </h2>
          <div className="w-20 h-1 bg-bookblue-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto relative" data-aos="fade-up" data-aos-delay="200">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl md:text-2xl font-merriweather font-bold text-gray-800">
                {reviews[currentReview].source}
              </h3>
              <div className="flex">
                {renderStars(reviews[currentReview].rating)}
              </div>
            </div>

            <blockquote className="text-gray-700 text-lg italic mb-6">
              "{reviews[currentReview].content}"
            </blockquote>

            <div className="flex justify-between items-center">
              <p className="text-bookblue-600 font-medium">
                — {reviews[currentReview].reviewer}
              </p>
              <div className="text-sm text-gray-500">
                {currentReview + 1} of {reviews.length}
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <button 
              onClick={prevReview}
              className="p-3 rounded-full bg-white shadow-md hover:bg-bookblue-50 text-bookblue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-bookblue-400"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={nextReview}
              className="p-3 rounded-full bg-white shadow-md hover:bg-bookblue-50 text-bookblue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-bookblue-400"
              aria-label="Next review"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-12 text-center">
            <a 
              href="https://www.amazon.com/Our-Final-Invention-Artificial-Intelligence/dp/1250058783/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-bookblue-600 text-white rounded-full font-medium hover:bg-bookblue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-bookblue-500 focus:ring-offset-2 animate-pulse-light"
            >
              <i className="fas fa-shopping-cart mr-2"></i>
              Purchase Book
            </a>
            <p className="mt-3 text-sm text-gray-500">Available at major booksellers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
