const bodyParser = require('body-parser');
const express = require('express');

const accoutController = require('./controllers/accounts.controller');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/accounts-v2/:id', accoutController.getByIdWithoutProfile);

app.get('/accounts/:id/comments', accoutController.listCommentsByAccountId);

app.post('/accounts', accoutController.createAccount);

app.post('/accounts/:id/comment', accoutController.createComment);

app.get('/accounts/:id', accoutController.getById);

module.exports = app;
