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
                  The book written by James Barrat: "Our Final Invention" talks about a topic that many scientists and researchers find hard to sleep on: what would happen if we created machines with higher intelligences than ourselves? It is not just a theory, but a reality that can eventually happen in our lifetime. This is a real conversation that is being discussed in labs and boardrooms all across the world. Barrat teaches us what can happen if artificial intelligence surpasses humans in the future. It is both interesting yet terrifying of what can happen i the future.
                </p>
                
                <p className="animate__animated animate__fadeInUp animate__delay-3s">
                  This book introduces us with 2 main and important terms: AGI, or known as Artificial General Intelligence, an AI that has the capabilities of what a human mind can do. The other term, ASI, or Artificial Super Intelligence is the AI which has a brain that is more superior to a human brain. The main problem is that the shift to ASI may happen too quickly after we reach AGI and then we don't have time to push on the brakes.
                </p>
                
                <p className="animate__animated animate__fadeInUp animate__delay-4s">
                  The main argument in the book revolves around something that is known as the "Control Problem". What this means is that how can we make sure that these AI powered machines will want to care about what is better for us humans. It is a complex topic discussed in this book even though it can sound pretty simple. Barrat interviews a lot of philosophers and AI scientists all over that world which gives us a much better image of their perspective. This topic is both fascinating yet nerve wracking as if AI develops into a hungry machine, it can be the end of the human era.
                </p>
                
                <p className="animate__animated animate__fadeInUp animate__delay-5s">
                  This book is wrapped up by giving us some useful tips and recommendations for what the direction of AI development should look like going into the future. Barrat is very committed to make sure that we develop AI responsibly so it values human goals. AI shouldn't be something that scares us as we were the ones who created it so we should also be the ones that can develop it to benefit us. Barrat uses a strong quote to paint a very vivd image: "We need AI that works for us, not the other way around."
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
