import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        navigate('/path', { state: { query: searchQuery } });
    };

    return (
        <div className="landing">
            {/* Hero Section with Search */}
            <section className="hero">
                <div className="hero-content animate-in">
                    <p className="hero-subtitle">Opportunity Atlas</p>
                    <h1 className="hero-title">Stop Searching. Start Climbing.</h1>
                    <p className="hero-description">
                        Tell us about yourself and we'll match you with research labs, internships,
                        study abroad programs, and opportunities that fit your path.
                    </p>

                    {/* The main search box */}
                    <form className="hero-search" onSubmit={handleSearch}>
                        <textarea
                            className="search-input"
                            placeholder="I'm a computer science major interested in biology and data science. I've done some Python projects and I'm looking for research experience..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            rows={4}
                        />
                        <button type="submit" className="btn btn-primary btn-lg search-btn">
                            Find My Path
                        </button>
                    </form>

                    <p className="hero-hint">
                        or <Link to="/explore" className="hero-link">browse all opportunities</Link>
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
                    <h2 className="how-title">How Atlas Works</h2>
                    <div className="how-grid">
                        <div className="how-step">
                            <span className="how-number">1</span>
                            <h3 className="how-step-title">Tell Us About You</h3>
                            <p className="how-step-desc">
                                Share your interests, skills, and what you're looking for.
                            </p>
                        </div>
                        <div className="how-step">
                            <span className="how-number">2</span>
                            <h3 className="how-step-title">Get Matched</h3>
                            <p className="how-step-desc">
                                Our AI finds opportunities that fit your unique path.
                            </p>
                        </div>
                        <div className="how-step">
                            <span className="how-number">3</span>
                            <h3 className="how-step-title">Start Climbing</h3>
                            <p className="how-step-desc">
                                See how each opportunity connects to your bigger goals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta">
                <div className="cta-content">
                    <h2 className="cta-title">Know of a Great Opportunity?</h2>
                    <p className="cta-text">
                        Help other students discover the programs that changed your path.
                    </p>
                    <Link to="/create" className="btn btn-lg">
                        Add an Opportunity
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default LandingPage;
