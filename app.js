const express = require("express");
const path = require("path");
const session = require("express-session");
const connectDB = require("./db");
const logger = require("./utils/logger");
const { errorHandler, notFoundHandler } = require("./middleware/errorHandler");
require("dotenv").config();

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging middleware
app.use((req, res, next) => {
  logger.info("Express", `${req.method} ${req.path}`);
  next();
});

// Sessions
app.use(
  session({
    secret: process.env.SESSION_SECRET || "secret-key",
    resave: false,
    saveUninitialized: false,
  })
);

// Connect DB
if (process.env.NODE_ENV !== "test") {
  connectDB();
}

// Home route
app.get("/", (req, res) => {
  res.render("index", { user: req.session.user || null });
});

// Routes
app.use("/auth", require("./routes/auth"));
app.use("/todo", require("./routes/todo"));

// 404 handler
app.use(notFoundHandler);

// Global error handler (must be last)
app.use(errorHandler);

module.exports = app;
