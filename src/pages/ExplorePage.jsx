import { useState } from 'react';
import { opportunities } from '../data/mockData';
import OpportunityCard from '../components/OpportunityCard';
import './ExplorePage.css';

function ExplorePage() {
    const [activeFilter, setActiveFilter] = useState('All');

    const types = ['All', 'Research', 'Internship', 'Study Abroad', 'Hackathon', 'Fellowship', 'Volunteer'];

    const filteredOpportunities = activeFilter === 'All'
        ? opportunities
        : opportunities.filter(opp => opp.type === activeFilter);

    return (
        <div className="explore page-content">
            <header className="explore-header">
                <h1 className="explore-title">Explore opportunities</h1>
                <p className="explore-subtitle">
                    Browse programs, internships, and experiences to find your next step.
                </p>
            </header>

            <div className="explore-filters">
                <div className="filter-bar">
                    {types.map((type) => (
                        <button
                            key={type}
                            className={`filter-btn ${activeFilter === type ? 'active' : ''}`}
                            onClick={() => setActiveFilter(type)}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>

            <div className="explore-grid">
                {filteredOpportunities.length > 0 ? (
                    filteredOpportunities.map((opportunity) => (
                        <OpportunityCard key={opportunity.id} opportunity={opportunity} />
                    ))
                ) : (
                    <div className="explore-empty">
                        <p>No opportunities found for this filter.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ExplorePage;
