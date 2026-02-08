import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Load .env from the server directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: join(__dirname, '.env') });

import express from 'express';
import cors from 'cors';
import { MongoClient, ServerApiVersion } from 'mongodb';
import { GoogleGenAI } from '@google/genai';

// Load credentials from environment variables
const uri = process.env.MONGODB_URI;
const geminiKey = process.env.GEMINI_API_KEY;

// Debug: Log API key (masked for security)
console.log(`[Debug] API Key loaded: ${geminiKey ? geminiKey.substring(0, 10) + '...' : 'MISSING'}`);
console.log(`[Debug] API Key length: ${geminiKey?.length || 0}`);

// Initialize Gemini
const ai = new GoogleGenAI({ apiKey: geminiKey });

// Initialize MongoDB
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB once when server starts
let db;
async function connectDB() {
    await client.connect();
    db = client.db("trailhead");
    console.log("Connected to MongoDB!");
}

// =============================================================================
// API ENDPOINTS
// =============================================================================

/**
 * GET /api/opportunities
 * Returns all opportunities from the database
 */
app.get('/api/opportunities', async (req, res) => {
    try {
        const opportunities = await db.collection('opportunities').find({}).toArray();
        res.json(opportunities);
    } catch (error) {
        console.error('Error fetching opportunities:', error);
        res.status(500).json({ error: 'Failed to fetch opportunities' });
    }
});

/**
 * GET /api/opportunities/:id
 * Returns a single opportunity by ID
 */
app.get('/api/opportunities/:id', async (req, res) => {
    try {
        const opportunity = await db.collection('opportunities').findOne({ id: req.params.id });
        if (!opportunity) {
            return res.status(404).json({ error: 'Opportunity not found' });
        }
        res.json(opportunity);
    } catch (error) {
        console.error('Error fetching opportunity:', error);
        res.status(500).json({ error: 'Failed to fetch opportunity' });
    }
});

/**
 * POST /api/generate-path
 * Takes user input and returns a personalized path using Gemini AI
 */
app.post('/api/generate-path', async (req, res) => {
    try {
        const { query } = req.body;
        console.log(`\n[Path Generation] User query: "${query}"`);

        // Step 1: Get all opportunities from database
        const opportunities = await db.collection('opportunities').find({}).toArray();
        console.log(`[Path Generation] Found ${opportunities.length} opportunities in database`);

        // Step 2: Create a prompt for Gemini to analyze and curate
        const opportunitiesContext = opportunities.map(opp => ({
            id: opp.id,
            title: opp.title,
            type: opp.type,
            location: opp.location,
            duration: opp.duration,
            difficulty: opp.difficulty,
            description: opp.description,
            tags: opp.tags,
            careerArc: opp.careerArc
        }));

        const prompt = `You are a career counselor helping a college student discover their path. 

The student shared this about themselves:
"${query}"

Here are the available opportunities:
${JSON.stringify(opportunitiesContext, null, 2)}

Based on what the student shared, select exactly 3 opportunities that form a logical progression from beginner to more advanced. Consider:
- Their interests, skills, and experience level
- How each step builds on the previous one
- A mix of opportunity types if appropriate

Respond with ONLY valid JSON in this exact format (no markdown, no explanation):
{
    "goal": "A short 2-5 word career goal extracted from their input, or 'Discover Your Path' if unclear",
    "steps": [
        {
            "id": "[opportunity id]",
            "timing": "Start Here",
            "title": "[opportunity title]",
            "why": "[1-2 sentences explaining why THIS opportunity fits THIS specific student based on what they shared]"
        },
        {
            "id": "[opportunity id]",
            "timing": "Build Momentum", 
            "title": "[opportunity title]",
            "why": "[1-2 sentences explaining why this is a good next step after the first one]"
        },
        {
            "id": "[opportunity id]",
            "timing": "Your Summit",
            "title": "[opportunity title]", 
            "why": "[1-2 sentences explaining how this is the culmination of their path]"
        }
    ]
}`;

        console.log(`[Path Generation] Calling Gemini API...`);

        // Step 3: Call Gemini to get the personalized path
        // Using models.generateContent() with syntax from docs
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: prompt
        });

        console.log(`[Path Generation] Gemini response received:`, response);
        const responseText = response.text;
        console.log(`[Path Generation] Response text:`, responseText?.substring(0, 200));

        // Step 4: Parse the JSON response
        // Clean up the response in case Gemini wrapped it in markdown
        let jsonText = responseText;
        if (jsonText.includes('```json')) {
            jsonText = jsonText.replace(/```json\n?/g, '').replace(/```\n?/g, '');
        }
        if (jsonText.includes('```')) {
            jsonText = jsonText.replace(/```\n?/g, '');
        }
        jsonText = jsonText.trim();

        const pathResult = JSON.parse(jsonText);
        console.log(`[Path Generation] Successfully generated path: "${pathResult.goal}"`);

        // Step 5: Enrich with full opportunity data
        const enrichedSteps = pathResult.steps.map(step => {
            const fullOpp = opportunities.find(o => o.id === step.id);
            return {
                ...step,
                type: fullOpp ? `${fullOpp.type} • ${fullOpp.location} • ${fullOpp.duration}` : ''
            };
        });

        res.json({
            goal: pathResult.goal,
            steps: enrichedSteps
        });

    } catch (error) {
        console.error('=== GEMINI API ERROR ===');
        console.error('Error message:', error.message);
        console.error('Error status:', error.status);
        console.error('Full error:', JSON.stringify(error, null, 2));

        // Fallback: return first 3 opportunities with generic WHY
        try {
            const fallbackOpps = await db.collection('opportunities').find({}).limit(3).toArray();
            res.json({
                goal: "Explore Your Options",
                steps: fallbackOpps.map((opp, i) => ({
                    id: opp.id,
                    timing: ["Start Here", "Build Momentum", "Your Summit"][i],
                    title: opp.title,
                    type: `${opp.type} • ${opp.location} • ${opp.duration}`,
                    why: "This could be a great opportunity for you to explore."
                }))
            });
        } catch (fallbackError) {
            res.status(500).json({ error: 'Failed to generate path' });
        }
    }
});

// Start the server
const PORT = process.env.PORT || 3001;
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
        console.log(`Gemini API: ${geminiKey ? '✓ Configured' : '✗ Missing'}`);
    });
});
