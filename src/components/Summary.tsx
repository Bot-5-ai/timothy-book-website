import React from 'react';
import { BookOpen, Cpu, BrainCircuit } from 'lucide-react';

const Summary = () => {
  return (
    <section id="summary" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Scanning grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid-scanning"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="1500">
          <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Book Summary
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto animate-pulse"></div>
        </div>

        <div className="max-w-4xl mx-auto backdrop-blur-md bg-black/40 border border-blue-500/20 rounded-xl shadow-lg overflow-hidden card-hover shadow-cyan-500/20" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1200">
          <div className="md:flex">
            <div className="md:flex-shrink-0 bg-gradient-to-br from-blue-600/30 to-cyan-500/30 p-6 flex items-center justify-center md:w-64 border-r border-blue-500/20">
              <div className="relative">
                <img 
                  src="/lovable-uploads/e24a62e6-7820-423b-8b2b-15176df81136.png"
                  alt="Our Final Invention Book Cover" 
                  className="max-h-80 shadow-lg rounded-lg animate__animated animate__fadeIn hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
                <div className="absolute top-2 left-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>

            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-cyan-400 font-mono font-semibold mb-1 animate__animated animate__fadeInRight">
                Overview
              </div>
              <h3 className="text-2xl font-merriweather font-bold mb-4 text-white animate__animated animate__fadeInRight animate__delay-1s">
                Our Final Invention
              </h3>

              <div className="text-gray-300 space-y-4">
                <p className="animate__animated animate__fadeInUp animate__delay-2s">
                  James Barrat's book "Our Final Invention" examines a subject that many intelligent individuals find hard to ignore: what would happen if we created machines with higher intelligences than ourselves? It's no longer science fiction; this is a real conversation happening in labs and boardrooms around the globe. Barrat guides us through the exciting and terrifying possibilities of artificial intelligence, which could surpass human intelligence in the future.
                </p>
                
                <p className="animate__animated animate__fadeInUp animate__delay-3s">
                  The book introduces us to two important concepts: Artificial General Intelligence (AGI), which is essentially AI as intelligent as humans, and Artificial Super Intelligence (ASI), which is AI that is intellectually superior to humans. The worst part is this: Barrat argues that the shift to ASI might happen so fast after we reach AGI that we won't have time to apply the brakes.
                </p>
                
                <p className="animate__animated animate__fadeInUp animate__delay-4s">
                  The heart of the book revolves around what experts call the "Control Problem" - basically, how do we make sure these super-smart machines actually care about what's good for humanity? It sounds simple, but it's incredibly complex. Barrat interviews everyone from AI researchers to philosophers, and their perspectives paint a picture that's both fascinating and slightly nerve-wracking.
                </p>
                
                <p className="animate__animated animate__fadeInUp animate__delay-5s">
                  The book revolves around the "Control Problem," which is essentially how we can make sure that these highly intelligent machines actually care about what's best for humanity. It is incredibly complex despite its apparent simplicity. Barrat interviews a variety of people, such as philosophers and AI researchers, whose perspectives paint an interesting but somewhat frightening picture.
                </p>

                <p className="animate__animated animate__fadeInUp animate__delay-6s">
                  The book concludes with some useful recommendations for the direction of AI development going forward. Barrat is committed to making sure that, rather than letting AI scare us, we develop it responsibly and with safety measures in place from the start. He uses strong words: we need AI that works for us, not the other way around.
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
            <ul className="list-none text-white space-y-2">
              <li className="flex items-center"><i className="fas fa-calendar-alt text-green-500 mr-2"></i>Published in 2013</li>
              <li className="flex items-center"><i className="fas fa-calendar-alt text-green-500 mr-2"></i>Precedes recent AI breakthroughs</li>
              <li className="flex items-center"><i className="fas fa-calendar-alt text-green-500 mr-2"></i>Remains relevant in current AI discourse</li>
              <li className="flex items-center"><i className="fas fa-calendar-alt text-green-500 mr-2"></i>Many predictions increasingly validated</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CSS for scanning grid effect */}
      <style>{`
        .grid-scanning {
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 4s linear infinite;
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </section>
  );
};

export default Summary;
