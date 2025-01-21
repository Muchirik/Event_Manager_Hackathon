import React, { useState } from 'react';
import { createEvent } from '../services/api';
import { validateEvent } from '../utils/validation';

const EventForm = ({ event, onSubmit }) => {
    const [title, setTitle] = useState(event ? event.title : '');
    const [description, setDescription] = useState(event ? event.description : '');
    const [date, setDate] = useState(event ? event.date : '');
    const [image, setImage] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationError = validateEvent({ title, description, date });
        if (validationError) {
            setError(validationError);
            return;
        }
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('date', date);
        if (image) {
            formData.append('image', image);
        }
        await createEvent(formData);
        onSubmit();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{event ? 'Edit Event' : 'Create Event'}</h2>
            {error && <p className="error">{error}</p>}
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Description:</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Date:</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Image:</label>
                <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                />
            </div>
            <button type="submit">{event ? 'Update Event' : 'Create Event'}</button>
        </form>
    );
};

export default EventForm;