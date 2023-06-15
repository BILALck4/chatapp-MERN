# MERN Chat Application

This is a real-time chat application built using the MERN (MongoDB, Express, React, Node.js) stack with WebSocket integration.

## Description

The MERN Chat Application allows users to engage in real-time conversations with each other. It provides a seamless and interactive chat experience, where users can send and receive messages instantly.

## Features

- Real-time messaging: Messages are delivered instantly to all connected users.
- User authentication: Users can create accounts, log in, and maintain their chat history.
- Online status: Users can see the online/offline status of other users.
- Message notifications: Users receive notifications when new messages are received.

## Technologies Used

- MongoDB: Database for storing user information and chat history.
- Express: Backend framework for handling API requests and WebSocket connections.
- React: Frontend library for building the user interface.
- Node.js: JavaScript runtime environment for running the server-side code.
- Socket.IO: Library for enabling real-time, bidirectional communication between the server and clients.

## Installation

1. Clone the repository:

```shell
git clone LINK_in github


cd mern-chat-app
Install the dependencies for the server:
shell

cd api
npm install
Install the dependencies for the client:
shell

cd ../client
npm install
## Configuration
Create a .env file in the api directory and add the following environment variables:
env

MONGO_URI=your_mongodb_connection_string
SECRET_KEY=your_secret_key
Update the client/src/config.js file with the server URL:
javascript

export const SERVER_URL = 'http://localhost:8800'; 

### Credits
Socket.IO - WebSocket library for real-time communication.
Create React App - Boilerplate for setting up React applications.
