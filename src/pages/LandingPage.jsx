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
        <div className="landing">
            <section className="hero">
                <div className="hero-content animate-in">
                    <div className="hero-badge">
                        <span className="hero-badge-dot"></span>
                        <span>Discover your career path</span>
                    </div>

                    <h1 className="hero-title">
                        Stop searching.<br />
                        <span className="hero-title-accent">Start climbing.</span>
                    </h1>

                    <p className="hero-subtitle">
                        Find research labs, internships, study abroad programs, and more —
                        all matched to your interests and goals.
                    </p>

                    <form className="hero-search" onSubmit={handleSearch}>
                        <div className="search-wrapper">
                            <input
                                type="text"
                                className="search-input"
                                placeholder="I'm a CS major interested in biology..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button type="submit" className="btn btn-primary search-btn">
                                Find opportunities
                            </button>
                        </div>
                    </form>

                    <div className="hero-alt">
                        <span>Not sure where to start?</span>
                        <span className="hero-divider">·</span>
                        <button
                            className="btn btn-ghost"
                            onClick={() => navigate('/explore')}
                        >
                            Browse all opportunities →
                        </button>
                    </div>
                </div>
            </section>

            <section className="features">
                <div className="features-container">
                    <div className="features-header">
                        <h2 className="features-title">How it works</h2>
                        <p className="features-subtitle">
                            We connect you with opportunities that build on each other.
                        </p>
                    </div>

                    <div className="features-grid">
                        <div className="card feature-card">
                            <div className="feature-number">1</div>
                            <h3 className="feature-title">Share your goals</h3>
                            <p className="feature-desc">
                                Tell us what you're interested in, what you've done,
                                and where you want to go.
                            </p>
                        </div>

                        <div className="card feature-card">
                            <div className="feature-number">2</div>
                            <h3 className="feature-title">Get matched</h3>
                            <p className="feature-desc">
                                Our system finds opportunities that fit your path,
                                not just keyword matches.
                            </p>
                        </div>

                        <div className="card feature-card">
                            <div className="feature-number">3</div>
                            <h3 className="feature-title">Build your path</h3>
                            <p className="feature-desc">
                                See how each opportunity connects to the next,
                                building toward your goals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default LandingPage;
