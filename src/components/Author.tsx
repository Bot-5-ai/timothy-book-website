
import React from 'react';
import { User, Award, Globe, BookOpen } from 'lucide-react';

const Author = () => {
  return (
    <section id="author" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-4 text-gray-800">
            About the Author
          </h2>
          <div className="w-20 h-1 bg-bookblue-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12" data-aos="fade-up" data-aos-delay="200">
            <div className="md:flex items-center">
              <div className="md:w-1/3 bg-gradient-to-br from-bookblue-400 to-bookblue-600 py-8 px-6">
                <div className="text-center">
                  <div className="inline-block rounded-full border-4 border-white p-2 mb-4">
                    <User className="h-16 w-16 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">James Barrat</h3>
                  <p className="text-bookblue-100">Author & Documentarian</p>
                </div>
              </div>
              
              <div className="p-8 md:w-2/3">
                <p className="text-gray-700 mb-4">
                  James Barrat is an American documentary filmmaker and author who has created films for National Geographic, Discovery, PBS, and other broadcasters in the United States and Europe. His book "Our Final Invention: Artificial Intelligence and the End of the Human Era" explores the potential existential risks of advanced artificial intelligence.
                </p>
                
                <p className="text-gray-700 mb-4">
                  Barrat became interested in AI risks after interviewing experts like Ray Kurzweil and others for various documentary projects. His concern grew as he learned about the rapid development of AI technologies and what he perceived as inadequate attention to safety protocols.
                </p>
                
                <p className="text-gray-700">
                  Through his work, Barrat aims to raise awareness about both the promises and perils of advanced AI development. He has become a notable voice in the AI safety movement, advocating for more research into making AI systems beneficial and aligned with human values.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="400">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-bookblue-500 hover:shadow-lg transition-shadow">
              <div className="text-bookblue-500 mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h4 className="font-merriweather font-bold text-lg mb-2">Career Highlights</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Award-winning documentary filmmaker</li>
                <li>• National Geographic contributor</li>
                <li>• Speaker on AI safety and ethics</li>
                <li>• Consultant on technology risks</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-bookblue-500 hover:shadow-lg transition-shadow">
              <div className="text-bookblue-500 mb-4">
                <BookOpen className="h-8 w-8" />
              </div>
              <h4 className="font-merriweather font-bold text-lg mb-2">Notable Works</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• "Our Final Invention" (2013)</li>
                <li>• Various technology documentaries</li>
                <li>• Articles on AI development</li>
                <li>• Interviews with AI pioneers</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-bookblue-500 hover:shadow-lg transition-shadow">
              <div className="text-bookblue-500 mb-4">
                <Globe className="h-8 w-8" />
              </div>
              <h4 className="font-merriweather font-bold text-lg mb-2">Influence & Impact</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Raised awareness about AI risks</li>
                <li>• Contributed to AI safety discourse</li>
                <li>• Advocated for responsible AI development</li>
                <li>• Influenced tech policy discussions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Author;
