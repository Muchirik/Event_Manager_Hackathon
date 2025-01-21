const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db/connection');
const eventsRoutes = require('./routes/eventsRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
        process.exit(1);
    }
    console.log('Connected to the database');
});

app.use('/api/events', eventsRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});