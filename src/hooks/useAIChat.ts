
import { useState, useRef, useEffect } from "react";

export type MessageType = {
  content: string;
  isUser: boolean;
  timestamp: Date;
  rated?: "up" | "down" | null;
};

export type SuggestionType = {
  text: string;
  icon: React.ReactNode;
};

export const useAIChat = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [message, setMessage] = useState('');
  const [showWarning, setShowWarning] = useState(true);
  const [messages, setMessages] = useState<MessageType[]>([
    {
      content: "👋 Hi there! I'm your AI assistant powered by OpenAI. I can help with questions about 'Our Final Invention', AI safety, or any other topic you're curious about!",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const suggestions: SuggestionType[] = [
    // We'll pass suggestion icons from parent, for now just strings
    { text: "What is this book about?", icon: null },
    { text: "Who is James Barrat?", icon: null },
    { text: "How does AI affect daily life?", icon: null },
    { text: "What are AI safety concerns?", icon: null },
    { text: "How can we prepare for AI advancement?", icon: null },
    { text: "What's the future of artificial intelligence?", icon: null },
  ];

  // Scroll to bottom on messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const generateOpenAIResponse = async (userMessage: string): Promise<string> => {
    try {
      const res = await fetch(
        "https://rgzpyzxulmrepehmyoac.supabase.co/functions/v1/openai-chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: userMessage }),
        }
      );
      if (!res.ok) throw new Error(`Edge Function error: ${res.status}`);
      const data = await res.json();
      return data.response || "Sorry, I couldn't generate an answer right now.";
    } catch (error) {
      console.error("OpenAI edge function call failed", error);
      return "I'm sorry, I'm having trouble connecting right now. Please try again in a moment.";
    }
  };

  const handleSendMessage = async () => {
    if (message.trim() === "") return;

    const userMessage = {
      content: message,
      isUser: true,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    const currentMessage = message;
    setMessage("");
    setIsTyping(true);

    try {
      const botResponse = await generateOpenAIResponse(currentMessage);
      setMessages((prev) => [
        ...prev,
        {
          content: botResponse,
          isUser: false,
          timestamp: new Date(),
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          content: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment.",
          isUser: false,
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setMessage(suggestion);
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
  };

  const handleRateMessage = (index: number, rating: "up" | "down") => {
    setMessages((prev) =>
      prev.map((msg, i) => (i === index ? { ...msg, rated: rating } : msg))
    );
  };

  return {
    isTyping, setIsTyping,
    message, setMessage,
    showWarning, setShowWarning,
    messages, setMessages,
    suggestions,
    messagesEndRef,
    inputRef,
    handleSendMessage,
    handleSuggestionClick,
    clearChat,
    handleRateMessage
  };
};
