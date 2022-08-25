const validadename = (req, res, next) => {
    const { name } = req.body
    console.log(name, name.length)
    if (name && name.length >= 4) {
        return next()

    } else {
        // res.json({ "message": "O campo name deve existir e ter pelo menos 4 caracteres" })
        res.status(400).json({ "message": "O campo name deve existir e ter pelo menos 4 caracteres" });
    }
}

module.exports = validadename