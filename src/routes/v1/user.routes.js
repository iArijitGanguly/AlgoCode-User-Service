const express = require('express');
const { userController } = require('../../controllers');

const userRouter = express.Router();

userRouter.post('/signup', userController.addUser);
userRouter.post('/signin', userController.getUser);

module.exports = userRouter;