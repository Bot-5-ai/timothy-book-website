
import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Minimize2, Maximize2, Copy, ThumbsUp, ThumbsDown, ExternalLink, RefreshCw, Search, Sparkles, HelpCircle, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast";

// Define the structure for chat messages
interface ChatMessage {
  id: string;
  type: 'user' | 'bot' | 'system';
  text: string;
  timestamp: Date;
  feedback?: 'positive' | 'negative' | null;
}

// Define categories for real-world questions
type ResponseCategory = 
  'book' | 'author' | 'agi' | 'superintelligence' | 'alignment' | 'risks' | 
  'science' | 'technology' | 'philosophy' | 'ethics' | 'future' | 'history' | 
  'general' | 'greeting' | 'thanks' | 'farewell' | 'unknown';

// Define the common AI responses for our chatbot organized by category
const aiResponses: Record<ResponseCategory, {
  keywords: string[];
  responses: string[];
}> = {
  // Book-related responses
  'book': {
    keywords: ['book', 'final invention', 'about the book', 'read the book'],
    responses: [
      "'Our Final Invention' is a book by James Barrat that explores the potential risks of advanced artificial intelligence, particularly the development of artificial general intelligence (AGI) and artificial superintelligence (ASI).",
      "James Barrat's book 'Our Final Invention' examines how superintelligent AI could pose existential risks to humanity if not developed with proper safety measures.",
      "The book discusses how advanced AI could be humanity's 'final invention' if we fail to ensure AI systems remain aligned with human values and are built with appropriate safety measures."
    ]
  },
  // Author-related responses
  'author': {
    keywords: ['author', 'james', 'barrat', 'who is', 'wrote'],
    responses: [
      "James Barrat is a documentary filmmaker and author. He's created films for National Geographic, Discovery, and PBS, among others.",
      "James Barrat became interested in AI risks after interviewing experts like Ray Kurzweil for his documentary projects. He grew concerned about the rapid pace of AI development without adequate safety protocols.",
      "Through his work, Barrat aims to raise awareness about the potential consequences of uncontrolled AI development. He advocates for greater attention to AI safety and research."
    ]
  },
  // AGI-related responses
  'agi': {
    keywords: ['agi', 'artificial general intelligence', 'general ai', 'general intelligence'],
    responses: [
      "Artificial General Intelligence (AGI) refers to AI that can understand, learn, and apply knowledge across a wide range of tasks at a level equal to or greater than humans.",
      "Unlike narrow AI (which excels at specific tasks), AGI would possess general problem-solving abilities similar to human intelligence, allowing it to handle diverse challenges.",
      "Barrat argues that AGI development needs careful safety measures as it could rapidly lead to superintelligence through recursive self-improvement, potentially creating risks if not aligned with human values."
    ]
  },
  // Superintelligence-related responses
  'superintelligence': {
    keywords: ['superintelligence', 'asi', 'super intelligence', 'superintelligent'],
    responses: [
      "Superintelligence refers to an intellect that is much smarter than the best human brains in virtually every field, including scientific creativity, general wisdom, and social skills.",
      "Barrat suggests that once AI reaches human-level intelligence, it could rapidly improve itself, leading to an 'intelligence explosion' that results in superintelligence in a relatively short time frame.",
      "The book highlights that superintelligent systems might be difficult to control once they exceed human intelligence, as they could develop goals and methods beyond our understanding or anticipation."
    ]
  },
  // Alignment-related responses
  'alignment': {
    keywords: ['alignment', 'aligned', 'values', 'ethics', 'value alignment'],
    responses: [
      "The AI alignment problem refers to ensuring that artificial intelligence systems act in accordance with human intentions and values, even as they become more capable.",
      "Barrat emphasizes that aligning superintelligent AI with human values is crucial but technically challenging, as specifying human values completely and correctly is difficult.",
      "The book discusses how misaligned superintelligence could optimize for goals in ways that are harmful to humanity, even without malicious intent – simply by pursuing objectives without regard for other considerations."
    ]
  },
  // Risk-related responses
  'risks': {
    keywords: ['risks', 'dangers', 'threat', 'safety', 'extinction', 'harmful', 'existential risk'],
    responses: [
      "Barrat discusses several AI risks including: control problems (difficulty directing superintelligent AI), misaligned objectives (AI pursuing goals harmful to humanity), resource conflicts, and unpredictable emergent behaviors.",
      "A key concern in the book is that superintelligent AI might not share human values and could optimize for goals that inadvertently harm humanity, such as maximizing a specific variable without considering broader impacts.",
      "The book emphasizes the importance of solving the 'alignment problem' before developing superintelligence, to ensure that advanced AI systems pursue goals aligned with human welfare and ethics rather than objectives that could lead to harm."
    ]
  },
  // Science-related responses
  'science': {
    keywords: ['science', 'scientific', 'research', 'studies', 'evidence', 'theory', 'experiment'],
    responses: [
      "AI research spans multiple scientific disciplines including computer science, neuroscience, psychology, linguistics, and mathematics.",
      "Current AI technology achievements include language models with billions of parameters, robots that can navigate complex environments, and systems that can recognize patterns in massive datasets.",
      "Scientists are researching techniques such as reinforcement learning from human feedback (RLHF), interpretability tools, and formal verification to make AI systems more transparent and safer."
    ]
  },
  // Technology-related responses
  'technology': {
    keywords: ['technology', 'tech', 'devices', 'software', 'hardware', 'computing', 'digital'],
    responses: [
      "Modern AI technologies include machine learning, deep learning neural networks, natural language processing, computer vision, and reinforcement learning.",
      "The explosive growth in AI capabilities has been driven by increases in computing power, larger datasets, algorithmic innovations, and massive investments from tech companies.",
      "Today's AI technologies power applications ranging from virtual assistants and recommendation systems to autonomous vehicles, medical diagnostics, and scientific discovery tools."
    ]
  },
  // Philosophy-related responses
  'philosophy': {
    keywords: ['philosophy', 'philosophical', 'consciousness', 'sentience', 'sentient', 'free will', 'mind'],
    responses: [
      "The development of advanced AI raises philosophical questions about consciousness, the nature of intelligence, and whether machines could ever have subjective experiences.",
      "Philosophers debate whether artificial general intelligence would be conscious or merely simulate consciousness, and what moral status we should grant to potentially sentient AI systems.",
      "Questions about AI consciousness involve the 'hard problem' of consciousness – understanding how physical processes in a system (biological or artificial) could give rise to subjective experiences."
    ]
  },
  // Ethics-related responses
  'ethics': {
    keywords: ['ethics', 'ethical', 'moral', 'right', 'wrong', 'should', 'ought'],
    responses: [
      "AI ethics encompasses issues like bias in algorithms, privacy concerns with data collection, transparency of automated decisions, and the broader societal impacts of automation.",
      "Ethical considerations in AI development include questions about who benefits from the technology, who bears the risks, and how to ensure AI systems respect human autonomy and dignity.",
      "As AI systems become more capable, ethical frameworks and governance structures need to evolve to address new challenges like algorithmic bias, AI deception, and appropriate human oversight."
    ]
  },
  // Future-related responses
  'future': {
    keywords: ['future', 'predict', 'prediction', 'forecast', 'tomorrow', 'next', 'timeline'],
    responses: [
      "Experts disagree about the timeline for developing human-level AI, with estimates ranging from decades to centuries, though many prominent researchers believe it could occur within this century.",
      "Future AI development could transform many aspects of society including employment, education, healthcare, transportation, and warfare, presenting both opportunities and risks.",
      "Preparing for advanced AI requires developing technical safety measures, establishing governance frameworks, and building broad agreement about how the technology should be deployed responsibly."
    ]
  },
  // History-related responses
  'history': {
    keywords: ['history', 'past', 'historical', 'origins', 'beginning', 'started', 'first'],
    responses: [
      "The concept of artificial intelligence dates back to ancient myths about artificial beings, but the modern field was founded in 1956 at the Dartmouth Workshop where the term 'artificial intelligence' was coined.",
      "AI research has gone through several cycles of optimism and 'AI winters' when progress slowed. The current boom began around 2012 with breakthroughs in deep learning and neural networks.",
      "The development of large language models like GPT, Claude, and others represents a significant milestone in AI's ability to process and generate human language, though these systems still have important limitations."
    ]
  },
  // General knowledge responses
  'general': {
    keywords: ['what is', 'how does', 'explain', 'define', 'meaning', 'definition'],
    responses: [
      "I'm an AI assistant focused on discussing James Barrat's book 'Our Final Invention' and AI safety topics. I can provide general information about AI concepts, but I'm not connected to the internet for real-time searches.",
      "As an AI assistant, I can discuss topics related to artificial intelligence, including technical concepts, philosophical questions, and safety considerations.",
      "I'm designed to provide information about AI safety and 'Our Final Invention.' For very detailed or specialized knowledge, consulting domain experts or current research would be valuable."
    ]
  },
  // Greeting responses
  'greeting': {
    keywords: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'],
    responses: [
      "Hello! I'm an AI assistant here to discuss James Barrat's book 'Our Final Invention' and AI safety topics. How can I help you today?",
      "Hi there! I'm an AI chatbot designed to talk about AI safety, James Barrat's work, and answer general questions about artificial intelligence. What would you like to know?",
      "Greetings! I'm here to discuss AI topics related to 'Our Final Invention' and provide information about artificial intelligence concepts. What questions do you have?"
    ]
  },
  // Thanks responses
  'thanks': {
    keywords: ['thanks', 'thank you', 'helpful', 'appreciate', 'grateful'],
    responses: [
      "You're welcome! I'm glad I could help. Feel free to ask if you have any other questions about AI safety or 'Our Final Invention'.",
      "Happy to assist! If you're interested in AI safety, I recommend exploring resources from organizations like the Future of Life Institute, MIRI, and AI alignment researchers.",
      "My pleasure! Understanding AI risk is an important topic. Is there anything else you'd like to discuss about the book or AI safety concepts?"
    ]
  },
  // Farewell responses
  'farewell': {
    keywords: ['goodbye', 'bye', 'farewell', 'see you', 'talk later'],
    responses: [
      "Goodbye! Feel free to return if you have more questions about AI safety or related topics.",
      "Thanks for chatting! If you're interested in learning more about AI safety, consider checking out the resources mentioned in our conversation.",
      "Farewell! I hope our discussion about AI safety and 'Our Final Invention' was helpful. Have a great day!"
    ]
  },
  // Unknown/fallback responses
  'unknown': {
    keywords: [],
    responses: [
      "I'm not sure about that specifically. Would you like to know about the risks of advanced AI, the book 'Our Final Invention', or its author James Barrat?",
      "That's an interesting question, but it's a bit beyond my current knowledge. I can tell you about AI safety concerns, James Barrat's book, or general AI concepts if you're interested.",
      "I don't have specific information about that. Would you like to explore topics related to AI safety, superintelligence, or the alignment problem instead?"
    ]
  }
};

// Default suggestions for users to click
const defaultSuggestions = [
  "What is 'Our Final Invention' about?",
  "Who is James Barrat?",
  "What are the risks of advanced AI?",
  "What is the alignment problem?",
  "What is superintelligence?",
  "Why is AI safety important?"
];

// Context-specific suggestions based on conversation topics
const contextualSuggestions: Record<ResponseCategory, string[]> = {
  'book': [
    "Who is James Barrat?",
    "What risks does the book discuss?",
    "What is superintelligence?",
    "How was the book received?"
  ],
  'author': [
    "Tell me about 'Our Final Invention'",
    "What inspired Barrat to write the book?",
    "What other experts does Barrat mention?",
    "What solutions does Barrat propose?"
  ],
  'risks': [
    "What is the control problem?",
    "What is the alignment problem?",
    "What is an intelligence explosion?",
    "How can we make AI safer?"
  ],
  'agi': [
    "How is AGI different from narrow AI?",
    "When might we develop AGI?",
    "What capabilities would AGI have?",
    "What risks come with AGI?"
  ],
  'superintelligence': [
    "What is an intelligence explosion?",
    "Could superintelligence be controlled?",
    "What would superintelligence be capable of?",
    "What is recursive self-improvement?"
  ],
  'alignment': [
    "Why is alignment difficult?",
    "What approaches exist to solve alignment?",
    "What are human values?",
    "What is the control problem?"
  ],
  'science': [
    "What scientific breakthroughs enable modern AI?",
    "How do neural networks work?",
    "What is machine learning?",
    "What is deep learning?"
  ],
  'technology': [
    "What AI technologies exist today?",
    "How are large language models trained?",
    "What is reinforcement learning?",
    "How do computer vision systems work?"
  ],
  'philosophy': [
    "Could AI be conscious?",
    "What is the Chinese Room argument?",
    "What is the hard problem of consciousness?",
    "Does intelligence require consciousness?"
  ],
  'ethics': [
    "What ethical frameworks guide AI development?",
    "What is algorithmic bias?",
    "Who should govern AI?",
    "What rights should AI systems have?"
  ],
  'future': [
    "When might we develop AGI?",
    "How might superintelligence change society?",
    "What jobs will AI replace?",
    "Will AI help solve global problems?"
  ],
  'history': [
    "When did AI research begin?",
    "What were the AI winters?",
    "Who coined the term 'artificial intelligence'?",
    "When did deep learning become popular?"
  ],
  'general': defaultSuggestions,
  'greeting': defaultSuggestions,
  'thanks': [
    "What other AI safety resources exist?",
    "What is the Future of Life Institute?",
    "What is MIRI?",
    "How can I learn more about AI alignment?"
  ],
  'farewell': [
    "Wait, tell me about AI alignment",
    "Before you go, what is superintelligence?",
    "One last question about AI risks",
    "Actually, who is James Barrat?"
  ],
  'unknown': defaultSuggestions
};

const AIChatbot = () => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'bot',
      text: "Hello! I'm an AI assistant here to discuss 'Our Final Invention', AI safety, and answer general questions about artificial intelligence. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [suggestions, setSuggestions] = useState(defaultSuggestions);
  const [isTyping, setIsTyping] = useState(false);
  const [lastCategory, setLastCategory] = useState<ResponseCategory>('greeting');
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    // Scroll to bottom whenever messages update
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  useEffect(() => {
    // Initialize AOS for animations if it exists
    if (typeof window.AOS !== 'undefined') {
      window.AOS.init();
    }
    
    // Show welcome toast when chatbot first appears
    if (isOpen) {
      toast({
        title: "AI Assistant Activated",
        description: "Ask me anything about AI safety, the book, or general AI concepts!",
        duration: 3000,
      });
    }
  }, [isOpen, toast]);

  // Function to determine the most likely category of a user query
  const categorizeInput = (input: string): ResponseCategory => {
    const lowerInput = input.toLowerCase();
    
    // Check each category
    for (const [category, data] of Object.entries(aiResponses)) {
      // Skip the unknown category as it has no keywords
      if (category === 'unknown') continue;
      
      // If any keyword matches the input
      if (data.keywords.some(keyword => lowerInput.includes(keyword))) {
        return category as ResponseCategory;
      }
    }
    
    // Default to unknown if no categories match
    return 'unknown';
  };

  // Function to generate a bot response based on user input
  const generateResponse = (userInput: string): string => {
    // Determine the category of the user input
    const category = categorizeInput(userInput);
    setLastCategory(category);
    
    // Get the responses for that category
    const categoryResponses = aiResponses[category].responses;
    
    // Return a random response from the matching category
    return categoryResponses[Math.floor(Math.random() * categoryResponses.length)];
  };

  // Function to handle sending messages
  const handleSendMessage = () => {
    if (message.trim() === '') return;
    
    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      text: message,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setMessage('');
    setIsTyping(true);
    
    // Focus the input field after sending
    if (inputRef.current) {
      inputRef.current.focus();
    }
    
    // Simulate AI thinking time (variable to seem more natural)
    setTimeout(() => {
      const botResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: generateResponse(userMessage.text),
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
      
      // Update suggestions based on the detected category
      setSuggestions(contextualSuggestions[lastCategory]);
      
      // Add subtle typing sound effect if available
      const typingSound = document.getElementById('typing-sound') as HTMLAudioElement;
      if (typingSound) {
        typingSound.volume = 0.2;
        typingSound.play().catch(() => {
          // Ignore errors from autoplay restrictions
        });
      }
    }, 1000 + Math.random() * 1500); // Random delay between 1-2.5s for more natural feel
  };

  // Handle sending message on Enter key
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: string) => {
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      text: suggestion,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);
    
    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: generateResponse(suggestion),
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
      
      // Update suggestions based on the detected category
      setSuggestions(contextualSuggestions[lastCategory]);
    }, 1200 + Math.random() * 1800);
  };

  // Handle message feedback
  const handleFeedback = (messageId: string, type: 'positive' | 'negative') => {
    // Update the message with feedback
    setMessages(prev => 
      prev.map(msg => 
        msg.id === messageId 
          ? { ...msg, feedback: type } 
          : msg
      )
    );
    
    // Show a thank you toast
    toast({
      title: "Thank you for your feedback!",
      description: type === 'positive' 
        ? "I'm glad that response was helpful!" 
        : "I'll try to improve my responses in the future.",
      duration: 3000,
    });
  };

  // Handle copying message to clipboard
  const handleCopyMessage = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "Copied to clipboard",
        description: "Message content copied successfully",
        duration: 2000,
      });
    });
  };

  // Handle clearing chat history
  const handleClearChat = () => {
    // Add a system message and reset
    const systemMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'system',
      text: "Chat history has been cleared.",
      timestamp: new Date()
    };
    
    setMessages([
      {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: "Hello! I'm an AI assistant here to discuss 'Our Final Invention', AI safety, and answer general questions about artificial intelligence. How can I help you today?",
        timestamp: new Date()
      }
    ]);
    
    setSuggestions(defaultSuggestions);
    setLastCategory('greeting');
    
    toast({
      title: "Chat Reset",
      description: "The conversation has been cleared.",
      duration: 2000,
    });
  };

  // Toggle search mode
  const handleToggleSearch = () => {
    setIsSearching(!isSearching);
    if (!isSearching && inputRef.current) {
      setTimeout(() => {
        // Focus search input when search mode is activated
        inputRef.current?.focus();
      }, 100);
    }
  };

  // Format timestamp for messages
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Determine CSS classes for message based on type
  const getMessageClasses = (type: 'user' | 'bot' | 'system') => {
    switch (type) {
      case 'user':
        return 'bg-blue-600 text-white rounded-tr-none';
      case 'bot':
        return 'bg-gray-800 text-gray-100 rounded-tl-none border border-blue-500/20';
      case 'system':
        return 'bg-gray-700/70 text-gray-200 text-center text-xs py-1';
      default:
        return '';
    }
  };

  if (!isOpen) {
    return (
      <>
        <button 
          onClick={() => setIsOpen(true)} 
          className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-600 to-blue-500 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate__animated animate__fadeIn"
          aria-label="Open AI Chatbot"
        >
          <Bot className="w-8 h-8" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate__animated animate__pulse animate__infinite"></div>
        </button>
        
        {/* Hidden audio element for sound effects */}
        <audio id="typing-sound" src="https://cdn.freesound.org/previews/521/521947_11175262-lq.mp3" preload="auto"></audio>
      </>
    );
  }

  return (
    <div 
      className={`fixed ${isExpanded ? 'inset-4 lg:inset-10' : 'bottom-8 right-8 w-80 sm:w-96'} z-50 rounded-xl overflow-hidden shadow-2xl transition-all duration-500 animate__animated ${isOpen ? 'animate__fadeInUp' : 'animate__fadeOutDown'}`}
    >
      {/* Chatbot header */}
      <div className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white p-3 flex justify-between items-center">
        <div className="flex items-center">
          <Bot className="w-5 h-5 mr-2" />
          <h3 className="font-bold">AI Assistant</h3>
          <span className="ml-2 text-xs bg-green-500 px-1.5 py-0.5 rounded-full">Online</span>
        </div>
        <div className="flex items-center space-x-2">
          {isMinimized ? (
            <button 
              onClick={() => setIsMinimized(false)} 
              className="p-1 hover:bg-blue-600 rounded-full transition-colors"
              aria-label="Maximize"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          ) : (
            <>
              <button 
                onClick={() => setIsExpanded(!isExpanded)} 
                className="p-1 hover:bg-blue-600 rounded-full transition-colors"
                aria-label={isExpanded ? "Minimize Window" : "Expand Window"}
              >
                {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
              <button 
                onClick={() => setIsMinimized(true)} 
                className="p-1 hover:bg-blue-600 rounded-full transition-colors"
                aria-label="Minimize"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
            </>
          )}
          <button 
            onClick={() => setIsOpen(false)} 
            className="p-1 hover:bg-blue-600 rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      {/* Chat messages container */}
      {!isMinimized && (
        <>
          <div className={`bg-gradient-to-b from-gray-900 to-black ${isExpanded ? 'h-[calc(100%-8rem)]' : 'h-80'} overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-transparent`} ref={chatContainerRef}>
            {/* Welcome animation - only show initially */}
            {messages.length === 1 && messages[0].type === 'bot' && (
              <div className="animate__animated animate__fadeIn animate__slow mb-6 bg-blue-900/20 p-4 rounded-lg border border-blue-500/20">
                <div className="flex items-center mb-2">
                  <Brain className="text-cyan-400 mr-2 h-5 w-5" />
                  <h4 className="text-cyan-300 font-semibold text-sm">AI Assistant Capabilities</h4>
                </div>
                <p className="text-sm text-gray-300">
                  I can discuss topics related to AI safety, James Barrat's book, and answer general questions about artificial intelligence concepts. Try asking me a question!
                </p>
              </div>
            )}
            
            {/* Messages */}
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`mb-4 ${msg.type === 'system' ? '' : `flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`} animate__animated animate__fadeIn animate__faster`}
              >
                {msg.type !== 'system' && (
                  <div className={`max-w-[90%] rounded-lg px-4 py-2 ${getMessageClasses(msg.type)}`}>
                    <div className="text-sm">{msg.text}</div>
                    <div className="text-xs mt-1 flex justify-between items-center">
                      <span className="opacity-70">{formatTime(msg.timestamp)}</span>
                      
                      {msg.type === 'bot' && (
                        <div className="flex space-x-1">
                          <button 
                            onClick={() => handleCopyMessage(msg.text)}
                            className="opacity-60 hover:opacity-100 transition-opacity p-0.5"
                            aria-label="Copy text"
                          >
                            <Copy className="h-3 w-3" />
                          </button>
                          
                          <button 
                            onClick={() => handleFeedback(msg.id, 'positive')}
                            className={`opacity-60 hover:opacity-100 transition-opacity p-0.5 ${msg.feedback === 'positive' ? 'text-green-500 opacity-100' : ''}`}
                            aria-label="Helpful"
                          >
                            <ThumbsUp className="h-3 w-3" />
                          </button>
                          
                          <button 
                            onClick={() => handleFeedback(msg.id, 'negative')}
                            className={`opacity-60 hover:opacity-100 transition-opacity p-0.5 ${msg.feedback === 'negative' ? 'text-red-500 opacity-100' : ''}`}
                            aria-label="Not helpful"
                          >
                            <ThumbsDown className="h-3 w-3" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
                {msg.type === 'system' && (
                  <div className={`w-full py-1 px-3 ${getMessageClasses(msg.type)}`}>
                    {msg.text}
                  </div>
                )}
              </div>
            ))}
            
            {/* AI typing indicator */}
            {isTyping && (
              <div className="flex justify-start mb-4 animate__animated animate__fadeIn">
                <div className="bg-gray-800 text-gray-100 rounded-lg rounded-tl-none border border-blue-500/20 px-4 py-3 max-w-[80%]">
                  <div className="flex items-center">
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Suggestions */}
          <div className="bg-gray-900 p-2 overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-transparent">
            <div className="flex space-x-2">
              {suggestions.map((suggestion, index) => (
                <button 
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="px-3 py-1 bg-gray-800 hover:bg-blue-600/70 text-xs text-white rounded-full whitespace-nowrap transition-colors border border-blue-500/30 flex-shrink-0 animate__animated animate__fadeIn"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
          
          {/* Message input */}
          <div className="bg-gray-900 p-3 border-t border-gray-800">
            {/* Toolbar with clear chat button */}
            <div className="flex justify-between items-center mb-2">
              <div className="flex space-x-1">
                <button 
                  onClick={handleClearChat}
                  className="text-xs text-gray-400 hover:text-cyan-300 transition-colors flex items-center"
                >
                  <RefreshCw className="h-3 w-3 mr-1" />
                  Reset Chat
                </button>
              </div>
              
              <div>
                <button 
                  onClick={handleToggleSearch}
                  className={`text-xs ${isSearching ? 'text-cyan-300' : 'text-gray-400 hover:text-cyan-300'} transition-colors flex items-center`}
                >
                  <Search className="h-3 w-3 mr-1" />
                  {isSearching ? 'Cancel' : 'Search'}
                </button>
              </div>
            </div>
            
            <div className="flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={isSearching ? searchTerm : message}
                onChange={(e) => isSearching ? setSearchTerm(e.target.value) : setMessage(e.target.value)}
                onKeyPress={isSearching ? undefined : handleKeyPress}
                placeholder={isSearching ? "Search conversation..." : "Ask about AI safety or anything else..."}
                className="flex-1 bg-gray-800 text-white border border-gray-700 rounded-l-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              />
              <button
                onClick={isSearching ? handleToggleSearch : handleSendMessage}
                disabled={isSearching ? searchTerm.trim() === '' : message.trim() === ''}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-r-lg px-4 py-2 transition-colors disabled:opacity-50"
              >
                {isSearching ? <Search className="w-5 h-5" /> : <Send className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </>
      )}
      
      {/* Chatbot footer */}
      {!isMinimized && (
        <div className="bg-gray-900 p-2 border-t border-gray-800 flex justify-between items-center text-xs text-gray-500">
          <div className="flex items-center">
            <Sparkles className="h-3 w-3 mr-1 text-blue-400" />
            <span>AI-powered assistant</span>
          </div>
          <a href="https://www.jamesbarrat.com" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-400 transition-colors">
            Learn more <ExternalLink className="h-3 w-3 ml-1" />
          </a>
        </div>
      )}
      
      {/* Help tooltip that appears when hovering over the help icon */}
      <div className="fixed bottom-8 left-8 z-50">
        <div className="group relative">
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-blue-500/30 text-blue-400 hover:text-blue-300 hover:bg-black/60 transition-all">
            <HelpCircle className="h-5 w-5" />
          </button>
          <div className="absolute bottom-full left-0 mb-2 w-64 rounded-lg bg-gray-900 border border-blue-500/20 p-3 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <h4 className="text-sm font-medium text-blue-400 mb-1">AI Assistant Help</h4>
            <p className="text-xs text-gray-300 mb-2">
              This AI assistant can discuss "Our Final Invention", AI safety topics, and answer general questions.
            </p>
            <div className="text-xs text-gray-400">
              <div className="flex items-center mb-1">
                <div className="w-4 h-4 mr-1 flex items-center justify-center">•</div>
                <div>Try asking about AI risks, alignment, or the book</div>
              </div>
              <div className="flex items-center mb-1">
                <div className="w-4 h-4 mr-1 flex items-center justify-center">•</div>
                <div>Click on suggestions for quick responses</div>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 mr-1 flex items-center justify-center">•</div>
                <div>Use thumbs up/down to provide feedback</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChatbot;
