import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        navigate('/explore', { state: { query: searchQuery } });
    };

    return (
        <div className="landing-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <span className="hero-tagline">🏔️ Your Career Summit Awaits</span>

                    <h1 className="hero-title">
                        Stop Searching.<br />
                        <span className="hero-title-highlight">Start Climbing.</span>
                    </h1>

                    <p className="hero-subtitle">
                        Discover opportunities that match your unique path. Research labs, internships,
                        study abroad, and more — all tailored to help you reach new heights.
                    </p>

                    {/* Search Box */}
                    <form className="hero-search" onSubmit={handleSearch}>
                        <div className="search-container">
                            <span className="search-icon">🔍</span>
                            <input
                                type="text"
                                className="search-input"
                                placeholder="I'm a CS major who loves biology and wants to make an impact..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button type="submit" className="btn btn-primary search-btn">
                                Find My Path
                            </button>
                        </div>
                    </form>

                    <div className="hero-actions">
                        <span className="hero-text">or</span>
                        <button
                            className="btn btn-secondary"
                            onClick={() => navigate('/explore')}
                        >
                            Browse All Opportunities
                        </button>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="scroll-indicator">
                    <span>Discover More</span>
                    <span className="scroll-arrow">↓</span>
                </div>
            </section>

            {/* Features Section */}
            <section className="features">
                <div className="features-container">
                    <h2 className="features-title">How Atlas Works</h2>
                    <p className="features-subtitle">
                        We don't just list opportunities — we build your personalized path to success.
                    </p>

                    <div className="features-grid">
                        <div className="card feature-card">
                            <div className="feature-icon">🎯</div>
                            <h3 className="feature-title">Tell Us Your Vibe</h3>
                            <p className="feature-description">
                                Share your interests, skills, and dreams. Our AI understands what you're really looking for.
                            </p>
                        </div>

                        <div className="card feature-card">
                            <div className="feature-icon">🗺️</div>
                            <h3 className="feature-title">Get Your Path</h3>
                            <p className="feature-description">
                                Receive a personalized roadmap of opportunities that build on each other toward your goals.
                            </p>
                        </div>

                        <div className="card feature-card">
                            <div className="feature-icon">⛰️</div>
                            <h3 className="feature-title">Start Climbing</h3>
                            <p className="feature-description">
                                Track your progress, complete milestones, and watch your career summit come into view.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default LandingPage;
