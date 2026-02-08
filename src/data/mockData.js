// Mock data for Opportunity Atlas demo
// Will be replaced with MongoDB Atlas + Gemini API

export const opportunities = [
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
        // Path context - the "stepping stones"
        prerequisites: ["Basic Python", "Intro Biology course"],
        leadsTo: ["6", "2"], // IDs of opportunities this leads to
        typicalNextSteps: ["Genomics Internship", "Bio-Tech Startup Role"],
        careerArc: "Healthcare Technology",
        // Collections this belongs to
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
        title: "Grace Hopper Celebration",
        type: "Conference",
        location: "Orlando, FL",
        duration: "3 days",
        difficulty: "Beginner",
        description: "The world's largest gathering of women and non-binary technologists. Career fair, workshops, and keynotes from industry leaders.",
        tags: ["Women in Tech", "Networking", "Career Fair", "Conference"],
        link: "https://ghc.anitab.org",
        prerequisites: ["None - all levels welcome"],
        leadsTo: ["2", "9"],
        typicalNextSteps: ["Tech Interview", "Mentorship Program", "Leadership Role"],
        careerArc: "Tech Leadership",
        collections: ["quick-wins", "hidden-gems"],
        reviews: [
            {
                user: "swe_intern",
                rating: 5,
                comment: "Got interviews with 5 companies. The resume workshops were incredibly helpful."
            }
        ]
    },
    {
        id: "6",
        title: "NSF REU in Climate Data Science",
        type: "Research",
        location: "Boulder, CO",
        duration: "10 weeks",
        difficulty: "Intermediate",
        description: "Research Experience for Undergraduates focusing on applying machine learning to climate science. Fully funded with housing stipend.",
        tags: ["Climate", "Machine Learning", "Funded", "Research"],
        link: "https://example.edu/climate-reu",
        prerequisites: ["Stats course", "Python/R experience", "Prior research helps"],
        leadsTo: ["9"],
        typicalNextSteps: ["PhD Program", "Environmental Tech Company"],
        careerArc: "Climate Technology",
        collections: ["hidden-gems"],
        reviews: [
            {
                user: "enviro_engineer",
                rating: 5,
                comment: "Finally found a way to combine my CS skills with my passion for the environment."
            }
        ]
    },
    {
        id: "7",
        title: "Creative Coding Residency",
        type: "Fellowship",
        location: "Brooklyn, NY",
        duration: "3 months",
        difficulty: "Advanced",
        description: "Artist residency for coders creating generative art and interactive installations. Stipend provided. Bridges art and technology.",
        tags: ["Generative Art", "Creative Tech", "Stipend", "Artist Residency"],
        link: "https://example.org/creative-residency",
        prerequisites: ["Strong portfolio", "Creative coding experience"],
        leadsTo: [],
        typicalNextSteps: ["Design Studio", "Museum Tech", "Creative Director"],
        careerArc: "Creative Technology",
        collections: ["hidden-gems", "for-undecided"],
        reviews: [
            {
                user: "cs_artist",
                rating: 5,
                comment: "Opened doors I didn't know existed. Now I create interactive exhibits at a museum."
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
        description: "Join your local civic tech brigade to build technology that serves your community. Flexible commitment and meaningful impact.",
        tags: ["Civic Tech", "Volunteer", "Community", "Flexible"],
        link: "https://brigade.codeforamerica.org",
        prerequisites: ["None - all skill levels"],
        leadsTo: ["10"],
        typicalNextSteps: ["Government Tech", "Non-Profit Tech", "Social Impact"],
        careerArc: "Public Interest Technology",
        collections: ["quick-wins", "for-undecided"],
        reviews: [
            {
                user: "grad_student",
                rating: 4,
                comment: "Low pressure way to build real projects while helping my community."
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
        description: "Work at a leading quantitative trading firm. Solve complex problems at the intersection of technology, mathematics, and finance.",
        tags: ["Quantitative Finance", "Algorithms", "High-Paying", "Competitive"],
        link: "https://janestreet.com/join-jane-street",
        prerequisites: ["Strong math background", "Competitive programming experience"],
        leadsTo: [],
        typicalNextSteps: ["Quant Trader", "Hedge Fund", "FinTech Startup"],
        careerArc: "Quantitative Finance",
        collections: ["high-altitude"],
        reviews: [
            {
                user: "math_major",
                rating: 5,
                comment: "The problems are fascinating and the culture is incredibly collaborative."
            }
        ]
    },
    {
        id: "10",
        title: "Open Source Contributor Program",
        type: "Program",
        location: "Remote",
        duration: "Flexible",
        difficulty: "Beginner",
        description: "Get mentored while contributing to major open source projects. Learn git, code review, and how to collaborate with global teams.",
        tags: ["Open Source", "Git", "Remote", "Portfolio Building"],
        link: "https://opensource.guide",
        prerequisites: ["Basic programming in any language"],
        leadsTo: ["2", "4"],
        typicalNextSteps: ["Senior Dev Role", "Open Source Maintainer", "Developer Advocate"],
        careerArc: "Open Source Development",
        collections: ["quick-wins", "for-undecided"],
        reviews: [
            {
                user: "self_taught_dev",
                rating: 5,
                comment: "How I got my first real code on my resume without any formal internship."
            }
        ]
    }
];

// Curated collections with metadata
export const collections = {
    "for-undecided": {
        id: "for-undecided",
        title: "For the Undecided",
        description: "Not sure what you want? These diverse, low-commitment options let you explore without locking in.",
        icon: "🧭"
    },
    "hidden-gems": {
        id: "hidden-gems",
        title: "Hidden Gems",
        description: "Niche opportunities you won't find on LinkedIn. The paths less traveled.",
        icon: "💎"
    },
    "quick-wins": {
        id: "quick-wins",
        title: "Quick Wins",
        description: "Things you can do this week. Low barrier, high impact first steps.",
        icon: "⚡"
    },
    "high-altitude": {
        id: "high-altitude",
        title: "High Altitude",
        description: "Competitive, high-reward opportunities for those ready to push their limits.",
        icon: "🏔️"
    }
};

export const getOpportunityById = (id) => {
    return opportunities.find(opp => opp.id === id);
};

export const getOpportunitiesByType = (type) => {
    return opportunities.filter(opp => opp.type === type);
};

export const getOpportunitiesByCollection = (collectionId) => {
    return opportunities.filter(opp => opp.collections?.includes(collectionId));
};

export const getRelatedOpportunities = (ids) => {
    return opportunities.filter(opp => ids.includes(opp.id));
};

export const getTypeBadgeColor = (type) => {
    const colors = {
        'Research': 'badge-blue',
        'Internship': 'badge-accent',
        'Study Abroad': 'badge-purple',
        'Hackathon': 'badge-accent',
        'Conference': 'badge-purple',
        'Fellowship': 'badge-blue',
        'Volunteer': 'badge-green',
        'Program': 'badge-green'
    };
    return colors[type] || 'badge-default';
};

export const getDifficultyColor = (difficulty) => {
    const colors = {
        'Beginner': 'badge-green',
        'Intermediate': 'badge-accent',
        'Advanced': 'badge-purple'
    };
    return colors[difficulty] || 'badge-default';
};

// =============================================================================
// PATH GENERATION - MOCK DATA
// TODO: Replace generatePathForUser() with Gemini API call
// =============================================================================

/**
 * Mock path narratives - these simulate what Gemini would generate.
 * 
 * TO TEST DIFFERENT PATHS, type these keywords in the landing page:
 * - "google" or "software engineer" → Tech path
 * - "environment" or "meaning" → Purpose-driven path  
 * - "trading" or "quant" → Finance path
 * - "don't know" or "unsure" → Explorer path (default)
 */
const pathNarratives = {
    techAmbitious: {
        goal: "Senior Software Engineer",
        keywords: ['google', 'tech', 'software', 'engineer', 'coding', 'programming', 'developer', 'swe', 'faang', 'internship'],
        steps: [
            { id: "10", timing: "Start Here", title: "Open Source Contributor Program", why: "Build real-world experience and a public portfolio before applying to competitive internships." },
            { id: "4", timing: "Build Momentum", title: "HackMIT", why: "Network with recruiters and prove you can ship under pressure. Great resume booster." },
            { id: "2", timing: "Your Summit", title: "Google STEP Internship", why: "The launchpad to a full-time offer at a top tech company." }
        ]
    },
    purposeDriven: {
        goal: "Impact-Driven Tech Career",
        keywords: ['meaning', 'help', 'impact', 'environment', 'climate', 'people', 'community', 'nonprofit', 'social', 'purpose', 'world'],
        steps: [
            { id: "8", timing: "Start Here", title: "Code for America Brigade", why: "Low commitment way to build skills while directly helping your community." },
            { id: "6", timing: "Go Deeper", title: "NSF REU in Climate Data Science", why: "Combine technical skills with environmental impact. Paid research experience." },
            { id: "1", timing: "Your Summit", title: "Bio-Computing Research Lab", why: "Apply tech to meaningful problems in healthcare and biology." }
        ]
    },
    explorer: {
        goal: "Discover Your Direction",
        keywords: ['unsure', "don't know", 'not sure', 'explore', 'lost', 'confused', 'undecided', 'idk', 'no idea', 'figure out', 'options'],
        steps: [
            { id: "4", timing: "Try This First", title: "HackMIT", why: "Low commitment, high exposure—see what excites you when you actually build something." },
            { id: "3", timing: "Expand Your Horizons", title: "Semester in Tokyo Tech Exchange", why: "Sometimes you need a change of scenery to find clarity. Plus, it looks great on a resume." },
            { id: "7", timing: "Follow Your Curiosity", title: "Creative Coding Residency", why: "If nothing traditional clicks, maybe the unconventional path is yours." }
        ]
    },
    quantFinance: {
        goal: "Quantitative Finance",
        keywords: ['finance', 'trading', 'quant', 'math', 'money', 'wall street', 'hedge fund', 'investment', 'stocks'],
        steps: [
            { id: "4", timing: "Start Here", title: "HackMIT", why: "Competitive programming experience and proof you can solve hard problems fast." },
            { id: "5", timing: "Build Your Network", title: "Grace Hopper Celebration", why: "Top finance firms recruit heavily here. Get your foot in the door." },
            { id: "9", timing: "Your Summit", title: "Jane Street Trading Internship", why: "The holy grail of quant internships. This opens every door in finance." }
        ]
    }
};

/**
 * Generates a personalized path based on user input.
 * TODO: Replace this entire function with a Gemini API call.
 */
export function generatePathForUser(userQuery) {
    const query = userQuery.toLowerCase();

    // Find matching narrative by keywords
    let matchedKey = 'explorer'; // default
    for (const [key, narrative] of Object.entries(pathNarratives)) {
        if (narrative.keywords.some(keyword => query.includes(keyword))) {
            matchedKey = key;
            break;
        }
    }

    const narrative = pathNarratives[matchedKey];

    // Enrich steps with full opportunity data
    const enrichedSteps = narrative.steps.map(step => {
        const opp = getOpportunityById(step.id);
        return {
            ...step,
            title: opp?.title || step.title,
            type: opp ? `${opp.type} • ${opp.location} • ${opp.duration}` : ''
        };
    });

    return { goal: narrative.goal, steps: enrichedSteps };
}

/**
 * Gets recommended opportunities excluding certain IDs.
 * TODO: Replace with MongoDB vector search.
 */
export function getRecommendedOpportunities(excludeIds = [], limit = 6) {
    return opportunities.filter(opp => !excludeIds.includes(opp.id)).slice(0, limit);
}
