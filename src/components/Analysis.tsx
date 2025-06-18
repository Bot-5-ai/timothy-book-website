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
                          Just think about this for a moment: we are discussing about creating a machine that is smarter than humans but trying to keep it under control. Barrat makes a point that should concern all people: the more we refine AI, we will need more skill and knowledge to try to keep it confined. We don't know this yet but when ASI is developed, we don't know if it wants to escape the grasp of us humans. It will be too skilled to figure out how to escape when we try to confine it.
                        </p>
                        
                        <p className="leading-relaxed">
                          The part that annoys me the most is when it mentions our "psychological weaknesses". Even though that we try to seem rational, we still have our own biases and unique sense of emotions that will trigger. It doesn't matter if it is trying to threaten us or make us feel important, AI will always find a way to understand how we feel. This will allow it to know exactly what buttons to press to get humans to do as they please.
                        </p>
                        
                        <p className="leading-relaxed">
                          Something that is frightening in this passage is not the AI's choice for evil or control. It would try to make an escape like how we would solve a puzzle. It reduces our emotions so that it can maneuver around to make an escape from our grasp. It isn't a personal thing, the truth is, humans are the biggest obstacles that keeps AI from accomplishing its own goals.
                        </p>

                        <p className="leading-relaxed">
                          The argument that Barrat has made is that manipulation to humans would succeed as the AI will understand us more than we do ourselves one day. It would know exactly what we want, our fears and will create strategies that will put an extinction to the human era.
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
                          When Barrat wrote this book, it may sound like that this is a theory by a scientist that may never happen. But now? AI systems are getting smarter every single day. It is not just getting smarter for solving problems, but much better at understanding and mimicking the behaviour of humans. If you look at this with a theoretical concern, this "AI box problem" has became one of the biggest obstacles for the research of AI safety.
                        </p>
                        
                        <p className="leading-relaxed">
                          The absurd thing is that this was already been tested by scientists before. A man who goes by Eliezer Yudkowsky had conducted experiments on this already. He had made humans play the role of an AI and their objective was to convince other humans to let them out of a "box". And surprise surprise, the actual AI won most of the time
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
                         The part that is ridiculous is that we are alreadying seeing signs of this happening in some AI systems. The ability to understand the psychology of humans provide much more enhanced responses that suit different people. There are big companies out there such as Google and OpenAI which are spending a lot of money on AI safety because of Barrat's warning.

                        </p>

                        <p className="leading-relaxed">
                          What was used to be a thought philosophers has became a real problem for engineering. Now, some of the smartest people are gathering in the world to try to solve this problem before AI takes over.
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
                          Let's say that you are able to solve puzzles with a reasonable degree. Let's imagine that every single time that you solve it, you gain better understanding and then you get better and quick at solving the next one. That is the point that is made by Barrat which explains that instead of solving puzzles, we speak to an AI that creates its own brain for functionality. Every time that it answers one of our questions, it gets smarter and answers the next one with much better quality and speed. 
                        </p>
                        
                        <p className="leading-relaxed">
                          Let's do the mouse and beetle comparison. We will definitely not ask a mouse for tips on how to run the world, and most certainly ask beetles on space travel. Superintelligent machines may find us just as irrelevant so that it erases us from their memory and function just as well.
                        </p>
                        
                        <p className="leading-relaxed">
                          An annoying part of this is the speed that AI can answer problems asked by humans. Unlike how people spend years or even decades to get very intelligent, AI can do it in a few minutes or hours. This puts them on a whole different level of intelligence which I like to call godlike intelligence compared to human level intelligence. There may not even be enough time to make any changes as AI just advances too quickly.
                        </p>

                        <p className="leading-relaxed">
                          The worst part is that it's not just learning about new things or getting better at certain things such as chess. The AI is capable of making itself smarter by rewriting the code that is built into them. This allows them to update or even replace the hardware in its brain every few minutes which is terrifying. 
                        </p>

                        <p className="leading-relaxed">
                          The part of having now power against it is what really keeps me up all night. When we try attempting to control the AI it would feel like an ant trying to control a human. If we do try to fight back, it wouldn't work due to the capability gap that the AI has between humans.
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
