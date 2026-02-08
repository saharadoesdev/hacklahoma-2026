import { useParams, useNavigate } from 'react-router-dom';
import { getOpportunityById, getTypeBadgeColor, getDifficultyColor } from '../data/mockData';
import './OpportunityPage.css';

function OpportunityPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const opportunity = getOpportunityById(id);

    if (!opportunity) {
        return (
            <div className="opportunity-page page-content">
                <div className="opportunity-container">
                    <h1>Opportunity not found</h1>
                    <button className="btn btn-secondary" onClick={() => navigate('/explore')}>
                        Back to Explore
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="opportunity-page page-content">
            <div className="opportunity-container">
                {/* Back Button */}
                <button className="opportunity-back" onClick={() => navigate(-1)}>
                    ← Back to Opportunities
                </button>

                {/* Header */}
                <header className="opportunity-header">
                    <div className="opportunity-badges">
                        <span className={`badge ${getTypeBadgeColor(opportunity.type)}`}>
                            {opportunity.type}
                        </span>
                        <span className={`badge ${getDifficultyColor(opportunity.difficulty)}`}>
                            {opportunity.difficulty}
                        </span>
                    </div>

                    <h1 className="opportunity-title">{opportunity.title}</h1>

                    <div className="opportunity-meta">
                        <span className="opportunity-meta-item">
                            <span className="opportunity-meta-icon">📍</span>
                            {opportunity.location}
                        </span>
                        <span className="opportunity-meta-item">
                            <span className="opportunity-meta-icon">⏱️</span>
                            {opportunity.duration}
                        </span>
                        <span className="opportunity-meta-item">
                            <span className="opportunity-meta-icon">🎯</span>
                            {opportunity.careerArc}
                        </span>
                    </div>
                </header>

                {/* Description */}
                <section className="opportunity-section">
                    <h2 className="opportunity-section-title">About This Opportunity</h2>
                    <p className="opportunity-description">{opportunity.description}</p>
                </section>

                {/* Tags */}
                <section className="opportunity-section">
                    <h2 className="opportunity-section-title">Skills & Interests</h2>
                    <div className="opportunity-tags">
                        {opportunity.tags.map((tag, index) => (
                            <span key={index} className="opportunity-tag">{tag}</span>
                        ))}
                    </div>
                </section>

                {/* Path Context */}
                <section className="opportunity-section">
                    <div className="card path-context">
                        <h3 className="path-context-title">
                            <span>🗺️</span>
                            Where This Path Leads
                        </h3>
                        <div className="path-steps">
                            {opportunity.typicalNextSteps.map((step, index) => (
                                <div key={index} className="path-step">
                                    <span className="path-step-icon">
                                        {index === 0 ? '🏃' : index === 1 ? '🧗' : '⛰️'}
                                    </span>
                                    <span className="path-step-text">{step}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Reviews */}
                {opportunity.reviews && opportunity.reviews.length > 0 && (
                    <section className="opportunity-section">
                        <h2 className="opportunity-section-title">The Beta (What Climbers Say)</h2>
                        {opportunity.reviews.map((review, index) => (
                            <div key={index} className="card review-card">
                                <div className="review-header">
                                    <span className="review-user">@{review.user}</span>
                                    <span className="review-rating">
                                        {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                                    </span>
                                </div>
                                <p className="review-comment">"{review.comment}"</p>
                            </div>
                        ))}
                    </section>
                )}

                {/* CTA */}
                <div className="opportunity-cta">
                    <a
                        href={opportunity.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-large"
                    >
                        Apply Now →
                    </a>
                    <button className="btn btn-outline btn-large">
                        📌 Save to My Path
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OpportunityPage;
