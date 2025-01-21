const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/eventsController');

// Create a new event
router.post('/', eventsController.createEvent);

// Get all events
router.get('/', eventsController.getAllEvents);

// Get a single event by ID
router.get('/:id', eventsController.getEventById);

// Update an event by ID
router.put('/:id', eventsController.updateEvent);

// Delete an event by ID
router.delete('/:id', eventsController.deleteEvent);

module.exports = router;