const {CustomAPIError, BadRequestError} = require('../errors')
const jwt = require("jsonwebtoken")
const login = async (req, res) => {

    const {username, password} = req.body
    if (!username || !password) {
        throw new BadRequestError("provide email password ")
    }

    const id = new Date().getDate()

    const token = jwt.sign({id: id, username: username}, process.env.JWT_SECRET, {expiresIn: "30d"})
    res.status(200).json({msg: "User created", token: token})
}

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({msg: `hello ${req.user.username}`, secret: `lucky number ${luckyNumber}`})

}
module.exports = {login, dashboard}
