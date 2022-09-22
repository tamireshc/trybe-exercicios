const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

const validateIfUserIsAdmin = (req, res, next) => {
    const token = req.header('Authorization')

    try {
        if (!token) {
            return res.status(401).json({
                error: { message: "Token not found" }
            })
        }
        const decoded = jwt.verify(token, secret)
        if (decoded.data.admin === false) {
            return res.status(401).json({ message: "Restricted access" })
        }
        next()
    } catch (error) {
        return res.status(500).json(error.message)
    }

}

module.exports = {
    validateIfUserIsAdmin,
}