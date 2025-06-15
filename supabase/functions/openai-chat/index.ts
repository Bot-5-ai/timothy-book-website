
// deno-lint-ignore-file no-explicit-any
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get("OPENAI_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { prompt } = await req.json();

    const systemInstructions =
      "You are a friendly, family-friendly and helpful AI assistant. Always answer safely. Avoid mature, explicit, political, harmful, or controversial content. Respond in a way that is accessible for all audiences and helpful for general or everyday questions. Reference 'Our Final Invention' and basic AI safety facts if relevant, but do not use technical jargon.";

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${openAIApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemInstructions },
          { role: "user", content: prompt },
        ],
        max_tokens: 400,
        temperature: 0.65,
        top_p: 0.95,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("OpenAI API error:", errText);
      return new Response(JSON.stringify({ error: "OpenAI API error", detail: errText }), { status: 500, headers: corsHeaders });
    }

    const data = await response.json();
    const output = data?.choices?.[0]?.message?.content ?? "Sorry, I couldn't generate a response right now.";
    return new Response(JSON.stringify({ response: output }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("Error in openai-chat:", e);
    return new Response(JSON.stringify({ error: "Something went wrong." }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
