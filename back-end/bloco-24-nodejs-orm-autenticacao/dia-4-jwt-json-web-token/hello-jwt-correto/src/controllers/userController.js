const userService = require('../services/userService')
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET

const createUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const { type, message } = await userService.createUser(username, password)
        if (type) {
            return res.status(409).json(message)
        }
        const jwtConfig = {
            expiresIn: '1h',
            algorithm: 'HS256',
        }
        const token = jwt.sign({ data: username, admin: message.admin }, secret, jwtConfig)
        return res.status(201).json({ token })

    } catch (error) {
        return res.status(500).json(error.message)
    }

}

module.exports = {
    createUser,
}