import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;
    const isHome = location.pathname === '/';

    // Hide navbar on loading page
    const isLoading = location.pathname === '/loading';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (isLoading) return null;

    return (
        <nav className={`navbar ${scrolled || !isHome ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <span>Trailhead</span>
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
                        to="/explore"
                        className={`navbar-link ${isActive('/explore') ? 'active' : ''}`}
                        onClick={() => setIsOpen(false)}
                    >
                        Explore
                    </Link>
                    <Link
                        to="/create"
                        className={`navbar-link ${isActive('/create') ? 'active' : ''}`}
                        onClick={() => setIsOpen(false)}
                    >
                        Share
                    </Link>
                    <div className="navbar-divider"></div>
                    <Link
                        to="/account"
                        className="navbar-link navbar-account"
                        onClick={() => setIsOpen(false)}
                        title="Account"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="8" r="4"></circle>
                            <path d="M20 21a8 8 0 1 0-16 0"></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
