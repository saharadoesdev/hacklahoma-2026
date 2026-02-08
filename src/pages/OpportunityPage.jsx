import { useParams, useNavigate, Link } from 'react-router-dom';
import { getOpportunityById, getRelatedOpportunities, getTypeBadgeColor, getDifficultyColor } from '../data/mockData';
import './OpportunityPage.css';

function OpportunityPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const opportunity = getOpportunityById(id);

    // Get related opportunities (what this leads to)
    const leadsToOpportunities = opportunity?.leadsTo
        ? getRelatedOpportunities(opportunity.leadsTo)
        : [];

    if (!opportunity) {
        return (
            <div className="opp-page page-content">
                <div className="opp-container">
                    <h1>Opportunity not found</h1>
                    <button className="btn btn-secondary" onClick={() => navigate('/explore')}>
                        Back to Explore
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="opp-page page-content">
            <div className="opp-container">
                <button className="opp-back" onClick={() => navigate(-1)}>
                    ← Back
                </button>

                <header className="opp-header">
                    <div className="opp-badges">
                        <span className={`badge ${getTypeBadgeColor(opportunity.type)}`}>
                            {opportunity.type}
                        </span>
                        <span className={`badge ${getDifficultyColor(opportunity.difficulty)}`}>
                            {opportunity.difficulty}
                        </span>
                    </div>

                    <h1 className="opp-title">{opportunity.title}</h1>

                    <div className="opp-meta">
                        <span>{opportunity.location}</span>
                        <span>{opportunity.duration}</span>
                        <span>{opportunity.careerArc}</span>
                    </div>
                </header>

                <section className="opp-section">
                    <h2 className="opp-section-title">About</h2>
                    <p className="opp-description">{opportunity.description}</p>
                </section>

                <section className="opp-section">
                    <h2 className="opp-section-title">Skills & Topics</h2>
                    <div className="opp-tags">
                        {opportunity.tags.map((tag, index) => (
                            <span key={index} className="opp-tag">{tag}</span>
                        ))}
                    </div>
                </section>

                {/* NEW: Stepping Stones Section */}
                <section className="opp-section stepping-stones">
                    <h2 className="opp-section-title">🪨 Stepping Stones</h2>

                    <div className="stones-grid">
                        {/* Prerequisites (What you need) */}
                        <div className="stone-card prerequisites">
                            <h3 className="stone-title">
                                <span className="stone-icon">←</span>
                                Good Prep for This
                            </h3>
                            <ul className="stone-list">
                                {opportunity.prerequisites?.map((prereq, index) => (
                                    <li key={index}>{prereq}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Destinations (Where this leads) */}
                        <div className="stone-card destinations">
                            <h3 className="stone-title">
                                <span className="stone-icon">→</span>
                                Where This Leads
                            </h3>
                            {leadsToOpportunities.length > 0 ? (
                                <div className="stone-links">
                                    {leadsToOpportunities.map((opp) => (
                                        <Link
                                            key={opp.id}
                                            to={`/opportunity/${opp.id}`}
                                            className="stone-link"
                                        >
                                            <span className="stone-link-title">{opp.title}</span>
                                            <span className="stone-link-type">{opp.type}</span>
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <ul className="stone-list">
                                    {opportunity.typicalNextSteps?.map((step, index) => (
                                        <li key={index}>{step}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </section>

                {opportunity.reviews && opportunity.reviews.length > 0 && (
                    <section className="opp-section">
                        <h2 className="opp-section-title">What Others Say</h2>
                        {opportunity.reviews.map((review, index) => (
                            <div key={index} className="card review-card">
                                <div className="review-header">
                                    <span className="review-user">@{review.user}</span>
                                    <span className="review-rating">
                                        {'★'.repeat(review.rating)}
                                    </span>
                                </div>
                                <p className="review-comment">{review.comment}</p>
                            </div>
                        ))}
                    </section>
                )}

                <div className="opp-cta">
                    <a
                        href={opportunity.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-large"
                    >
                        Apply Now
                    </a>
                    <button className="btn btn-secondary btn-large">
                        Save to Path
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OpportunityPage;
