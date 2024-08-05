File Structure Application


Overview : 
This project is a full-stack web application that allows users to create, manage, and organize directories and files, similar to GitHub's file explorer or Google Drive. The application provides a user-friendly interface for displaying a hierarchical view of directories and files, creating and previewing text files, renaming items, and deleting items.

Technologies Used: 

Frontend: React.js
Backend: Node.js with Express
Database: MongoDB
Styling: CSS (or any other preferred styling framework)
Features
Directory and File Management: Create, view, rename, and delete directories and files.
File Preview: Preview text files directly in the application.
Hierarchical View: Display directories and files in a structured format.
Getting Started
Prerequisites
Node.js (v14 or higher)
npm or yarn
MongoDB Atlas account (or local MongoDB instance)
Setup
Clone the Repository

sh
Copy code
git clone <repository-url>
cd <repository-directory>
Setup Backend

Navigate to the backend directory:

sh
Copy code
cd backend
Install Dependencies

sh
Copy code
npm install
Configure Environment Variables

Create a .env file in the backend directory and add your MongoDB connection string:

plaintext
Copy code
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.s89knvv.mongodb.net/?retryWrites=true&w=majority
PORT=5000
Start the Backend Server

sh
Copy code
npm start
Setup Frontend

Navigate to the frontend directory:

sh
Copy code
cd frontend
Install Dependencies

sh
Copy code
npm install
Start the Frontend Development Server

sh
Copy code
npm start
The frontend application should now be running on http://localhost:5000.

Usage
Open the application in your browser (http://localhost:5000).
Use the interface to create directories and files.
Preview text files and manage your file structure.
API Endpoints
GET /api/files
Fetch the list of files and directories.

POST /api/files
Create a new file or directory.

PUT /api/files/:id
Update an existing file or directory (e.g., rename).

DELETE /api/files/:id
Delete a file or directory.

Testing
Run tests using:

sh
Copy code
npm test
Make sure to add and update tests as needed to cover all features and functionalities.
