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
        console.log('Submitting:', { ...formData, tags });

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
                    <h1 className="create-title">Add an opportunity</h1>
                    <p className="create-subtitle">
                        Share a program, internship, or experience you'd recommend.
                    </p>
                </header>

                <form className="card create-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">Title</label>
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

                    <div className="form-row">
                        <div className="form-group">
                            <label className="form-label">Type</label>
                            <select
                                name="type"
                                className="select"
                                value={formData.type}
                                onChange={handleInputChange}
                            >
                                <option value="Internship">Internship</option>
                                <option value="Research">Research</option>
                                <option value="Study Abroad">Study Abroad</option>
                                <option value="Hackathon">Hackathon</option>
                                <option value="Fellowship">Fellowship</option>
                                <option value="Volunteer">Volunteer</option>
                                <option value="Conference">Conference</option>
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

                    <div className="form-row">
                        <div className="form-group">
                            <label className="form-label">Location</label>
                            <input
                                type="text"
                                name="location"
                                className="input"
                                placeholder="e.g., Remote, NYC"
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
                                placeholder="e.g., 10 weeks"
                                value={formData.duration}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Description</label>
                        <textarea
                            name="description"
                            className="textarea"
                            placeholder="What's this opportunity about?"
                            value={formData.description}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Link</label>
                        <input
                            type="url"
                            name="link"
                            className="input"
                            placeholder="https://..."
                            value={formData.link}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Tags (press Enter to add)</label>
                        <div className="tags-container">
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
                                placeholder="Add tags..."
                                value={tagInput}
                                onChange={(e) => setTagInput(e.target.value)}
                                onKeyDown={handleTagKeyDown}
                            />
                        </div>
                    </div>

                    <div className="form-actions">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => navigate(-1)}
                        >
                            Cancel
                        </button>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </div>

            {showToast && (
                <div className="toast">
                    <span className="toast-icon">✓</span>
                    <span>Thanks for sharing! Redirecting...</span>
                </div>
            )}
        </div>
    );
}

export default CreateListingPage;
