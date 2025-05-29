
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Target, Heart } from 'lucide-react';

const Analysis = () => {
  const [expandedPassage, setExpandedPassage] = useState(null);

  const passages = [
    {
      id: 1,
      title: "The Crash and Initial Survival",
      icon: <Target className="h-6 w-6" />,
      quote: "He was alone. In the roaring silence he was alone...",
      chapter: "Chapters 1-3",
      analysis: "This opening passage establishes the fundamental theme of isolation and sets the tone for Brian's entire journey. Paulsen's use of 'roaring silence' is a powerful oxymoron that captures the overwhelming nature of complete solitude in the wilderness. The crash represents not just a physical disaster, but a psychological break from civilization and childhood dependency. Brian's initial panic and helplessness reflect the natural human response to being thrust into an unfamiliar, life-threatening environment.",
      literaryDevices: "Paulsen employs vivid imagery and sensory details to immerse readers in Brian's terrifying experience. The juxtaposition of 'roaring' and 'silence' emphasizes the deafening quiet of the wilderness after the mechanical sounds of civilization. This passage also introduces the recurring motif of sound versus silence throughout the novel.",
      characterDevelopment: "Brian begins as a typical thirteen-year-old city boy, completely dependent on modern conveniences and adult guidance. His initial response to the crash - crying, panic, and despair - shows his psychological immaturity. However, even in these early moments, we see hints of the resilience that will carry him through his ordeal. His ability to survive the crash itself and his instinct to seek shelter demonstrate an underlying survival instinct.",
      themes: "The passage introduces the central theme of man versus nature, but also touches on the coming-of-age theme as Brian is forced to mature rapidly. The isolation theme is paramount - Brian must learn to rely entirely on himself, a concept foreign to most modern teenagers. The crash also symbolizes the destruction of his old life and the beginning of his transformation.",
      significance: "This passage is crucial because it establishes the stakes of the story and begins Brian's psychological journey from boy to young man. It shows readers that this won't be a romanticized adventure story, but a gritty tale of genuine survival against overwhelming odds."
    },
    {
      id: 2,
      title: "The Discovery of Fire",
      icon: <Heart className="h-6 w-6" />,
      quote: "Fire! I have fire! I have a friend named fire!",
      chapter: "Chapter 8",
      analysis: "This triumphant moment represents perhaps the most significant turning point in Brian's survival journey. Fire is more than just a tool - it becomes a symbol of hope, civilization, and human mastery over the environment. Brian's exclamation treating fire as a 'friend' reveals his deep loneliness and his psychological need to anthropomorphize elements of his environment for emotional support.",
      literaryDevices: "Paulsen uses personification brilliantly here, as Brian treats fire as a living companion. The exclamation points convey Brian's overwhelming joy and relief. The repetition of 'fire' emphasizes its importance, while the metaphor of fire as a friend shows how Brian's perspective on his environment is changing from hostile to potentially supportive.",
      characterDevelopment: "This moment marks Brian's transition from victim to survivor. His persistence in learning to make fire despite numerous failures shows his growing determination and problem-solving abilities. The celebration of this achievement reveals a newfound confidence and self-reliance. Brian is learning to find joy and pride in accomplishments that would have seemed trivial in his former life.",
      themes: "The passage reinforces the theme of human adaptability and resilience. Fire represents the bridge between civilization and wilderness - it's one of humanity's oldest tools, connecting Brian to his ancestors while providing modern comfort. The friendship metaphor also highlights the theme of loneliness and the human need for connection, even if that connection must be found in inanimate objects.",
      significance: "Fire changes everything for Brian - it provides warmth, protection, cooking ability, and psychological comfort. This achievement gives him the confidence to tackle other survival challenges and represents his growing mastery over his environment. It's a pivotal moment that transforms his outlook from despair to hope."
    },
    {
      id: 3,
      title: "The Rescue and Reflection",
      icon: <BookOpen className="h-6 w-6" />,
      quote: "He was not the same. The Brian that sat in the pilot's seat was not the same Brian that had been in the plane when it crashed.",
      chapter: "Epilogue",
      analysis: "This concluding reflection captures the essence of Brian's transformation and serves as the thematic culmination of the novel. The repetition of 'not the same' emphasizes the profound nature of his change, while the circular structure of returning to an aircraft seat creates a powerful contrast between the boy who crashed and the young man who is rescued.",
      literaryDevices: "Paulsen uses parallel structure and repetition to emphasize Brian's transformation. The contrast between the two Brians creates a powerful before-and-after comparison. The metaphor of sitting in the pilot's seat suggests that Brian now has control over his life in a way he never did before - he's moved from passenger to pilot, both literally and metaphorically.",
      characterDevelopment: "This passage reveals the complete arc of Brian's character development. He has evolved from a frightened, dependent child into a self-reliant, confident young man. His wilderness experience has taught him practical skills, but more importantly, it has given him psychological strength, patience, and a deep appreciation for life's simple pleasures. The 'old Brian' was soft, impatient, and unaware of his own capabilities.",
      themes: "The passage reinforces the coming-of-age theme by explicitly stating Brian's transformation. It also touches on the theme of perspective - Brian now sees the world differently, appreciating things he once took for granted. The idea that challenging experiences can fundamentally change us is central to the novel's message about growth through adversity.",
      significance: "This reflection provides closure while emphasizing the lasting impact of Brian's experience. It suggests that his time in the wilderness wasn't just about physical survival, but about discovering his true capabilities and potential. The transformation is permanent - he can never return to being the naive boy he was before the crash, and this change is portrayed as ultimately positive despite the trauma involved."
    }
  ];

  const togglePassage = (id) => {
    setExpandedPassage(expandedPassage === id ? null : id);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="container mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-4 text-gray-800">
            Passage Analysis
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Explore key passages from Hatchet that showcase Brian's transformation, 
            Paulsen's masterful writing techniques, and the novel's enduring themes of survival and growth.
          </p>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {passages.map((passage, index) => (
            <div 
              key={passage.id} 
              className="bg-white rounded-xl shadow-lg border border-amber-200 overflow-hidden"
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div 
                className="p-6 cursor-pointer hover:bg-amber-50 transition-colors"
                onClick={() => togglePassage(passage.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-amber-600">
                      {passage.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{passage.title}</h3>
                      <p className="text-amber-600 font-medium">{passage.chapter}</p>
                    </div>
                  </div>
                  <div className="text-amber-600">
                    {expandedPassage === passage.id ? <ChevronUp /> : <ChevronDown />}
                  </div>
                </div>
                
                <blockquote className="mt-4 text-gray-700 italic text-lg border-l-4 border-amber-400 pl-4">
                  "{passage.quote}"
                </blockquote>
              </div>

              {expandedPassage === passage.id && (
                <div className="px-6 pb-6 border-t border-amber-100">
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="space-y-6">
                      <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                        <h4 className="font-bold text-amber-800 mb-2">Literary Analysis</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">{passage.analysis}</p>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                        <h4 className="font-bold text-blue-800 mb-2">Literary Devices</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">{passage.literaryDevices}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                        <h4 className="font-bold text-green-800 mb-2">Character Development</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">{passage.characterDevelopment}</p>
                      </div>
                      
                      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                        <h4 className="font-bold text-purple-800 mb-2">Themes & Significance</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">{passage.themes}</p>
                        <div className="mt-3 pt-3 border-t border-purple-200">
                          <p className="text-gray-700 text-sm leading-relaxed font-medium">{passage.significance}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Analysis;
