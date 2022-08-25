const validadeUser = (req, res, next) => {
    const { Email, first_name, password, phone_number } = req.body
    if (!Email || !first_name || !password || !phone_number) {
        const error = {
            status: 401,
            message: "Campos ausentes!"
        }
        return next(error)
    }
    next()
}

module.exports = validadeUser