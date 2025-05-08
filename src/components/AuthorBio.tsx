
import React, { useState } from 'react';
import { Book, ExternalLink, Award, Share2, User, Twitter, Linkedin, Globe, File, Mail, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const AuthorBio = () => {
  const [showMilestones, setShowMilestones] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showShareDialog, setShowShareDialog] = useState(false);
  const [expandedInterview, setExpandedInterview] = useState<number | null>(null);
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

  // Enhanced interview data with the requested URLs
  const interviews = [
    {
      title: "Interview: The Intelligence Explosion",
      source: "SciFuture",
      description: "James Barrat discusses the rapid advancement of AI and the concept of an intelligence explosion, where self-improving AI could rapidly outpace human intellect.",
      url: "https://www.scifuture.org/james-barrat-discusses-book-the-intelligence-explosion/",
      quote: "Once AI can improve itself, all bets are off. We don't know how fast that system would improve because it would be improving its own ability to improve."
    },
    {
      title: "In-Depth Conversation with James Barrat",
      source: "Mountain Belt Way",
      description: "An extensive discussion about AI safety, the alignment problem, and the challenges of containing superintelligent systems.",
      url: "https://mountainbeltway.all-geo.org/2017/03/07/conversation-james-barrat/",
      quote: "The first team to build an AGI system might not be the most responsible team, especially if there's a competitive race to get there first."
    },
    {
      title: "Our Final Invention: Author Interview",
      source: "Vocal Media: Futurism",
      description: "A fascinating look at Barrat's research process and the existential questions raised by advanced artificial intelligence.",
      url: "https://vocal.media/futurism/interview-with-our-final-invention-author-james-barrat",
      quote: "Deep learning has done amazing things, but we still haven't solved the control problem or the value alignment problem."
    }
  ];

  // Function to toggle expanded interview
  const toggleInterview = (index: number) => {
    setExpandedInterview(expandedInterview === index ? null : index);
  };

  // Load additional CDN resources
  React.useEffect(() => {
    // Add Google Fonts - Playfair Display for elegant headings
    const playfairFont = document.createElement('link');
    playfairFont.rel = 'stylesheet';
    playfairFont.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap';
    document.head.appendChild(playfairFont);
    
    // Add Font Awesome for additional icons
    const fontAwesome = document.createElement('link');
    fontAwesome.rel = 'stylesheet';
    fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css';
    document.head.appendChild(fontAwesome);
    
    // Add Animate.css for animations
    const animateCSS = document.createElement('link');
    animateCSS.rel = 'stylesheet';
    animateCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';
    document.head.appendChild(animateCSS);
    
    // Add AOS (Animate On Scroll) for scroll animations
    const aosCSS = document.createElement('link');
    aosCSS.rel = 'stylesheet';
    aosCSS.href = 'https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css';
    document.head.appendChild(aosCSS);
    
    const aosJS = document.createElement('script');
    aosJS.src = 'https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js';
    document.body.appendChild(aosJS);
    
    // Initialize AOS
    setTimeout(() => {
      if (window.AOS) {
        window.AOS.init({
          duration: 800,
          easing: 'ease-out-cubic',
          once: true,
          offset: 50
        });
      }
    }, 500);
    
    return () => {
      // Clean up scripts when component unmounts
      if (aosJS.parentNode) {
        aosJS.parentNode.removeChild(aosJS);
      }
    };
  }, []);

  return (
    <section id="author-bio" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 animate__animated animate__fadeIn">
            Author Biography
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto animate__animated animate__fadeIn animate__delay-1s"></div>
        </div>

        <div className="max-w-6xl mx-auto backdrop-blur-md bg-black/40 border border-blue-500/20 rounded-xl shadow-lg overflow-hidden" data-aos="fade-up" data-aos-delay="200">
          <div className="md:flex">
            <div className="md:w-1/3 p-6 relative bg-gradient-to-br from-blue-900/40 to-cyan-900/40">
              <div className="text-center">
                <div className="mb-4 relative mx-auto w-48 h-48 border-4 border-blue-500/30 rounded-full overflow-hidden shadow-lg shadow-blue-500/10 animate__animated animate__fadeIn">
                  <img 
                    src="/lovable-uploads/bf953bbd-2af1-455e-8b7c-bf24f14e79a1.png" 
                    alt="James Barrat" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <h3 className="text-2xl font-playfair font-bold text-white mb-1 animate__animated animate__fadeIn animate__delay-1s">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">James Barrat</span>
                </h3>
                <p className="text-cyan-300 mb-4 animate__animated animate__fadeIn animate__delay-1s">Documentary Filmmaker & Author</p>
                
                <div className="flex justify-center space-x-3 animate__animated animate__fadeIn animate__delay-2s">
                  <a href="https://x.com/jrbarrat/status/1830960333692776896" target="_blank" rel="noopener noreferrer" 
                    className="p-2 rounded-full bg-blue-600/20 text-blue-300 hover:bg-blue-600/40 transition-colors transform hover:scale-110 hover:rotate-3 duration-300">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a href="https://www.linkedin.com/in/james-barrat/" target="_blank" rel="noopener noreferrer" 
                    className="p-2 rounded-full bg-blue-600/20 text-blue-300 hover:bg-blue-600/40 transition-colors transform hover:scale-110 hover:rotate-3 duration-300">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a href="https://www.jamesbarrat.com" target="_blank" rel="noopener noreferrer" 
                    className="p-2 rounded-full bg-blue-600/20 text-blue-300 hover:bg-blue-600/40 transition-colors transform hover:scale-110 hover:rotate-3 duration-300">
                    <Globe className="h-5 w-5" />
                    <span className="sr-only">Website</span>
                  </a>
                </div>
              </div>
              
              <div className="mt-8">
                <Button 
                  variant="outline" 
                  className="w-full bg-blue-600/20 text-cyan-300 border-cyan-500/30 hover:bg-blue-600/40 backdrop-blur-md group transition-all duration-300 animate__animated animate__fadeIn animate__delay-2s"
                  onClick={() => setShowMilestones(!showMilestones)}
                >
                  <Award className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                  {showMilestones ? "Hide Career Timeline" : "Show Career Timeline"}
                </Button>
                
                <div className={`mt-4 transition-all duration-500 overflow-hidden ${showMilestones ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'}`}>
                  <div className="relative border-l-2 border-blue-500/50 pl-4 py-2 space-y-6">
                    <div className="relative animate__animated animate__fadeInLeft animate__delay-1s" data-aos="fade-right" data-aos-delay="200">
                      <span className="absolute -left-[21px] top-1 h-4 w-4 rounded-full bg-blue-500 pulse-blue"></span>
                      <p className="text-sm text-blue-300">2013</p>
                      <p className="text-white">Published "Our Final Invention"</p>
                    </div>
                    <div className="relative animate__animated animate__fadeInLeft animate__delay-2s" data-aos="fade-right" data-aos-delay="400">
                      <span className="absolute -left-[21px] top-1 h-4 w-4 rounded-full bg-blue-500 pulse-blue"></span>
                      <p className="text-sm text-blue-300">2005-2013</p>
                      <p className="text-white">Documentary filmmaker for National Geographic</p>
                    </div>
                    <div className="relative animate__animated animate__fadeInLeft animate__delay-3s" data-aos="fade-right" data-aos-delay="600">
                      <span className="absolute -left-[21px] top-1 h-4 w-4 rounded-full bg-blue-500 pulse-blue"></span>
                      <p className="text-sm text-blue-300">2000-2005</p>
                      <p className="text-white">Producer at Discovery Channel</p>
                    </div>
                    <div className="relative animate__animated animate__fadeInLeft animate__delay-4s" data-aos="fade-right" data-aos-delay="800">
                      <span className="absolute -left-[21px] top-1 h-4 w-4 rounded-full bg-blue-500 pulse-blue"></span>
                      <p className="text-sm text-blue-300">1995</p>
                      <p className="text-white">Began career in documentary filmmaking</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3 p-8">
              <Tabs defaultValue="biography" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-blue-900/30 rounded-lg overflow-hidden">
                  <TabsTrigger value="biography" className="data-[state=active]:bg-blue-700/50 data-[state=active]:text-cyan-200 text-gray-300 hover:text-white transition-all duration-300">
                    <i className="fas fa-user-tie mr-2"></i>Biography
                  </TabsTrigger>
                  <TabsTrigger value="interviews" className="data-[state=active]:bg-blue-700/50 data-[state=active]:text-cyan-200 text-gray-300 hover:text-white transition-all duration-300">
                    <i className="fas fa-microphone-alt mr-2"></i>Interviews
                  </TabsTrigger>
                  <TabsTrigger value="resources" className="data-[state=active]:bg-blue-700/50 data-[state=active]:text-cyan-200 text-gray-300 hover:text-white transition-all duration-300">
                    <i className="fas fa-link mr-2"></i>Resources
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="biography" className="mt-6 space-y-4 animate__animated animate__fadeIn">
                  <p className="text-gray-300 leading-relaxed font-light">
                    James Barrat is a documentary filmmaker and author living in America. He has created films for National Geographic, Discovery, PBS and other broadcasters that are from America and Europe. His book that he wrote titled "Our Final Invention" talks about the risks of us humans developing AI that are too advanced.
                  </p>
                  <p className="text-gray-300 leading-relaxed font-light">
                    Barrat was interested in the risks of AI after he had interviewed multiple experts such as Ray Kurzweil and others for some of his documentary projects. He has a growing concern after those interviews as he learned a lot about AI developing too quickly and he fears that we don't pay attention to safety protocols when trying to develop stronger AI.
                  </p>
                  <p className="text-gray-300 leading-relaxed font-light">
                    Through his work, Barrat wants to raise more awareness about what can happen to mankind if we don't get a grasp of AI development. His voice is very well known to build better safety for AI and calls for more research so that we build AI to help us and respects our values.
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-blue-500/20">
                    <h4 className="text-lg font-playfair font-bold text-white mb-3 flex items-center">
                      <i className="fas fa-book-open text-cyan-400 mr-2"></i>
                      Notable Works
                    </h4>
                    <ul className="space-y-4">
                      <li className="flex items-start group">
                        <div className="mr-3 mt-1 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                          <Book className="h-5 w-5 transform group-hover:rotate-6 transition-transform duration-300" />
                        </div>
                        <div className="transform group-hover:translate-x-1 transition-transform duration-300">
                          <p className="text-white font-medium group-hover:text-cyan-200 transition-colors">Our Final Invention: Artificial Intelligence and the End of the Human Era (2013)</p>
                          <p className="text-sm text-gray-400">Thomas Dunne Books</p>
                        </div>
                      </li>
                      <li className="flex items-start group">
                        <div className="mr-3 mt-1 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                          <File className="h-5 w-5 transform group-hover:rotate-6 transition-transform duration-300" />
                        </div>
                        <div className="transform group-hover:translate-x-1 transition-transform duration-300">
                          <p className="text-white font-medium group-hover:text-cyan-200 transition-colors">Various documentaries on technology and society</p>
                          <p className="text-sm text-gray-400">National Geographic, Discovery Channel</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </TabsContent>
                
                <TabsContent value="interviews" className="mt-6 space-y-6 animate__animated animate__fadeIn">
                  <div className="mb-4">
                    <h4 className="text-lg font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200 mb-2 flex items-center">
                      <i className="fas fa-quote-right text-blue-400 mr-2"></i>
                      Featured Interviews
                    </h4>
                    <p className="text-sm text-gray-400">Explore James Barrat's thoughts on AI safety and the future of intelligence</p>
                  </div>
                
                  <div className="space-y-5">
                    {interviews.map((interview, index) => (
                      <Card key={index} 
                            data-aos="fade-up" 
                            data-aos-delay={200 + (index * 100)}
                            className={`bg-blue-900/20 border border-blue-500/20 hover:border-blue-400/30 transition-all duration-300 ${
                                expandedInterview === index ? 'shadow-lg shadow-blue-500/10' : ''
                            }`}>
                        <CardContent className="p-5">
                          <div className="flex flex-col">
                            <div className="flex justify-between items-start">
                              <div className="flex-1">
                                <h5 className="text-white font-medium group flex items-center" onClick={() => toggleInterview(index)} style={{cursor: 'pointer'}}>
                                  <i className={`fas fa-${expandedInterview === index ? 'minus' : 'plus'}-circle text-cyan-400 mr-2 transition-all duration-300`}></i>
                                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">{interview.title}</span>
                                </h5>
                                <p className="text-sm text-gray-400 mb-2">{interview.source}</p>
                              </div>
                              
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <a href={interview.url} target="_blank" rel="noopener noreferrer" 
                                       className="p-2 rounded-full bg-blue-600/20 text-blue-300 hover:bg-blue-600/40 transition-all duration-300 transform hover:scale-110 hover:-rotate-12">
                                      <ExternalLink className="h-4 w-4" />
                                    </a>
                                  </TooltipTrigger>
                                  <TooltipContent className="bg-blue-900/80 text-cyan-100 border-blue-500/30">
                                    Visit full interview
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </div>
                            
                            <div className={`mt-2 overflow-hidden transition-all duration-500 ${
                              expandedInterview === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                            }`}>
                              <div className="pl-3 border-l-2 border-cyan-500/30 mt-2 animate__animated animate__fadeIn animate__delay-1s">
                                <p className="text-gray-300 italic text-sm mb-3">{interview.quote}</p>
                                <p className="text-gray-400 text-sm">{interview.description}</p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="resources" className="mt-6 space-y-4 animate__animated animate__fadeIn">
                  <h4 className="text-lg font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200 mb-3 flex items-center">
                    <i className="fas fa-globe text-blue-400 mr-2"></i>
                    Additional Resources on AI Safety
                  </h4>
                  
                  <div className="space-y-4" data-aos="fade-up">
                    <a href="https://futureoflife.org/background/benefits-risks-of-artificial-intelligence/" target="_blank" rel="noopener noreferrer" 
                       className="block bg-blue-900/20 border border-blue-500/20 rounded-lg p-4 hover:bg-blue-800/30 transition-all duration-300 transform hover:translate-x-1 group">
                      <div className="flex items-start">
                        <div className="mr-4 flex-shrink-0 w-12 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                          <Globe className="h-6 w-6 transform group-hover:rotate-12 transition-transform duration-300" />
                        </div>
                        <div>
                          <h5 className="text-white font-medium group-hover:text-cyan-200 transition-colors">Future of Life Institute</h5>
                          <p className="text-sm text-gray-400">Benefits & Risks of Artificial Intelligence</p>
                        </div>
                      </div>
                    </a>
                    
                    <a href="https://intelligence.org/" target="_blank" rel="noopener noreferrer" 
                       className="block bg-blue-900/20 border border-blue-500/20 rounded-lg p-4 hover:bg-blue-800/30 transition-all duration-300 transform hover:translate-x-1 group">
                      <div className="flex items-start">
                        <div className="mr-4 flex-shrink-0 w-12 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                          <Globe className="h-6 w-6 transform group-hover:rotate-12 transition-transform duration-300" />
                        </div>
                        <div>
                          <h5 className="text-white font-medium group-hover:text-cyan-200 transition-colors">Machine Intelligence Research Institute</h5>
                          <p className="text-sm text-gray-400">Research on AI alignment and safety</p>
                        </div>
                      </div>
                    </a>
                    
                    <a href="https://www.alignmentforum.org/" target="_blank" rel="noopener noreferrer" 
                       className="block bg-blue-900/20 border border-blue-500/20 rounded-lg p-4 hover:bg-blue-800/30 transition-all duration-300 transform hover:translate-x-1 group">
                      <div className="flex items-start">
                        <div className="mr-4 flex-shrink-0 w-12 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                          <Globe className="h-6 w-6 transform group-hover:rotate-12 transition-transform duration-300" />
                        </div>
                        <div>
                          <h5 className="text-white font-medium group-hover:text-cyan-200 transition-colors">AI Alignment Forum</h5>
                          <p className="text-sm text-gray-400">Discussion on AI safety research</p>
                        </div>
                      </div>
                    </a>
                    
                    <a href="https://www.effectivealtruism.org/articles/cause-profile-artificial-intelligence-alignment" target="_blank" rel="noopener noreferrer" 
                       className="block bg-blue-900/20 border border-blue-500/20 rounded-lg p-4 hover:bg-blue-800/30 transition-all duration-300 transform hover:translate-x-1 group">
                      <div className="flex items-start">
                        <div className="mr-4 flex-shrink-0 w-12 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                          <Globe className="h-6 w-6 transform group-hover:rotate-12 transition-transform duration-300" />
                        </div>
                        <div>
                          <h5 className="text-white font-medium group-hover:text-cyan-200 transition-colors">Effective Altruism</h5>
                          <p className="text-sm text-gray-400">Cause Profile: Artificial Intelligence Alignment</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-blue-500/20">
                <Button variant="outline" 
                  className="bg-blue-600/20 text-cyan-300 border-cyan-500/30 hover:bg-blue-600/40 backdrop-blur-md group animate__animated animate__fadeIn transition-all duration-300 transform hover:translate-y-[-2px]">
                  <Book className="mr-2 h-4 w-4 group-hover:rotate-6 transition-transform duration-300" />
                  <a href="https://www.amazon.com/Our-Final-Invention-Artificial-Intelligence/dp/1250058783" target="_blank" rel="noopener noreferrer">
                    Buy the Book
                  </a>
                </Button>
                
                {/* Share button with Dialog */}
                <Dialog open={showShareDialog} onOpenChange={setShowShareDialog}>
                  <DialogTrigger asChild>
                    <Button 
                      variant="outline" 
                      className="bg-blue-600/20 text-cyan-300 border-cyan-500/30 hover:bg-blue-600/40 backdrop-blur-md group animate__animated animate__pulse animate__infinite animate__slow hover:animate-none transition-all duration-300 transform hover:translate-y-[-2px]"
                    >
                      <Share2 className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                      Share
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md backdrop-blur-lg bg-gray-900/90 border border-blue-500/30 rounded-lg text-white animate__animated animate__zoomIn animate__faster">
                    <DialogHeader>
                      <DialogTitle className="text-xl text-center font-playfair bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
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
      
      <style>
        {`
        @keyframes pulse-blue {
          0% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
          }
        }
        
        .pulse-blue {
          animation: pulse-blue 2s infinite;
        }
        
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
      `}
      </style>
    </section>
  );
};

export default AuthorBio;
