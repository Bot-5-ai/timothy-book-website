
import React, { useState } from 'react';
import { Book, ExternalLink, Award, Share2, User, Twitter, Linkedin, Globe, File, Mail, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import { useToast } from "@/hooks/use-toast";

const AuthorBio = () => {
  const [showMilestones, setShowMilestones] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showShareDialog, setShowShareDialog] = useState(false);
  const { toast } = useToast();
  
  const currentUrl = window.location.href;
  const emailSubject = encodeURIComponent("Check out this book: Our Final Invention");
  const emailBody = encodeURIComponent(
    `I thought you might be interested in this book about AI safety:\n\n` +
    `"Our Final Invention: Artificial Intelligence and the End of the Human Era" by James Barrat\n\n` +
    `Learn more here: ${currentUrl}\n\n` +
    `The book discusses the potential existential risks of advanced artificial intelligence and why AI safety research is crucial.`
  );
  
  const emailLink = `mailto:?subject=${emailSubject}&body=${emailBody}`;
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    toast({
      title: "Link copied!",
      description: "The link has been copied to your clipboard.",
      duration: 3000,
    });
    setTimeout(() => setCopied(false), 2000);
  };
  
  const handleShareEmail = () => {
    window.location.href = emailLink;
    toast({
      title: "Opening email client",
      description: "Creating an email with the book information.",
      duration: 3000,
    });
    setShowShareDialog(false);
  };

  return (
    <section id="author-bio" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Author Biography
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto backdrop-blur-md bg-black/40 border border-blue-500/20 rounded-xl shadow-lg overflow-hidden" data-aos="fade-up" data-aos-delay="200">
          <div className="md:flex">
            <div className="md:w-1/3 p-6 relative bg-gradient-to-br from-blue-900/40 to-cyan-900/40">
              <div className="text-center">
                <div className="mb-4 relative mx-auto w-48 h-48 border-4 border-blue-500/30 rounded-full overflow-hidden shadow-lg shadow-blue-500/10">
                  <img 
                    src="/lovable-uploads/bf953bbd-2af1-455e-8b7c-bf24f14e79a1.png" 
                    alt="James Barrat" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <h3 className="text-2xl font-merriweather font-bold text-white mb-1">James Barrat</h3>
                <p className="text-cyan-300 mb-4">Documentary Filmmaker & Author</p>
                
                <div className="flex justify-center space-x-3">
                  <a href="https://x.com/jrbarrat/status/1830960333692776896" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-blue-600/20 text-blue-300 hover:bg-blue-600/40 transition-colors">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a href="https://www.linkedin.com/in/james-barrat/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-blue-600/20 text-blue-300 hover:bg-blue-600/40 transition-colors">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a href="https://www.jamesbarrat.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-blue-600/20 text-blue-300 hover:bg-blue-600/40 transition-colors">
                    <Globe className="h-5 w-5" />
                    <span className="sr-only">Website</span>
                  </a>
                </div>
              </div>
              
              <div className="mt-8">
                <Button 
                  variant="outline" 
                  className="w-full bg-blue-600/20 text-cyan-300 border-cyan-500/30 hover:bg-blue-600/40 backdrop-blur-md"
                  onClick={() => setShowMilestones(!showMilestones)}
                >
                  <Award className="mr-2 h-4 w-4" />
                  {showMilestones ? "Hide Career Timeline" : "Show Career Timeline"}
                </Button>
                
                <div className={`mt-4 transition-all duration-500 ${showMilestones ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                  <div className="relative border-l-2 border-blue-500/50 pl-4 py-2 space-y-6">
                    <div className="relative">
                      <span className="absolute -left-[21px] top-1 h-4 w-4 rounded-full bg-blue-500"></span>
                      <p className="text-sm text-blue-300">2013</p>
                      <p className="text-white">Published "Our Final Invention"</p>
                    </div>
                    <div className="relative">
                      <span className="absolute -left-[21px] top-1 h-4 w-4 rounded-full bg-blue-500"></span>
                      <p className="text-sm text-blue-300">2005-2013</p>
                      <p className="text-white">Documentary filmmaker for National Geographic</p>
                    </div>
                    <div className="relative">
                      <span className="absolute -left-[21px] top-1 h-4 w-4 rounded-full bg-blue-500"></span>
                      <p className="text-sm text-blue-300">2000-2005</p>
                      <p className="text-white">Producer at Discovery Channel</p>
                    </div>
                    <div className="relative">
                      <span className="absolute -left-[21px] top-1 h-4 w-4 rounded-full bg-blue-500"></span>
                      <p className="text-sm text-blue-300">1995</p>
                      <p className="text-white">Began career in documentary filmmaking</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3 p-8">
              <Tabs defaultValue="biography" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-blue-900/30">
                  <TabsTrigger value="biography">Biography</TabsTrigger>
                  <TabsTrigger value="interviews">Interviews</TabsTrigger>
                  <TabsTrigger value="resources">Resources</TabsTrigger>
                </TabsList>
                
                <TabsContent value="biography" className="mt-6 space-y-4">
                  <p className="text-gray-300">
                    James Barrat is a documentary filmmaker and author living in America. He has created films for National Geographic, Discovery, PBS and other broadcasters that are from America and Europe. His book that he wrote titled "Our Final Invention" talks about the risks of us humans developing AI that are too advanced.
                  </p>
                  <p className="text-gray-300">
                    Barrat was interested in the risks of AI after he had interviewed multiple experts such as Ray Kurzweil and others for some of his documentary projects. He has a growing concern after those interviews as he learned a lot about AI developing too quickly and he fears that we don't pay attention to safety protocols when trying to develop stronger AI.
                  </p>
                  <p className="text-gray-300">
                    Through his work, Barrat wants to raise more awareness about what can happen to mankind if we don't get a grasp of AI development. His voice is very well known to build better safety for AI and calls for more research so that we build AI to help us and respects our values.
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-blue-500/20">
                    <h4 className="text-lg font-merriweather font-bold text-white mb-3">Notable Works</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Book className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" />
                        <div>
                          <p className="text-white font-medium">Our Final Invention: Artificial Intelligence and the End of the Human Era (2013)</p>
                          <p className="text-sm text-gray-400">Thomas Dunne Books</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <File className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" />
                        <div>
                          <p className="text-white font-medium">Various documentaries on technology and society</p>
                          <p className="text-sm text-gray-400">National Geographic, Discovery Channel</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </TabsContent>
                
                <TabsContent value="interviews" className="mt-6 space-y-4">
                  <div className="space-y-4">
                    <a href="https://www.youtube.com/watch?v=9snob7Xj-Lc" target="_blank" rel="noopener noreferrer" className="block bg-blue-900/20 border border-blue-500/20 rounded-lg p-4 hover:bg-blue-900/30 transition-colors">
                      <div className="flex items-center">
                        <div className="mr-4 flex-shrink-0 w-16 h-16 bg-blue-900/30 rounded-lg flex items-center justify-center">
                          <ExternalLink className="h-6 w-6 text-cyan-400" />
                        </div>
                        <div>
                          <h5 className="text-white font-medium">Interview: The Dangers of Artificial Intelligence</h5>
                          <p className="text-sm text-gray-400">TEDx Talk with James Barrat</p>
                        </div>
                      </div>
                    </a>
                    
                    <a href="https://futureoflife.org/ai/james-barrat-on-our-final-invention-and-the-path-to-superintelligence/" target="_blank" rel="noopener noreferrer" className="block bg-blue-900/20 border border-blue-500/20 rounded-lg p-4 hover:bg-blue-900/30 transition-colors">
                      <div className="flex items-center">
                        <div className="mr-4 flex-shrink-0 w-16 h-16 bg-blue-900/30 rounded-lg flex items-center justify-center">
                          <ExternalLink className="h-6 w-6 text-cyan-400" />
                        </div>
                        <div>
                          <h5 className="text-white font-medium">Future of Life Institute Podcast</h5>
                          <p className="text-sm text-gray-400">James Barrat on "Our Final Invention" and the Path to Superintelligence</p>
                        </div>
                      </div>
                    </a>
                    
                    <a href="https://www.scientificamerican.com/article/when-will-artificial-intelligence-become-conscious/" target="_blank" rel="noopener noreferrer" className="block bg-blue-900/20 border border-blue-500/20 rounded-lg p-4 hover:bg-blue-900/30 transition-colors">
                      <div className="flex items-center">
                        <div className="mr-4 flex-shrink-0 w-16 h-16 bg-blue-900/30 rounded-lg flex items-center justify-center">
                          <ExternalLink className="h-6 w-6 text-cyan-400" />
                        </div>
                        <div>
                          <h5 className="text-white font-medium">Scientific American Interview</h5>
                          <p className="text-sm text-gray-400">When Will Artificial Intelligence Become Conscious?</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </TabsContent>
                
                <TabsContent value="resources" className="mt-6 space-y-4">
                  <h4 className="text-lg font-merriweather font-bold text-white mb-3">Additional Resources on AI Safety</h4>
                  
                  <div className="space-y-3">
                    <a href="https://futureoflife.org/background/benefits-risks-of-artificial-intelligence/" target="_blank" rel="noopener noreferrer" className="block bg-blue-900/20 border border-blue-500/20 rounded-lg p-4 hover:bg-blue-900/30 transition-colors">
                      <div className="flex items-start">
                        <div className="mr-4 flex-shrink-0 w-12 text-cyan-400">
                          <Globe className="h-6 w-6" />
                        </div>
                        <div>
                          <h5 className="text-white font-medium">Future of Life Institute</h5>
                          <p className="text-sm text-gray-400">Benefits & Risks of Artificial Intelligence</p>
                        </div>
                      </div>
                    </a>
                    
                    <a href="https://intelligence.org/" target="_blank" rel="noopener noreferrer" className="block bg-blue-900/20 border border-blue-500/20 rounded-lg p-4 hover:bg-blue-900/30 transition-colors">
                      <div className="flex items-start">
                        <div className="mr-4 flex-shrink-0 w-12 text-cyan-400">
                          <Globe className="h-6 w-6" />
                        </div>
                        <div>
                          <h5 className="text-white font-medium">Machine Intelligence Research Institute</h5>
                          <p className="text-sm text-gray-400">Research on AI alignment and safety</p>
                        </div>
                      </div>
                    </a>
                    
                    <a href="https://www.alignmentforum.org/" target="_blank" rel="noopener noreferrer" className="block bg-blue-900/20 border border-blue-500/20 rounded-lg p-4 hover:bg-blue-900/30 transition-colors">
                      <div className="flex items-start">
                        <div className="mr-4 flex-shrink-0 w-12 text-cyan-400">
                          <Globe className="h-6 w-6" />
                        </div>
                        <div>
                          <h5 className="text-white font-medium">AI Alignment Forum</h5>
                          <p className="text-sm text-gray-400">Discussion on AI safety research</p>
                        </div>
                      </div>
                    </a>
                    
                    <a href="https://www.effectivealtruism.org/articles/cause-profile-artificial-intelligence-alignment" target="_blank" rel="noopener noreferrer" className="block bg-blue-900/20 border border-blue-500/20 rounded-lg p-4 hover:bg-blue-900/30 transition-colors">
                      <div className="flex items-start">
                        <div className="mr-4 flex-shrink-0 w-12 text-cyan-400">
                          <Globe className="h-6 w-6" />
                        </div>
                        <div>
                          <h5 className="text-white font-medium">Effective Altruism</h5>
                          <p className="text-sm text-gray-400">Cause Profile: Artificial Intelligence Alignment</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-blue-500/20">
                <Button variant="outline" className="bg-blue-600/20 text-cyan-300 border-cyan-500/30 hover:bg-blue-600/40 backdrop-blur-md">
                  <Book className="mr-2 h-4 w-4" />
                  <a href="https://www.amazon.com/Our-Final-Invention-Artificial-Intelligence/dp/1250058783" target="_blank" rel="noopener noreferrer">
                    Buy the Book
                  </a>
                </Button>
                
                {/* Share button with Dialog */}
                <Dialog open={showShareDialog} onOpenChange={setShowShareDialog}>
                  <DialogTrigger asChild>
                    <Button 
                      variant="outline" 
                      className="bg-blue-600/20 text-cyan-300 border-cyan-500/30 hover:bg-blue-600/40 backdrop-blur-md group animate__animated animate__pulse animate__infinite animate__slow"
                    >
                      <Share2 className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                      Share
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md backdrop-blur-lg bg-gray-900/90 border border-blue-500/30 rounded-lg text-white">
                    <DialogHeader>
                      <DialogTitle className="text-xl text-center font-merriweather bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                        Share "Our Final Invention"
                      </DialogTitle>
                    </DialogHeader>
                    <div className="py-6 flex flex-col items-center">
                      <div className="mb-6 w-16 h-16 text-cyan-300 animate__animated animate__fadeIn">
                        <i className="fas fa-share-alt fa-3x"></i>
                      </div>
                      <p className="text-center text-gray-300 mb-6">
                        Spread awareness about AI safety by sharing this book with friends and colleagues
                      </p>
                      <div className="grid gap-4 w-full max-w-sm">
                        <Button 
                          onClick={handleShareEmail} 
                          className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3 rounded-lg hover:shadow-lg transition transform hover:scale-105 animate__animated animate__fadeIn"
                        >
                          <Mail className="h-5 w-5" />
                          <span>Share via Email</span>
                        </Button>
                        
                        <Button 
                          onClick={handleCopyLink} 
                          className="flex items-center justify-center gap-2 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-gray-950 text-white py-3 rounded-lg hover:shadow-lg transition transform hover:scale-105 animate__animated animate__fadeIn animate__delay-1s"
                        >
                          {copied ? <Check className="h-5 w-5 text-green-400" /> : <Copy className="h-5 w-5" />}
                          <span>{copied ? "Copied!" : "Copy Link"}</span>
                        </Button>
                      </div>
                    </div>
                    <div className="flex justify-center mt-2">
                      <DialogClose asChild>
                        <Button variant="ghost" className="text-gray-400 hover:text-white">
                          Close
                        </Button>
                      </DialogClose>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-10 left-10 opacity-10">
        <User className="h-32 w-32 text-cyan-500" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10">
        <Award className="h-24 w-24 text-blue-500" />
      </div>
    </section>
  );
};

export default AuthorBio;
