const express = require('express');

const app = express();

app.use(express.json());

const loginController = require('./src/controllers/loginController')
const validateLogin = require('./src/midlewares/validateLogin')
const userBytoken = require('./src/controllers/userByToken')
const checkValidateToken = require('./src/midlewares/auth')
const authAdmin = require('./src/midlewares/authAdmin')
const secretAdmin = require('./src/controllers/secretAdminController')
const userController = require('./src/controllers/userController')


app.post('/login', validateLogin.validateLogin, loginController.createToken);
app.get('/users/me', checkValidateToken.checkValidateToken, userBytoken.userBytoken)
app.get('/top-secret', authAdmin.validateIfUserIsAdmin, secretAdmin.secretAdmin)
app.post('/signup', validateLogin.validateLogin, userController.createUser)



module.exports = app;