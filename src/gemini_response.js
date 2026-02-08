//copied code from this link https://ai.google.dev/gemini-api/docs/interactions?ua=chat#javascript_3, w api key info from https://ai.google.dev/gemini-api/docs/api-key

import { GoogleGenAI } from '@google/genai';

const client = new GoogleGenAI({ apiKey: "AIzaSyD8PG2bQCBdq0yi8WhKvZBkQo63DSlfkL0" });

const interaction =  await client.interactions.create({
    model: 'gemini-3-flash-preview',
    input: 'Tell me a short joke about programming.',
});

console.log(interaction.outputs[interaction.outputs.length - 1].text);