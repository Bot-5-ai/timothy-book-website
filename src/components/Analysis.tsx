
import React, { useState } from 'react';
import { BookOpen, Quote, Lightbulb, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Analysis = () => {
  const [expandedPassage, setExpandedPassage] = useState<number | null>(null);

  const passages = [
    {
      id: 1,
      title: "The Crash and Initial Shock",
      chapter: "Chapter 1-2",
      text: "He was alone. In the roaring plane with no pilot he was alone. Alone above the trees and lakes and rivers and fields and towns and cities below.",
      analysis: "This passage establishes the fundamental theme of isolation that will define Brian's entire journey. The repetition of 'alone' emphasizes the overwhelming nature of his situation.",
      whatItMeans: "This moment represents the ultimate test of human resilience and self-reliance. Paulsen uses this crash not just as a plot device, but as a metaphor for how life can suddenly strip away all our dependencies and force us to discover our inner strength. The phrase 'above the trees and lakes' also foreshadows the wilderness setting that will become both Brian's greatest challenge and his teacher. This opening establishes that survival isn't just about physical needs - it's about conquering the psychological terror of complete isolation. The crash symbolizes how quickly our comfortable, protected lives can be shattered, forcing us to confront our most basic human capabilities. For young readers, this represents the transition from childhood dependence to adult self-sufficiency, albeit in the most extreme circumstances possible."
    },
    {
      id: 2,
      title: "The Gift of Fire",
      chapter: "Chapter 8",
      text: "He had fire. It had taken him most of the day, but he had fire. Fire was life. Fire was his life.",
      analysis: "The discovery of fire represents Brian's first major breakthrough in survival. The short, declarative sentences mirror his exhaustion but also his triumph.",
      whatItMeans: "Fire in literature has always symbolized civilization, knowledge, and human triumph over nature. For Brian, achieving fire represents his evolution from helpless victim to capable survivor. The repetitive structure 'Fire was life. Fire was his life' shows how completely this achievement defines his new identity. This isn't just about warmth or cooking - it's about Brian's psychological transformation into someone who can create and control his environment rather than merely endure it. The fire becomes a metaphor for hope, determination, and the spark of human ingenuity that separates us from other animals. In the context of coming-of-age literature, this moment represents Brian's first step toward true independence and self-mastery. The emphasis on the time it took him ('most of the day') shows that meaningful achievements require persistence and patience, lessons crucial for adolescent readers."
    },
    {
      id: 3,
      title: "Learning from the Bear",
      chapter: "Chapter 6",
      text: "The bear did not want to hurt him, would not hurt him. It was looking for berries, not him, and he was just in the way.",
      analysis: "This encounter teaches Brian that nature isn't malevolent - it's indifferent. Animals have their own purposes that don't revolve around harming humans.",
      whatItMeans: "This passage represents a crucial shift in Brian's understanding of his relationship with nature. Initially, he likely viewed the wilderness as hostile and threatening, but this encounter with the bear teaches him that nature operates by its own logic, not human fears or expectations. The bear's disinterest in Brian as a threat or prey item reveals that survival often depends on understanding natural patterns rather than fighting them. This lesson extends beyond wilderness survival to life philosophy - sometimes our greatest fears come from misunderstanding the motivations and intentions of others. The bear becomes a teacher, showing Brian that respect and awareness are more valuable than fear and aggression. For adolescent readers, this represents learning to navigate a world that isn't centered around their fears or desires, but operates according to its own principles that can be understood and respected."
    },
    {
      id: 4,
      title: "The Moose Attack",
      chapter: "Chapter 16",
      text: "It came for him then, the big bull, came charging across the shallow water with its massive antlers lowered, and Brian dove to the side.",
      analysis: "Unlike the bear, the moose represents nature's unpredictable and sometimes violent side. This shows Brian that respect doesn't guarantee safety.",
      whatItMeans: "The moose attack serves as a harsh reminder that despite Brian's growing confidence and skill, nature retains the power to humble and harm him without warning. This encounter represents the reality that life contains genuinely random and dangerous elements that can't be controlled through knowledge or respect alone. Where the bear taught Brian about coexistence, the moose teaches him about the necessity of staying alert and prepared for unexpected threats. This duality - nature as both teacher and potential destroyer - reflects the complex relationship humans must maintain with forces beyond their control. For young readers, this represents the understanding that growing up means accepting that the world contains both wonderful and terrible possibilities, often without clear warning. The moose's aggression isn't personal, but its consequences are very real, teaching Brian (and readers) that maturity requires constant vigilance and adaptability."
    },
    {
      id: 5,
      title: "The Cutting Words",
      chapter: "Chapter 13",
      text: "He could not bear to think of it, could not stand to think of the words. 'Brian, I need to tell you something...' The words that had changed everything.",
      analysis: "Brian's mother's divorce revelation haunts him throughout his ordeal. This internal conflict shows that survival involves emotional as well as physical challenges.",
      whatItMeans: "This passage reveals that Brian's wilderness survival is complicated by an equally challenging emotional survival. The 'cutting words' represent the destruction of his family unit and his previous understanding of his parents and their relationship. The phrase 'changed everything' shows how certain revelations can permanently alter our perception of reality. Brian's inability to 'bear to think of it' demonstrates how emotional trauma can be as debilitating as physical injury. In the context of his survival story, this internal burden represents the psychological baggage that everyone carries into their challenges. The ellipsis in his mother's speech suggests the difficulty of communicating painful truths, while Brian's fragmented memory of the moment shows how trauma disrupts our normal processing of events. For adolescent readers facing their own family disruptions or discovering adult complexities, this passage validates the real pain of disillusionment while showing that healing and growth can still occur despite carrying emotional wounds."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-amber-50 to-orange-100">
      <div className="container mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-4 text-gray-800 flex items-center justify-center">
            <BookOpen className="mr-3 text-amber-600" />
            Important Parts of the Book
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Key passages that reveal deeper meanings and life lessons from Brian's survival journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {passages.map((passage, index) => (
            <Card 
              key={passage.id} 
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-l-4 border-amber-500"
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                      <Quote className="mr-2 text-amber-600 h-5 w-5" />
                      {passage.title}
                    </h3>
                    <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                      {passage.chapter}
                    </span>
                  </div>
                </div>
                
                <blockquote className="border-l-4 border-amber-300 pl-4 py-2 mb-4 bg-amber-50 rounded-r-lg">
                  <p className="text-gray-700 italic font-medium leading-relaxed">
                    "{passage.text}"
                  </p>
                </blockquote>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 mb-4">
                  <h4 className="text-lg font-semibold text-indigo-800 mb-2 flex items-center">
                    <Lightbulb className="mr-2 h-5 w-5" />
                    Analysis
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {passage.analysis}
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4">
                  <button
                    onClick={() => setExpandedPassage(expandedPassage === passage.id ? null : passage.id)}
                    className="w-full flex items-center justify-between text-lg font-semibold text-emerald-800 mb-2 hover:text-emerald-900 transition-colors"
                  >
                    <span className="flex items-center">
                      <ArrowRight className="mr-2 h-5 w-5" />
                      What It Means
                    </span>
                    {expandedPassage === passage.id ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </button>
                  
                  <div className={`transition-all duration-300 overflow-hidden ${
                    expandedPassage === passage.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-gray-700 leading-relaxed">
                      {passage.whatItMeans}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Analysis;
