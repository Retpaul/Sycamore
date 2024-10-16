const express = require('express');
const dotenv = require('dotenv');
const { userRoute } = require('./routes/userRoutes');
const { loggingMiddleware } = require('./middlewares/logingMiddleware');
dotenv.config()

const app = express();
app.use(express.json()); // Parses JSON requests
// app.use(loggingMiddleware); // Parses JSON requests
// Placeholder route
app.use('/api/users', userRoute);
module.exports = app;