const { User } = require('../models');
const BadRequest = require('../errors/badRequest.error');
const UnAuthorized = require('../errors/unAutorized.error');
const logger = require('../configs/logger.config');

class UserRepository {

    async createUser(userData) {
        try {
            const user = await User.create(userData);
            return user;
        } catch (error) {
            logger.error(error);
            throw error;
        }
    }

    async getUser(userData) {
        try {
            const user = await User.findOne({ email: userData.email });
            if(!user) {
                throw new UnAuthorized(userData.email);
            }

            if(user.password === userData.password) {
                return user;
            }
            throw new BadRequest('password', { password: userData.password });
        } catch (error) {
            logger.error(error);
            throw error;
        }
    }

}

module.exports = UserRepository;