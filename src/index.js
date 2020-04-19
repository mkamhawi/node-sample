const express = require('express');

const router = require('./routers/sample');

const app = express();

app.use('/sample', router);

module.exports = app;