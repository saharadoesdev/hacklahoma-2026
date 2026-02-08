//copied code from this link https://ai.google.dev/gemini-api/docs/quickstart, w api key info from https://ai.google.dev/gemini-api/docs/api-key

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyD8PG2bQCBdq0yi8WhKvZBkQo63DSlfkL0" });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}

main();