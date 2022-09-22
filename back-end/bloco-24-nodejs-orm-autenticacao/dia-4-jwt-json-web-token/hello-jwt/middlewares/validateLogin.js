const Joi = require('joi');

const userSchema = Joi.object({
    username: Joi.string().min(5).required(),
    password: Joi.string().min(5).required(),
});

const validateLogin = (req, res, next) => {
    const validator = userSchema.validate(req.body);
    if (validator.error) {
        return res.status(400).json({ message: validator.error.details[0].message });
    }
    next();
};

module.exports = {
    validateLogin,
};