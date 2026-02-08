import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateListingPage.css';

function CreateListingPage() {
    const navigate = useNavigate();
    const [showToast, setShowToast] = useState(false);
    const [tags, setTags] = useState([]);
    const [tagInput, setTagInput] = useState('');
    const [formData, setFormData] = useState({
        title: '',
        type: 'Internship',
        location: '',
        duration: '',
        difficulty: 'Beginner',
        description: '',
        link: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleTagKeyDown = (e) => {
        if (e.key === 'Enter' && tagInput.trim()) {
            e.preventDefault();
            if (!tags.includes(tagInput.trim())) {
                setTags([...tags, tagInput.trim()]);
            }
            setTagInput('');
        }
    };

    const removeTag = (tagToRemove) => {
        setTags(tags.filter(tag => tag !== tagToRemove));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, this would send to the database
        console.log('Submitting:', { ...formData, tags });

        // Show success toast
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
            navigate('/explore');
        }, 2000);
    };

    return (
        <div className="create-page page-content">
            <div className="create-container">
                <header className="create-header">
                    <div className="create-icon">📝</div>
                    <h1 className="create-title">Share an Opportunity</h1>
                    <p className="create-subtitle">
                        Help others discover the paths that helped you climb. Add a program,
                        internship, or experience you'd recommend.
                    </p>
                </header>

                <form className="card create-form" onSubmit={handleSubmit}>
                    {/* Title */}
                    <div className="form-group">
                        <label className="form-label">Opportunity Title *</label>
                        <input
                            type="text"
                            name="title"
                            className="input"
                            placeholder="e.g., Google STEP Internship"
                            value={formData.title}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    {/* Type & Difficulty */}
                    <div className="form-row">
                        <div className="form-group">
                            <label className="form-label">Type *</label>
                            <select
                                name="type"
                                className="select"
                                value={formData.type}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="Internship">Internship</option>
                                <option value="Research">Research</option>
                                <option value="Study Abroad">Study Abroad</option>
                                <option value="Hackathon">Hackathon</option>
                                <option value="Fellowship">Fellowship</option>
                                <option value="Volunteer">Volunteer</option>
                                <option value="Diversity Program">Diversity Program</option>
                                <option value="Program">Program</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Difficulty</label>
                            <select
                                name="difficulty"
                                className="select"
                                value={formData.difficulty}
                                onChange={handleInputChange}
                            >
                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Advanced">Advanced</option>
                            </select>
                        </div>
                    </div>

                    {/* Location & Duration */}
                    <div className="form-row">
                        <div className="form-group">
                            <label className="form-label">Location</label>
                            <input
                                type="text"
                                name="location"
                                className="input"
                                placeholder="e.g., Remote, New York, NY"
                                value={formData.location}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Duration</label>
                            <input
                                type="text"
                                name="duration"
                                className="input"
                                placeholder="e.g., 10 weeks, 1 semester"
                                value={formData.duration}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <div className="form-group">
                        <label className="form-label">Description *</label>
                        <textarea
                            name="description"
                            className="textarea"
                            placeholder="Describe what this opportunity involves, who it's for, and what makes it valuable..."
                            value={formData.description}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    {/* Link */}
                    <div className="form-group">
                        <label className="form-label">Application Link</label>
                        <input
                            type="url"
                            name="link"
                            className="input"
                            placeholder="https://..."
                            value={formData.link}
                            onChange={handleInputChange}
                        />
                    </div>

                    {/* Tags */}
                    <div className="form-group">
                        <label className="form-label">Tags (Press Enter to add)</label>
                        <div className="tags-input-container">
                            {tags.map((tag, index) => (
                                <span key={index} className="tag-chip">
                                    {tag}
                                    <button
                                        type="button"
                                        className="tag-remove"
                                        onClick={() => removeTag(tag)}
                                    >
                                        ×
                                    </button>
                                </span>
                            ))}
                            <input
                                type="text"
                                className="tags-input"
                                placeholder="Add skills, topics, keywords..."
                                value={tagInput}
                                onChange={(e) => setTagInput(e.target.value)}
                                onKeyDown={handleTagKeyDown}
                            />
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="form-actions">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => navigate(-1)}
                        >
                            Cancel
                        </button>
                        <button type="submit" className="btn btn-primary">
                            🏔️ Share Opportunity
                        </button>
                    </div>
                </form>
            </div>

            {/* Success Toast */}
            {showToast && (
                <div className="toast">
                    <span className="toast-icon">✓</span>
                    <span>Opportunity shared successfully! Redirecting...</span>
                </div>
            )}
        </div>
    );
}

export default CreateListingPage;
