import { useParams, useNavigate } from 'react-router-dom';
import { getOpportunityById, getTypeBadgeColor, getDifficultyColor } from '../data/mockData';
import './OpportunityPage.css';

function OpportunityPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const opportunity = getOpportunityById(id);

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

                <section className="opp-section">
                    <div className="card path-card">
                        <h3 className="path-title">Where this leads</h3>
                        <div className="path-steps">
                            {opportunity.typicalNextSteps.map((step, index) => (
                                <div key={index} className="path-step">
                                    <span className="path-step-num">{index + 1}</span>
                                    <span>{step}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {opportunity.reviews && opportunity.reviews.length > 0 && (
                    <section className="opp-section">
                        <h2 className="opp-section-title">What others say</h2>
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
                        Apply now
                    </a>
                    <button className="btn btn-secondary btn-large">
                        Save to path
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OpportunityPage;
