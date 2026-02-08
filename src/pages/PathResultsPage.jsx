import { useLocation, useNavigate, Link } from 'react-router-dom';
import { generatePathForUser, getRecommendedOpportunities } from '../data/mockData';
import OpportunityCard from '../components/OpportunityCard';
import './PathResultsPage.css';

function PathResultsPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const userQuery = location.state?.query || "your interests and goals";

    // Generate personalized path using mock service
    // TODO: This will become an API call to Gemini
    const pathResult = generatePathForUser(userQuery);

    // Get IDs used in the path
    const pathIds = pathResult.steps.map(s => s.id);

    // Get additional opportunities not in the path (for "Keep Exploring")
    const additionalOpportunities = getRecommendedOpportunities(pathIds, 6);

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
                        <p className="summit-goal">{pathResult.goal}</p>
                    </div>

                    {/* Steps - reversed so step 3 (goal) is at top */}
                    <div className="climb-steps">
                        {[...pathResult.steps].reverse().map((step, index) => (
                            <div
                                key={step.id}
                                className="climb-step card"
                                data-step={pathResult.steps.length - index}
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

                {/* Primary CTA */}
                <div className="path-actions">
                    <button className="btn btn-primary btn-lg">
                        Start My Climb
                    </button>
                </div>
            </div>

            {/* Keep Exploring Section */}
            <section className="keep-exploring">
                <div className="keep-exploring-container">
                    <div className="keep-exploring-header">
                        <h2 className="keep-exploring-title">Keep Exploring</h2>
                        <p className="keep-exploring-subtitle">
                            Other opportunities that match your interests
                        </p>
                    </div>

                    <div className="keep-exploring-grid">
                        {additionalOpportunities.map((opportunity) => (
                            <OpportunityCard key={opportunity.id} opportunity={opportunity} />
                        ))}
                    </div>

                    <div className="keep-exploring-actions">
                        <Link to="/explore" className="btn btn-secondary">
                            Browse All Opportunities
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PathResultsPage;
