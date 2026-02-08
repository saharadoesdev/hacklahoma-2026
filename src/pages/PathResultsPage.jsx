import { useLocation, useNavigate, Link } from 'react-router-dom';
import './PathResultsPage.css';

// Mock path results - will be replaced with AI-generated results
const mockPathResult = {
    goal: "Bio-Tech Research Lead",
    steps: [
        {
            id: "1",
            timing: "Start Here",
            title: "Bio-Computing Research Lab",
            type: "Research • On-Campus • 10 weeks",
            why: "Perfect starting point - combines your CS skills with biology interest, no prior research experience needed."
        },
        {
            id: "2",
            timing: "Next Step",
            title: "Computational Biology REU",
            type: "Research • Summer Program • Paid",
            why: "Builds on your lab experience with formal research training and connects you to the academic bio-tech community."
        },
        {
            id: "6",
            timing: "Your Summit",
            title: "Health Tech Solutions Internship",
            type: "Internship • San Francisco • 12 weeks",
            why: "The 'new height' - applies everything you've learned to real-world health technology at a leading company."
        }
    ]
};

function PathResultsPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const userQuery = location.state?.query || "your interests and goals";

    // Truncate the user query for display
    const truncatedQuery = userQuery.length > 100
        ? userQuery.substring(0, 100) + "..."
        : userQuery;

    const handleStepClick = (stepId) => {
        navigate(`/opportunity/${stepId}`);
    };

    return (
        <div className="path-page">
            <div className="path-container">
                {/* Header */}
                <header className="path-header animate-in">
                    <p className="path-label">YOUR PERSONALIZED PATH</p>
                    <h1 className="path-title">Here's How to Reach Your Summit</h1>
                    <p className="path-subtitle">
                        Based on what you shared, we've mapped out a path to help you climb toward your goals.
                    </p>
                </header>

                {/* The Climb Visualization */}
                <div className="the-climb">
                    {/* Summit */}
                    <div className="summit">
                        <span className="summit-icon">🏔️</span>
                        <p className="summit-label">THE SUMMIT</p>
                        <p className="summit-goal">{mockPathResult.goal}</p>
                    </div>

                    {/* Steps - reversed so step 3 (goal) is at top */}
                    <div className="climb-steps">
                        {[...mockPathResult.steps].reverse().map((step, index) => (
                            <div
                                key={step.id}
                                className="climb-step card"
                                data-step={mockPathResult.steps.length - index}
                                onClick={() => handleStepClick(step.id)}
                            >
                                <div className="step-header">
                                    <div>
                                        <p className="step-timing">{step.timing}</p>
                                        <h3 className="step-title">{step.title}</h3>
                                        <p className="step-type">{step.type}</p>
                                    </div>
                                </div>
                                <div className="step-why">
                                    <p className="step-why-label">WHY THIS STEP</p>
                                    <p className="step-why-text">"{step.why}"</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Base Camp */}
                    <div className="base-camp">
                        <span className="base-camp-icon">⛺</span>
                        <p className="base-camp-label">BASE CAMP</p>
                        <p className="base-camp-text">"{truncatedQuery}"</p>
                    </div>
                </div>

                {/* Actions */}
                <div className="path-actions">
                    <button className="btn btn-primary btn-lg">
                        Start My Climb
                    </button>
                    <p className="path-browse">
                        or <Link to="/explore">browse all opportunities</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PathResultsPage;
