const validadeRating = (req, res, next) => {
    const { description } = req.body
    console.log('rating', description.rating, typeof description.rating)
    if (description.rating > 5) {
        const error = {
            status: 400,
            message: "O campo rating deve ser um número inteiro entre 1 e 5"
        }
        return next(error);
    }
    if (description.rating < 1) {
        const error = {
            status: 400,
            message: "O campo rating deve ser um número inteiro entre 1 e 5"
        }
        return next(error);
    }

    next()

}

module.exports = validadeRating

//!description.rating >= 1 &&