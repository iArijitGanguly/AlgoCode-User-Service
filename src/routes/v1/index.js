const express = require('express');
const userRouter = require('./user.routes');

const v1Router = express.Router();

v1Router.use('/auth', userRouter);

module.exports = v1Router;