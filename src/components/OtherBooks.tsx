
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';

interface BookType {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  releaseYear: string;
  amazonLink: string;
}

const OtherBooks: React.FC = () => {
  const otherBooks: BookType[] = [
    {
      id: "brians-winter",
      title: "Brian's Winter",
      description: "What if Brian hadn't been rescued at the end of Hatchet? This alternative narrative explores how Brian would have survived the harsh winter in the wilderness.",
      coverImage: "https://m.media-amazon.com/images/I/91wPKUEJ+NL._AC_UF1000,1000_QL80_.jpg",
      releaseYear: "1996",
      amazonLink: "https://www.amazon.com/Brians-Winter-Gary-Paulsen/dp/0307929582"
    },
    {
      id: "brians-return",
      title: "Brian's Return",
      description: "Brian, now sixteen years old, finds it difficult to adjust to normal life after his wilderness experiences and decides to return to the woods to find peace again.",
      coverImage: "https://m.media-amazon.com/images/I/815tMobAd+L.jpg",
      releaseYear: "1999",
      amazonLink: "https://www.amazon.com/Brians-Return-Gary-Paulsen/dp/0307929590"
    },
    {
      id: "brians-hunt",
      title: "Brian's Hunt",
      description: "Brian returns to the wilderness to confront his fears and pursue a rogue bear that is attacking a neighboring family.",
      coverImage: "https://m.media-amazon.com/images/I/A1IFtT3besL._UF894,1000_QL80_.jpg",
      releaseYear: "2003",
      amazonLink: "https://www.amazon.com/Brians-Hunt-Saga-Gary-Paulsen/dp/0553494155"
    },
    {
      id: "the-river",
      title: "The River",
      description: "A sequel to Hatchet where Brian returns to the wilderness with a government psychologist to record his survival techniques when disaster strikes.",
      coverImage: "https://images.randomhouse.com/cover/9780307929617",
      releaseYear: "1991",
      amazonLink: "https://www.amazon.com/River-Hatchet-Adventure-Gary-Paulsen/dp/0307929612"
    }
  ];

  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 bg-[#162821]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-merriweather">
            More by Gary Paulsen
          </h2>
          <div className="w-24 h-1 bg-[#e9b872] mx-auto transition-all duration-300"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Continue your wilderness adventure with these other acclaimed works from the Brian's Saga series
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {otherBooks.map((book) => (
            <div 
              key={book.id}
              className="group relative bg-[#0f1b15] border border-[#2c4c3b] rounded-lg overflow-hidden shadow-xl transition-all duration-300 hover:shadow-[#e9b872]/20 hover:border-[#e9b872]/30 hover:-translate-y-1 hover:scale-105"
              data-aos="fade-up"
            >
              <div className="aspect-[2/3] overflow-hidden">
                <div 
                  onClick={() => handleLinkClick(book.amazonLink)}
                  className="block w-full h-full cursor-pointer"
                >
                  <img 
                    src={book.coverImage} 
                    alt={`${book.title} book cover`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute top-2 right-2 bg-[#e9b872]/80 text-[#0f1b15] px-2 py-1 rounded text-xs font-bold transition-all duration-300 group-hover:bg-[#e9b872] group-hover:scale-110">
                  {book.releaseYear}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#e9b872] mb-2 font-cabin transition-colors duration-200 group-hover:text-white">
                  {book.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3 transition-colors duration-200 group-hover:text-white">
                  {book.description}
                </p>
                
                <button 
                  onClick={() => handleLinkClick(book.amazonLink)}
                  className="inline-flex items-center text-[#a3c9a8] hover:text-[#e9b872] transition-all duration-300 text-sm font-medium hover:translate-x-2 cursor-pointer"
                >
                  View on Amazon
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1b15] via-transparent to-transparent opacity-60 pointer-events-none transition-opacity duration-300 group-hover:opacity-40"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button 
            onClick={() => handleLinkClick("https://www.goodreads.com/author/list/18.Gary_Paulsen")}
            className="inline-flex items-center px-6 py-3 bg-[#2c4c3b]/80 text-white rounded-md hover:bg-[#2c4c3b] transition-all duration-300 shadow-lg backdrop-blur-sm hover:scale-105 hover:shadow-xl cursor-pointer"
          >
            <BookOpen className="mr-2 h-5 w-5" />
            <span>Explore All Books by Gary Paulsen</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OtherBooks;
