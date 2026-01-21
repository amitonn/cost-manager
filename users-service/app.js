const express = require('express');
const userRoutes = require('./routes/users.routes');
const errorMiddleware = require('./middlewares/error.middleware');
const requestLogger = require('./middlewares/request-logger.middleware');

const app = express();

app.use(express.json());

app.use(requestLogger('users-service'));

app.use(errorMiddleware);

app.use('/api', userRoutes);



module.exports = app;