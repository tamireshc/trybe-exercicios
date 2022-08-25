const express = require('express')
const ecoturismo = require('./activities.json')
const ecoturismoFunctions = require('./ecoturismo.js')
const validadeName = require('./middlewares/validateName')
const validadePrice = require('./middlewares/validadePrice')
const validadeDescription = require('./middlewares/validadeDescription')
const validadeCreatedAt = require('./middlewares/validadeCreatedAt')
const errorHandler = require('./middlewares/error')
const validadeRating = require('./middlewares/validadeRating')
const validadeDifficulty = require('./middlewares/validadeDifficult')
const validadeUser = require('./middlewares/validadeUser')
const checkToken = require('./middlewares/checkToken')
const crypto = require('crypto');

const app = express()

app.use(express.json())

require('express-async-errors')

const morgan = require('morgan');
app.use(morgan('dev'));


app.post('/activities', checkToken, validadeName, validadePrice, validadeDescription, validadeCreatedAt, validadeRating, validadeDifficulty, (req, res) => {
    const { name, price, description } = req.body

    const activite = ecoturismoFunctions.createActivitie({ name, price, description })
    res.status(201).json({ "message": "Atividade cadastrada com sucesso!" })

})

app.post('/signup', validadeUser, (req, res) => {
    const { Email, first_name, password, phone_number } = req.body
    const user = ecoturismoFunctions.createUser({ Email, first_name, password, phone_number })
    console.log('user', user)
    const token = crypto.randomBytes(8).toString('hex');
    res.status(201).json({ "message": "Usuario cadastrado com sucesso! token", "token": token })

})

app.use(errorHandler);

module.exports = app