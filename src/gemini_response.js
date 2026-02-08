import { GoogleGenAI } from '@google/genai';

const client = new GoogleGenAI({ apiKey: "AIzaSyD8PG2bQCBdq0yi8WhKvZBkQo63DSlfkL0" });

const interaction =  await client.interactions.create({
    model: 'gemini-3-flash-preview',
    input: 'Tell me a short joke about programming.',
});

console.log(interaction.outputs[interaction.outputs.length - 1].text);

/*from google import genai

client = genai.Client(api_key="AIzaSyD8PG2bQCBdq0yi8WhKvZBkQo63DSlfkL0")

interaction =  client.interactions.create(
    model="gemini-3-flash-preview",
    input="Tell me a short joke about programming."
)

print(interaction.outputs[-1].text)*/