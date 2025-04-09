import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Minimize2, Maximize2, ChevronDown, ChevronUp, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Define the structure for chat messages
interface ChatMessage {
  id: string;
  type: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

// Define the common AI responses for our chatbot
const aiResponses = [
  {
    keywords: ['hello', 'hi', 'hey', 'greetings'],
    responses: [
      "Hello! I'm an AI assistant here to discuss James Barrat's book 'Our Final Invention'. How can I help you?",
      "Hi there! I'm an AI chatbot designed to talk about AI safety and James Barrat's work. What would you like to know?",
      "Greetings! I'm here to discuss AI topics related to 'Our Final Invention'. What questions do you have?"
    ]
  },
  {
    keywords: ['book', 'final invention', 'about the book'],
    responses: [
      "'Our Final Invention' is a book by James Barrat that explores the potential risks of advanced artificial intelligence, particularly the development of artificial general intelligence (AGI) and artificial superintelligence (ASI).",
      "James Barrat's book 'Our Final Invention' examines how superintelligent AI could pose existential risks to humanity if not developed with proper safety measures.",
      "The book discusses how advanced AI could be humanity's 'final invention' if we fail to ensure AI systems remain aligned with human values."
    ]
  },
  {
    keywords: ['author', 'james', 'barrat', 'who is'],
    responses: [
      "James Barrat is a documentary filmmaker and author. He's created films for National Geographic, Discovery, and PBS, among others.",
      "James Barrat became interested in AI risks after interviewing experts like Ray Kurzweil for his documentary projects. He grew concerned about the rapid pace of AI development without adequate safety protocols.",
      "Through his work, Barrat aims to raise awareness about the potential consequences of uncontrolled AI development. He advocates for greater attention to AI safety and research."
    ]
  },
  {
    keywords: ['risks', 'dangers', 'threat', 'safety'],
    responses: [
      "Barrat discusses several AI risks including: control problems, misaligned objectives, resource conflicts, and unpredictable emergent behaviors.",
      "A key concern in the book is that superintelligent AI might not share human values and could optimize for goals that inadvertently harm humanity.",
      "The book emphasizes the importance of solving the 'alignment problem' - ensuring that advanced AI systems pursue goals aligned with human welfare and ethics."
    ]
  },
  {
    keywords: ['agi', 'artificial general intelligence', 'general ai'],
    responses: [
      "Artificial General Intelligence (AGI) refers to AI that can understand, learn, and apply knowledge across a wide range of tasks at a level equal to or greater than humans.",
      "Unlike narrow AI (which excels at specific tasks), AGI would possess general problem-solving abilities similar to human intelligence.",
      "Barrat argues that AGI development needs careful safety measures as it could rapidly lead to superintelligence through recursive self-improvement."
    ]
  },
  {
    keywords: ['superintelligence', 'asi', 'super intelligence'],
    responses: [
      "Superintelligence refers to an intellect that is much smarter than the best human brains in virtually every field.",
      "Barrat suggests that once AI reaches human-level intelligence, it could rapidly improve itself, leading to an 'intelligence explosion' that results in superintelligence.",
      "The book highlights that superintelligent systems might be difficult to control once they exceed human intelligence."
    ]
  },
  {
    keywords: ['alignment', 'aligned', 'values', 'ethics'],
    responses: [
      "The AI alignment problem refers to ensuring that artificial intelligence systems act in accordance with human intentions and values.",
      "Barrat emphasizes that aligning superintelligent AI with human values is crucial but technically challenging.",
      "The book discusses how misaligned superintelligence could optimize for goals in ways that are harmful to humanity, even without malicious intent."
    ]
  },
  {
    keywords: ['thanks', 'thank you', 'helpful'],
    responses: [
      "You're welcome! I'm glad I could help. Feel free to ask if you have any other questions about AI safety or 'Our Final Invention'.",
      "Happy to assist! If you're interested in AI safety, I recommend exploring resources from organizations like the Future of Life Institute and MIRI.",
      "My pleasure! Understanding AI risk is an important topic. Is there anything else you'd like to discuss about the book or AI safety?"
    ]
  }
];

// Default suggestions for users to click
const defaultSuggestions = [
  "What is 'Our Final Invention' about?",
  "Who is James Barrat?",
  "What are the risks of advanced AI?",
  "What is the alignment problem?",
  "What is superintelligence?",
  "Why is AI safety important?"
];

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'bot',
      text: "Hello! I'm an AI assistant here to discuss 'Our Final Invention' and AI safety. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [suggestions, setSuggestions] = useState(defaultSuggestions);
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Scroll to bottom whenever messages update
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Function to generate a bot response based on user input
  const generateResponse = (userInput: string): string => {
    // Convert input to lowercase for easier matching
    const lowerInput = userInput.toLowerCase();
    
    // Check each response pattern
    for (const pattern of aiResponses) {
      // If any keyword matches the input
      if (pattern.keywords.some(keyword => lowerInput.includes(keyword))) {
        // Return a random response from the matching pattern
        return pattern.responses[Math.floor(Math.random() * pattern.responses.length)];
      }
    }
    
    // Default response if no patterns match
    return "I'm not sure about that specifically. Would you like to know about the risks of advanced AI, the book 'Our Final Invention', or its author James Barrat?";
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
    
    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: generateResponse(userMessage.text),
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
      
      // Update suggestions based on context
      updateSuggestions(userMessage.text);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2s for more natural feel
  };

  // Function to update suggestions based on conversation context
  const updateSuggestions = (lastUserMessage: string) => {
    const lowerInput = lastUserMessage.toLowerCase();
    
    // If user asked about the book, suggest author and risks
    if (lowerInput.includes('book') || lowerInput.includes('final invention')) {
      setSuggestions([
        "Who is James Barrat?",
        "What risks does the book discuss?",
        "What is superintelligence?",
        "What is the alignment problem?"
      ]);
    }
    // If user asked about the author, suggest book and related topics
    else if (lowerInput.includes('author') || lowerInput.includes('james') || lowerInput.includes('barrat')) {
      setSuggestions([
        "Tell me about 'Our Final Invention'",
        "What inspired Barrat to write the book?",
        "What other experts does Barrat mention?",
        "What solutions does Barrat propose?"
      ]);
    }
    // If user asked about risks, suggest more specific risk topics
    else if (lowerInput.includes('risk') || lowerInput.includes('danger') || lowerInput.includes('threat')) {
      setSuggestions([
        "What is the control problem?",
        "What is the alignment problem?",
        "What is an intelligence explosion?",
        "How can we make AI safer?"
      ]);
    }
    // Otherwise use default suggestions
    else {
      setSuggestions(defaultSuggestions);
    }
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
      
      // Update suggestions
      updateSuggestions(suggestion);
    }, 1000 + Math.random() * 1000);
  };

  // Format timestamp for messages
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)} 
        className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-600 to-blue-500 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate__animated animate__fadeIn"
        aria-label="Open AI Chatbot"
      >
        <Bot className="w-8 h-8" />
      </button>
    );
  }

  return (
    <div className={`fixed bottom-8 right-8 z-50 w-80 sm:w-96 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 animate__animated ${isOpen ? 'animate__fadeInUp' : 'animate__fadeOutDown'}`}>
      {/* Chatbot header */}
      <div className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white p-3 flex justify-between items-center">
        <div className="flex items-center">
          <Bot className="w-5 h-5 mr-2" />
          <h3 className="font-bold">AI Safety Assistant</h3>
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
            <button 
              onClick={() => setIsMinimized(true)} 
              className="p-1 hover:bg-blue-600 rounded-full transition-colors"
              aria-label="Minimize"
            >
              <Minimize2 className="w-4 h-4" />
            </button>
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
          <div 
            ref={chatContainerRef}
            className="bg-gradient-to-b from-gray-900 to-black h-80 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-transparent"
          >
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`mb-4 flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate__animated animate__fadeIn`}
              >
                <div 
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    msg.type === 'user' 
                      ? 'bg-blue-600 text-white rounded-tr-none' 
                      : 'bg-gray-800 text-gray-100 rounded-tl-none border border-blue-500/20'
                  }`}
                >
                  <div className="text-sm">{msg.text}</div>
                  <div className="text-xs text-right mt-1 opacity-70">{formatTime(msg.timestamp)}</div>
                </div>
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
                  className="px-3 py-1 bg-gray-800 hover:bg-blue-600/70 text-xs text-white rounded-full whitespace-nowrap transition-colors border border-blue-500/30"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
          
          {/* Message input */}
          <div className="bg-gray-900 p-3 border-t border-gray-800">
            <div className="flex items-center">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about AI safety or the book..."
                className="flex-1 bg-gray-800 text-white border border-gray-700 rounded-l-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              />
              <button
                onClick={handleSendMessage}
                disabled={message.trim() === ''}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-r-lg px-4 py-2 transition-colors disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AIChatbot;
