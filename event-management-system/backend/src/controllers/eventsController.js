class EventsController {
    constructor(db) {
        this.db = db;
    }

    async createEvent(req, res) {
        const { title, description, date, image } = req.body;
        try {
            const result = await this.db.query('INSERT INTO events (title, description, date, image) VALUES (?, ?, ?, ?)', [title, description, date, image]);
            res.status(201).json({ id: result.insertId, title, description, date, image });
        } catch (error) {
            res.status(500).json({ error: 'Error creating event' });
        }
    }

    async getAllEvents(req, res) {
        try {
            const [events] = await this.db.query('SELECT * FROM events');
            res.status(200).json(events);
        } catch (error) {
            res.status(500).json({ error: 'Error fetching events' });
        }
    }

    async getEventById(req, res) {
        const { id } = req.params;
        try {
            const [event] = await this.db.query('SELECT * FROM events WHERE id = ?', [id]);
            if (event.length === 0) {
                return res.status(404).json({ error: 'Event not found' });
            }
            res.status(200).json(event[0]);
        } catch (error) {
            res.status(500).json({ error: 'Error fetching event' });
        }
    }

    async updateEvent(req, res) {
        const { id } = req.params;
        const { title, description, date, image } = req.body;
        try {
            const result = await this.db.query('UPDATE events SET title = ?, description = ?, date = ?, image = ? WHERE id = ?', [title, description, date, image, id]);
            if (result.affectedRows === 0) {
                return res.status(404).json({ error: 'Event not found' });
            }
            res.status(200).json({ message: 'Event updated successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Error updating event' });
        }
    }

    async deleteEvent(req, res) {
        const { id } = req.params;
        try {
            const result = await this.db.query('DELETE FROM events WHERE id = ?', [id]);
            if (result.affectedRows === 0) {
                return res.status(404).json({ error: 'Event not found' });
            }
            res.status(200).json({ message: 'Event deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Error deleting event' });
        }
    }
}

module.exports = EventsController;