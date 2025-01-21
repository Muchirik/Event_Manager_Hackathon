const API_URL = 'http://localhost:5000/api/events';

export const createEvent = async (eventData) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
    });
    return response.json();
};

export const getAllEvents = async () => {
    const response = await fetch(API_URL);
    return response.json();
};

export const getEventById = async (eventId) => {
    const response = await fetch(`${API_URL}/${eventId}`);
    return response.json();
};

export const updateEvent = async (eventId, eventData) => {
    const response = await fetch(`${API_URL}/${eventId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
    });
    return response.json();
};

export const deleteEvent = async (eventId) => {
    const response = await fetch(`${API_URL}/${eventId}`, {
        method: 'DELETE',
    });
    return response.json();
};