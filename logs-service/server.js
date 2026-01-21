require('dotenv').config();

const app = require('./app');
const connectDb = require('./config/db');
const logger = require('./config/logger');

const PORT = Number(process.env.PORT) || 3001;
const MONGO_URI = process.env.MONGO_URI;



async function start() {
    await connectDb(MONGO_URI);

    app.listen(PORT, () => {
        logger.info({ port: PORT }, 'logs-service listening');
    });
}

start().catch((e) => {
    logger.error({ err: e.message }, 'failed to start');
    process.exit(1);
});