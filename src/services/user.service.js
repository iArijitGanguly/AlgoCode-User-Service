class UserService {

    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async addUser(userData) {
        const user = await this.userRepository.createUser(userData);
        return user;
    }

    async getUser(userData) {
        const user = await this.userRepository.getUser(userData);
        return user;
    }

}

module.exports = UserService;