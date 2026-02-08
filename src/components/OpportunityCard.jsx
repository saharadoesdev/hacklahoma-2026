import { useNavigate } from 'react-router-dom';
import { getTypeBadgeColor } from '../data/mockData';
import './OpportunityCard.css';

function OpportunityCard({ opportunity }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/opportunity/${opportunity.id}`);
    };

    return (
        <article className="card opportunity-card" onClick={handleClick}>
            <div className="opportunity-card-header">
                <h3 className="opportunity-card-title">{opportunity.title}</h3>
                <span className={`badge ${getTypeBadgeColor(opportunity.type)}`}>
                    {opportunity.type}
                </span>
            </div>

            <p className="opportunity-card-description">
                {opportunity.description}
            </p>

            <div className="opportunity-card-meta">
                <span className="opportunity-card-meta-item">
                    <span className="opportunity-card-meta-icon">📍</span>
                    {opportunity.location}
                </span>
                <span className="opportunity-card-meta-item">
                    <span className="opportunity-card-meta-icon">⏱️</span>
                    {opportunity.duration}
                </span>
                <span className="opportunity-card-meta-item">
                    <span className="opportunity-card-meta-icon">📊</span>
                    {opportunity.difficulty}
                </span>
            </div>

            <div className="opportunity-card-tags">
                {opportunity.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                ))}
                {opportunity.tags.length > 3 && (
                    <span className="tag">+{opportunity.tags.length - 3}</span>
                )}
            </div>

            <span className="opportunity-card-arrow">→</span>
        </article>
    );
}

export default OpportunityCard;
