
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Plus, Trash2, BrainCircuit, Bot, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from "@/hooks/use-toast";

type MessageType = {
  content: string;
  isUser: boolean;
  timestamp: Date;
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
      content: "👋 Hi there! I'm your AI guide to 'Our Final Invention'. Ask me anything about the book, AI safety, James Barrat, or artificial intelligence in general!",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  
  // AI knowledge base
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
    ]
  };
  
  // Suggested questions
  const suggestions: SuggestionType[] = [
    { text: "What is this book about?", icon: <Bot size={16} /> },
    { text: "Who is James Barrat?", icon: <BrainCircuit size={16} /> },
    { text: "Why is AI safety important?", icon: <Code size={16} /> },
    { text: "What is the AI control problem?", icon: <Bot size={16} /> },
  ];
  
  // Auto-scroll to the bottom of the chat
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
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
        content: "Chat cleared. How can I help you learn about 'Our Final Invention'?",
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
      return "Hello! How can I help you learn about 'Our Final Invention' or AI safety today?";
    }
    
    if (normalizedQuery.includes("thank")) {
      return "You're welcome! If you have more questions about AI safety or the book, feel free to ask.";
    }
    
    if (normalizedQuery.includes("risk") || normalizedQuery.includes("danger")) {
      return "James Barrat discusses several AI risks in the book, including the control problem, value alignment issues, and the intelligence explosion hypothesis. Which aspect would you like to learn more about?";
    }
    
    if (normalizedQuery.includes("agi") || normalizedQuery.includes("artificial general intelligence")) {
      return "Artificial General Intelligence (AGI) refers to AI that can understand, learn, and apply knowledge across a wide range of tasks at a human level or beyond. Barrat argues that AGI could potentially be dangerous if developed without adequate safety precautions.";
    }
    
    if (normalizedQuery.includes("superintelligence")) {
      return "Superintelligence refers to an intellect that greatly exceeds the cognitive performance of humans in virtually all domains. Barrat, like philosopher Nick Bostrom, warns that a superintelligent AI might pose significant risks if its goals aren't aligned with human values.";
    }
    
    if (normalizedQuery.includes("when") && normalizedQuery.includes("published")) {
      return "'Our Final Invention' was published in 2013 by Thomas Dunne Books.";
    }
    
    if (normalizedQuery.includes("buy") || normalizedQuery.includes("purchase")) {
      return "You can purchase 'Our Final Invention' from major booksellers like Amazon, Barnes & Noble, or your local bookstore. The book is available in hardcover, paperback, e-book, and audiobook formats.";
    }
    
    if (normalizedQuery.includes("documentary") || normalizedQuery.includes("film")) {
      return "James Barrat is a documentary filmmaker who has created content for National Geographic, Discovery, PBS, and other broadcasters. His experience interviewing AI experts for documentaries led to his interest in AI safety.";
    }
    
    // Generic responses for other queries
    const genericResponses = [
      "That's an interesting question about AI. The book 'Our Final Invention' explores how advanced AI could pose existential risks if not properly aligned with human values.",
      "James Barrat discusses this topic in his book, emphasizing the importance of AI safety research and careful development of advanced systems.",
      "While 'Our Final Invention' was published in 2013, many of its concerns about AI safety remain relevant today as AI capabilities continue to advance rapidly.",
      "The field of AI safety that Barrat discusses aims to ensure that advanced AI systems remain beneficial and aligned with human values. Would you like to know more about specific safety approaches?",
    ];
    
    return genericResponses[Math.floor(Math.random() * genericResponses.length)];
  };
  
  const getTime = (date: Date): string => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat toggle button - now positioned at bottom right */}
      <button
        onClick={toggleChat}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group animate__animated animate__fadeIn"
        aria-label="Chat with AI Assistant"
      >
        {isOpen ? (
          <X className="h-6 w-6 transition-all" />
        ) : (
          <MessageSquare className="h-6 w-6 transition-all group-hover:scale-110" />
        )}
      </button>
      
      {/* Chat window */}
      <div 
        className={`fixed bottom-28 right-8 z-50 w-80 md:w-96 max-h-[600px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 transform ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        } bg-gradient-to-br from-gray-900 to-gray-950 border border-blue-500/30 animate__animated animate__fadeIn animate__faster`}
      >
        {/* Chat header */}
        <div className="p-4 bg-gradient-to-r from-blue-600 to-cyan-600 relative">
          <div className="flex items-center">
            <BrainCircuit className="h-6 w-6 text-white mr-2" />
            <h3 className="text-white font-medium">AI Book Assistant</h3>
          </div>
          <div className="mt-1 text-blue-100 text-xs">
            Ask me about "Our Final Invention" or AI safety
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
        <div className="h-96 overflow-y-auto p-4 scrollbar-thin">
          {messages.map((msg, index) => (
            <div 
              key={index}
              className={`mb-4 flex ${msg.isUser ? 'justify-end' : 'justify-start'} animate__animated animate__fadeIn animate__faster`}
            >
              <div 
                className={`max-w-[80%] rounded-xl p-3 ${
                  msg.isUser 
                    ? 'bg-blue-600 text-white rounded-tr-none' 
                    : 'bg-gray-800 text-gray-100 rounded-tl-none'
                }`}
              >
                <div className="text-sm">{msg.content}</div>
                <div className={`text-xs mt-1 ${msg.isUser ? 'text-blue-200' : 'text-gray-400'}`}>
                  {getTime(msg.timestamp)}
                </div>
              </div>
            </div>
          ))}
          
          {/* Typing indicator */}
          {isTyping && (
            <div className="flex justify-start mb-4 animate__animated animate__fadeIn animate__faster">
              <div className="bg-gray-800 text-white rounded-xl rounded-tl-none p-3">
                <div className="flex items-center">
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
        
        {/* Suggested questions */}
        <div className="px-4 py-2 bg-gray-900/90 border-t border-gray-800">
          <p className="text-xs text-gray-400 mb-2">Suggested questions:</p>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion.text)}
                className="text-xs bg-gray-800 hover:bg-gray-700 text-cyan-300 rounded-full px-3 py-1.5 flex items-center gap-1.5 transition-colors animate__animated animate__fadeIn animate__delay-1s"
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
            placeholder="Type your message..."
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
            className="ml-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full p-2 hover:shadow-lg disabled:opacity-50 transition-all"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default AIChatbot;
