const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

// const path = require('path');
const { limiter } = require('./helpers/rate-limit');
const { HttpCode } = require('./helpers/constants');

require('dotenv').config();
const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(helmet());
app.get('env') !== 'test' && app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json({ limit: 10000 }));
app.use(limiter);

app.use((req, res) => {
  res.status(HttpCode.NOT_FOUND).json({
    status: 'error',
    code: HttpCode.NOT_FOUND,
    message: `Use api on routes: ${res.status.code}`,
    data: 'Not Found',
  });
});

app.use((err, req, res, next) => {
  res.status(err.code || HttpCode.INTERNAL_SERVER_ERROR).json({
    status: 'fail',
    code: HttpCode.INTERNAL_SERVER_ERROR,
    message: err.message,
    data: 'Internal Server Error',
  });
});

module.exports = app;
