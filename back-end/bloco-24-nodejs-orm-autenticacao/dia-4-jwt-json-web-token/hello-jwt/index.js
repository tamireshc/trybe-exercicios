require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./models/connection');

const PORT = process.env.MYSQL_PORT || 3001;

const controllers = require('./controllers');
const loginController = require('./controllers/loginController');
const middlewares = require('./middlewares');
const validatorInputLogin = require('./middlewares/validateLogin');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ping', controllers.ping);
app.post('/login', validatorInputLogin.validateLogin, loginController.createToken);

app.use(middlewares.error);

app.listen(PORT, async () => {
  console.log(`App listening on port ${PORT}`);
  const [result] = await connection.execute('SELECT 1');
  if (result) {
    console.log('MySQL connection OK');
  }
});
