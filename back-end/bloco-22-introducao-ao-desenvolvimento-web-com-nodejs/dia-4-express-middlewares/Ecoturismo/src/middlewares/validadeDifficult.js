const validadeDifficulty = (req, res, next) => {
    const { description } = req.body
    console.log('dificult', description.difficulty)
    if (description.difficulty === "Fácil" || description.difficulty === "Médio" || description.difficulty === "Difícil") {
        next()
    }
    else {
        const error = {
            status: 400,
            message: "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'"
        }
        return next(error);
    }


}

module.exports = validadeDifficulty 