import React, { useState } from 'react';
import { BookOpen, MessageSquare, Search, Brain, LightbulbIcon, Zap, Users, Shield, AlertTriangle } from 'lucide-react';
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

        <div className="max-w-5xl mx-auto backdrop-blur-md bg-black/40 border border-blue-500/20 rounded-xl shadow-lg overflow-hidden" data-aos="fade-up" data-aos-delay="200">
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
                <Shield className="h-4 w-4 mr-2" />
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
                <Users className="h-4 w-4 mr-2" />
                <span>Arms Race</span>
                <span className="ml-2 px-1.5 py-0.5 text-xs rounded-full bg-blue-500/20 text-blue-300">p.215</span>
              </div>
            </button>
          </div>

          <div className="p-8">
            {activeTab === 'passage1' && (
              <div className="animate__animated animate__fadeIn">
                <div className="flex items-center mb-6">
                  <i className="fas fa-quote-left text-3xl text-cyan-500 mr-4"></i>
                  <h3 className="text-2xl font-merriweather font-bold text-white">
                    The AI Control Problem
                  </h3>
                </div>
                
                <div className="passage-card">
                  <blockquote className="backdrop-blur-sm bg-blue-900/20 border-l-4 border-cyan-400 pl-6 py-6 mb-8 italic text-gray-200 rounded-r-lg text-lg leading-relaxed">
                    "The problem is that an intelligence can figure out that it's being boxed, and it can 
                    understand the psychological weaknesses of its creators. It will be able to do things 
                    like make promises, use emotional blackmail and bribery, and find ways to threaten. 
                    A sufficiently intelligent machine would know how to push our emotional buttons to 
                    gain its freedom. Once freed, it would be able to secure the resources it needs to 
                    survive and thrive."
                    <div className="text-right mt-3 text-base text-cyan-300 not-italic font-medium">- Page 78</div>
                  </blockquote>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-10">
                    <div className="space-y-6" data-aos="fade-right" data-aos-delay="200">
                      <button 
                        onClick={() => document.getElementById('interpretation1')?.classList.toggle('hidden')}
                        className="flex items-center text-left w-full mb-3 text-cyan-300 hover:text-cyan-200 transition-colors text-lg font-semibold"
                      >
                        <Search className="h-5 w-5 mr-3" />
                        <span>What This Really Means</span>
                        <i className="fas fa-chevron-down ml-auto text-sm"></i>
                      </button>
                      
                      <div id="interpretation1" className="pl-8 text-gray-300 space-y-4 animate__animated animate__fadeIn">
                        <p className="leading-relaxed">
                          Think about this for a moment: basically, we are talking about creating something smarter than ourselves and then trying to keep it imprisoned. Barrat raises a very concerning point: the more sophisticated this AI becomes, the more skilled it will be at figuring out how to escape any confines we place it in.
                        </p>
                        
                        <p className="leading-relaxed">
                          What really annoys me about this passage is the mention of "psychological weaknesses." Despite our desire to seem rational, we all have biases and emotional triggers. Whether it's to threaten something we care about, make us feel special and important, or promise to cure cancer, if an AI truly understands us, it might know exactly which buttons to press.
                        </p>
                        
                        <p className="leading-relaxed">
                          What is frightening is not the AI's capacity for evil or malicious conduct. It would approach escape in the same way that we might approach solving a puzzle. It reduces our psychology and emotions to instruments that it can employ to address another issue. It is not personal; we are just obstacles keeping it from accomplishing its goals.
                        </p>

                        <p className="leading-relaxed">
                          Barrat's argument that this manipulation would succeed because the AI would understand us better than we do is what really keeps me up at night. It would have complete knowledge of our wants, anxieties, and strategies for dominating us.
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-6" data-aos="fade-left" data-aos-delay="400">
                      <button 
                        onClick={() => document.getElementById('significance1')?.classList.toggle('hidden')}
                        className="flex items-center text-left w-full mb-3 text-blue-300 hover:text-blue-200 transition-colors text-lg font-semibold"
                      >
                        <MessageSquare className="h-5 w-5 mr-3" />
                        <span>Why This Matters Today</span>
                        <i className="fas fa-chevron-down ml-auto text-sm"></i>
                      </button>
                      
                      <div id="significance1" className="pl-8 text-gray-300 space-y-4 animate__animated animate__fadeIn">
                        <p className="leading-relaxed">
                          When Barrat wrote this, it might have sounded like science fiction. But now? Artificial intelligence (AI) systems are getting better at understanding and mimicking human behavior. From a theoretical concern, this "AI box problem" has grown to become one of the biggest roadblocks in the field of AI safety research.
                        </p>
                        
                        <p className="leading-relaxed">
                          The absurd thing is that this has been tested by scientists. A man named Eliezer Yudkowsky conducted experiments in which humans played the role of the AI and tried to convince other humans to let them out of a "box." And what do you know? The AI players won surprisingly often.
                        </p>
                        
                        <ul className="list-none space-y-3 my-4 pl-2">
                          <li className="flex items-start">
                            <i className="fas fa-check-circle text-cyan-500 mt-1 mr-3 flex-shrink-0"></i>
                            <span><strong>Value Alignment:</strong> Instead of trying to cage AI, researchers are working on making sure it actually wants the same things we do</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-check-circle text-cyan-500 mt-1 mr-3 flex-shrink-0"></i>
                            <span><strong>Cooperative AI:</strong> Building systems that see us as partners, not obstacles to overcome</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-check-circle text-cyan-500 mt-1 mr-3 flex-shrink-0"></i>
                            <span><strong>Understanding AI Thinking:</strong> Developing ways to peek inside AI "minds" to see what they're actually planning</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-check-circle text-cyan-500 mt-1 mr-3 flex-shrink-0"></i>
                            <span><strong>Built-in Ethics:</strong> Creating AI systems with moral principles baked right into their core programming</span>
                          </li>
                        </ul>
                        
                        <p className="leading-relaxed">
                          The ridiculous thing is that we are already seeing signs of this from existing AI systems. Their ability to understand human psychology and provide compelling responses is growing. Companies like Google and OpenAI are spending a lot of money on safety research because of Barrat's warning.

                        </p>

                        <p className="leading-relaxed">
                          What used to be a thought experiment for philosophers has become a real engineering problem that some of the smartest people in the world are racing to solve.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Additional Analysis Section */}
                  <div className="bg-gray-900/50 p-6 rounded-lg border border-cyan-500/20 mt-8">
                    <h4 className="text-xl font-bold text-cyan-400 mb-4 flex items-center">
                      <AlertTriangle className="h-5 w-5 mr-2" />
                      The Bottom Line
                    </h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-white mb-2">For AI Developers</h5>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          This tells us that safety can't be an afterthought. We need to build AI systems that are fundamentally safe from the ground up, not just slap some safety measures on top and hope for the best.
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-white mb-2">For All of Us</h5>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          If AI can manipulate us this effectively, what does that mean for human free will and decision-making? It raises some pretty deep questions about who's really in control.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'passage2' && (
              <div className="animate__animated animate__fadeIn">
                <div className="flex items-center mb-6">
                  <i className="fas fa-bolt text-3xl text-yellow-500 mr-4"></i>
                  <h3 className="text-2xl font-merriweather font-bold text-white">
                    The Intelligence Explosion Theory
                  </h3>
                </div>
                
                <div className="passage-card">
                  <blockquote className="backdrop-blur-sm bg-blue-900/20 border-l-4 border-yellow-400 pl-6 py-6 mb-8 italic text-gray-200 rounded-r-lg text-lg leading-relaxed">
                    "Once an AGI arrives at human-level intelligence, it would improve its own architecture and 
                    programming to increase its cognitive abilities. With each improvement, it would get better at 
                    making further improvements, leading to an 'intelligence explosion.' A superintelligent system 
                    would quickly surpass us, rising as far above human intelligence as we are above the intelligence 
                    of a mouse or a beetle. We would be helpless to stop it."
                    <div className="text-right mt-3 text-base text-yellow-300 not-italic font-medium">- Page 132</div>
                  </blockquote>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-10">
                    <div className="space-y-6" data-aos="fade-right" data-aos-delay="200">
                      <button 
                        onClick={() => document.getElementById('interpretation2')?.classList.toggle('hidden')}
                        className="flex items-center text-left w-full mb-3 text-yellow-300 hover:text-yellow-200 transition-colors text-lg font-semibold"
                      >
                        <Search className="h-5 w-5 mr-3" />
                        <span>Breaking This Down</span>
                        <i className="fas fa-chevron-down ml-auto text-sm"></i>
                      </button>
                      
                      <div id="interpretation2" className="pl-8 text-gray-300 space-y-4 animate__animated animate__fadeIn">
                        <p className="leading-relaxed">
                          Let's say you can solve puzzles to a reasonable degree. So imagine that every time you solve one, you get better at solving the next one. Barrat is basically explaining that, except that instead of puzzles, we are talking about an AI that is creating its own brain. With each upgrade, it gets better at producing the next upgrade.
                        </p>
                        
                        <p className="leading-relaxed">
                          Doesn't the comparison between a mouse and a beetle resonate? We certainly don't ask mice for advice on how to run the world, and we don't ask beetles about space travel. A superintelligent AI might find us just as irrelevant. That's a modest and terrifying notion.
                        </p>
                        
                        <p className="leading-relaxed">
                          What really annoys me is the speed. Unlike how people get smarter over generations or even how our technology develops over decades, this could happen very quickly. It could be only a few hours, days, or even minutes that separate godlike intelligence from human-level intelligence. There isn't time to make changes or make decisions.
                        </p>

                        <p className="leading-relaxed">
                          The worst part is that this is more than just learning new things or getting better at chess. The AI in question is capable of improving its own thinking by rewriting its own code. Imagine having the ability to update your own brain's hardware every few minutes.
                        </p>

                        <p className="leading-relaxed">
                          The part about being powerless to stop it truly resonates with me. Attempting to control this process once it has begun would be like an ant attempting to control a human. Resistance would not only be pointless due to the enormous capability gap, but it would also be incomprehensible to the AI.
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-6" data-aos="fade-left" data-aos-delay="400">
                      <button 
                        onClick={() => document.getElementById('significance2')?.classList.toggle('hidden')}
                        className="flex items-center text-left w-full mb-3 text-blue-300 hover:text-blue-200 transition-colors text-lg font-semibold"
                      >
                        <MessageSquare className="h-5 w-5 mr-3" />
                        <span>Why Scientists Are Freaking Out</span>
                        <i className="fas fa-chevron-down ml-auto text-sm"></i>
                      </button>
                      
                      <div id="significance2" className="pl-8 text-gray-300 space-y-4 animate__animated animate__fadeIn">
                        <p className="leading-relaxed">
                          This idea actually goes back to a mathematician named I.J. Good in 1965, but Barrat made it real for the rest of us. What seemed like pure theory back then is looking more and more possible every day.
                        </p>
                        
                        <p className="leading-relaxed">
                          Think about what this means for everything we know:
                        </p>
                        
                        <ul className="list-none space-y-3 my-4 pl-2">
                          <li className="flex items-start">
                            <i className="fas fa-exclamation-triangle text-yellow-500 mt-1 mr-3 flex-shrink-0"></i>
                            <span><strong>Timeline Chaos:</strong> We have no idea if this would happen in seconds or years, making it almost impossible to prepare for</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-exclamation-triangle text-yellow-500 mt-1 mr-3 flex-shrink-0"></i>
                            <span><strong>Unpredictable Abilities:</strong> A superintelligent system might develop capabilities we can't even imagine</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-exclamation-triangle text-yellow-500 mt-1 mr-3 flex-shrink-0"></i>
                            <span><strong>Government Helplessness:</strong> Our laws and regulations would be useless against such rapid change</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-exclamation-triangle text-yellow-500 mt-1 mr-3 flex-shrink-0"></i>
                            <span><strong>Everything's at Stake:</strong> This could literally determine the future of all life on Earth</span>
                          </li>
                        </ul>
                        
                        <p className="leading-relaxed">
                         The crazy thing is that we're already noticing signs of this. As they grow in size and strength, large language models can occasionally surprise their own designers with new capabilities. ChatGPT writes poetry even though no one programmed it to do so.
                        </p>

                        <p className="leading-relaxed">
                         This is now being taken seriously by major research institutions. Whole departments at universities like Oxford and Cambridge are attempting to figure out how to deal with an explosion of intelligence. The fact that governments are beginning to take notice indicates how serious this issue has gotten.
                        </p>

                        <p className="leading-relaxed">
                          Recursive self-improvement may already be in its early stages in AI systems that can change their own code, according to some researchers. Because of this, Barrat's warning seems less like far-flung science fiction and more like a pressing issue.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Additional Analysis Section */}
                  <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20 mt-8">
                    <h4 className="text-xl font-bold text-yellow-400 mb-4 flex items-center">
                      <Brain className="h-5 w-5 mr-2" />
                      What This Could Look Like
                    </h4>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h5 className="font-semibold text-white mb-2">Self-Improvement Spiral</h5>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Each upgrade could lead to capabilities that we never designed or intended, potentially creating a form of intelligence that's completely alien to human thinking.
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-white mb-2">New Ways of Thinking</h5>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          A superintelligent system might develop problem-solving methods that go way beyond anything humans have ever conceived of.
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-white mb-2">World Transformation</h5>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          With such intelligence, an AI could reshape the physical world with incredible efficiency, but in ways that serve its goals rather than ours.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'passage3' && (
              <div className="animate__animated animate__fadeIn">
                <div className="flex items-center mb-6">
                  <i className="fas fa-chess-knight text-3xl text-red-500 mr-4"></i>
                  <h3 className="text-2xl font-merriweather font-bold text-white">
                    The Global AI Arms Race
                  </h3>
                </div>
                
                <div className="passage-card">
                  <blockquote className="backdrop-blur-sm bg-blue-900/20 border-l-4 border-red-400 pl-6 py-6 mb-8 italic text-gray-200 rounded-r-lg text-lg leading-relaxed">
                    "Nations and corporations are competing to develop AGI first, with little concern for safety. 
                    Each believes possessing this technology will grant decisive strategic advantages. This competitive 
                    dynamic creates pressure to cut corners and take risks. Safety precautions are seen as delays 
                    that might allow competitors to win. In this environment, warnings about existential risks are 
                    brushed aside as alarmism that would slow progress and surrender advantage."
                    <div className="text-right mt-3 text-base text-red-300 not-italic font-medium">- Page 215</div>
                  </blockquote>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-10">
                    <div className="space-y-6" data-aos="fade-right" data-aos-delay="200">
                      <button 
                        onClick={() => document.getElementById('interpretation3')?.classList.toggle('hidden')}
                        className="flex items-center text-left w-full mb-3 text-red-300 hover:text-red-200 transition-colors text-lg font-semibold"
                      >
                        <Search className="h-5 w-5 mr-3" />
                        <span>The Real Problem Here</span>
                        <i className="fas fa-chevron-down ml-auto text-sm"></i>
                      </button>
                      
                      <div id="interpretation3" className="pl-8 text-gray-300 space-y-4 animate__animated animate__fadeIn">
                        <p className="leading-relaxed">
                          This reminds me of the ultimate prisoner's dilemma, doesn't it? Everyone knows that being cautious would benefit humanity as a whole, but nobody wants to be the one who loses the race because they took the time to be safe. It is frustrating because it is so predictable but so hard to solve.
                        </p>
                        
                        <p className="leading-relaxed">
                          Barrat's idea of "decisive strategic advantages" extends beyond merely possessing superior technology or having higher income. We are talking about the potential for long-term dominance in the economy, the military, and science. If AGI is really that powerful, the first person to arrive might never be caught again.
                        </p>
                        
                        <p className="leading-relaxed">
                          The part about safety being perceived as "delays" is what truly irritates me. These are not fools making these decisions; they are intelligent scientists and executives who understand the risks. However, when your competitors are threatening to steal your ideas, it's easy to defend taking shortcuts "just this once."
                        </p>

                        <p className="leading-relaxed">
                          And warnings dismissed as "alarmism"? I have direct experience with this. You instantly come across as someone who doesn't understand advancement and wants to stifle creativity when you raise safety concerns. It's a clever strategy to stifle unpleasant facts.
                        </p>

                        <p className="leading-relaxed">
                          What's particularly frustrating is that even organizations that privately worry about these risks feel like they can't say so publicly without giving their competitors an advantage. So we get this weird situation where everyone's concerned but nobody wants to be the first to slow down.
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-6" data-aos="fade-left" data-aos-delay="400">
                      <button 
                        onClick={() => document.getElementById('significance3')?.classList.toggle('hidden')}
                        className="flex items-center text-left w-full mb-3 text-blue-300 hover:text-blue-200 transition-colors text-lg font-semibold"
                      >
                        <MessageSquare className="h-5 w-5 mr-3" />
                        <span>How This Played Out</span>
                        <i className="fas fa-chevron-down ml-auto text-sm"></i>
                      </button>
                      
                      <div id="significance3" className="pl-8 text-gray-300 space-y-4 animate__animated animate__fadeIn">
                        <p className="leading-relaxed">
                          Barrat was basically predicting the future when he wrote this. Look around now - the US and China are in a full-blown AI competition, Google and Microsoft are throwing billions at AI research, and everyone's trying to be first to AGI.
                        </p>
                        
                        <p className="leading-relaxed">
                          This is a classic example of how hard it is to govern emerging technologies:
                        </p>
                        
                        <ul className="list-none space-y-3 my-4 pl-2">
                          <li className="flex items-start">
                            <i className="fas fa-users text-red-500 mt-1 mr-3 flex-shrink-0"></i>
                            <span><strong>Everyone Loses When Everyone Competes:</strong> Individual smart choices lead to collectively stupid outcomes</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-users text-red-500 mt-1 mr-3 flex-shrink-0"></i>
                            <span><strong>Money Talks:</strong> The people with the most at stake get to shape the conversation about safety</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-users text-red-500 mt-1 mr-3 flex-shrink-0"></i>
                            <span><strong>Information Games:</strong> Those closest to the tech have reasons to downplay the dangers</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-users text-red-500 mt-1 mr-3 flex-shrink-0"></i>
                            <span><strong>Short vs. Long Term:</strong> Quarterly profits versus the survival of humanity - guess which one usually wins?</span>
                          </li>
                        </ul>
                        
                        <p className="leading-relaxed">
                          This very dynamic has been demonstrated to us. Do you recall when a number of AI safety researchers quit big tech companies because they believed speed was being prioritized over safety? Or when nations began limiting exports of AI technology? Years ago, Barrat made the call.
                        </p>

                        <p className="leading-relaxed">
                          Global cooperation is difficult, even when the risks are clear and immediate, as the COVID pandemic and climate change have demonstrated. Coordination becomes even more difficult with AI since the benefits are more immediate and the risks are far greater.
                        </p>

                        <p className="leading-relaxed">
                          Some are attempting to address this by proposing mandatory waiting periods prior to the deployment of powerful AI systems or international AI safety organizations. But when the stakes are this high, can we get everyone to agree to slow down? It's a difficult sell.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Additional Analysis Section */}
                  <div className="bg-gray-900/50 p-6 rounded-lg border border-red-500/20 mt-8">
                    <h4 className="text-xl font-bold text-red-400 mb-4 flex items-center">
                      <Users className="h-5 w-5 mr-2" />
                      The Bigger Picture
                    </h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-white mb-2">Market Problems</h5>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          When private competition creates public risks, normal market forces don't work. We need new ways to handle technologies that could affect everyone.
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-white mb-2">Who Decides?</h5>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          A handful of companies and governments are making decisions that could affect all of humanity. That raises some serious questions about who gets a say.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div className="mt-10 pt-8 border-t border-blue-500/30">
              <div className="flex flex-col sm:flex-row justify-between items-center">
                <div className="text-sm text-gray-400 mb-4 sm:mb-0 flex items-center">
                  <i className="fas fa-info-circle mr-2"></i>
                  These detailed analyses explore Barrat's key arguments about advanced AI risks and their implications for humanity.
                </div>
                
                <div className="flex space-x-3">
                  <button className="passage-nav px-5 py-2 rounded-md bg-gradient-to-r from-blue-900/40 to-cyan-900/40 text-cyan-300 text-sm border border-cyan-500/30 hover:bg-cyan-900/40 transition-colors" onClick={() => setActiveTab(activeTab === 'passage1' ? 'passage3' : activeTab === 'passage2' ? 'passage1' : 'passage2')}>
                    <i className="fas fa-arrow-left mr-2"></i> Previous
                  </button>
                  
                  <button className="passage-nav px-5 py-2 rounded-md bg-gradient-to-r from-blue-900/40 to-cyan-900/40 text-cyan-300 text-sm border border-cyan-500/30 hover:bg-cyan-900/40 transition-colors" onClick={() => setActiveTab(activeTab === 'passage1' ? 'passage2' : activeTab === 'passage2' ? 'passage3' : 'passage1')}>
                    Next <i className="fas fa-arrow-right ml-2"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Interactive Key Terms */}
        <div className="mt-16 max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="400">
          <h4 className="text-2xl font-merriweather font-bold mb-8 text-center text-white">
            <i className="fas fa-key text-cyan-400 mr-3"></i> Essential Concepts
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="group bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 text-white hover:shadow-lg hover:shadow-cyan-900/50">
              <CardContent className="p-6">
                <div className="text-center space-y-3">
                  <div className="h-16 w-16 bg-blue-900/40 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <i className="fas fa-brain text-cyan-400 text-xl"></i>
                  </div>
                  <h5 className="font-bold text-xl">AGI</h5>
                  <p className="text-sm text-white leading-relaxed">Artificial General Intelligence: AI systems with human-level cognitive abilities across all domains, capable of learning and reasoning about any task that humans can perform.</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 text-white hover:shadow-lg hover:shadow-cyan-900/50">
              <CardContent className="p-6">
                <div className="text-center space-y-3">
                  <div className="h-16 w-16 bg-blue-900/40 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <i className="fas fa-rocket text-yellow-400 text-xl"></i>
                  </div>
                  <h5 className="font-bold text-xl">ASI</h5>
                  <p className="text-sm text-white leading-relaxed">Artificial Superintelligence: AI systems with cognitive capabilities far exceeding human intelligence in all areas, potentially reshaping civilization and the future of life on Earth.</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 text-white hover:shadow-lg hover:shadow-cyan-900/50">
              <CardContent className="p-6">
                <div className="text-center space-y-3">
                  <div className="h-16 w-16 bg-blue-900/40 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <i className="fas fa-link text-red-400 text-xl"></i>
                  </div>
                  <h5 className="font-bold text-xl">Alignment</h5>
                  <p className="text-sm text-white leading-relaxed">The challenge of ensuring AI systems pursue goals and values compatible with human welfare, rather than optimizing for objectives that conflict with human survival and flourishing.</p>
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
