const jwt = require("jsonwebtoken");
const {UnauthenticatedError} = require("../errors");
const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith("Bearer")) {
        throw new UnauthenticatedError("invalid token")
    }

    const token = authHeader.split(" ")[1]

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const {id, username} = decoded
        req.user = {id, username}
    } catch (error) {
        throw new UnauthenticatedError("Unable to verify route")
    }
    next()
}

module.exports = authMiddleware
