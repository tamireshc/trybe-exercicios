const jwt = require('jsonwebtoken');
const userService = require('../services/userService');

const secret = process.env.JWT_SECRET;

const createToken = async (req, res) => {
    const { username, password } = req.body;

    try {

        const checkUser = await userService.getUser(username)
        console.log(checkUser)

        if (!checkUser) {
            return res.status(400).json({ message: 'Usuário não existe' })
        }

        if (checkUser.password !== password) {
            return res.status(400).json({ message: 'Senha inválida' })
        }

        const jwtConfig = {
            expiresIn: '1h',
            algorithm: 'HS256',
        }

        const token = jwt.sign({ data: { username, admin: checkUser.admin } }, secret, jwtConfig);

        return res.status(200).json({ token })

    } catch (error) {
        return res.status(500).json(error.message)
    }


}

module.exports = {
    createToken,
}

