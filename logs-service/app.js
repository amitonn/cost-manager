const express = require('express');
const logsRoutes = require('./routes/logs.routes');
const errorMiddleware = require('./middlewares/error.middleware');
const requestLogger = require('./middlewares/request-logger.middleware');

const app = express();
app.use(requestLogger('logs-service'));
app.use(errorMiddleware);
app.use('/api', logsRoutes);

module.exports = app;