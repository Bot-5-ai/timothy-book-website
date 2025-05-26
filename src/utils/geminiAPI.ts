
const GEMINI_API_KEY = 'AIzaSyBBQc1AQKQ3ds6cfn-lQtC8VJt1bjQsIYw';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

export const generateGeminiResponse = async (userMessage: string): Promise<string> => {
  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `You are a helpful AI assistant discussing "Our Final Invention" by James Barrat and related topics about AI safety, technology, and science. Answer the following question in a friendly, conversational way: ${userMessage}`
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 500,
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          }
        ]
      }),
    });

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.candidates && data.candidates[0] && data.candidates[0].content) {
      return data.candidates[0].content.parts[0].text;
    }
    
    throw new Error('Invalid response format from Gemini API');
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    // Fallback to original response generation
    return generateFallbackResponse(userMessage);
  }
};

const generateFallbackResponse = (query: string): string => {
  const normalizedQuery = query.toLowerCase();
  
  if (normalizedQuery.includes("hello") || normalizedQuery.includes("hi")) {
    return "Hello! I'm here to help you learn about 'Our Final Invention' and AI safety topics. What would you like to know?";
  }
  
  if (normalizedQuery.includes("book") || normalizedQuery.includes("barrat")) {
    return "'Our Final Invention' by James Barrat explores the potential risks of artificial intelligence development. The book warns about the challenges of creating superintelligent AI without proper safety measures.";
  }
  
  return "That's an interesting question! While I may not have all the details, I can tell you that AI safety research is crucial for ensuring advanced AI systems remain beneficial to humanity.";
};
