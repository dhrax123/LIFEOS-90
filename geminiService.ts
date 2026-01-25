
import { GoogleGenAI } from "@google/genai";

// Standardized generator for personal manifest guidance using Gemini
export async function* generatePersonalManifestStream(userData: {
  name: string;
  role: string;
  struggle: string;
}) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const responseStream = await ai.models.generateContentStream({
      model: "gemini-3-flash-preview",
      contents: `Generate a short, grounded seasonal guidance message for ${userData.name}, who is a ${userData.role} dealing with ${userData.struggle}. 
      
      Tone: Calm mentor. Poetic, literary, and deeply reflective. 
      Style: Use rich metaphors related to linen, light, seasons, and gravity. Short to medium sentences. 
      Voice: Sophisticated yet accessible. Speak to the soul, not just the schedule.
      
      Structure:
      1. Opening: A poetic grounding line about their current emotional or professional season.
      2. Middle: Deep insights on what to inhabit and what to release. 
      3. Closing: A steady, action-oriented, and reassuring wrap-up.
      
      Length: Approximately 80-100 words.`,
      config: {
        temperature: 0.8,
        topP: 0.9,
      },
    });

    for await (const chunk of responseStream) {
      if (chunk.text) {
        yield chunk.text;
      }
    }
  } catch (error) {
    console.error("Gemini Error:", error);
    yield "You are standing at the threshold of a quieter season. The noise is a guest, but clarity is the host. Walk slowly into this rhythm; the light will catch the patterns you've been missing. You are exactly where you need to be.";
  }
}
