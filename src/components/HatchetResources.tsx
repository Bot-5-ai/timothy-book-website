
import React from 'react';
import { Link as LinkIcon, ExternalLink, Book, BookOpen, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HatchetResources: React.FC = () => {
  const resources = [
    {
      title: "Gary Paulsen Interview",
      description: "A cool interview with Gary Paulsen where he talks about his writing and the real experiences that inspired Hatchet.",
      url: "https://www.teachingbooks.net/interview.cgi?id=91&a=1",
      icon: <LinkIcon className="h-5 w-5 text-[#a3c9a8]" />,
      category: "Interview"
    },
    {
      title: "Gary Paulsen: Everything I Am Is Because of Books",
      description: "An article about how reading books totally changed Gary Paulsen's life and made him want to become a writer.",
      url: "https://www.mackincommunity.com/2021/04/29/gary-paulsen-everything-i-am-is-because-of-books/",
      icon: <BookOpen className="h-5 w-5 text-[#a3c9a8]" />,
      category: "Article"
    },
    {
      title: "Barnes & Noble - Hatchet Books",
      description: "Get your own physical copy of Hatchet and other awesome Gary Paulsen books.",
      url: "https://www.barnesandnoble.com/s/hatchet",
      icon: <Book className="h-5 w-5 text-[#e9b872]" />,
      category: "Purchase"
    },
    {
      title: "Audible - Hatchet Audiobooks",
      description: "Listen to the audiobook version of Hatchet and other survival stories while you're doing other stuff.",
      url: "https://www.audible.ca/search?keywords=hatchet&k=hatchet&crid=6194bee9dfc840be91e3a7050d762272&sprefix=hatchet%2Cna-audible-ca%2C191&i=na-audible-ca&url=search-alias%3Dna-audible-ca&ref=nb_sb_noss_1",
      icon: <Bookmark className="h-5 w-5 text-[#e9b872]" />,
      category: "Audiobook"
    }
  ];

  return (
    <section id="resources" className="py-20 px-4 bg-[url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=60')] bg-cover bg-fixed relative">
      <div className="absolute inset-0 bg-[#0f1b15]/90 backdrop-filter backdrop-blur-sm"></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-cabin font-bold mb-4 text-[#e9b872]">
            Cool Hatchet Stuff
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#e9b872] to-[#a3c9a8] mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto">
            Check out these awesome resources to learn more about Hatchet and Gary Paulsen
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <div 
              key={index} 
              className="bg-[#0f1b15]/80 backdrop-blur-md border border-[#2c4c3b]/40 rounded-lg overflow-hidden shadow-lg hover:shadow-[#e9b872]/20 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#2c4c3b]/40 flex items-center justify-center mr-3">
                    {resource.icon}
                  </div>
                  <div>
                    <span className="text-xs text-[#a3c9a8] uppercase tracking-wider">{resource.category}</span>
                    <h3 className="text-xl font-bold text-white">{resource.title}</h3>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">
                  {resource.description}
                </p>
                
                <a 
                  href={resource.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-[#2c4c3b] text-white rounded-md hover:bg-[#3a5d4a] transition-colors group"
                >
                  <span>Check It Out</span>
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Purchase Section */}
        <div className="mt-16 bg-[#162821]/90 backdrop-blur-md border border-[#2c4c3b]/40 rounded-lg p-8 shadow-lg" data-aos="fade-up">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <img 
                  src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781442403321/hatchet-9781442403321_hr.jpg" 
                  alt="Hatchet Book" 
                  className="rounded-lg shadow-lg border-2 border-[#2c4c3b] h-64 object-cover"
                />
                <div className="absolute -bottom-4 -right-4 bg-[#e9b872] text-[#0f1b15] rounded-full p-3 font-bold shadow-lg">
                  <span className="text-sm">Bestseller</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-[#e9b872] mb-3">Get Your Own Copy of Hatchet</h3>
              <p className="text-gray-300 mb-6">
                Experience Brian's crazy survival journey yourself! This book is available in different formats 
                so you can read it however you want.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://www.barnesandnoble.com/s/hatchet" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-[#e9b872] text-[#0f1b15] rounded-md font-medium hover:bg-[#d4a255] transition-colors shadow-lg flex items-center"
                >
                  <Book className="mr-2 h-5 w-5" />
                  Buy Physical Book
                </a>
                
                <a 
                  href="https://www.audible.ca/search?keywords=hatchet&k=hatchet&crid=6194bee9dfc840be91e3a7050d762272&sprefix=hatchet%2Cna-audible-ca%2C191&i=na-audible-ca&url=search-alias%3Dna-audible-ca&ref=nb_sb_noss_1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-5 py-3 border-2 border-[#a3c9a8] text-[#a3c9a8] rounded-md font-medium hover:bg-[#a3c9a8]/20 transition-colors shadow-lg flex items-center"
                >
                  <Bookmark className="mr-2 h-5 w-5" />
                  Get Audiobook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HatchetResources;
