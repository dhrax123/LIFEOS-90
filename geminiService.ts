
import { GoogleGenAI } from "@google/genai";

// Standardized generator for personal manifest guidance using Gemini
export async function* generatePersonalManifestStream(userData: {
  name: string;
  role: string;
  struggle: string;
}) {
  // Always use strictly defined named parameter for initialization per guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    // Generate streaming content using the recommended Gemini 3 Flash model for text tasks
    const responseStream = await ai.models.generateContentStream({
      model: "gemini-3-flash-preview",
      contents: `Generate a short, grounded seasonal guidance message for ${userData.name}, who is a ${userData.role} dealing with ${userData.struggle}. 
      
      Tone: Calm mentor. Confident, practical, friendly, and direct. 
      Style: Clean, modern phrasing. Short to medium sentences. Clear over clever.
      Strictly Avoid: Poetry, flowery metaphors, spiritual/mystical language, and "hustle" cliches.
      
      Structure:
      1. Opening: A grounding line about where they are right now/what phase they are in.
      2. Middle: Practical insights on what to focus on and what to stop overthinking this season.
      3. Closing: A steady, action-oriented, and reassuring wrap-up.
      
      Length: Approximately 80-100 words. Keep it professional but relatable to a Gen Z professional.`,
      config: {
        temperature: 0.7,
        topP: 0.9,
      },
    });

    // Directly iterate over the response stream; chunk.text returns the string content
    for await (const chunk of responseStream) {
      if (chunk.text) {
        yield chunk.text;
      }
    }
  } catch (error) {
    console.error("Gemini Error:", error);
    // Robust fallback for service interruptions
    yield "You're at a baseline where clarity starts. Focus on stabilizing your current rhythm. Overthinking the finish line only slows the start. You're on track.";
  }
}
