/**
 * Database Seeding Script
 * 
 * Run this once to populate MongoDB with opportunity data.
 * Usage: node server/seed.js
 */

import 'dotenv/config';
import { MongoClient, ServerApiVersion } from 'mongodb';

// Load MongoDB URI from environment variables
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

// The opportunity data to seed
const opportunities = [
    {
        id: "1",
        title: "Bio-Computing Research Lab",
        type: "Research",
        location: "On-Campus",
        duration: "10 weeks",
        difficulty: "Beginner",
        description: "Join our lab focusing on using Python to analyze genetic sequences. Perfect for CS students interested in biology applications. Work alongside PhD students on real research projects.",
        tags: ["Biology", "Python", "Data Science", "Research"],
        link: "https://example.edu/bio-lab",
        prerequisites: ["Basic Python", "Intro Biology course"],
        leadsTo: ["6", "2"],
        typicalNextSteps: ["Genomics Internship", "Bio-Tech Startup Role"],
        careerArc: "Healthcare Technology",
        collections: ["hidden-gems", "for-undecided"],
        reviews: [
            {
                user: "senior_cs_major",
                rating: 5,
                comment: "Perfect bridge for me—I liked coding but wanted to help people directly."
            }
        ]
    },
    {
        id: "2",
        title: "Google STEP Internship",
        type: "Internship",
        location: "Mountain View, CA",
        duration: "12 weeks",
        difficulty: "Intermediate",
        description: "The Student Training in Engineering Program for first and second-year undergraduates. Work on real Google products with mentorship from experienced engineers.",
        tags: ["Software Engineering", "Tech", "Mentorship", "Paid"],
        link: "https://careers.google.com/step",
        prerequisites: ["1-2 years CS coursework", "Prior project experience"],
        leadsTo: ["9"],
        typicalNextSteps: ["Google SWE Internship", "Tech Company Full-Time"],
        careerArc: "Big Tech Engineering",
        collections: ["high-altitude"],
        reviews: [
            {
                user: "cs_sophomore",
                rating: 5,
                comment: "Changed my perspective on what's possible. The mentorship was incredible."
            }
        ]
    },
    {
        id: "3",
        title: "Semester in Tokyo Tech Exchange",
        type: "Study Abroad",
        location: "Tokyo, Japan",
        duration: "1 semester",
        difficulty: "Intermediate",
        description: "Experience cutting-edge technology education in Japan. Courses in robotics, AI, and human-computer interaction taught in English.",
        tags: ["International", "AI", "Robotics", "Cultural Exchange"],
        link: "https://example.edu/tokyo-exchange",
        prerequisites: ["2.5+ GPA", "Sophomore standing"],
        leadsTo: ["7"],
        typicalNextSteps: ["International Tech Role", "Robotics Research"],
        careerArc: "Global Technology",
        collections: ["for-undecided", "hidden-gems"],
        reviews: [
            {
                user: "engineering_junior",
                rating: 5,
                comment: "Best decision I ever made. Opened my eyes to different approaches to problem-solving."
            }
        ]
    },
    {
        id: "4",
        title: "HackMIT",
        type: "Hackathon",
        location: "Cambridge, MA",
        duration: "36 hours",
        difficulty: "Beginner",
        description: "MIT's largest annual hackathon bringing together 1000+ students to build innovative projects. Great for beginners with mentorship and workshops.",
        tags: ["Hackathon", "Networking", "Innovation", "Beginner-Friendly"],
        link: "https://hackmit.org",
        prerequisites: ["None - beginners welcome!"],
        leadsTo: ["2", "10"],
        typicalNextSteps: ["More Hackathons", "Startup Founding", "Tech Internship"],
        careerArc: "Entrepreneurship",
        collections: ["quick-wins", "for-undecided"],
        reviews: [
            {
                user: "freshman_cs",
                rating: 4,
                comment: "Intense but rewarding. Made lifelong friends and got my first internship from a sponsor."
            }
        ]
    },
    {
        id: "5",
        title: "ACM Programming Competition",
        type: "Competition",
        location: "Regional",
        duration: "1 day",
        difficulty: "Advanced",
        description: "Put your algorithmic skills to the test in one of the most prestigious collegiate programming competitions. Team-based problem solving under time pressure.",
        tags: ["Algorithms", "Competitive Programming", "Teamwork"],
        link: "https://icpc.global",
        prerequisites: ["Data Structures course", "Algorithm practice"],
        leadsTo: ["2", "9"],
        typicalNextSteps: ["Quant Finance", "FAANG Engineering"],
        careerArc: "Elite Software Engineering",
        collections: ["high-altitude"],
        reviews: [
            {
                user: "icpc_veteran",
                rating: 5,
                comment: "The best preparation for technical interviews I ever did."
            }
        ]
    },
    {
        id: "6",
        title: "NSF REU in Climate Data Science",
        type: "Research",
        location: "Boulder, CO",
        duration: "10 weeks (Summer)",
        difficulty: "Intermediate",
        description: "Paid summer research experience analyzing climate data using machine learning. Housing and stipend provided. Great for students interested in environmental impact.",
        tags: ["Climate", "Machine Learning", "Research", "Paid", "Summer"],
        link: "https://www.nsf.gov/reu",
        prerequisites: ["Statistics course", "Python or R experience"],
        leadsTo: ["1"],
        typicalNextSteps: ["PhD Program", "Climate Tech Startup"],
        careerArc: "Environmental Technology",
        collections: ["hidden-gems"],
        reviews: [
            {
                user: "env_sci_major",
                rating: 5,
                comment: "Finally found a way to combine my tech skills with my passion for the environment."
            }
        ]
    },
    {
        id: "7",
        title: "Grace Hopper Celebration",
        type: "Conference",
        location: "Orlando, FL",
        duration: "3 days",
        difficulty: "Beginner",
        description: "The world's largest gathering of women in computing. Amazing networking, career fair with top companies, and inspiring talks.",
        tags: ["Networking", "Women in Tech", "Career Fair", "Mentorship"],
        link: "https://ghc.anitab.org",
        prerequisites: ["None"],
        leadsTo: ["2", "9"],
        typicalNextSteps: ["Industry Internship", "Tech Leadership"],
        careerArc: "Tech Industry",
        collections: ["quick-wins"],
        reviews: [
            {
                user: "first_gen_student",
                rating: 5,
                comment: "Got three interviews on the spot. The energy was incredible."
            }
        ]
    },
    {
        id: "8",
        title: "Code for America Brigade",
        type: "Volunteer",
        location: "Your City",
        duration: "Ongoing",
        difficulty: "Beginner",
        description: "Join your local civic tech brigade to build technology that helps your community. Low-commitment, flexible, and meaningful work.",
        tags: ["Civic Tech", "Volunteer", "Community", "Web Development"],
        link: "https://brigade.codeforamerica.org",
        prerequisites: ["Basic coding skills"],
        leadsTo: ["6", "10"],
        typicalNextSteps: ["Nonprofit Tech Role", "Government Tech"],
        careerArc: "Civic Technology",
        collections: ["quick-wins", "for-undecided"],
        reviews: [
            {
                user: "civic_hacker",
                rating: 4,
                comment: "Perfect way to build portfolio while actually helping people."
            }
        ]
    },
    {
        id: "9",
        title: "Jane Street Trading Internship",
        type: "Internship",
        location: "New York, NY",
        duration: "10 weeks",
        difficulty: "Advanced",
        description: "One of the most selective and well-paid internships in tech. Work on trading systems, learn functional programming, and solve complex problems.",
        tags: ["Quant Finance", "Trading", "Functional Programming", "Highly Competitive"],
        link: "https://www.janestreet.com/join-jane-street/internships/",
        prerequisites: ["Strong algorithms background", "Math/Stats coursework"],
        leadsTo: [],
        typicalNextSteps: ["Quant Trader", "Hedge Fund"],
        careerArc: "Quantitative Finance",
        collections: ["high-altitude"],
        reviews: [
            {
                user: "quant_intern",
                rating: 5,
                comment: "Hardest interview process but learned more in 10 weeks than a full year of school."
            }
        ]
    },
    {
        id: "10",
        title: "Open Source Contributor Program",
        type: "Program",
        location: "Remote",
        duration: "3 months",
        difficulty: "Beginner",
        description: "Get mentored while contributing to real open source projects. Build a public portfolio, learn industry practices, and connect with tech leaders.",
        tags: ["Open Source", "Remote", "Portfolio", "Mentorship", "Beginner-Friendly"],
        link: "https://github.com/open-source-programs",
        prerequisites: ["Git basics", "Any programming language"],
        leadsTo: ["2", "4"],
        typicalNextSteps: ["Tech Internship", "Open Source Maintainer"],
        careerArc: "Software Engineering",
        collections: ["quick-wins", "for-undecided"],
        reviews: [
            {
                user: "oss_newbie",
                rating: 5,
                comment: "My GitHub contributions from this program got me multiple interview callbacks."
            }
        ]
    }
];

async function seedDatabase() {
    try {
        console.log("Connecting to MongoDB...");
        await client.connect();

        const db = client.db("trailhead");
        const collection = db.collection("opportunities");

        // Clear existing data
        console.log("Clearing existing opportunities...");
        await collection.deleteMany({});

        // Insert all opportunities
        console.log("Inserting opportunities...");
        const result = await collection.insertMany(opportunities);

        console.log(`✅ Successfully inserted ${result.insertedCount} opportunities!`);
        console.log("\nOpportunities added:");
        opportunities.forEach(opp => {
            console.log(`  - ${opp.id}: ${opp.title}`);
        });

    } catch (error) {
        console.error("❌ Error seeding database:", error);
    } finally {
        await client.close();
        console.log("\nDatabase connection closed.");
    }
}

// Run the seed
seedDatabase();
