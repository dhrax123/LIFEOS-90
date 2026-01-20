
import { GoogleGenAI, Type } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export async function generatePersonalManifest(userData: {
  name: string;
  role: string;
  struggle: string;
}) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a short, calm, and grounding "Life OS Manifest" for someone named ${userData.name} who is a ${userData.role} and feels ${userData.struggle}. Keep it under 100 words. Focus on clarity and self-compassion.`,
      config: {
        temperature: 0.7,
        topP: 0.95,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Your path is unique. Focus on the breath of today, and let the 90 days unfold with grace.";
  }
}
