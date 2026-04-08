# Todo App

A full-stack Node.js todo application with user authentication, EJS templating, and MongoDB.

## Features

- User registration and login
- Session-based authentication
- Todo CRUD operations (Create, Read, Update, Delete)
- User-specific todo isolation
- Responsive UI with gradient design
- Global error handling
- Structured logging
- Unit tests

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: bcrypt, express-session
- **Frontend**: EJS templating
- **Testing**: Jest, Supertest
- **Logging**: Custom Winston-style logger

## Local Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file with:
   ```
   MONGO_URI=mongodb://localhost:27017/todo-app
   SESSION_SECRET=your-secret-key
   NODE_ENV=development
   ```
4. Start MongoDB locally
5. Run the app: `npm start`
6. Visit http://localhost:5000

## Testing

Run tests with: `npm test`

## ER Diagram

```
Users
├── id (ObjectId)
├── username (String, unique)
└── password (String, hashed)

Todos
├── id (ObjectId)
├── title (String)
├── completed (Boolean, default: false)
├── createdAt (Date)
└── user (ObjectId, ref: Users)
```

Relationship: One User has many Todos (1:N)

## Deployment to Render

1. **Create a Render Account**: Sign up at https://render.com

2. **Connect Repository**: Link your GitHub repository to Render

3. **Create Web Service**:
   - Choose "Web Service" from the dashboard
   - Connect your GitHub repo
   - Set build command: `npm install`
   - Set start command: `npm start`

4. **Environment Variables**:
   Add these environment variables in Render:
   - `MONGO_URI`: Your MongoDB Atlas connection string
   - `SESSION_SECRET`: A secure random string
   - `NODE_ENV`: production

5. **Database Setup**:
   - Create a MongoDB Atlas cluster
   - Get the connection string and add it to MONGO_URI
   - Whitelist Render's IP addresses if needed

6. **Deploy**: Click "Create Web Service" and wait for deployment

Your app will be live at: `https://your-app-name.onrender.com`

## Project Structure

```
├── config/
│   └── db.js              # Database connection
├── middleware/
│   └── errorHandler.js    # Global error handling
├── models/
│   ├── User.js           # User schema
│   └── Todo.js           # Todo schema
├── routes/
│   ├── auth.js           # Authentication routes
│   └── todo.js           # Todo CRUD routes
├── tests/
│   ├── auth.test.js      # Auth route tests
│   └── todo.test.js      # Todo route tests
├── utils/
│   └── logger.js         # Logging utility
├── views/
│   ├── index.ejs         # Home page
│   ├── login.ejs         # Login form
│   ├── register.ejs      # Registration form
│   ├── todos.ejs         # Todo management
│   └── error.ejs         # Error page
├── app.js                # Express app setup
├── server.js             # Server entry point
├── package.json          # Dependencies
└── README.md             # This file
```