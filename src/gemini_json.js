//from here https://ai.google.dev/gemini-api/docs/interactions?ua=chat#structured-output-json-schema
import { GoogleGenAI } from '@google/genai';
import { z } from 'zod';

const client = new GoogleGenAI({ apiKey: "AIzaSyD8PG2bQCBdq0yi8WhKvZBkQo63DSlfkL0" });

const moderationSchema = z.object({
    decision: z.union([
        z.object({
            reason: z.string().describe('The reason why the content is considered spam.'),
            spam_type: z.enum(['phishing', 'scam', 'unsolicited promotion', 'other']).describe('The type of spam.'),
        }).describe('Details for content classified as spam.'),
        z.object({
            summary: z.string().describe('A brief summary of the content.'),
            is_safe: z.boolean().describe('Whether the content is safe for all audiences.'),
        }).describe('Details for content classified as not spam.'),
    ]),
});

const interaction = await client.interactions.create({
    model: 'gemini-3-flash-preview',
    input: "Moderate the following content: 'Congratulations! You've won a free cruise. Click here to claim your prize: www.definitely-not-a-scam.com'",
    response_format: z.toJSONSchema(moderationSchema),
});
console.log(interaction.outputs[1].text); //if this isn't working, print the whole interaction to see where it went
