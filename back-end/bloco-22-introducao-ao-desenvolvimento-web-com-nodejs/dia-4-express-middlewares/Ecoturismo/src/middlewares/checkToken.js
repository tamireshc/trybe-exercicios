const checkToken = (req, res, next) => {
    const { token } = req.headers
    if (!token || token.length !== 16) {
        const error = {
            status: 401,
            message: "Token inválido!"
        }
        return next(error)
    }
    next()
}

module.exports = checkToken