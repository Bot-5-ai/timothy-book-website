
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

const MoreByBarrat: React.FC = () => {
  const otherBooks: BookType[] = [
    {
      id: "facing-suicide",
      title: "Facing Suicide: Understanding Why People Kill Themselves and How We Can Stop Them",
      description: "A comprehensive examination of suicide prevention, exploring the psychological, social, and medical factors that contribute to suicidal behavior and evidence-based approaches to intervention.",
      coverImage: "https://dynamic.indigoimages.ca/v1/books/books/059353915X/1.jpg",
      releaseYear: "2014",
      amazonLink: "https://www.amazon.com/dp/059353915X/?bestFormat=true&k=facing%20suicide&ref_=nb_sb_ss_w_scx-ent-pd-bk-d_de_k0_1_14&crid=1X1F67AXFBXQF&sprefix=facing%20suicide"
    },
    {
      id: "intelligence-explosion",
      title: "The Intelligence Explosion: When AI Beats Humans at Everything",
      description: "An exploration of the potential future scenario where artificial intelligence surpasses human intelligence across all domains, examining the implications and timeline of such developments.",
      coverImage: "https://dynamic.indigoimages.ca/v1/books/books/1250355028/1.jpg",
      releaseYear: "2015",
      amazonLink: "https://www.amazon.com/Intelligence-Explosion-Beats-Humans-Everything/dp/1250355028"
    }
  ];

  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-merriweather">
            More by James Barrat
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto transition-all duration-300"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Explore other thought-provoking works by James Barrat on technology, AI, and societal challenges
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {otherBooks.map((book) => (
            <div 
              key={book.id}
              className="group relative bg-black/40 backdrop-blur-md border border-blue-500/20 rounded-lg overflow-hidden shadow-xl transition-all duration-300 hover:shadow-cyan-500/20 hover:border-cyan-400/30 hover:-translate-y-1 hover:scale-105"
              data-aos="fade-up"
            >
              <div className="aspect-[2/3] overflow-hidden md:aspect-[3/4] lg:aspect-[2/3]">
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
                <div className="absolute top-2 right-2 bg-cyan-400/80 text-black px-2 py-1 rounded text-xs font-bold transition-all duration-300 group-hover:bg-cyan-400 group-hover:scale-110">
                  {book.releaseYear}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-2 font-cabin transition-colors duration-200 group-hover:text-white">
                  {book.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-4 transition-colors duration-200 group-hover:text-white leading-relaxed">
                  {book.description}
                </p>
                
                <button 
                  onClick={() => handleLinkClick(book.amazonLink)}
                  className="inline-flex items-center text-blue-400 hover:text-cyan-400 transition-all duration-300 text-sm font-medium hover:translate-x-2 cursor-pointer"
                >
                  View on Amazon
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 pointer-events-none transition-opacity duration-300 group-hover:opacity-40"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button 
            onClick={() => handleLinkClick("https://www.goodreads.com/search?q=james+barrat&qid=")}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 backdrop-blur-sm text-white rounded-md hover:from-blue-600/50 hover:to-cyan-600/50 transition-all duration-300 shadow-lg border border-blue-500/20 hover:scale-105 hover:shadow-xl cursor-pointer"
          >
            <BookOpen className="mr-2 h-5 w-5" />
            <span>Explore All Books by James Barrat</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MoreByBarrat;
