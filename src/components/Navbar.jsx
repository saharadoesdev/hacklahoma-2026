import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled || !isHome ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <span>Atlas</span>
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
                        className={`navbar-link ${isActive('/create') ? 'active' : ''}`}
                        onClick={() => setIsOpen(false)}
                    >
                        Add Listing
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
