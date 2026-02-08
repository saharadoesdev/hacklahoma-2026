import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { generatePath } from '../services/api';
import './LoadingPage.css';

/**
 * Loading page shown while generating the path.
 * Calls the API (or falls back to mock data if server unavailable).
 */
function LoadingPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const userQuery = location.state?.query || '';
    const [dots, setDots] = useState('');

    // Animate dots
    useEffect(() => {
        const interval = setInterval(() => {
            setDots(prev => prev.length >= 3 ? '' : prev + '.');
        }, 400);
        return () => clearInterval(interval);
    }, []);

    // Generate path and navigate to results
    useEffect(() => {
        async function fetchPath() {
            try {
                const pathResult = await generatePath(userQuery);
                navigate('/path', {
                    state: {
                        query: userQuery,
                        pathResult: pathResult
                    },
                    replace: true // Don't allow back button to loading page
                });
            } catch (error) {
                console.error('Failed to generate path:', error);
                // Navigate anyway with empty result so user sees something
                navigate('/path', {
                    state: { query: userQuery },
                    replace: true
                });
            }
        }

        // Small delay so loading animation is visible
        const timer = setTimeout(fetchPath, 1000);
        return () => clearTimeout(timer);
    }, [navigate, userQuery]);

    return (
        <div className="loading-page">
            <div className="loading-content">
                <div className="loading-icon">🏔️</div>
                <h1 className="loading-title">Charting your route{dots}</h1>
                <p className="loading-subtitle">
                    Finding opportunities that fit who you are
                </p>
                <div className="loading-bar">
                    <div className="loading-bar-fill"></div>
                </div>
            </div>
        </div>
    );
}

export default LoadingPage;
