const validadePrice = (req, res, next) => {
    const { price } = req.body
    console.log(price)
    if (price && price >= 0) {
        return next()
    } else {
        res.status(400).json({ "message": "O campo price deve existir e ser um número maior ou igual a zero" })
    }

}

module.exports = validadePrice