💬 Real-Time MERN Stack Chat App
<div align="center">

</div>

A full-stack, real-time chat application built with the MERN stack and Socket.IO. This project allows users to sign up, log in, chat with friends in real-time, and see who's currently online.

✨ Key Features
🔐 Secure User Authentication: JWT-based authentication for a secure login and registration experience.

⚡ Real-Time Messaging: Instant message delivery using Socket.IO for a seamless chat experience.

🟢 Online Status: See which users are currently online in real-time.

🎨 Modern UI: A beautiful, responsive user interface designed with Tailwind CSS.

🐻 Global State Management: Efficient and predictable state management using Zustand.

🔒 Protected Routes: Frontend routes are protected to ensure only authenticated users can access the chat.

🛠️ Tech Stack
Frontend
React.js: A powerful library for building user interfaces.

Zustand: For simple and scalable global state management.

Tailwind CSS: For modern and responsive styling.

Socket.IO Client: To connect to the real-time server.

Axios: For making API requests to the backend.

Backend
Node.js: JavaScript runtime for the server.

Express.js: Web framework for building robust APIs.

MongoDB: NoSQL database for storing user and message data.

Mongoose: Object Data Modeling (ODM) library for MongoDB.

Socket.IO: For enabling real-time, bidirectional communication.

JWT & bcrypt: For secure authentication and password hashing.

🚀 Getting Started
Follow these steps to get a local copy of the project up and running.

Prerequisites
Node.js & npm (or yarn)

MongoDB instance (local or on Atlas)

Installation Guide
Clone the Repository

git clone [https://github.com/asiduki/fullstack-chat-app-main.git](https://github.com/asiduki/fullstack-chat-app-main.git)

Navigate to the Project Directory

cd fullstack-chat-app-main

Install Backend Dependencies

# Navigate to the backend folder
cd backend
npm install

Install Frontend Dependencies

# From the root directory, navigate to the frontend folder
cd ../frontend
npm install

Set Up Environment Variables

In the backend directory, create a .env file.

Add the following variables:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

Run the Application

# Run the backend server (from the backend folder)
npm run dev

# Run the frontend server (from the frontend folder) in a new terminal
npm run dev

📬 Contact
Udit Jadon - udithakur436@gmail.com

Project Link: https://github.com/asiduki/fullstack-chat-app-main
