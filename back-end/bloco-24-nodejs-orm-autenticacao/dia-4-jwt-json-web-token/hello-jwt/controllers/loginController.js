const jwt = require('jsonwebtoken');
const userService = require('../services/userService');

const secret = process.env.JWT_SECRET;

const createToken = (req, res) => {
    const { username, password } = req.body;

}

module.exports = {
    createToken,
}

