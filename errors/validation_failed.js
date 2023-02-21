const CustomAPIError = require("./custom-error" )
const {StatusCodes} = require("http-status-codes")
class ValidationFailedError extends CustomAPIError{
    constructor(message) {
        super(message);
        this.statusCode = StatusCodes.EXPECTATION_FAILED
    }
}

module.exports = ValidationFailedError