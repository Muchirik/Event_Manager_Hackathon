document.addEventListener('DOMContentLoaded', () => {
    const eventForm = document.getElementById('event-form');
    const eventList = document.getElementById('event-list');
    const toggleThemeButton = document.getElementById('toggle-theme');

    // Load events on page load
    loadEvents();

    // Event listener for form submission
    eventForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(eventForm);
        await createEvent(formData);
        eventForm.reset();
        loadEvents();
    });

    // Function to load events
    async function loadEvents() {
        const response = await fetch('/api/events');
        const events = await response.json();
        displayEvents(events);
    }

    // Function to display events
    function displayEvents(events) {
        eventList.innerHTML = '';
        events.forEach(event => {
            const eventItem = document.createElement('div');
            eventItem.className = 'event-item';
            eventItem.innerHTML = `
                <h3>${event.title}</h3>
                <p>${event.description}</p>
                <p>${new Date(event.date).toLocaleDateString()}</p>
                <button onclick="viewEvent(${event.id})">View</button>
                <button onclick="editEvent(${event.id})">Edit</button>
                <button onclick="deleteEvent(${event.id})">Delete</button>
            `;
            eventList.appendChild(eventItem);
        });
    }

    // Function to create an event
    async function createEvent(formData) {
        await fetch('/api/events', {
            method: 'POST',
            body: formData,
        });
    }

    // Function to view an event
    window.viewEvent = async (id) => {
        const response = await fetch(`/api/events/${id}`);
        const event = await response.json();
        alert(`Event: ${event.title}\nDescription: ${event.description}\nDate: ${new Date(event.date).toLocaleDateString()}`);
    };

    // Function to edit an event
    window.editEvent = (id) => {
        // Logic for editing an event (e.g., populate form with event data)
    };

    // Function to delete an event
    window.deleteEvent = async (id) => {
        if (confirm('Are you sure you want to delete this event?')) {
            await fetch(`/api/events/${id}`, {
                method: 'DELETE',
            });
            loadEvents();
        }
    };

    // Theme toggle functionality
    toggleThemeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});