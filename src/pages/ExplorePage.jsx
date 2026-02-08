import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { opportunities, collections, getOpportunitiesByCollection } from '../data/mockData';
import OpportunityCard from '../components/OpportunityCard';
import './ExplorePage.css';

function ExplorePage() {
    const [activeCollection, setActiveCollection] = useState(null);
    const [activeFilter, setActiveFilter] = useState('All');

    const collectionList = Object.values(collections);
    const types = ['All', ...new Set(opportunities.map(opp => opp.type))];

    // Filter logic - collection takes priority, then type filter
    const filteredOpportunities = useMemo(() => {
        // If a collection is active, filter by collection
        if (activeCollection) {
            return getOpportunitiesByCollection(activeCollection);
        }
        // Otherwise, apply type filter
        if (activeFilter !== 'All') {
            return opportunities.filter(opp => opp.type === activeFilter);
        }
        return opportunities;
    }, [activeCollection, activeFilter]);

    const handleCollectionClick = (collectionId) => {
        if (activeCollection === collectionId) {
            setActiveCollection(null); // Toggle off
        } else {
            setActiveCollection(collectionId);
            setActiveFilter('All'); // Clear type filter when using collection
        }
    };

    const handleFilterClick = (type) => {
        setActiveFilter(type);
        setActiveCollection(null); // Clear collection when using type filter
    };

    const activeCollectionData = activeCollection ? collections[activeCollection] : null;

    return (
        <div className="explore-page page-content">
            <div className="explore-container">
                {/* Header */}
                <header className="explore-hero">
                    <h1 className="explore-title">Explore</h1>
                    <p className="explore-subtitle">
                        See what's out there. Click around. Something might surprise you.
                    </p>
                    <p className="explore-cta">
                        Want a personalized path? <Link to="/" className="explore-link">Tell us about yourself</Link>
                    </p>
                </header>

                {/* Curated Collections */}
                <section className="collections-section">
                    <h2 className="section-title">Curated Collections</h2>
                    <div className="collections-grid">
                        {collectionList.map((collection) => (
                            <button
                                key={collection.id}
                                className={`collection-card ${activeCollection === collection.id ? 'active' : ''}`}
                                onClick={() => handleCollectionClick(collection.id)}
                            >
                                <span className="collection-icon">{collection.icon}</span>
                                <h3 className="collection-title">{collection.title}</h3>
                                <p className="collection-desc">{collection.description}</p>
                            </button>
                        ))}
                    </div>
                </section>

                {/* Type Filters */}
                <div className="explore-filters">
                    <div className="filter-row">
                        {types.map((type) => (
                            <button
                                key={type}
                                className={`filter-btn ${activeFilter === type && !activeCollection ? 'active' : ''}`}
                                onClick={() => handleFilterClick(type)}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Active Filter Label */}
                {activeCollection && activeCollectionData && (
                    <div className="active-filter-label">
                        <span>
                            {activeCollectionData.icon} Showing: {activeCollectionData.title}
                        </span>
                        <button
                            className="clear-filter"
                            onClick={() => setActiveCollection(null)}
                        >
                            × Clear
                        </button>
                    </div>
                )}

                {/* Results */}
                <section className="explore-results">
                    <p className="results-count">
                        {filteredOpportunities.length} opportunities
                    </p>
                    <div className="explore-grid">
                        {filteredOpportunities.map((opportunity) => (
                            <OpportunityCard key={opportunity.id} opportunity={opportunity} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default ExplorePage;
