
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Clock, Calendar } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const GaryPaulsenTimeline: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const timelineEvents = [
    { year: "1939", event: "Gary Paulsen is born on May 17 in Minneapolis, Minnesota" },
    { year: "1953", event: "At age 14, runs away from home and joins a carnival" },
    { year: "1966", event: "Publishes his first book, 'The Special War'" },
    { year: "1987", event: "Publishes 'Hatchet,' which becomes his most famous work" },
    { year: "1990", event: "Hatchet receives a Newbery Honor" },
    { year: "1991", event: "Publishes 'The River,' the first sequel to Hatchet" },
    { year: "1996", event: "Publishes 'Brian's Winter,' an alternative ending to Hatchet" },
    { year: "1997", event: "Receives the Margaret A. Edwards Award for lifetime contribution to young adult literature" },
    { year: "1999", event: "Publishes 'Brian's Return,' continuing the Hatchet series" },
    { year: "2003", event: "Publishes 'Brian's Hunt,' the final book in the Brian's Saga" },
    { year: "2006", event: "Publishes his autobiography, 'Guts: The True Stories Behind Hatchet and the Brian Books'" },
    { year: "2021", event: "Gary Paulsen passes away on October 13 at age 82" }
  ];

  return (
    <div className="my-8 bg-[#0a1510] border border-[#2c4c3b] rounded-lg p-4 shadow-lg">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="w-full flex items-center justify-between p-2 text-[#e9b872] font-bold text-xl hover:bg-[#1c2e25] rounded-md transition-all duration-300 ease-in-out">
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5" />
            <span>Gary Paulsen's Timeline</span>
          </div>
          <div className="transform transition-transform duration-300 ease-in-out">
            {isOpen ? (
              <ChevronUp className="h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
          </div>
        </CollapsibleTrigger>
        
        <CollapsibleContent className="mt-4 overflow-hidden transition-all duration-500 ease-in-out data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
          <div className="space-y-4 pl-4 opacity-0 animate-fade-in" style={{ animationDelay: isOpen ? '200ms' : '0ms', animationFillMode: 'forwards' }}>
            {timelineEvents.map((event, index) => (
              <div 
                key={index} 
                className="relative pl-8 pb-4 border-l-2 border-[#2c4c3b] last:border-0 last:pb-0 transform transition-all duration-300 ease-in-out hover:translate-x-1"
                style={{ 
                  animationDelay: isOpen ? `${300 + (index * 100)}ms` : '0ms',
                  opacity: isOpen ? '1' : '0',
                  animation: isOpen ? `fade-in 0.4s ease-out ${300 + (index * 100)}ms forwards` : 'none'
                }}
              >
                <div className="absolute -left-[5px] mt-1.5 transition-all duration-300 ease-in-out hover:scale-110">
                  <div className="h-3 w-3 rounded-full bg-[#e9b872] shadow-lg"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#a3c9a8] font-bold transition-colors duration-200 ease-in-out hover:text-[#c5e8ca]">{event.year}</span>
                  <span className="text-gray-300 transition-colors duration-200 ease-in-out hover:text-white">{event.event}</span>
                </div>
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
      
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default GaryPaulsenTimeline;
