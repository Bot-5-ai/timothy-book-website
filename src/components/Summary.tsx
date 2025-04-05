
import React from 'react';
import { BookOpen } from 'lucide-react';

const Summary = () => {
  return (
    <section id="summary" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-4 text-gray-800">
            Book Summary
          </h2>
          <div className="w-20 h-1 bg-bookblue-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden" data-aos="fade-up" data-aos-delay="200">
          <div className="md:flex">
            <div className="md:flex-shrink-0 bg-gradient-to-br from-bookblue-400 to-bookblue-600 p-6 flex items-center justify-center md:w-64">
              <BookOpen className="h-20 w-20 text-white" />
            </div>

            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-bookblue-600 font-semibold mb-1">
                Overview
              </div>
              <h3 className="text-2xl font-merriweather font-bold mb-4 text-gray-800">
                Our Final Invention
              </h3>

              <div className="text-gray-700 space-y-4">
                <p>
                  In "Our Final Invention," James Barrat explores the potential consequences of developing advanced artificial intelligence (AI). The book presents a cautionary view of how AI could evolve beyond human control and potentially pose existential risks to humanity.
                </p>
                
                <p>
                  Barrat introduces the concept of Artificial General Intelligence (AGI) – AI systems that equal human intelligence – and Artificial Superintelligence (ASI) – AI that far surpasses human abilities. He argues that once we create AGI, the leap to ASI may happen rapidly and unpredictably.
                </p>
                
                <p>
                  The central concern of the book is the "control problem": how can humans ensure that superintelligent machines remain aligned with human values and goals? Barrat interviews AI researchers, philosophers, and scientists who share various perspectives on this challenge.
                </p>
                
                <p>
                  Through examining current AI development trends, government initiatives, and private industry research, Barrat makes a compelling case that we need to prioritize AI safety research before we reach technological breakthroughs that could lead to uncontrollable intelligence.
                </p>

                <p>
                  The book concludes with recommendations for responsible AI development, emphasizing the importance of transparency, international cooperation, and ethical frameworks to guide our creation of increasingly powerful AI systems.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="400">
          <div className="bg-bookblue-50 p-6 rounded-lg border border-bookblue-100">
            <div className="text-bookblue-600 mb-2">
              <i className="fas fa-lightbulb text-xl"></i>
            </div>
            <h4 className="font-merriweather font-bold text-lg mb-2">Key Themes</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>The risks of uncontrolled AI development</li>
              <li>Intelligence explosion and technological singularity</li>
              <li>Machine ethics and alignment with human values</li>
              <li>The race for artificial general intelligence (AGI)</li>
            </ul>
          </div>

          <div className="bg-bookblue-50 p-6 rounded-lg border border-bookblue-100">
            <div className="text-bookblue-600 mb-2">
              <i className="fas fa-users text-xl"></i>
            </div>
            <h4 className="font-merriweather font-bold text-lg mb-2">Main Arguments</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>AI could rapidly evolve beyond human control</li>
              <li>Current safeguards are insufficient</li>
              <li>Competitive pressures may lead to unsafe development</li>
              <li>We need global cooperation on AI safety</li>
            </ul>
          </div>

          <div className="bg-bookblue-50 p-6 rounded-lg border border-bookblue-100">
            <div className="text-bookblue-600 mb-2">
              <i className="fas fa-clock text-xl"></i>
            </div>
            <h4 className="font-merriweather font-bold text-lg mb-2">Timeline Context</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Published in 2013</li>
              <li>Precedes recent AI breakthroughs</li>
              <li>Remains relevant in current AI discourse</li>
              <li>Many predictions increasingly validated</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;
