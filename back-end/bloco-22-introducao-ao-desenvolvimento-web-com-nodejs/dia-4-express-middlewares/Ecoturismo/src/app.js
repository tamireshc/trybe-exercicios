const express = require('express')
const ecoturismo = require('./activities.json')
const ecoturismoFunctions = require('./ecoturismo.js')
const app = express()

app.use(express.json())

require('express-async-errors')

const morgan = require('morgan');
app.use(morgan('dev'));


app.post('/activities', async (req, res) => {
    const { name, price, description } = req.body

    const activite = ecoturismoFunctions.createActivitie({ name, price, description })
    res.status(201).json({ "message": "Atividade cadastrada com sucesso!" })

})

module.exports = app