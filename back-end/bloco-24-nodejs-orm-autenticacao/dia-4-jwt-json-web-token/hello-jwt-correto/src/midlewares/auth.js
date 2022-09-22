const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

const checkValidateToken = (req, res, next) => {
    const token = req.header('Authorization')
    //console.log(token)

    try {
        if (!token) {
            return res.status(401).json({
                error: { message: "Token not found" }
            })
        }

        const decoded = jwt.verify(token, secret)

        req.user = decoded.data

        next();

    } catch (error) {
        return res.status(500).json(error.message)
    }
}


module.exports = {
    checkValidateToken
}
