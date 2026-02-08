import { useNavigate } from 'react-router-dom';
import { getTypeBadgeColor } from '../data/mockData';
import './OpportunityCard.css';

function OpportunityCard({ opportunity }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/opportunity/${opportunity.id}`);
    };

    return (
        <article className="card opp-card" onClick={handleClick}>
            <div className="opp-card-header">
                <h3 className="opp-card-title">{opportunity.title}</h3>
                <span className={`badge ${getTypeBadgeColor(opportunity.type)}`}>
                    {opportunity.type}
                </span>
            </div>

            <p className="opp-card-desc">
                {opportunity.description}
            </p>

            <div className="opp-card-meta">
                <span className="opp-card-meta-item">
                    {opportunity.location}
                </span>
                <span className="opp-card-meta-item">
                    {opportunity.duration}
                </span>
                <span className="opp-card-meta-item">
                    {opportunity.difficulty}
                </span>
            </div>

            <div className="opp-card-tags">
                {opportunity.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                ))}
                {opportunity.tags.length > 3 && (
                    <span className="tag">+{opportunity.tags.length - 3}</span>
                )}
            </div>
        </article>
    );
}

export default OpportunityCard;
