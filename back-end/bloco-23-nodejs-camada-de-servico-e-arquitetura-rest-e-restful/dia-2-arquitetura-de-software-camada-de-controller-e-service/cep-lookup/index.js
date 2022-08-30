const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

require('express-async-errors');
require('dotenv').config();



app.use(express.json())
app.use(bodyParser.json())
app.use(morgan('dev'));

const connection = require('./models/connection');


const Cep = require('./controllers/cepController')
const valideCep = require('./middlewares/valideCep')
const validadePostCep = require('./middlewares/validePostCep')

app.get('/ping', (req, res) => {
    res.status(200).json({ "message": "pong!" })
})

app.get('/cep/:cep', valideCep, Cep.getdataByCep)

app.post('/cep', validadePostCep, Cep.postCep)


const PORT = process.env.PORT || 3000

app.listen(PORT, async () => {
    console.log(`API  sendo executada na porta ${PORT}`);

    const [result] = await connection.execute('SELECT 1');
    if (result) {
        console.log('MySQL connection OK');
    }

});