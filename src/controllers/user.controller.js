const { StatusCodes } = require('http-status-codes');
const { UserRepository } = require('../repository');
const { UserService } = require('../services');

const userService = new UserService(new UserRepository());

async function addUser(req, res, next) {
    try {
        const response = await userService.addUser(req.body);
        return res.status(StatusCodes.CREATED).send({
            success: true,
            message: 'Successfully created a new user',
            error: {},
            data: response
        });
    } catch (error) {
        next(error);
    }
}

async function getUser(req, res, next) {
    try {
        const response = await userService.getUser(req.body);
        return res.status(StatusCodes.OK).send({
            success: true,
            message: 'Successfully fetched a user',
            error: {},
            data: response
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    addUser,
    getUser
}