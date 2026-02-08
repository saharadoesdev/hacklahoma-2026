// Mock data for Opportunity Atlas demo
// Covers different types: Research, Internships, Study Abroad, Hackathons, Diversity Programs

export const opportunities = [
    {
        id: "1",
        title: "Bio-Computing Research Lab",
        type: "Research",
        location: "On-Campus / Remote",
        duration: "10 weeks",
        difficulty: "Beginner",
        description: "Join our lab focusing on using Python to analyze genetic sequences. Perfect for CS students interested in biology applications. You'll work alongside PhD students on real research projects that combine computational methods with biological data analysis.",
        tags: ["Biology", "Python", "Data Science", "Research"],
        link: "https://example.edu/bio-lab",
        typicalNextSteps: ["Genomics Internship", "Bio-Tech Startup Role"],
        careerArc: "Healthcare Technology",
        reviews: [
            {
                user: "Senior_CS_Major",
                rating: 5,
                comment: "This was the perfect bridge for me because I liked coding but wanted to help people directly."
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
        description: "The Student Training in Engineering Program (STEP) is an internship for first and second-year undergraduate students. Work on real Google products with mentorship from experienced engineers.",
        tags: ["Software Engineering", "Tech", "Mentorship", "Paid"],
        link: "https://careers.google.com/step",
        typicalNextSteps: ["Google SWE Internship", "Tech Company Full-Time"],
        careerArc: "Big Tech Engineering",
        reviews: [
            {
                user: "CS_Sophomore",
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
        description: "Experience cutting-edge technology education in Japan while immersing yourself in the culture. Courses in robotics, AI, and human-computer interaction taught in English.",
        tags: ["International", "AI", "Robotics", "Cultural Exchange"],
        link: "https://example.edu/tokyo-exchange",
        typicalNextSteps: ["International Tech Role", "Robotics Research"],
        careerArc: "Global Technology",
        reviews: [
            {
                user: "Engineering_Junior",
                rating: 5,
                comment: "The best decision I ever made. Opened my eyes to different approaches to problem-solving."
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
        description: "MIT's largest annual hackathon bringing together 1000+ students to build innovative projects. Great for beginners with mentorship available and workshops throughout the event.",
        tags: ["Hackathon", "Networking", "Innovation", "Beginner-Friendly"],
        link: "https://hackmit.org",
        typicalNextSteps: ["More Hackathons", "Startup Founding", "Tech Internship"],
        careerArc: "Entrepreneurship",
        reviews: [
            {
                user: "Freshman_CS",
                rating: 4,
                comment: "Intense but rewarding. Made lifelong friends and got my first tech internship from a sponsor."
            }
        ]
    },
    {
        id: "5",
        title: "Grace Hopper Celebration",
        type: "Diversity Program",
        location: "Orlando, FL / Virtual",
        duration: "3 days",
        difficulty: "Beginner",
        description: "The world's largest gathering of women and non-binary technologists. Career fair, workshops, keynotes from industry leaders, and incredible networking opportunities.",
        tags: ["Women in Tech", "Networking", "Career Fair", "Conference"],
        link: "https://ghc.anitab.org",
        typicalNextSteps: ["Tech Interview", "Mentorship Program", "Leadership Role"],
        careerArc: "Tech Leadership",
        reviews: [
            {
                user: "SWE_Intern",
                rating: 5,
                comment: "Got interviews with 5 companies! The resume workshops were incredibly helpful."
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
        description: "Research Experience for Undergraduates focusing on applying machine learning to climate science. Fully funded with housing stipend. Perfect for students interested in environmental tech.",
        tags: ["Climate", "Machine Learning", "Funded", "Research"],
        link: "https://example.edu/climate-reu",
        typicalNextSteps: ["PhD Program", "Environmental Tech Company", "Policy Role"],
        careerArc: "Climate Technology",
        reviews: [
            {
                user: "Enviro_Engineer",
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
        description: "An artist residency for coders who create generative art, interactive installations, and creative technology. Stipend provided. Perfect for those who want to bridge art and technology.",
        tags: ["Generative Art", "Creative Tech", "Stipend", "Artist Residency"],
        link: "https://example.org/creative-residency",
        typicalNextSteps: ["Design Studio", "Museum Tech", "Creative Director"],
        careerArc: "Creative Technology",
        reviews: [
            {
                user: "CS_Artist",
                rating: 5,
                comment: "This opened doors I didn't even know existed. Now I work at a museum creating interactive exhibits."
            }
        ]
    },
    {
        id: "8",
        title: "Local Code for America Brigade",
        type: "Volunteer",
        location: "Your City",
        duration: "Ongoing",
        difficulty: "Beginner",
        description: "Join your local civic tech brigade to build technology that serves your community. Great for beginners, flexible commitment, and meaningful impact on local government services.",
        tags: ["Civic Tech", "Volunteer", "Community", "Flexible"],
        link: "https://brigade.codeforamerica.org",
        typicalNextSteps: ["Government Tech", "Non-Profit Tech", "Social Impact Startup"],
        careerArc: "Public Interest Technology",
        reviews: [
            {
                user: "Grad_Student",
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
        description: "Work at one of the world's leading quantitative trading firms. Solve complex problems at the intersection of technology, mathematics, and finance. Highly competitive.",
        tags: ["Quantitative Finance", "Algorithms", "High-Paying", "Competitive"],
        link: "https://janestreet.com/join-jane-street",
        typicalNextSteps: ["Quant Trader", "Hedge Fund", "FinTech Startup"],
        careerArc: "Quantitative Finance",
        reviews: [
            {
                user: "Math_Major",
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
        description: "Get mentored while contributing to major open source projects. Learn git, code review practices, and how to collaborate with global teams. Great for building your portfolio.",
        tags: ["Open Source", "Git", "Remote", "Portfolio Building"],
        link: "https://opensource.guide",
        typicalNextSteps: ["Senior Dev Role", "Open Source Maintainer", "Developer Advocate"],
        careerArc: "Open Source Development",
        reviews: [
            {
                user: "Self_Taught_Dev",
                rating: 5,
                comment: "This is how I got my first real code on my resume without any formal internship."
            }
        ]
    }
];

// Helper function to get opportunity by ID
export const getOpportunityById = (id) => {
    return opportunities.find(opp => opp.id === id);
};

// Helper function to get opportunities by type
export const getOpportunitiesByType = (type) => {
    return opportunities.filter(opp => opp.type === type);
};

// Helper to get badge color based on type
export const getTypeBadgeColor = (type) => {
    const colors = {
        'Research': 'badge-blue',
        'Internship': 'badge-gold',
        'Study Abroad': 'badge-purple',
        'Hackathon': 'badge-gold',
        'Diversity Program': 'badge-purple',
        'Fellowship': 'badge-blue',
        'Volunteer': 'badge-green',
        'Program': 'badge-green'
    };
    return colors[type] || 'badge-gold';
};

// Helper to get difficulty color
export const getDifficultyColor = (difficulty) => {
    const colors = {
        'Beginner': 'badge-green',
        'Intermediate': 'badge-gold',
        'Advanced': 'badge-purple'
    };
    return colors[difficulty] || 'badge-gold';
};
