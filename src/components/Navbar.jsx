import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <span className="navbar-logo-icon">⛰️</span>
                    <span className="navbar-logo-text">Atlas</span>
                </Link>

                <button
                    className="navbar-mobile-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? '✕' : '☰'}
                </button>

                <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
                    <Link
                        to="/"
                        className={`navbar-link ${isActive('/') ? 'active' : ''}`}
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to="/explore"
                        className={`navbar-link ${isActive('/explore') ? 'active' : ''}`}
                        onClick={() => setIsOpen(false)}
                    >
                        Explore
                    </Link>
                    <Link
                        to="/create"
                        className="btn btn-primary navbar-cta"
                        onClick={() => setIsOpen(false)}
                    >
                        + Add Opportunity
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
