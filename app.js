const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

// const path = require('path');

// const { limiter } = require("./helpers/rate-limit");
const { httpCode } = require("./helpers/constants");
<<<<<<< HEAD

require("dotenv").config();

const authRouter = require("./routes/api/auth");
const testsRouter = require("./routes/tests");
=======

require("dotenv").config();


const authRouter = require('./routes/api/auth');
const testsRouter = require('./routes/tests');
const emailsRouter = require('./routes/emails');
>>>>>>> be9d01ce285f9355b598a8be9866c62bd8c3c142

const app = express();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(helmet());
app.get("env") !== "test" && app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
// app.use(limiter);

app.use("/auth", authRouter);
app.use("/tests", testsRouter);
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
<<<<<<< HEAD
=======

app.use('/emails', emailsRouter);
>>>>>>> be9d01ce285f9355b598a8be9866c62bd8c3c142

app.use((req, res) => {
  res.status(httpCode.NOT_FOUND).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(httpCode.INTERNAL_SERVER_ERROR).json({ message: err.message });
});

module.exports = app;
