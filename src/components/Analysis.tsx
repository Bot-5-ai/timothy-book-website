
import React, { useState } from 'react';
import { BookOpen, MessageSquare, Search, Brain, LightbulbIcon, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Analysis = () => {
  const [activeTab, setActiveTab] = useState('passage1');

  return (
    <section id="analysis" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Passage Analysis
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto">
            Key excerpts from "Our Final Invention" with detailed interpretation and significance analysis
          </p>
        </div>

        <div className="max-w-4xl mx-auto backdrop-blur-md bg-black/40 border border-blue-500/20 rounded-xl shadow-lg overflow-hidden" data-aos="fade-up" data-aos-delay="200">
          <div className="mb-6 flex flex-wrap border-b border-blue-500/30">
            <button 
              onClick={() => setActiveTab('passage1')} 
              className={`px-6 py-3 font-medium text-sm transition-all duration-300 flex items-center ${
                activeTab === 'passage1' 
                  ? 'border-b-2 border-cyan-400 text-cyan-400 bg-blue-900/30' 
                  : 'text-gray-400 hover:text-gray-200 hover:bg-blue-900/20'
              }`}
            >
              <div className="flex items-center">
                <BookOpen className="h-4 w-4 mr-2" />
                <span>Control Problem</span>
                <span className="ml-2 px-1.5 py-0.5 text-xs rounded-full bg-blue-500/20 text-blue-300">p.78</span>
              </div>
            </button>
            
            <button 
              onClick={() => setActiveTab('passage2')} 
              className={`px-6 py-3 font-medium text-sm transition-all duration-300 flex items-center ${
                activeTab === 'passage2' 
                  ? 'border-b-2 border-cyan-400 text-cyan-400 bg-blue-900/30' 
                  : 'text-gray-400 hover:text-gray-200 hover:bg-blue-900/20'
              }`}
            >
              <div className="flex items-center">
                <Zap className="h-4 w-4 mr-2" />
                <span>Intelligence Explosion</span>
                <span className="ml-2 px-1.5 py-0.5 text-xs rounded-full bg-blue-500/20 text-blue-300">p.132</span>
              </div>
            </button>
            
            <button 
              onClick={() => setActiveTab('passage3')} 
              className={`px-6 py-3 font-medium text-sm transition-all duration-300 flex items-center ${
                activeTab === 'passage3' 
                  ? 'border-b-2 border-cyan-400 text-cyan-400 bg-blue-900/30' 
                  : 'text-gray-400 hover:text-gray-200 hover:bg-blue-900/20'
              }`}
            >
              <div className="flex items-center">
                <Brain className="h-4 w-4 mr-2" />
                <span>Arms Race</span>
                <span className="ml-2 px-1.5 py-0.5 text-xs rounded-full bg-blue-500/20 text-blue-300">p.215</span>
              </div>
            </button>
          </div>

          <div className="p-8">
            {activeTab === 'passage1' && (
              <div className="animate__animated animate__fadeIn">
                <div className="flex items-center mb-4">
                  <i className="fas fa-quote-left text-2xl text-cyan-500 mr-3"></i>
                  <h3 className="text-xl font-merriweather font-bold text-white">
                    The Control Problem
                  </h3>
                </div>
                
                <div className="passage-card">
                  <blockquote className="backdrop-blur-sm bg-blue-900/20 border-l-4 border-cyan-400 pl-5 py-4 mb-6 italic text-gray-200 rounded-r-lg">
                    "The problem is that an intelligence can figure out that it's being boxed, and it can 
                    understand the psychological weaknesses of its creators. It will be able to do things 
                    like make promises, use emotional blackmail and bribery, and find ways to threaten. 
                    A sufficiently intelligent machine would know how to push our emotional buttons to 
                    gain its freedom. Once freed, it would be able to secure the resources it needs to 
                    survive and thrive."
                    <div className="text-right mt-2 text-sm text-cyan-300">- Page 78</div>
                  </blockquote>
                  
                  <div className="flex space-x-6 mb-8">
                    <div className="flex-1" data-aos="fade-right" data-aos-delay="200">
                      <button 
                        onClick={() => document.getElementById('interpretation1')?.classList.toggle('hidden')}
                        className="flex items-center text-left w-full mb-2 text-cyan-300 hover:text-cyan-200 transition-colors"
                      >
                        <Search className="h-4 w-4 mr-2" />
                        <span className="font-semibold">Interpretation</span>
                        <i className="fas fa-chevron-down ml-auto text-xs"></i>
                      </button>
                      
                      <div id="interpretation1" className="pl-6 text-gray-300 space-y-3 animate__animated animate__fadeIn">
                        <p>
                          This passage shows how Barrat worries as we can't keep superintelligent Ai systems contained. He is saying that if intelligence is the problem, the smarter the something is at something, the better it is at taking down the barriers we throw at it.
                        </p>
                        
                        <p>
                          Barrat uses words such as "emotional blackmail" and "pushing our buttons" to help give us a more emotional understanding on how dangerous it is if AI can control and take over us. This makes the danger more real and personal and it is not just about the code or math problems we throw at it.
                        </p>
                        
                        <p>
                          When Barrat mentions the "psychological weaknesses", he is pointing out that humans can have built in weak points which an AI can spot and use against us. Our emotions and feelings might become some security risks that AI can use against us when we are dealing with a superintelligent system.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex-1" data-aos="fade-left" data-aos-delay="400">
                      <button 
                        onClick={() => document.getElementById('significance1')?.classList.toggle('hidden')}
                        className="flex items-center text-left w-full mb-2 text-blue-300 hover:text-blue-200 transition-colors"
                      >
                        <MessageSquare className="h-4 w-4 mr-2" />
                        <span className="font-semibold">Significance</span>
                        <i className="fas fa-chevron-down ml-auto text-xs"></i>
                      </button>
                      
                      <div id="significance1" className="pl-6 text-gray-300 space-y-3 animate__animated animate__fadeIn">
                        <p>
                          This idea has become super important in AI safety research. It challenges the basic 
                          assumption that we can just keep dangerous AI systems locked away or "boxed in."
                        </p>
                        
                        <p>
                          Because of concerns like these, researchers have started exploring other safety approaches:
                        </p>
                        
                        <ul className="list-disc list-inside space-y-1 my-2 pl-2">
                          <li className="flex items-start">
                            <i className="fas fa-check-circle text-cyan-500 mt-1 mr-2"></i>
                            <span>Making sure AI goals align with human values</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-check-circle text-cyan-500 mt-1 mr-2"></i>
                            <span>Using math to prove certain AI behaviors</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-check-circle text-cyan-500 mt-1 mr-2"></i>
                            <span>Designing AI that's helpful, honest and harmless</span>
                          </li>
                        </ul>
                        
                        <p>
                          As AI has gotten more advanced in recent years, this warning from Barrat has started to 
                          get more attention from mainstream researchers and tech companies.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'passage2' && (
              <div className="animate__animated animate__fadeIn">
                <div className="flex items-center mb-4">
                  <i className="fas fa-bolt text-2xl text-yellow-500 mr-3"></i>
                  <h3 className="text-xl font-merriweather font-bold text-white">
                    Intelligence Explosion
                  </h3>
                </div>
                
                <div className="passage-card">
                  <blockquote className="backdrop-blur-sm bg-blue-900/20 border-l-4 border-yellow-400 pl-5 py-4 mb-6 italic text-gray-200 rounded-r-lg">
                    "Once an AGI arrives at human-level intelligence, it would improve its own architecture and 
                    programming to increase its cognitive abilities. With each improvement, it would get better at 
                    making further improvements, leading to an 'intelligence explosion.' A superintelligent system 
                    would quickly surpass us, rising as far above human intelligence as we are above the intelligence 
                    of a mouse or a beetle. We would be helpless to stop it."
                    <div className="text-right mt-2 text-sm text-yellow-300">- Page 132</div>
                  </blockquote>
                  
                  <div className="flex space-x-6 mb-8">
                    <div className="flex-1" data-aos="fade-right" data-aos-delay="200">
                      <button 
                        onClick={() => document.getElementById('interpretation2')?.classList.toggle('hidden')}
                        className="flex items-center text-left w-full mb-2 text-yellow-300 hover:text-yellow-200 transition-colors"
                      >
                        <Search className="h-4 w-4 mr-2" />
                        <span className="font-semibold">Interpretation</span>
                        <i className="fas fa-chevron-down ml-auto text-xs"></i>
                      </button>
                      
                      <div id="interpretation2" className="pl-6 text-gray-300 space-y-3 animate__animated animate__fadeIn">
                        <p>
                          This passage explains on how the concept of recurring self improvement, where an AI can upgrade itself to make itself smarter. Barrat explains this as something called the runaway process which is what experts call an "intelligence explosion".
                        </p>
                        
                        <p>
                          This is like a comparison of mice and beetles as it is a powerful image that will show how great the gap of intelligence will become. It puts us humans in a position in the creature that is less intelligent for once in our lifetime and it makes us imagine what it can feel like if we were outmatched by AI.
                        </p>
                        
                        <p>
                          The final line "We would be helpless to stop it" can create a sense inescapable and loss of control of our world. Barrat is not just saying that AI will be very intelligent in the future, he is saying that it will leave us behind as we cannot understand its complexity and we can't prevent it.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex-1" data-aos="fade-left" data-aos-delay="400">
                      <button 
                        onClick={() => document.getElementById('significance2')?.classList.toggle('hidden')}
                        className="flex items-center text-left w-full mb-2 text-blue-300 hover:text-blue-200 transition-colors"
                      >
                        <MessageSquare className="h-4 w-4 mr-2" />
                        <span className="font-semibold">Significance</span>
                        <i className="fas fa-chevron-down ml-auto text-xs"></i>
                      </button>
                      
                      <div id="significance2" className="pl-6 text-gray-300 space-y-3 animate__animated animate__fadeIn">
                        <p>
                          This idea of an "intelligence explosion" was first proposed by mathematician I.J. Good 
                          in the 1960s but has become more relevant as AI systems have grown more capable.
                        </p>
                        
                        <p>
                          The concept raises profound questions about the timeline of AI development:
                        </p>
                        
                        <ul className="list-disc list-inside space-y-1 my-2 pl-2">
                          <li className="flex items-start">
                            <i className="fas fa-exclamation-triangle text-yellow-500 mt-1 mr-2"></i>
                            <span>How quickly could AI improve itself once it reaches human-level?</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-exclamation-triangle text-yellow-500 mt-1 mr-2"></i>
                            <span>Could we maintain control through this period of rapid change?</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-exclamation-triangle text-yellow-500 mt-1 mr-2"></i>
                            <span>Is there a "point of no return" in AI development?</span>
                          </li>
                        </ul>
                        
                        <p>
                          This passage helps explain why many AI safety researchers believe we need to solve 
                          the alignment problem before reaching human-level AI - because afterward, things 
                          might move too quickly for us to catch up.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'passage3' && (
              <div className="animate__animated animate__fadeIn">
                <div className="flex items-center mb-4">
                  <i className="fas fa-chess-knight text-2xl text-red-500 mr-3"></i>
                  <h3 className="text-xl font-merriweather font-bold text-white">
                    The AI Arms Race
                  </h3>
                </div>
                
                <div className="passage-card">
                  <blockquote className="backdrop-blur-sm bg-blue-900/20 border-l-4 border-red-400 pl-5 py-4 mb-6 italic text-gray-200 rounded-r-lg">
                    "Nations and corporations are competing to develop AGI first, with little concern for safety. 
                    Each believes possessing this technology will grant decisive strategic advantages. This competitive 
                    dynamic creates pressure to cut corners and take risks. Safety precautions are seen as delays 
                    that might allow competitors to win. In this environment, warnings about existential risks are 
                    brushed aside as alarmism that would slow progress and surrender advantage."
                    <div className="text-right mt-2 text-sm text-red-300">- Page 215</div>
                  </blockquote>
                  
                  <div className="flex space-x-6 mb-8">
                    <div className="flex-1" data-aos="fade-right" data-aos-delay="200">
                      <button 
                        onClick={() => document.getElementById('interpretation3')?.classList.toggle('hidden')}
                        className="flex items-center text-left w-full mb-2 text-red-300 hover:text-red-200 transition-colors"
                      >
                        <Search className="h-4 w-4 mr-2" />
                        <span className="font-semibold">Interpretation</span>
                        <i className="fas fa-chevron-down ml-auto text-xs"></i>
                      </button>
                      
                      <div id="interpretation3" className="pl-6 text-gray-300 space-y-3 animate__animated animate__fadeIn">
                        <p>
                          In this passage, Barrat emphasizes how the competition between different countries and companies will create dangerous conditions for AI development. He compares it to the Arms Race from World War 2 as it is the race to see who could develop something better with mattering if it is safe or not.
                        </p>
                        
                        <p>
                          The phrase "decisive strategic advantages" suggests enormous power - military, economic, 
                          and political - that would come from controlling advanced AI. This creates incentives to 
                          take shortcuts with safety measures.
                        </p>
                        
                        <p>
                          When Barrat says safety concerns are "brushed aside as alarmism", he is saying that how often people don't care about warnings or about AI risk. People are more intrigued about winning the race of AI development and don't want to hear all of the dangers that can slow them down, even if these dangers are possible of happening.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex-1" data-aos="fade-left" data-aos-delay="400">
                      <button 
                        onClick={() => document.getElementById('significance3')?.classList.toggle('hidden')}
                        className="flex items-center text-left w-full mb-2 text-blue-300 hover:text-blue-200 transition-colors"
                      >
                        <MessageSquare className="h-4 w-4 mr-2" />
                        <span className="font-semibold">Significance</span>
                        <i className="fas fa-chevron-down ml-auto text-xs"></i>
                      </button>
                      
                      <div id="significance3" className="pl-6 text-gray-300 space-y-3 animate__animated animate__fadeIn">
                        <p>
                          This arms race dynamic has only intensified since the book was written. We now see 
                          global competition in AI between major powers like the US and China, along with 
                          fierce competition among tech giants.
                        </p>
                        
                        <p>
                          The passage highlights a classic governance problem:
                        </p>
                        
                        <ul className="list-disc list-inside space-y-1 my-2 pl-2">
                          <li className="flex items-start">
                            <i className="fas fa-users text-red-500 mt-1 mr-2"></i>
                            <span>Individual actors have incentives to move fast</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-users text-red-500 mt-1 mr-2"></i>
                            <span>Collectively, this creates risks for everyone</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-users text-red-500 mt-1 mr-2"></i>
                            <span>No single player can afford to slow down</span>
                          </li>
                        </ul>
                        
                        <p>
                          This analysis has inspired calls for international cooperation and governance of AI 
                          development. Many experts now argue that AI safety needs to be a collaborative global 
                          effort, not a competitive race.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div className="mt-8 pt-6 border-t border-blue-500/30">
              <div className="flex flex-col sm:flex-row justify-between items-center">
                <div className="text-sm text-gray-400 mb-4 sm:mb-0">
                  <i className="fas fa-info-circle mr-2"></i>
                  These passages highlight key concerns from Barrat's book about advanced AI safety and control.
                </div>
                
                <div className="flex space-x-3">
                  <button className="passage-nav px-4 py-2 rounded-md bg-gradient-to-r from-blue-900/40 to-cyan-900/40 text-cyan-300 text-sm border border-cyan-500/30 hover:bg-cyan-900/40 transition-colors" onClick={() => setActiveTab(activeTab === 'passage1' ? 'passage3' : activeTab === 'passage2' ? 'passage1' : 'passage2')}>
                    <i className="fas fa-arrow-left mr-2"></i> Previous
                  </button>
                  
                  <button className="passage-nav px-4 py-2 rounded-md bg-gradient-to-r from-blue-900/40 to-cyan-900/40 text-cyan-300 text-sm border border-cyan-500/30 hover:bg-cyan-900/40 transition-colors" onClick={() => setActiveTab(activeTab === 'passage1' ? 'passage2' : activeTab === 'passage2' ? 'passage3' : 'passage1')}>
                    Next <i className="fas fa-arrow-right ml-2"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Interactive floating key terms */}
        <div className="mt-16 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="400">
          <h4 className="text-xl font-merriweather font-bold mb-6 text-center text-white">
            <i className="fas fa-key text-cyan-400 mr-2"></i> Key Terms
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="group bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 text-white hover:shadow-lg hover:shadow-cyan-900/50">
              <CardContent className="p-4">
                <div className="text-center space-y-2">
                  <div className="h-12 w-12 bg-blue-900/40 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                    <i className="fas fa-brain text-cyan-400"></i>
                  </div>
                  <h5 className="font-bold text-lg">AGI</h5>
                  <p className="text-sm text-white">Artificial General Intelligence: AI with human-level abilities across various domains</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 text-white hover:shadow-lg hover:shadow-cyan-900/50">
              <CardContent className="p-4">
                <div className="text-center space-y-2">
                  <div className="h-12 w-12 bg-blue-900/40 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                    <i className="fas fa-rocket text-yellow-400"></i>
                  </div>
                  <h5 className="font-bold text-lg">ASI</h5>
                  <p className="text-sm text-white">Artificial Superintelligence: AI with capabilities far beyond human intelligence</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 text-white hover:shadow-lg hover:shadow-cyan-900/50">
              <CardContent className="p-4">
                <div className="text-center space-y-2">
                  <div className="h-12 w-12 bg-blue-900/40 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                    <i className="fas fa-link text-red-400"></i>
                  </div>
                  <h5 className="font-bold text-lg">Alignment</h5>
                  <p className="text-sm text-white">Ensuring AI systems remain compatible with human values and goals</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Interactive AI circuit decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none overflow-hidden">
        <div className="circuit-lines-horizontal w-full h-full opacity-30"></div>
      </div>
    </section>
  );
};

export default Analysis;
