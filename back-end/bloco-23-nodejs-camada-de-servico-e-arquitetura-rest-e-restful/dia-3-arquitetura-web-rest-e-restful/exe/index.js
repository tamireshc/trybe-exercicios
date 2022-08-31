const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./models/connection')

const app = express();
app.use(express.json());

const router = require('./controllers/productController')

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', router);

app.listen(3000, async () => {
    console.log('App listening on port 3000!');
    const [result] = await connection.execute('SELECT 1');
    if (result) {
        console.log('MySQL connection OK');
    }
});