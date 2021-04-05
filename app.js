const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

// const path = require('path');

// const { limiter } = require("./helpers/rate-limit");
const { httpCode } = require('./helpers/constants');

require('dotenv').config();

const authRouter = require('./routes/api/auth');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(helmet());
app.get('env') !== 'test' && app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
// app.use(limiter);

app.use('/auth', authRouter);
// app.use('/tests', testsRouter);

app.use((req, res) => {
  res.status(httpCode.NOT_FOUND).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  res.status(httpCode.INTERNAL_SERVER_ERROR).json({ message: err.message });
});

module.exports = app;
