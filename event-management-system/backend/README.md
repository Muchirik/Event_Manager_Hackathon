# Event Management System - Backend

## Overview
This is the backend for the Event Management System, designed to handle all server-side operations, including event management and user authentication.

## Technologies Used
- Node.js
- Express
- MySQL
- dotenv
- mysql2

## Setup Instructions

1. **Clone the Repository**
   ```
   git clone <repository-url>
   cd event-management-system/backend
   ```

2. **Install Dependencies**
   ```
   npm install
   ```

3. **Create a `.env` File**
   Create a `.env` file in the backend directory and add the following environment variables:
   ```
   DB_HOST=your_database_host
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_NAME=your_database_name
   ```

4. **Run the Application**
   ```
   npm start
   ```

5. **API Endpoints**
   - `POST /events` - Create a new event
   - `GET /events` - Retrieve all events
   - `GET /events/:id` - Retrieve a specific event by ID
   - `PUT /events/:id` - Update an existing event
   - `DELETE /events/:id` - Delete an event

## Usage
- Ensure your MySQL database is running and accessible.
- Use Postman or any API client to interact with the API endpoints.

## Error Handling
The application includes comprehensive error handling for all database and server interactions to ensure a smooth user experience.

## Contribution
Feel free to contribute by submitting issues or pull requests.

## License
This project is licensed under the MIT License.