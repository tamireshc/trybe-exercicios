const Joi = require('joi');

const validadePostCep = (req, res, next) => {
    const { cep, logradouro, bairro, localidade, uf } = req.body
    const regex = /^\d{5}-?\d{3}$/

    const { error } = Joi.object({
        cep: Joi.string().not().empty().required(),
        logradouro: Joi.string().not().empty().required(),
        bairro: Joi.string().not().empty().required(),
        localidade: Joi.string().not().empty().required(),
        uf: Joi.string().not().empty().required(),
    }).validate({ cep, logradouro, bairro, localidade, uf });

    if (error) {
        res.status(400).json({ "error": { "code": "invalidData", "message": error.message } }
        )
    } if (!regex.test(cep)) {
        return res.status(400).json({ "error": { "code": "invalidData", "message": "CEP inválido" } })
    }
    next()
}

module.exports = validadePostCep



// {
//     "cep": "01001-000",
//     "logradouro": "Praça da Sé",
//     "bairro": "Sé",
//     "localidade": "São Paulo",
//     "uf": "SP",
//   }