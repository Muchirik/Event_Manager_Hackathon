# Event Management System

## Objective
Build a modern, interactive Event Management System that simplifies event planning. The platform features innovative design, seamless user experience, and robust database management.

## Features
- **Create Events**: Add new events with a title, description, and date.
- **View Events**: Display a list/grid of all events with organized styling.
- **Event Details**: Show detailed information about each event.
- **Update Events**: Edit existing event details.
- **Delete Events**: Confirm deletion before removing an event.
- **Search/Filter Events**: Search events by title and filter by categories/tags.
- **Sort Events**: Sort events by date or title for better organization.
- **Event Image Upload**: Upload images for events.
- **Share Events**: Share events via links or social media.

## User Experience
- Form validation for all inputs.
- Date validation to restrict past dates for new events.
- Loading states during operations.
- Error states with clear feedback for users.

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript (React)
- **Backend**: Node.js, Express, MySQL
- **Database**: MySQL

## Setup Instructions

### Backend
1. Navigate to the `backend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file and configure your database connection:
   ```
   DB_HOST=your_database_host
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_NAME=your_database_name
   ```
4. Start the backend server:
   ```
   npm start
   ```

### Frontend
1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the frontend application:
   ```
   npm start
   ```

## License
This project is licensed under the ISC License.