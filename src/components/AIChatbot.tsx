import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Plus, Trash2, BrainCircuit, Bot, Code, Star, ThumbsUp, ThumbsDown, XCircle, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from "@/hooks/use-toast";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { generateGeminiResponse } from '@/utils/geminiAPI';

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
  const [showWarning, setShowWarning] = useState(true);
  const [messages, setMessages] = useState<MessageType[]>([
    {
      content: "👋 Hi there! I'm your AI assistant powered by Google Gemini. I can help with questions about 'Our Final Invention', AI safety, or any other topic you're curious about!",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  
  // Updated suggestions for better everyday questions
  const suggestions: SuggestionType[] = [
    { text: "What is this book about?", icon: <Bot size={16} /> },
    { text: "Who is James Barrat?", icon: <BrainCircuit size={16} /> },
    { text: "How does AI affect daily life?", icon: <Code size={16} /> },
    { text: "What are AI safety concerns?", icon: <AlertTriangle size={16} /> },
    { text: "How can we prepare for AI advancement?", icon: <BrainCircuit size={16} /> },
    { text: "What's the future of artificial intelligence?", icon: <Code size={16} /> },
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
  
  const handleSendMessage = async () => {
    if (message.trim() === '') return;
    
    // Add user message to chat
    const userMessage = {
      content: message,
      isUser: true,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    const currentMessage = message;
    setMessage('');
    setIsTyping(true);
    
    try {
      // Use Gemini API for smarter responses
      const botResponse = await generateGeminiResponse(currentMessage);
      setMessages((prev) => [...prev, {
        content: botResponse,
        isUser: false,
        timestamp: new Date(),
      }]);
    } catch (error) {
      console.error('Error generating response:', error);
      setMessages((prev) => [...prev, {
        content: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment.",
        isUser: false,
        timestamp: new Date(),
      }]);
    } finally {
      setIsTyping(false);
    }
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
  
  const getTime = (date: Date): string => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* AI Warning Banner */}
      {showWarning && (
        <div className="fixed top-16 left-4 right-4 z-[55] max-w-md mx-auto">
          <div className="bg-yellow-900/90 border border-yellow-500/50 rounded-lg p-3 backdrop-blur-sm animate__animated animate__fadeInDown">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-4 w-4 text-yellow-400" />
                <span className="text-yellow-200 text-sm">
                  AI Assistant Active - Powered by Google Gemini
                </span>
              </div>
              <button
                onClick={() => setShowWarning(false)}
                className="text-yellow-400 hover:text-yellow-200 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}

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
          AI
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
                <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">Gemini</span>
              </div>
              <div className="mt-1 text-blue-100 text-xs flex items-center">
                <i className="fas fa-circle text-green-400 text-xs mr-1 animate-pulse"></i>
                <span>Enhanced with Google AI - Ask anything!</span>
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
                    <div className="text-xs text-gray-400 mt-1">Gemini is thinking...</div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            {/* Suggested questions */}
            <div className="px-4 py-2 bg-gray-900/90 border-t border-gray-800">
              <p className="text-xs text-gray-400 mb-2 flex items-center">
                <i className="fas fa-lightbulb text-yellow-400 mr-1"></i>
                <span>Try asking:</span>
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
                <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">Gemini</span>
              </div>
              <div className="mt-1 text-blue-100 text-xs flex items-center">
                <i className="fas fa-circle text-green-400 text-xs mr-1 animate-pulse"></i>
                <span>Enhanced with Google AI - Ask anything!</span>
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
