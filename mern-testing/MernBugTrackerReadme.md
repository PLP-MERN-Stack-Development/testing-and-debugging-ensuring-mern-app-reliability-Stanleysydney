# MERN Bug Tracker

## Overview

Hi! I built this **MERN Bug Tracker** to practice **testing and debugging in MERN applications**. This project allows me (and users) to:

* **Report new bugs** with a title and optional description.
* **View all reported bugs** in a list.
* **Update bug statuses** (open, in-progress, resolved).
* **Delete bugs** when they are fixed or no longer relevant.

My goal with this project was to integrate **unit, integration, and end-to-end testing**, while implementing **error handling** on both frontend and backend.

---

## Project Structure

Here’s how I organized the project:

```
mern-testing/
├── client/                 # React front-end
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── tests/          # Client-side tests
│   │   │   ├── unit/
│   │   │   └── integration/
│   │   ├── services/       # API calls with axios
│   │   ├── App.jsx         # Main application
│   │   └── ErrorBoundary.jsx
│   └── cypress/            # End-to-end tests
├── server/                 # Express.js back-end
│   ├── src/
│   │   ├── controllers/    # Route controllers
│   │   ├── models/         # Mongoose models
│   │   ├── routes/         # API routes
│   │   ├── middleware/     # Error handling
│   │   └── utils/          # Validation helper
│   └── tests/
│       ├── unit/           # Unit tests
│       └── integration/    # Integration tests
├── jest.config.js          # Jest configuration
└── package.json
```

---

## Installation

I set up this project using **Node.js, Express, MongoDB, and React**.

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd mern-testing
```

### 2. Backend setup

```bash
cd server
npm install
```

I also created a `.env` file in `server/` with:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/bugtracker
```

This ensures my backend connects to MongoDB.

### 3. Frontend setup

```bash
cd ../client
npm install
```

I created a `.env` file in `client/` with:

```
REACT_APP_API_URL=http://localhost:5000/api
```

This allows my frontend to communicate with the backend.

---

## Running the Project

I run both **backend** and **frontend** in separate terminals.

### Backend

```bash
cd server
npm run dev
```

> This starts the Express server with `nodemon` so I can see changes immediately.

### Frontend

```bash
cd client
npm start
```

> React app starts at `http://localhost:3000`.

---

## Features

Here’s what I implemented:

1. **Report a Bug**
   I can fill a form with a title and description. On submission, it calls the backend API to save the bug.

2. **View All Bugs**
   I fetch all bugs from the backend and render them using a `BugList` component.

3. **Update Status**
   Each bug has buttons to mark it as “in-progress” or “resolved”. The app updates the backend and re-renders the list.

4. **Delete Bug**
   I can delete bugs and see the list update immediately.

---

## Testing

I focused on **unit tests, integration tests, and end-to-end testing**.

### Backend Testing

* **Unit Tests:** I test validation logic in `server/src/utils/validation.js`.
* **Integration Tests:** I test API endpoints using `supertest` in `server/tests/integration/bugs.integration.test.js`.

I run backend tests with:

```bash
cd server
npm test
```

### Frontend Testing

* **Unit Tests:** I test individual components like `BugForm`.
* **Integration Tests:** I test UI and API interaction using React Testing Library.

I run frontend tests with:

```bash
cd client
npm test
```

### End-to-End Testing

I use **Cypress** to simulate real user flows:

```bash
cd client
npx cypress open
```

> This allows me to **test the entire flow**: adding a bug, updating it, and deleting it.

---

## Debugging Techniques

I introduced some intentional errors to practice debugging:

1. **Console Logs:** I log values in React and Express to track state and requests.
2. **Chrome DevTools:** I inspect network requests and component states.
3. **Node.js Inspector:** I use `node --inspect` to debug server code.
4. **Error Boundaries:** I added React `ErrorBoundary` to catch frontend crashes.
5. **Express Error Middleware:** I handle server errors gracefully with custom middleware.

---

## How I Approached Testing

* **Unit Tests:** Focused on small helper functions (like validation).
* **Integration Tests:** Ensured API endpoints and frontend UI interact correctly.
* **End-to-End Tests:** Simulated full user flows in the browser.

By combining these, I made sure the **app is reliable and stable**.

---

## Technologies Used

* **Frontend:** React, Axios, React Router, React Testing Library, Cypress
* **Backend:** Node.js, Express, MongoDB, Mongoose, Jest, Supertest
* **Tools:** VSCode, Chrome DevTools, Node Inspector

---

## Notes

* I used **environment variables** to configure API URLs.
* I structured the project to **separate concerns**: components, routes, controllers, models, middleware, and tests.
* This project helps me **practice MERN testing and debugging best practices** in a real-world scenario.

---

This README gives me and any other developer **everything needed to install, run, test, and debug the application**, and clearly documents
