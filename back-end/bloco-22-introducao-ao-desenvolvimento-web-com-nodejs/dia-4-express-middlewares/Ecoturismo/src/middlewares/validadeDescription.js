const validadeDescription = (req, res, next) => {
    const { description } = req.body
    // const { createdAt, rating, difficulty } = description

    if (!description) {
        res.status(400).json({ "message": "O campo description é obrigatório" })
    } if (description && !description.createdAt) {
        res.status(400).json({ "message": "O campo createdAt é obrigatório" })
    }
    if (description && !description.rating) {
        res.status(400).json({ "message": "O campo rating é obrigatório" })
    } if (description && !description.difficulty) {
        res.status(400).json({ "message": "O campo difficulty é obrigatório" })
    } else {
        next()
    }

}

module.exports = validadeDescription