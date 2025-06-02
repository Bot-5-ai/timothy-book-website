
import React from 'react';
import { BookOpen, Quote, Heart, Brain, Target } from 'lucide-react';

const Analysis = () => {
  return (
    <section id="analysis" className="py-20 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-cabin font-bold mb-4 text-amber-400">
            Passage Analysis
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Deep dive into key passages that showcase Brian's transformation and the novel's central themes
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Passage 1 - The Crash */}
          <div className="bg-gradient-to-r from-gray-800/80 to-gray-700/80 rounded-xl shadow-2xl overflow-hidden border border-amber-500/20" data-aos="fade-right">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-red-600 to-red-800 p-8 flex items-center justify-center">
                <div className="text-center">
                  <Heart className="h-16 w-16 text-white mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white">The Heart Attack</h3>
                  <p className="text-red-100 mt-2">Chapter 1-2</p>
                </div>
              </div>
              <div className="p-8 md:w-2/3">
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-amber-400 mb-4" />
                  <blockquote className="text-gray-200 italic text-lg leading-relaxed border-l-4 border-amber-500 pl-4">
                    "The pilot was having a heart attack. Brian knew it immediately, knew it from the way the man's face went white and his mouth opened and closed like a fish gasping for air. The smell hit him then—the sour, sick smell of fear and sweat."
                  </blockquote>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-amber-300 mb-2 flex items-center">
                      <Brain className="h-5 w-5 mr-2" />
                      Literary Analysis
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      This passage marks the catalyst moment that transforms Brian from a city boy visiting his father into a survival protagonist. 
                      Paulsen uses visceral sensory details—the visual of the pilot's face, the auditory gasping, and especially the olfactory 
                      "sour, sick smell"—to thrust readers directly into Brian's terrifying reality. The fish simile emphasizes the pilot's 
                      desperate struggle while foreshadowing Brian's own future desperation for sustenance.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-300 mb-2 flex items-center">
                      <Target className="h-5 w-5 mr-2" />
                      Thematic Significance
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      This moment establishes the central theme of sudden, life-altering change. Brian's comfortable, predictable world 
                      vanishes instantly, introducing the novel's exploration of how ordinary people discover extraordinary strength when 
                      faced with impossible circumstances. The contrast between Brian's initial helplessness and his later competence 
                      begins here, setting up his entire character arc.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-300 mb-2">Character Development Impact</h4>
                    <p className="text-gray-300 leading-relaxed">
                      This traumatic event forces Brian to confront mortality and responsibility for the first time. His immediate 
                      recognition of the crisis shows his perceptiveness, while his subsequent actions reveal both his initial 
                      panic and his underlying resilience that will carry him through the wilderness ordeal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Passage 2 - First Fire */}
          <div className="bg-gradient-to-r from-gray-800/80 to-gray-700/80 rounded-xl shadow-2xl overflow-hidden border border-amber-500/20" data-aos="fade-left">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-orange-600 to-red-600 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🔥</div>
                  <h3 className="text-2xl font-bold text-white">First Fire</h3>
                  <p className="text-orange-100 mt-2">Chapter 8</p>
                </div>
              </div>
              <div className="p-8 md:w-2/3">
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-amber-400 mb-4" />
                  <blockquote className="text-gray-200 italic text-lg leading-relaxed border-l-4 border-amber-500 pl-4">
                    "He had fire. Not just the tiny flame, but real fire, with heat and light and the promise of more. He fed it carefully, 
                    tiny pieces of birch bark first, then pencil-thin dry wood, building it slowly until he had flames a foot high. 
                    Then he sat back and watched his fire and felt richer than he had ever felt in his life."
                  </blockquote>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-amber-300 mb-2 flex items-center">
                      <Brain className="h-5 w-5 mr-2" />
                      Literary Analysis
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      This passage represents Brian's first major triumph and marks a crucial turning point in both his survival and 
                      psychological journey. Paulsen's careful attention to the methodical process—"birch bark first, then pencil-thin 
                      dry wood"—mirrors Brian's growing understanding of cause and effect in nature. The progression from "tiny flame" 
                      to "real fire" to "flames a foot high" symbolizes Brian's own growth from helpless victim to capable survivor.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-300 mb-2 flex items-center">
                      <Target className="h-5 w-5 mr-2" />
                      Symbolic Meaning
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      Fire represents far more than warmth and light—it symbolizes civilization, hope, and human mastery over nature. 
                      The phrase "felt richer than he had ever felt in his life" reveals how Brian's definition of wealth has fundamentally 
                      shifted from material possessions to basic survival necessities. This fire marks his transition from victim to 
                      active participant in his own survival story.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-300 mb-2">Psychological Transformation</h4>
                    <p className="text-gray-300 leading-relaxed">
                      The careful, methodical approach Brian takes to building the fire demonstrates his growing patience and 
                      understanding of natural processes. This moment rebuilds his shattered confidence and provides the first 
                      real evidence that he might actually survive. The fire becomes both literal warmth and metaphorical 
                      beacon of hope in his darkest hour.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Passage 3 - The New Brian */}
          <div className="bg-gradient-to-r from-gray-800/80 to-gray-700/80 rounded-xl shadow-2xl overflow-hidden border border-amber-500/20" data-aos="fade-right">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-green-600 to-emerald-700 p-8 flex items-center justify-center">
                <div className="text-center">
                  <BookOpen className="h-16 w-16 text-white mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white">The New Brian</h3>
                  <p className="text-green-100 mt-2">Chapter 19</p>
                </div>
              </div>
              <div className="p-8 md:w-2/3">
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-amber-400 mb-4" />
                  <blockquote className="text-gray-200 italic text-lg leading-relaxed border-l-4 border-amber-500 pl-4">
                    "He was not the same. The plane passing changed him, the disappointment cut him down and made him new. 
                    He was tough, not crying now. He was tough and could do things. Nothing, he thought, nothing was impossible 
                    if a person could do what he had done—live this long, stay alive this long."
                  </blockquote>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-amber-300 mb-2 flex items-center">
                      <Brain className="h-5 w-5 mr-2" />
                      Literary Analysis
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      This passage captures the climactic moment of Brian's transformation through Paulsen's stark, declarative prose. 
                      The repetition of "He was not the same" and "He was tough" emphasizes the profound internal change. The phrase 
                      "disappointment cut him down and made him new" uses paradoxical language—being "cut down" typically suggests 
                      defeat, yet here it becomes the catalyst for rebirth and renewed strength.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-300 mb-2 flex items-center">
                      <Target className="h-5 w-5 mr-2" />
                      Character Arc Completion
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      This moment represents the completion of Brian's character arc from dependent child to self-reliant young man. 
                      The missed rescue plane, initially devastating, becomes the final test that proves his transformation is complete. 
                      His declaration that "nothing was impossible" shows he has internalized the lessons of survival and developed 
                      unshakeable confidence in his abilities.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-300 mb-2">Universal Theme</h4>
                    <p className="text-gray-300 leading-relaxed">
                      This passage embodies the novel's central message about human resilience and the potential for growth through 
                      adversity. Brian's realization connects to the universal experience of discovering inner strength we didn't 
                      know we possessed. His transformation from helpless to capable mirrors the journey every person faces when 
                      confronting life's unexpected challenges and discovering their own capacity for survival and growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Analysis Section */}
        <div className="mt-16 bg-gradient-to-r from-amber-900/20 to-orange-900/20 rounded-xl p-8 border border-amber-500/30" data-aos="fade-up">
          <h3 className="text-2xl font-bold text-amber-400 mb-6 text-center">Overall Narrative Techniques</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-amber-300 mb-3">Paulsen's Writing Style</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• <strong>Sensory Details:</strong> Constant use of sight, sound, smell, taste, and touch to immerse readers</li>
                <li>• <strong>Short, Punchy Sentences:</strong> Mirror Brian's direct, survival-focused thinking</li>
                <li>• <strong>Present-Focused Narrative:</strong> Keeps readers locked in Brian's immediate experience</li>
                <li>• <strong>Internal Monologue:</strong> Reveals Brian's thought processes and emotional journey</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-amber-300 mb-3">Thematic Development</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• <strong>Nature as Teacher:</strong> The wilderness becomes Brian's harsh but effective instructor</li>
                <li>• <strong>Self-Reliance:</strong> Progressive independence from civilization's comforts</li>
                <li>• <strong>Coming of Age:</strong> Transformation from boy to young man through trial</li>
                <li>• <strong>Resilience:</strong> Human capacity to adapt and overcome seemingly impossible odds</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analysis;
