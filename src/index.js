const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { PORT } = require('./configs/server.config');
const db = require('./configs/db.config');
const logger = require('./configs/logger.config');
const errorHandler = require('./utils/errorHandler');
const apiRouter = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use('/api', apiRouter);

app.use(errorHandler);

app.listen(PORT, async () => {
    logger.info(`Server started at PORT: ${PORT}`);
    await db.connect();
    logger.info(`DB successfully connected`);
});