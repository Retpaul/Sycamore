const express = require('express');
const dotenv = require('dotenv');
const { userRoute } = require('./routes/userRoutes');
dotenv.config()

const app = express();
app.use(express.json()); // Parses JSON requests
app.use('/api', userRoute);
module.exports = app;