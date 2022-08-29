const validUser = (req, res, next) => {
    const { firstName, lastName, email, password } = req.body
    if (!firstName) {
        return res.status(400).json({ "message": "\"firstName\" is required" })
    } if (!lastName) {
        return res.status(400).json({ "message": "\"lastName\" is required" })
    } if (!email) {
        return res.status(400).json({ "message": "\"email\" is required" })
    } if (!password) {
        return res.status(400).json({ "message": "\"password\" is required" })
    } if (password.length < 6) {
        return res.status(400).json({ "message": "\"password\" length must be at least 6 characters long" })
    }
    next()

}

module.exports = validUser