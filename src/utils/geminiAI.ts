
/**
 * Gemini AI Utility for making API calls to the Gemini 2.0 Flash model
 */

// The API key for Gemini AI
const API_KEY = "AIzaSyBBQc1AQKQ3ds6cfn-lQtC8VJt1bjQsIYw";

// Interface for response from Gemini API
interface GeminiResponse {
  candidates: Array<{
    content: {
      parts: Array<{
        text: string;
      }>;
    };
    finishReason: string;
  }>;
}

/**
 * Generate text using Gemini AI
 * @param prompt The prompt to send to the AI
 * @param maxTokens Maximum number of tokens to generate
 * @returns The generated text
 */
export async function generateWithGemini(prompt: string, maxTokens: number = 1024): Promise<string> {
  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=" + API_KEY,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: maxTokens,
            topP: 0.9,
            topK: 40,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Gemini API Error:", errorText);
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const result = await response.json() as GeminiResponse;
    return result.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw error;
  }
}

/**
 * Create a chat completion using Gemini AI
 * @param messages Array of message objects with role and content
 * @param maxTokens Maximum number of tokens to generate
 * @returns The AI's response text
 */
export async function createChatCompletion(
  messages: Array<{ role: "user" | "assistant" | "system"; content: string }>,
  maxTokens: number = 1024
): Promise<string> {
  // Convert the messages format to Gemini's expected format
  const conversationHistory = messages.map(msg => ({
    role: msg.role === "assistant" ? "model" : msg.role,
    parts: [{ text: msg.content }],
  }));
  
  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=" + API_KEY,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: conversationHistory,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: maxTokens,
            topP: 0.9,
            topK: 40,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Gemini API Error:", errorText);
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const result = await response.json() as GeminiResponse;
    return result.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error("Error in chat completion:", error);
    throw error;
  }
}

/**
 * Example usage:
 * 
 * // For a single prompt:
 * const response = await generateWithGemini("Tell me about wilderness survival");
 * 
 * // For a chat conversation:
 * const chatResponse = await createChatCompletion([
 *   { role: "system", content: "You are an expert on wilderness survival and literature." },
 *   { role: "user", content: "What are key themes in Gary Paulsen's 'Hatchet'?" }
 * ]);
 */
