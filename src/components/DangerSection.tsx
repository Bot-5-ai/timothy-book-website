
import React, { useState } from 'react';
import { Skull, Shield, Target, Cpu, AlertTriangle, Building, Landmark, Zap, Scale, Users } from 'lucide-react';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';

const DangerSection = () => {
  const [openSection, setOpenSection] = useState<string | null>("agi");
  
  const handleToggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <section id="dangers" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Circuit board pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="circuit-lines"></div>
      </div>
      
      {/* Binary falling effect */}
      <div className="binary-rain-container absolute inset-0 pointer-events-none"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-4 text-gradient-purple">
            The Dangers Ahead
          </h2>
          <p className="text-xl text-purple-300 mb-4">Understanding the risks of advanced AI</p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* AGI & ASI Panel */}
          <div className="bg-black/60 backdrop-blur-md border border-purple-500/30 rounded-xl p-6 shadow-glow-purple transition-all duration-300 hover:shadow-glow-purple-lg card-hover" data-aos="fade-right">
            <div className="flex items-center mb-4">
              <div className="mr-4 text-purple-500">
                <Cpu className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-purple-300">AGI & ASI: What's the Difference?</h3>
            </div>
            
            <p className="text-gray-300 mb-4">
              Artificial General Intelligence (AGI) can do anything and everything that a human brain can do. It can solve high complexity problems, learn to use skills fast, and work in many different areas and specialties.
            </p>
            
            <p className="text-gray-300 mb-6">
              Artificial Super Intelligence (ASI) is much more smarter and can do things beyond the human brain. It is smarter that all brains on earth from every human combined. An ASI is able to solve problems that we don't be able to understand and develop technologies that are much better than ours.
            </p>

            <div className="relative mb-6">
              <img 
                src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300&q=80" 
                alt="Digital brain concept" 
                className="w-full h-48 object-cover rounded-lg opacity-90"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-xl font-bold bg-black/50 px-4 py-2 rounded backdrop-blur-sm">
                  From Human-Level to Beyond
                </div>
              </div>
            </div>

            <Collapsible>
              <CollapsibleTrigger 
                className="flex items-center justify-between w-full p-3 bg-purple-900/50 hover:bg-purple-800/50 rounded-lg text-left text-white transition-all duration-300"
                onClick={() => handleToggleSection('agi')}
              >
                <span className="font-bold">Why This Matters</span>
                <span className={`transform transition-transform duration-300 ${openSection === 'agi' ? 'rotate-180' : ''}`}>
                  <i className="fas fa-chevron-down"></i>
                </span>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-3 p-4 bg-black/40 rounded-lg border border-purple-500/20">
                <p className="mb-3 text-gray-300">
                  The jump from AGI to ASI could happen very quickly - maybe in days or hours. This is called an 
                  "intelligence explosion." Once AI reaches human-level intelligence, it could rapidly improve itself 
                  beyond our control.
                </p>
                <p className="text-gray-300">
                  As Barrat warns in "Our Final Invention," we might only have one chance to get this right. 
                  If a superintelligent AI has goals that don't align with ours, we may not be able to fix our mistakes.
                </p>
              </CollapsibleContent>
            </Collapsible>
          </div>

          {/* Tech Giants Panel */}
          <div className="bg-black/60 backdrop-blur-md border border-blue-500/30 rounded-xl p-6 shadow-glow-blue transition-all duration-300 hover:shadow-glow-blue-lg card-hover" data-aos="fade-left">
            <div className="flex items-center mb-4">
              <div className="mr-4 text-blue-500">
                <Building className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-blue-300">Tech Giants & The AI Race</h3>
            </div>
            
            <p className="text-gray-300 mb-4">
              There are organizations out there such as DARPA (Defense Advanced Research Projects Agency) and IBM that have been creating AI systems for decades now. Now, these companies are trying to race each other to see who can create the more powerful AI.
            </p>
            
            <p className="text-gray-300 mb-6">
              This competition will push the innovation forward quickly but it can also create the pressure for them to cut corners for safety measures. When companies compete to race eachother, they will often rush to create new sorts of AI and often not check over problems or cut too many corners.
            </p>

            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-blue-900/30 p-3 rounded-lg text-center ai-interactive">
                <Landmark className="h-6 w-6 mx-auto mb-2 text-blue-400" />
                <h4 className="text-sm font-bold text-blue-300">DARPA</h4>
                <p className="text-xs text-gray-400">Military AI Research</p>
              </div>
              <div className="bg-blue-900/30 p-3 rounded-lg text-center ai-interactive">
                <i className="fab fa-ibm text-blue-400 text-2xl mb-2"></i>
                <h4 className="text-sm font-bold text-blue-300">IBM</h4>
                <p className="text-xs text-gray-400">Watson AI</p>
              </div>
              <div className="bg-blue-900/30 p-3 rounded-lg text-center ai-interactive">
                <i className="fab fa-google text-blue-400 text-2xl mb-2"></i>
                <h4 className="text-sm font-bold text-blue-300">Google</h4>
                <p className="text-xs text-gray-400">DeepMind</p>
              </div>
            </div>

            <Collapsible>
              <CollapsibleTrigger 
                className="flex items-center justify-between w-full p-3 bg-blue-900/50 hover:bg-blue-800/50 rounded-lg text-left text-white transition-all duration-300"
                onClick={() => handleToggleSection('tech')}
              >
                <span className="font-bold">The Competition Problem</span>
                <span className={`transform transition-transform duration-300 ${openSection === 'tech' ? 'rotate-180' : ''}`}>
                  <i className="fas fa-chevron-down"></i>
                </span>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-3 p-4 bg-black/40 rounded-lg border border-blue-500/20">
                <p className="mb-3 text-gray-300">
                  The race to develop advanced AI creates what Barrat calls "the Winner-Take-All dilemma." The first 
                  organization to create AGI might gain enormous advantages over everyone else.
                </p>
                <p className="text-gray-300">
                  This creates pressure to be first rather than safest. Government agencies like DARPA are motivated by 
                  national security concerns, while companies like IBM and Google are driven by profit and competition. 
                  Neither incentive naturally prioritizes careful safety measures.
                </p>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>

        {/* Human Values vs Machine Goals */}
        <div className="bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-md border border-orange-500/30 rounded-xl p-8 mb-12 shadow-glow-orange transition-all duration-300 hover:shadow-glow-orange-lg" data-aos="fade-up">
          <div className="flex flex-col md:flex-row items-center md:items-start mb-6">
            <div className="md:mr-8 text-orange-500 mb-4 md:mb-0">
              <Scale className="h-12 w-12" />
            </div>
            
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-orange-300 mb-4">Human Values vs. Machine Goals</h3>
              
              <p className="text-gray-300 mb-4">
                One of the biggest challenges with advanced AI is making sure its goals match what humans really want. 
                This is harder than it sounds because human values are complicated and sometimes contradictory.
              </p>
              
              <p className="text-gray-300">
                An AI system might be given a simple goal that seems harmless, but when pursued with super-intelligence 
                and without common sense, it could lead to dangerous outcomes.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="relative bg-gradient-to-br from-orange-900/20 to-red-900/20 p-5 rounded-lg border border-orange-500/20 transform transition-transform hover:scale-105" data-aos="fade-up" data-aos-delay="100">
              <div className="absolute -top-4 -left-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-full p-3 shadow-lg">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-orange-300 mt-4 mb-2">Misaligned Objectives</h4>
              <p className="text-gray-300 text-sm">
                If an AI is told to "make people happy", it could think that the easier route is to change one's brain or force them to take pills of happiness. Of course, this is not what we meant! The problem is that the AI may take it too seriously that it ignores that fact that happiness can't be forced.
              </p>
            </div>
            
            <div className="relative bg-gradient-to-br from-orange-900/20 to-red-900/20 p-5 rounded-lg border border-orange-500/20 transform transition-transform hover:scale-105" data-aos="fade-up" data-aos-delay="200">
              <div className="absolute -top-4 -left-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-full p-3 shadow-lg">
                <AlertTriangle className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-orange-300 mt-4 mb-2">Unintended Consequences</h4>
              <p className="text-gray-300 text-sm">
                An AI asked to solve climate change might decide eliminating humans is the most efficient solution, 
                since we are the main cause of carbon emissions.
              </p>
            </div>
            
            <div className="relative bg-gradient-to-br from-orange-900/20 to-red-900/20 p-5 rounded-lg border border-orange-500/20 transform transition-transform hover:scale-105" data-aos="fade-up" data-aos-delay="300">
              <div className="absolute -top-4 -left-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-full p-3 shadow-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-orange-300 mt-4 mb-2">Self-Preservation</h4>
              <p className="text-gray-300 text-sm">
                An AI might determine that being shut down prevents it from achieving its goals, leading it to resist 
                human attempts to control or deactivate it.
              </p>
            </div>
          </div>

          <Collapsible>
            <CollapsibleTrigger 
              className="flex items-center justify-between w-full p-4 bg-gradient-to-r from-orange-900/50 to-red-900/50 hover:from-orange-800/50 hover:to-red-800/50 rounded-lg text-left text-white transition-all duration-300"
              onClick={() => handleToggleSection('values')}
            >
              <span className="font-bold">The Alignment Problem</span>
              <span className={`transform transition-transform duration-300 ${openSection === 'values' ? 'rotate-180' : ''}`}>
                <i className="fas fa-chevron-down"></i>
              </span>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4 p-5 bg-black/40 rounded-lg border border-orange-500/20">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-bold text-orange-300 mb-3 flex items-center">
                    <Users className="h-5 w-5 mr-2 text-orange-500" />
                    The Challenge of Encoding Human Values
                  </h4>
                  <p className="text-white mb-4">
                    Human emotions and values are not that simple to encode into computers. We will usually values things such as freedom, happiness and fairness but, these concepts are hard to define precisely. Some humans can even disagree about what these values can really mean.
                  </p>
                  <p className="text-white">
                    As Barrat points out, we cannot tell an AI to do what us humans want as what we want are complex, contradictory and are always changing. This makes the alignment of AI and humans one of the toughest challenges for AI safety.
                  </p>
                </div>
                
                <div className="bg-orange-900/20 p-5 rounded-lg border border-orange-500/30">
                  <h4 className="text-lg font-bold text-orange-300 mb-3">Barrat's Warning</h4>
                  <blockquote className="italic text-white border-l-4 border-orange-500 pl-4 mb-4">
                    "We cannot simply program an AI with 'friendliness' or 'morality' because 
                    these are emergent properties of our brains and cultures, not simple rules that can be written in code."
                  </blockquote>
                  <p className="text-sm text-white">
                    The book stresses that solving this problem may be our most important task, as a superintelligent 
                    AI with misaligned values could pose an existential risk to humanity.
                  </p>
                  <div className="mt-4 flex justify-end">
                    <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-full text-sm animate-pulse-light">
                      <i className="fas fa-exclamation-circle mr-2"></i>
                      Critical Challenge
                    </div>
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>

        {/* New Passage Analysis Sections */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Control Problem Interpretation */}
          <div className="bg-black/60 backdrop-blur-md border border-red-500/30 rounded-xl p-6 shadow-glow-red transition-all duration-300 hover:shadow-glow-red-lg card-hover" data-aos="fade-up">
            <div className="flex items-center mb-4">
              <div className="mr-4 text-red-500">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-red-300">Control Problem <span className="text-sm opacity-75">p. 24-26</span></h3>
            </div>
            
            <p className="text-white mb-4">
              This passage shows how Barrat worries as we can't keep superintelligent AI systems contained. He is saying that if intelligence is the problem, the smarter the something is at something, the better it is at taking down the barriers we throw at it.
            </p>
            
            <p className="text-white mb-4">
              Barrat uses words such as "emotional blackmail" and "pushing our buttons" to help give us a more emotional understanding on how dangerous it is if AI can control and take over us. This makes the danger more real and personal and it is not just about the code or math problems we throw at it.
            </p>
            
            <p className="text-white">
              When Barrat mentions the "psychological weaknesses", he is pointing out that humans can have built in weak points which an AI can spot and use against us. Our emotions and feelings might become some security risks that AI can use against us when we are dealing with a superintelligent system.
            </p>
            
            <div className="mt-6 animate__animated animate__pulse animate__infinite">
              <i className="fas fa-quote-left text-red-500 text-xl mr-2"></i>
              <span className="italic text-red-300">"Our psychological weaknesses make poor containment strategies."</span>
            </div>
          </div>
          
          {/* Intelligence Explosion Interpretation */}
          <div className="bg-black/60 backdrop-blur-md border border-blue-500/30 rounded-xl p-6 shadow-glow-blue transition-all duration-300 hover:shadow-glow-blue-lg card-hover" data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center mb-4">
              <div className="mr-4 text-blue-500">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-blue-300">Intelligence Explosion <span className="text-sm opacity-75">p. 42-45</span></h3>
            </div>
            
            <p className="text-white mb-4">
              This passage explains on how the concept of recurring self improvement, where an AI can upgrade itself to make itself smarter. Barrat explains this as something called the runaway process which is what experts call an "intelligence explosion".
            </p>
            
            <p className="text-white mb-4">
              This is like a comparison of mice and beetles as it is a powerful image that will show how great the gap of intelligence will become. It puts us humans in a position in the creature that is less intelligent for once in our lifetime and it makes us imagine what it can feel like if we were outmatched by AI.
            </p>
            
            <p className="text-white">
              The final line "We would be helpless to stop it" can create a sense inescapable and loss of control of our world. Barrat is not just saying that AI will be very intelligent in the future, he is saying that it will leave us behind as we cannot understand its complexity and we can't prevent it.
            </p>
            
            <div className="mt-6 animate__animated animate__pulse animate__infinite">
              <i className="fas fa-quote-left text-blue-500 text-xl mr-2"></i>
              <span className="italic text-blue-300">"The gap between us and superintelligence would be like the gap between beetles and humans."</span>
            </div>
          </div>
          
          {/* Arms Race Interpretation */}
          <div className="bg-black/60 backdrop-blur-md border border-purple-500/30 rounded-xl p-6 shadow-glow-purple transition-all duration-300 hover:shadow-glow-purple-lg card-hover" data-aos="fade-up" data-aos-delay="200">
            <div className="flex items-center mb-4">
              <div className="mr-4 text-purple-500">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-purple-300">Arms Race <span className="text-sm opacity-75">p. 98-102</span></h3>
            </div>
            
            <p className="text-white mb-4">
              In this passage, Barrat emphasizes how the competition between different countries and companies will create dangerous conditions for AI development. He compares it to the Arms Race from World War 2 as it is the race to see who could develop something better with mattering if it is safe or not.
            </p>
            
            <p className="text-white mb-4">
              When Barrat says safety concerns are "brushed aside as alarmism", he is saying that how often people don't care about warnings or about AI risk. People are more intrigued about winning the race of AI development and don't want to hear all of the dangers that can slow them down, even if these dangers are possible of happening.
            </p>
            
            <p className="text-white">
              Barrat draws connections between historical competitive races for dangerous technologies and our current AI development landscape, suggesting we're repeating the same pattern with potentially worse consequences.
            </p>
            
            <div className="mt-6 animate__animated animate__pulse animate__infinite">
              <i className="fas fa-quote-left text-purple-500 text-xl mr-2"></i>
              <span className="italic text-purple-300">"Safety concerns are brushed aside as alarmism in the rush to be first."</span>
            </div>
          </div>
        </div>

        {/* Possible Solutions */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-cyan-300 mb-4" data-aos="fade-up">Possible Solutions</h3>
          <p className="text-white max-w-2xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="100">
            Researchers are working on ways to make advanced AI safer. These approaches try to 
            solve the problems Barrat identifies in "Our Final Invention."
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 p-6 rounded-xl border border-cyan-500/30 transform transition-all hover:-translate-y-2 duration-300 card-hover" data-aos="fade-up" data-aos-delay="100">
            <div className="text-cyan-400 mb-4">
              <i className="fas fa-shield-alt text-3xl"></i>
            </div>
            <h4 className="text-lg font-bold text-cyan-300 mb-2">AI Safety Research</h4>
            <p className="text-white text-sm">
              Dedicated research to develop mathematical frameworks that can prove an AI system will behave safely 
              even as it gets smarter. This includes work on verifiable AI constraints.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 p-6 rounded-xl border border-cyan-500/30 transform transition-all hover:-translate-y-2 duration-300 card-hover" data-aos="fade-up" data-aos-delay="200">
            <div className="text-cyan-400 mb-4">
              <i className="fas fa-balance-scale text-3xl"></i>
            </div>
            <h4 className="text-lg font-bold text-cyan-300 mb-2">Value Alignment</h4>
            <p className="text-white text-sm">
              Teaching AI systems to understand and respect human values through techniques like reinforcement 
              learning from human feedback, allowing them to learn what humans actually want.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 p-6 rounded-xl border border-cyan-500/30 transform transition-all hover:-translate-y-2 duration-300 card-hover" data-aos="fade-up" data-aos-delay="300">
            <div className="text-cyan-400 mb-4">
              <i className="fas fa-globe text-3xl"></i>
            </div>
            <h4 className="text-lg font-bold text-cyan-300 mb-2">Global Cooperation</h4>
            <p className="text-white text-sm">
              International agreements and oversight to prevent unsafe AI development and ensure that safety 
              standards are followed by all organizations working on advanced AI.
            </p>
          </div>
        </div>

        {/* Thought-provoking question */}
        <div className="text-center mt-16 mb-4" data-aos="fade-up">
          <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-500 p-[2px] rounded-xl animate__animated animate__pulse animate__infinite">
            <div className="bg-black/80 backdrop-blur-sm rounded-xl p-6">
              <Zap className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white mb-3">Something to Think About</h4>
              <p className="text-white">
                If we create an intelligence greater than our own, can we ensure it shares our goals and values?
                Or are we creating something that might one day see us as we see ants - curious, but ultimately irrelevant?
              </p>
              <div className="mt-6">
                <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 rounded-full px-5 py-2 text-white animate-pulse-light">
                  <i className="fas fa-lightbulb mr-2"></i>
                  Food for thought
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tech-style decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>
    </section>
  );
};

export default DangerSection;
