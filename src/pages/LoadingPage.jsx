import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './LoadingPage.css';

/**
 * Loading page shown while "AI" generates the path.
 * TODO: Replace setTimeout with actual Gemini API call.
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

    // Fake delay then navigate to results
    // TODO: Replace this with actual API call to Gemini
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/path', {
                state: { query: userQuery },
                replace: true // Don't allow back button to loading page
            });
        }, 2000); // 2 second fake delay

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
