import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getOpportunities } from '../services/api';
import { collections, getOpportunitiesByCollection } from '../data/mockData';
import OpportunityCard from '../components/OpportunityCard';
import './ExplorePage.css';

function ExplorePage() {
    const [opportunities, setOpportunities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeCollection, setActiveCollection] = useState(null);
    const [activeFilter, setActiveFilter] = useState('All');

    // Fetch opportunities on mount
    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getOpportunities();
                setOpportunities(data);
            } catch (error) {
                console.error('Failed to load opportunities:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

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
    }, [activeCollection, activeFilter, opportunities]);

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

    if (loading) {
        return (
            <div className="explore-page page-content">
                <div className="explore-container">
                    <div className="explore-loading">Loading opportunities...</div>
                </div>
            </div>
        );
    }

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

                {/* Collections */}
                <section className="explore-collections">
                    <h2 className="section-title">Curated Collections</h2>
                    <div className="collections-grid">
                        {collectionList.map(collection => (
                            <button
                                key={collection.id}
                                className={`collection-card ${activeCollection === collection.id ? 'active' : ''}`}
                                onClick={() => handleCollectionClick(collection.id)}
                            >
                                <h3 className="collection-name">{collection.name}</h3>
                                <p className="collection-desc">{collection.description}</p>
                            </button>
                        ))}
                    </div>
                </section>

                {/* Active Collection Banner */}
                {activeCollectionData && (
                    <div className="active-collection-banner">
                        <span>Showing: <strong>{activeCollectionData.name}</strong></span>
                        <button onClick={() => setActiveCollection(null)}>Clear</button>
                    </div>
                )}

                {/* Filter by Type */}
                <section className="explore-filters">
                    <div className="filter-tabs">
                        {types.map(type => (
                            <button
                                key={type}
                                className={`filter-btn ${activeFilter === type && !activeCollection ? 'active' : ''}`}
                                onClick={() => handleFilterClick(type)}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Opportunities Grid */}
                <section className="explore-grid">
                    {filteredOpportunities.map(opp => (
                        <OpportunityCard key={opp.id} opportunity={opp} />
                    ))}
                </section>
            </div>
        </div>
    );
}

export default ExplorePage;
