
import React from 'react';
import { BookOpen, Circuit, Cpu, BrainCircuit } from 'lucide-react';

const Summary = () => {
  return (
    <section id="summary" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Book Summary
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto backdrop-blur-md bg-black/40 border border-blue-500/20 rounded-xl shadow-lg overflow-hidden card-hover shadow-cyan-500/20" data-aos="fade-up" data-aos-delay="200">
          <div className="md:flex">
            <div className="md:flex-shrink-0 bg-gradient-to-br from-blue-600/30 to-cyan-500/30 p-6 flex items-center justify-center md:w-64 border-r border-blue-500/20">
              <BrainCircuit className="h-20 w-20 text-cyan-400" />
            </div>

            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-cyan-400 font-mono font-semibold mb-1">
                Overview
              </div>
              <h3 className="text-2xl font-merriweather font-bold mb-4 text-white">
                Our Final Invention
              </h3>

              <div className="text-gray-300 space-y-4">
                <p className="animate__animated animate__fadeIn">
                  In "Our Final Invention," James Barrat explores the potential consequences of developing advanced artificial intelligence (AI). The book presents a cautionary view of how AI could evolve beyond human control and potentially pose existential risks to humanity.
                </p>
                
                <p className="animate__animated animate__fadeIn animate__delay-1s">
                  Barrat introduces the concept of <span className="text-cyan-300 hover:text-cyan-200 transition-colors">Artificial General Intelligence (AGI)</span> – AI systems that equal human intelligence – and <span className="text-blue-300 hover:text-blue-200 transition-colors">Artificial Superintelligence (ASI)</span> – AI that far surpasses human abilities. He argues that once we create AGI, the leap to ASI may happen rapidly and unpredictably.
                </p>
                
                <p className="animate__animated animate__fadeIn animate__delay-2s">
                  The central concern of the book is the "control problem": how can humans ensure that superintelligent machines remain aligned with human values and goals? Barrat interviews AI researchers, philosophers, and scientists who share various perspectives on this challenge.
                </p>
                
                <p className="animate__animated animate__fadeIn animate__delay-3s">
                  Through examining current AI development trends, government initiatives, and private industry research, Barrat makes a compelling case that we need to prioritize AI safety research before we reach technological breakthroughs that could lead to uncontrollable intelligence.
                </p>

                <p className="animate__animated animate__fadeIn animate__delay-4s">
                  The book concludes with recommendations for responsible AI development, emphasizing the importance of transparency, international cooperation, and ethical frameworks to guide our creation of increasingly powerful AI systems.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="400">
          <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20 shadow-lg card-hover">
            <div className="text-cyan-400 mb-4 flex items-center">
              <i className="fas fa-lightbulb text-xl mr-3"></i>
              <h4 className="font-merriweather font-bold text-lg">Key Themes</h4>
            </div>
            <ul className="list-none text-gray-300 space-y-2">
              <li className="flex items-center"><i className="fas fa-check text-cyan-500 mr-2"></i>The risks of uncontrolled AI development</li>
              <li className="flex items-center"><i className="fas fa-check text-cyan-500 mr-2"></i>Intelligence explosion and technological singularity</li>
              <li className="flex items-center"><i className="fas fa-check text-cyan-500 mr-2"></i>Machine ethics and alignment with human values</li>
              <li className="flex items-center"><i className="fas fa-check text-cyan-500 mr-2"></i>The race for artificial general intelligence (AGI)</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20 shadow-lg card-hover">
            <div className="text-blue-400 mb-4 flex items-center">
              <i className="fas fa-robot text-xl mr-3"></i>
              <h4 className="font-merriweather font-bold text-lg">Main Arguments</h4>
            </div>
            <ul className="list-none text-gray-300 space-y-2">
              <li className="flex items-center"><i className="fas fa-exclamation-triangle text-blue-500 mr-2"></i>AI could rapidly evolve beyond human control</li>
              <li className="flex items-center"><i className="fas fa-exclamation-triangle text-blue-500 mr-2"></i>Current safeguards are insufficient</li>
              <li className="flex items-center"><i className="fas fa-exclamation-triangle text-blue-500 mr-2"></i>Competitive pressures may lead to unsafe development</li>
              <li className="flex items-center"><i className="fas fa-exclamation-triangle text-blue-500 mr-2"></i>We need global cooperation on AI safety</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20 shadow-lg card-hover">
            <div className="text-green-400 mb-4 flex items-center">
              <i className="fas fa-clock text-xl mr-3"></i>
              <h4 className="font-merriweather font-bold text-lg">Timeline Context</h4>
            </div>
            <ul className="list-none text-gray-300 space-y-2">
              <li className="flex items-center"><i className="fas fa-calendar-alt text-green-500 mr-2"></i>Published in 2013</li>
              <li className="flex items-center"><i className="fas fa-calendar-alt text-green-500 mr-2"></i>Precedes recent AI breakthroughs</li>
              <li className="flex items-center"><i className="fas fa-calendar-alt text-green-500 mr-2"></i>Remains relevant in current AI discourse</li>
              <li className="flex items-center"><i className="fas fa-calendar-alt text-green-500 mr-2"></i>Many predictions increasingly validated</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;
