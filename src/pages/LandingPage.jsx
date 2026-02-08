import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        navigate('/loading', { state: { query: searchQuery } });
    };

    return (
        <div className="landing">
            {/* Hero Section with Search */}
            <section className="hero">
                <div className="hero-content animate-in">
                    <h1 className="hero-title">
                        <span className="title-line">Stop Searching.</span>
                        <span className="title-line">Start Climbing.</span>
                    </h1>
                    <p className="hero-description">
                        Whether you know exactly what you want or you're still figuring it out, tell us
                        what's on your mind and we'll show you paths worth exploring.
                    </p>

                    {/* The main search box */}
                    <form className="hero-search" onSubmit={handleSearch}>
                        <textarea
                            className="search-input"
                            placeholder="I'm interested in tech but also want to do something meaningful. I've done a few coding projects but I'm not sure what the next step is..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            rows={4}
                        />
                        <button type="submit" className="btn btn-primary btn-lg search-btn">
                            Find My Path
                        </button>
                    </form>

                    <p className="hero-hint">
                        or <Link to="/explore" className="hero-link">just start exploring</Link>
                    </p>
                </div>
            </section>

            {/* Quick Links Section */}
            <div className="services">
                <Link to="/explore?type=Research" className="service-card">
                    <h2 className="service-title">Research</h2>
                    <p className="service-desc">Labs & REUs</p>
                </Link>
                <Link to="/explore?type=Internship" className="service-card">
                    <h2 className="service-title">Internships</h2>
                    <p className="service-desc">Industry Experience</p>
                </Link>
                <Link to="/explore?type=Study Abroad" className="service-card">
                    <h2 className="service-title">Study Abroad</h2>
                    <p className="service-desc">Global Programs</p>
                </Link>
            </div>

            {/* How It Works */}
            <section className="how-it-works">
                <div className="how-container">
                    <h2 className="how-title">How It Works</h2>
                    <div className="how-grid">
                        <div className="how-step">
                            <span className="how-number">1</span>
                            <h3 className="how-step-title">Share What's on Your Mind</h3>
                            <p className="how-step-desc">
                                Goals, interests, doubts—whatever helps us understand where you're at.
                            </p>
                        </div>
                        <div className="how-step">
                            <span className="how-number">2</span>
                            <h3 className="how-step-title">We Find the Connections</h3>
                            <p className="how-step-desc">
                                We match you with opportunities based on who you are, not just keywords.
                            </p>
                        </div>
                        <div className="how-step">
                            <span className="how-number">3</span>
                            <h3 className="how-step-title">See Your Path</h3>
                            <p className="how-step-desc">
                                Get a personalized roadmap showing how each step leads to the next.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta">
                <div className="cta-content">
                    <h2 className="cta-title">Know a Hidden Gem?</h2>
                    <p className="cta-text">
                        Share the opportunities that helped shape your path.
                    </p>
                    <Link to="/create" className="btn btn-lg">
                        Share an Opportunity
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default LandingPage;
