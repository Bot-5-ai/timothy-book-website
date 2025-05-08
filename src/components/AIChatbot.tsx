
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Plus, Trash2, BrainCircuit, Bot, Code, Star, ThumbsUp, ThumbsDown, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from "@/hooks/use-toast";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

type MessageType = {
  content: string;
  isUser: boolean;
  timestamp: Date;
  rated?: 'up' | 'down' | null;
};

type SuggestionType = {
  text: string;
  icon: React.ReactNode;
};

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<MessageType[]>([
    {
      content: "👋 Hi there! I'm your AI assistant. I can help with questions about 'Our Final Invention', AI safety, or any other topic you're curious about!",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  
  // Expanded AI knowledge base
  const knowledgeBase = {
    "book": [
      "Our Final Invention by James Barrat explores the potential existential risks of advanced artificial intelligence.",
      "The book warns about the dangers of creating superintelligent AI without proper safety measures.",
      "It was published in 2013 and was one of the early mainstream books to discuss AI safety concerns.",
      "Barrat argues that superintelligent AI could be humanity's final invention if we lose control of it."
    ],
    "author": [
      "James Barrat is a documentary filmmaker and author.",
      "He has created films for National Geographic, Discovery, PBS, and other broadcasters.",
      "Barrat became interested in AI risks after interviewing experts like Ray Kurzweil.",
      "He advocates for more research into AI safety and alignment."
    ],
    "ai safety": [
      "AI safety research focuses on ensuring advanced AI systems remain beneficial to humanity.",
      "Key concerns include alignment (ensuring AI goals match human values), containment, and value learning.",
      "Organizations like MIRI, FHI, and OpenAI conduct research on AI safety.",
      "The control problem refers to the challenge of controlling a superintelligent AI once it exists."
    ],
    "ai timeline": [
      "AI development has accelerated rapidly in recent years with breakthroughs in deep learning.",
      "Notable milestones include IBM's Deep Blue (1997), AlphaGo (2016), GPT models, and multimodal AI systems.",
      "Experts disagree on when human-level artificial general intelligence (AGI) might be developed.",
      "Some AI researchers predict AGI could arrive within the next few decades."
    ],
    "current ai": [
      "Modern AI systems like GPT-4, Claude, PaLM, and DALL-E represent state-of-the-art in language and image generation.",
      "Large language models have demonstrated impressive capabilities in understanding and generating human language.",
      "Concerns about AI include privacy issues, algorithmic bias, job displacement, and existential risks.",
      "AI ethics is an emerging field addressing the moral implications of artificial intelligence."
    ],
    "technology": [
      "Moore's Law describes the observation that computing power doubles approximately every 18-24 months.",
      "Quantum computing promises to solve certain problems exponentially faster than classical computers.",
      "Blockchain technology provides decentralized, tamper-proof record-keeping through cryptographic techniques.",
      "Virtual and augmented reality technologies are increasingly used in education, healthcare, and entertainment."
    ],
    "science": [
      "CRISPR-Cas9 is a revolutionary gene-editing technology that allows precise modification of DNA sequences.",
      "Fusion energy research aims to replicate the sun's power generation process for clean, abundant energy.",
      "Climate change is primarily caused by human activities, especially the burning of fossil fuels.",
      "The James Webb Space Telescope has provided unprecedented views of distant galaxies and exoplanets."
    ],
    "philosophy": [
      "The simulation hypothesis suggests our reality might be an artificial simulation created by advanced beings.",
      "Philosophical zombies are hypothetical beings physically identical to humans but lacking consciousness.",
      "The trolley problem is a thought experiment highlighting tensions between utilitarian and deontological ethics.",
      "The hard problem of consciousness refers to explaining why physical processes give rise to subjective experience."
    ]
  };
  
  // Suggested questions covering broader topics
  const suggestions: SuggestionType[] = [
    { text: "What is this book about?", icon: <Bot size={16} /> },
    { text: "Who is James Barrat?", icon: <BrainCircuit size={16} /> },
    { text: "What are current AI capabilities?", icon: <Code size={16} /> },
    { text: "How does quantum computing work?", icon: <Bot size={16} /> },
    { text: "Latest climate science?", icon: <BrainCircuit size={16} /> },
    { text: "What is the simulation hypothesis?", icon: <Code size={16} /> },
  ];
  
  // Auto-scroll to the bottom of the chat
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  useEffect(() => {
    // Load external resources
    const loadExternalResources = () => {
      // Font Awesome
      const fontAwesome = document.createElement('link');
      fontAwesome.rel = 'stylesheet';
      fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css';
      document.head.appendChild(fontAwesome);
      
      // Animate.css
      const animateCSS = document.createElement('link');
      animateCSS.rel = 'stylesheet';
      animateCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';
      document.head.appendChild(animateCSS);
    };
    
    loadExternalResources();
    
    // Focus input when chat is opened
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
    
    // Focus input when chat is opened
    if (!isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  };
  
  const handleSendMessage = () => {
    if (message.trim() === '') return;
    
    // Add user message to chat
    const userMessage = {
      content: message,
      isUser: true,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setMessage('');
    setIsTyping(true);
    
    // Simulate AI response after a delay
    setTimeout(() => {
      const botResponse = generateAIResponse(message);
      setMessages((prev) => [...prev, {
        content: botResponse,
        isUser: false,
        timestamp: new Date(),
      }]);
      setIsTyping(false);
    }, 1500);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  
  const handleSuggestionClick = (suggestion: string) => {
    setMessage(suggestion);
    
    // Focus the input after selecting a suggestion
    inputRef.current?.focus();
  };
  
  const clearChat = () => {
    setMessages([
      {
        content: "Chat cleared. How can I help you with today?",
        isUser: false,
        timestamp: new Date(),
      },
    ]);
    
    toast({
      title: "Chat Cleared",
      description: "All previous messages have been removed.",
      duration: 3000,
    });
  };
  
  // Handle rating messages
  const handleRateMessage = (index: number, rating: 'up' | 'down') => {
    setMessages(prev => 
      prev.map((msg, i) => 
        i === index ? { ...msg, rated: rating } : msg
      )
    );
    
    toast({
      title: rating === 'up' ? "Thanks for the feedback!" : "We'll improve our answers",
      description: rating === 'up' 
        ? "Glad this answer was helpful to you." 
        : "Your feedback helps us improve our responses.",
      duration: 2000,
    });
  };
  
  const generateAIResponse = (query: string): string => {
    const normalizedQuery = query.toLowerCase();
    
    // Check knowledge base categories
    for (const [category, responses] of Object.entries(knowledgeBase)) {
      if (normalizedQuery.includes(category)) {
        // Return a random response from the matching category
        return responses[Math.floor(Math.random() * responses.length)];
      }
    }
    
    // Basic QA pairs
    if (normalizedQuery.includes("hello") || normalizedQuery.includes("hi")) {
      return "Hello there! I'm your friendly AI assistant. How can I help you today?";
    }
    
    if (normalizedQuery.includes("thank")) {
      return "You're welcome! I'm happy to help. If you have any other questions, feel free to ask.";
    }
    
    // Expanded response capabilities
    if (normalizedQuery.includes("climate change") || normalizedQuery.includes("global warming")) {
      return "Climate change is primarily caused by human activities, especially the burning of fossil fuels which releases greenhouse gases. The scientific consensus is that we need to limit warming to 1.5°C above pre-industrial levels to avoid the most severe impacts. This requires significant reductions in carbon emissions and a transition to renewable energy sources.";
    }
    
    if (normalizedQuery.includes("quantum") || normalizedQuery.includes("quantum computing")) {
      return "Quantum computing uses quantum bits or 'qubits' that can exist in multiple states simultaneously (superposition) and be correlated with each other (entanglement). This allows quantum computers to perform certain calculations exponentially faster than classical computers. While still in early stages, quantum computers show promise for solving complex problems in cryptography, materials science, and drug discovery.";
    }
    
    if (normalizedQuery.includes("crypto") || normalizedQuery.includes("bitcoin")) {
      return "Cryptocurrency is a form of digital or virtual currency that uses cryptography for security and operates on a technology called blockchain. Bitcoin, created in 2009, was the first cryptocurrency. The blockchain is a distributed ledger that records all transactions across a network of computers, making it difficult to hack or alter. Cryptocurrencies have been both praised for their potential to democratize finance and criticized for their energy consumption and use in illicit activities.";
    }
    
    if (normalizedQuery.includes("simulation") || normalizedQuery.includes("simulation hypothesis")) {
      return "The simulation hypothesis, popularized by philosopher Nick Bostrom, suggests our reality could be an artificial simulation created by advanced beings. The argument is that if it's possible to create fully immersive simulated realities, and advanced civilizations would likely create many such simulations, then statistically we're more likely to be in a simulation than base reality. While fascinating, the hypothesis is currently unfalsifiable and remains in the realm of philosophical speculation.";
    }
    
    if (normalizedQuery.includes("consciousness") || normalizedQuery.includes("hard problem")) {
      return "Consciousness, the subjective experience of being, poses what philosopher David Chalmers called the 'hard problem' - explaining why physical processes in the brain give rise to subjective experience. Various theories exist, from emergent properties of complex neural systems to quantum effects in brain microtubules, but there's no scientific consensus. Some philosophers argue consciousness may be fundamental to reality rather than emergent from physical processes.";
    }
    
    if (normalizedQuery.includes("ai risk") || normalizedQuery.includes("ai danger")) {
      return "AI risks include short-term concerns like algorithmic bias, privacy violations, and job displacement, as well as longer-term existential risks from advanced AI. The control problem (ensuring advanced AI systems remain aligned with human values) and the possibility of an 'intelligence explosion' (rapidly self-improving AI) are key concerns. Organizations like the Future of Life Institute and the Center for AI Safety are working to ensure AI development remains beneficial for humanity.";
    }
    
    if (normalizedQuery.includes("gene edit") || normalizedQuery.includes("crispr")) {
      return "CRISPR-Cas9 is a revolutionary gene-editing technology that allows scientists to precisely modify DNA sequences. It works like molecular scissors, guided by RNA to cut specific DNA segments which can then be deleted or replaced. While promising tremendous medical benefits like curing genetic diseases, it also raises ethical concerns about human germline editing, designer babies, and unintended consequences of genetic modifications. International scientific consensus generally opposes heritable human genome editing until safety and ethical issues are resolved.";
    }
    
    if (normalizedQuery.includes("age") || normalizedQuery.includes("what are you") || normalizedQuery.includes("who are you")) {
      return "I'm an AI assistant designed to help answer questions about 'Our Final Invention' and many other topics. I don't have a physical form or age - I exist as a program that processes and generates text. I aim to be helpful, informative, and engaging in our conversations!";
    }
    
    // Factual information
    if (normalizedQuery.includes("when") && normalizedQuery.includes("published")) {
      return "'Our Final Invention' was published in 2013 by Thomas Dunne Books.";
    }
    
    // Generic responses for other queries
    const genericResponses = [
      "That's an interesting question! From my knowledge base, I can tell you that advances in AI have accelerated dramatically in recent years, with systems becoming increasingly capable at tasks ranging from language understanding to image generation.",
      "Great question. While I don't have a specific answer, I can share that AI ethics researchers are actively working on issues like alignment, interpretability, and safety to ensure AI systems remain beneficial.",
      "I don't have a complete answer to that, but many experts believe that ensuring advanced AI systems remain aligned with human values is one of the most important challenges facing AI research.",
      "That's a fascinating topic. The intersection of technology and society raises important questions about privacy, autonomy, and the future of human-machine collaboration.",
      "Interesting question! The field is evolving rapidly, with new research constantly emerging. I'd encourage looking into recent publications from organizations like the Machine Intelligence Research Institute or the Future of Life Institute for the most current information.",
    ];
    
    return genericResponses[Math.floor(Math.random() * genericResponses.length)];
  };
  
  const getTime = (date: Date): string => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat toggle button - floating in the bottom right */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group ${isOpen ? 'animate__animated animate__rubberBand' : 'animate__animated animate__pulse animate__infinite animate__slow'}`}
        aria-label="Chat with AI Assistant"
      >
        {isOpen ? (
          <X className="h-6 w-6 transition-all animate__animated animate__rotateIn" />
        ) : (
          <MessageSquare className="h-6 w-6 transition-all group-hover:scale-110" />
        )}
        <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white animate-pulse">
          1
        </span>
      </button>
      
      {/* Chat window with collapse functionality */}
      <Collapsible 
        open={isOpen}
        onOpenChange={setIsOpen}
        className={`fixed bottom-28 right-8 z-50 w-80 md:w-96 max-h-[600px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 transform ${
          isOpen ? 'scale-100 opacity-100 animate__animated animate__fadeInUp animate__faster' : 'scale-95 opacity-0 pointer-events-none'
        }`}
      >
        <CollapsibleContent>
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-blue-500/30 rounded-2xl overflow-hidden">
            {/* Chat header */}
            <div className="p-4 bg-gradient-to-r from-blue-600 to-blue-700 relative">
              <div className="flex items-center">
                <i className="fas fa-robot text-white mr-2 text-xl"></i>
                <h3 className="text-white font-medium">AI Assistant</h3>
              </div>
              <div className="mt-1 text-blue-100 text-xs flex items-center">
                <i className="fas fa-circle text-green-400 text-xs mr-1 animate-pulse"></i>
                <span>Online - Ask me anything!</span>
              </div>
              
              {/* Clear chat button */}
              <button 
                onClick={clearChat}
                className="absolute right-2 top-2 p-2 text-white/70 hover:text-white hover:bg-black/20 rounded-full transition-colors"
                aria-label="Clear chat"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
            
            {/* Chat messages */}
            <div className="h-96 overflow-y-auto p-4 scrollbar-thin bg-gray-900/50">
              {messages.map((msg, index) => (
                <div 
                  key={index}
                  className={`mb-4 flex ${msg.isUser ? 'justify-end' : 'justify-start'} ${msg.isUser ? 'animate__animated animate__fadeInRight animate__faster' : 'animate__animated animate__fadeInLeft animate__faster'}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-xl p-3 ${
                      msg.isUser 
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-tr-none' 
                        : 'bg-gray-800 text-gray-100 rounded-tl-none'
                    }`}
                  >
                    <div className="text-sm">{msg.content}</div>
                    <div className={`text-xs mt-1 ${msg.isUser ? 'text-blue-200' : 'text-gray-400'} flex justify-between items-center`}>
                      <span>{getTime(msg.timestamp)}</span>
                      
                      {/* Rating buttons for AI messages only */}
                      {!msg.isUser && (
                        <div className="flex space-x-2">
                          {msg.rated ? (
                            <span className={`text-xs ${msg.rated === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                              {msg.rated === 'up' ? (
                                <i className="fas fa-check"></i>
                              ) : (
                                <i className="fas fa-times"></i>
                              )}
                            </span>
                          ) : (
                            <>
                              <button 
                                onClick={() => handleRateMessage(index, 'up')}
                                className="text-gray-400 hover:text-green-400 transition-colors"
                                aria-label="Rate helpful"
                              >
                                <i className="fas fa-thumbs-up text-xs"></i>
                              </button>
                              <button 
                                onClick={() => handleRateMessage(index, 'down')}
                                className="text-gray-400 hover:text-red-400 transition-colors"
                                aria-label="Rate unhelpful"
                              >
                                <i className="fas fa-thumbs-down text-xs"></i>
                              </button>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start mb-4 animate__animated animate__fadeIn animate__faster">
                  <div className="bg-gray-800 text-white rounded-xl rounded-tl-none p-3">
                    <div className="flex items-center space-x-1">
                      <div className="typing-dot bg-blue-400 h-2 w-2 rounded-full animate-pulse"></div>
                      <div className="typing-dot bg-blue-400 h-2 w-2 rounded-full animate-pulse delay-150"></div>
                      <div className="typing-dot bg-blue-400 h-2 w-2 rounded-full animate-pulse delay-300"></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            {/* Suggested questions */}
            <div className="px-4 py-2 bg-gray-900/90 border-t border-gray-800">
              <p className="text-xs text-gray-400 mb-2 flex items-center">
                <i className="fas fa-lightbulb text-yellow-400 mr-1"></i>
                <span>Quick questions:</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion.text)}
                    className="text-xs bg-gray-800 hover:bg-blue-700 text-blue-300 rounded-full px-3 py-1.5 flex items-center gap-1.5 transition-colors animate__animated animate__fadeIn animate__delay-1s hover:scale-105 transform"
                  >
                    {suggestion.icon}
                    <span>{suggestion.text}</span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Chat input */}
            <div className="p-4 bg-gray-900 border-t border-gray-800 flex items-center">
              <Input
                type="text"
                placeholder="Ask me anything..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                ref={inputRef}
                className="flex-1 bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus-visible:ring-blue-500"
              />
              <Button
                size="icon"
                onClick={handleSendMessage}
                disabled={message.trim() === ''}
                className="ml-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full p-2 hover:shadow-lg disabled:opacity-50 transition-all"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Mobile-optimized chat using Sheet component */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button 
              variant="outline" 
              size="icon"
              className="fixed bottom-24 right-8 z-50 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white border-none hover:shadow-lg md:hidden"
            >
              <MessageSquare className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[90vh] p-0 rounded-t-xl bg-gradient-to-br from-gray-900 to-gray-950 border-t border-blue-500/30">
            <div className="p-4 bg-gradient-to-r from-blue-600 to-blue-700">
              <div className="flex items-center">
                <i className="fas fa-robot text-white mr-2 text-xl"></i>
                <h3 className="text-white font-medium">AI Assistant</h3>
              </div>
              <div className="mt-1 text-blue-100 text-xs flex items-center">
                <i className="fas fa-circle text-green-400 text-xs mr-1 animate-pulse"></i>
                <span>Online - Ask me anything!</span>
              </div>
            </div>
            
            <div className="flex flex-col h-[calc(90vh-8rem)]">
              <div className="flex-1 overflow-y-auto p-4">
                {messages.map((msg, index) => (
                  <div 
                    key={index}
                    className={`mb-4 flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[80%] rounded-xl p-3 ${
                        msg.isUser 
                          ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-tr-none' 
                          : 'bg-gray-800 text-gray-100 rounded-tl-none'
                      }`}
                    >
                      <div className="text-sm">{msg.content}</div>
                      <div className={`text-xs mt-1 ${msg.isUser ? 'text-blue-200' : 'text-gray-400'} flex justify-between items-center`}>
                        <span>{getTime(msg.timestamp)}</span>
                        
                        {/* Rating buttons for AI messages only */}
                        {!msg.isUser && (
                          <div className="flex space-x-2">
                            {msg.rated ? (
                              <span className={`text-xs ${msg.rated === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                                {msg.rated === 'up' ? (
                                  <i className="fas fa-check"></i>
                                ) : (
                                  <i className="fas fa-times"></i>
                                )}
                              </span>
                            ) : (
                              <>
                                <button 
                                  onClick={() => handleRateMessage(index, 'up')}
                                  className="text-gray-400 hover:text-green-400 transition-colors"
                                  aria-label="Rate helpful"
                                >
                                  <i className="fas fa-thumbs-up text-xs"></i>
                                </button>
                                <button 
                                  onClick={() => handleRateMessage(index, 'down')}
                                  className="text-gray-400 hover:text-red-400 transition-colors"
                                  aria-label="Rate unhelpful"
                                >
                                  <i className="fas fa-thumbs-down text-xs"></i>
                                </button>
                              </>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start mb-4">
                    <div className="bg-gray-800 text-white rounded-xl rounded-tl-none p-3">
                      <div className="flex items-center space-x-1">
                        <div className="typing-dot bg-blue-400 h-2 w-2 rounded-full animate-pulse"></div>
                        <div className="typing-dot bg-blue-400 h-2 w-2 rounded-full animate-pulse delay-150"></div>
                        <div className="typing-dot bg-blue-400 h-2 w-2 rounded-full animate-pulse delay-300"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="border-t border-gray-800">
                <div className="px-4 py-2 bg-gray-900/90">
                  <div className="flex overflow-x-auto pb-2 hide-scrollbar gap-2">
                    {suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion.text)}
                        className="text-xs whitespace-nowrap bg-gray-800 text-blue-300 rounded-full px-3 py-1.5 flex items-center gap-1.5 hover:bg-blue-700 transition-colors"
                      >
                        {suggestion.icon}
                        <span>{suggestion.text}</span>
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="p-4 bg-gray-900 flex items-center">
                  <Input
                    type="text"
                    placeholder="Ask me anything..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus-visible:ring-blue-500"
                  />
                  <Button
                    size="icon"
                    onClick={handleSendMessage}
                    disabled={message.trim() === ''}
                    className="ml-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full p-2 hover:shadow-lg disabled:opacity-50 transition-all"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* CSS for styling and animations */}
      <style>
        {`
        .typing-dot {
          animation: typingAnimation 1.4s infinite both;
        }
        .typing-dot:nth-child(2) {
          animation-delay: 0.2s;
        }
        .typing-dot:nth-child(3) {
          animation-delay: 0.4s;
        }
        @keyframes typingAnimation {
          0%, 60%, 100% {
            transform: translateY(0);
          }
          30% {
            transform: translateY(-4px);
          }
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        `}
      </style>
    </>
  );
};

export default AIChatbot;
