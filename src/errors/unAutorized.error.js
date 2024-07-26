const BaseError = require("./base.error");
const { StatusCodes } = require('http-status-codes');

class UnAuthorized extends BaseError {
    constructor(details) {
        super("UnAuthorized", StatusCodes.UNAUTHORIZED, `No valid credentials found for ${details}`, { details });
    }
}

module.exports = UnAuthorized;