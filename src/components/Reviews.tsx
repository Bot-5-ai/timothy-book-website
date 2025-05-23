
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
        className={`h-5 w-5 transition-colors duration-200 ${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
      />
    ));
  };

  // Load CDN resources
  React.useEffect(() => {
    // Font Awesome
    const fontAwesome = document.createElement('link');
    fontAwesome.rel = 'stylesheet';
    fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css';
    document.head.appendChild(fontAwesome);
    
    // Animate.css
    const animateCSS = document.createElement('link');
    animateCSS.rel = 'stylesheet';
    animateCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';
    document.head.appendChild(animateCSS);

    // Google Fonts
    const googleFonts = document.createElement('link');
    googleFonts.rel = 'stylesheet';
    googleFonts.href = 'https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap';
    document.head.appendChild(googleFonts);
  }, []);

  return (
    <section id="reviews" className="py-20 px-4 bg-gradient-to-br from-bookblue-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-4 animate__animated animate__pulse animate__infinite animate__slow group hover:animate-none relative inline-block">
            <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Book Reviews
            </span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 mx-auto rounded-full shadow-glow transition-all duration-300"></div>
        </div>

        <div className="max-w-4xl mx-auto relative" data-aos="fade-up" data-aos-delay="200">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate__animated animate__fadeIn min-h-[300px] flex flex-col">
            <div className="flex justify-between items-start mb-6 flex-wrap gap-4">
              <h3 className="text-xl md:text-2xl font-merriweather font-bold text-gray-800 flex items-center flex-1 min-w-0">
                <i className="fas fa-quote-left text-blue-500 mr-2 flex-shrink-0"></i>
                <span className="truncate">{reviews[currentReview].source}</span>
              </h3>
              <div className="flex animate__animated animate__fadeIn flex-shrink-0">
                {renderStars(reviews[currentReview].rating)}
              </div>
            </div>

            <blockquote className="text-gray-700 text-base md:text-lg italic mb-6 animate__animated animate__fadeIn flex-1 leading-relaxed">
              "{reviews[currentReview].content}"
            </blockquote>

            <div className="flex justify-between items-center mt-auto">
              <p className="text-bookblue-600 font-medium text-sm md:text-base">
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
              className="p-3 rounded-full bg-white shadow-md hover:bg-blue-50 text-blue-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transform hover:scale-110 hover:shadow-lg"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={nextReview}
              className="p-3 rounded-full bg-white shadow-md hover:bg-blue-50 text-blue-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transform hover:scale-110 hover:shadow-lg"
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
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-medium hover:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 animate__animated animate__pulse animate__infinite animate__slow transform hover:scale-105 hover:animate-none hover:shadow-xl"
            >
              <i className="fas fa-shopping-cart mr-2"></i>
              Purchase Book
            </a>
            <p className="mt-3 text-sm text-gray-500">Available at major booksellers</p>
          </div>
        </div>
      </div>

      <style>{`
        .shadow-glow {
          box-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
        }
      `}</style>
    </section>
  );
};

export default Reviews;
