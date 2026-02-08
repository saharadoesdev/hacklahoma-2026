import express from 'express';
import cors from 'cors';
import { MongoClient, ServerApiVersion } from 'mongodb';

// TODO: Move to environment variable before deploying
const uri = "mongodb+srv://meganbrue:6GJu19ZdDrwBZCbA@opportunities.2ejqhni.mongodb.net/?appName=Opportunities";

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
    db = client.db("trailhead"); // Your database name
    console.log("Connected to MongoDB!");
}

// =============================================================================
// API ENDPOINTS - These are what the frontend calls
// =============================================================================

/**
 * GET /api/opportunities
 * Returns all opportunities from the database
 * Frontend calls this for the Explore page
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
 * Frontend calls this for the Opportunity detail page
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
 * POST /api/opportunities
 * Create a new opportunity in the database
 */
app.post('/api/opportunities', async (req, res) => {
    try {
        const newOpp = req.body;
        if (!newOpp.id) newOpp.id = Date.now().toString();

        await db.collection('opportunities').insertOne(newOpp);

        res.status(201).json(newOpp);
    } catch (error) {
        console.error('Error creating opportunity:', error);
        res.status(500).json({ error: 'Failed to create opportunity' });
    }
});

/**
 * POST /api/generate-path
 * Takes user input and returns a personalized path
 * TODO: Add Gemini integration here
 */
app.post('/api/generate-path', async (req, res) => {
    try {
        const { query } = req.body;

        // TODO: Replace with Gemini + vector search
        // For now, just return some opportunities
        const opportunities = await db.collection('opportunities').find({}).limit(3).toArray();

        res.json({
            goal: "Your Personalized Goal",
            steps: opportunities.map((opp, i) => ({
                id: opp.id,
                timing: ["Start Here", "Build Momentum", "Your Summit"][i],
                title: opp.title,
                type: `${opp.type} • ${opp.location} • ${opp.duration}`,
                why: "This is a great next step for you." // TODO: Gemini generates this
            }))
        });
    } catch (error) {
        console.error('Error generating path:', error);
        res.status(500).json({ error: 'Failed to generate path' });
    }
});

// Start the server
const PORT = process.env.PORT || 3001;
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
});
