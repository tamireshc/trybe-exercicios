const validadeCreatedAt = (req, res, next) => {
    const { description } = req.body
    const regex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/
    console.log('çreated', description.createdAt)

    // const result = /^hello/.test(str);

    if (!regex.test(description.createdAt)) {
        const error = {
            status: 400,
            message: "O campo createdAt deve ter o formato \'dd/mm/aaaa\'"
        }
        return next(error);
    }
    next()
}

module.exports = validadeCreatedAt