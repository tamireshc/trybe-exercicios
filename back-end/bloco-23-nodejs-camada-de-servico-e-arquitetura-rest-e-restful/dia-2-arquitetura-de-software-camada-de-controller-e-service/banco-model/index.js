// index.js

const express = require('express');

const connection = require('./models/connection')

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());

const errorMiddleware = require('./middlewares/error');

app.use(errorMiddleware);


const Author = require('./controllers/Authors');
const Books = require('./models/Book')
const Users = require('./models/Users')
const validUserx = require('./models/validUser');
const { json } = require('body-parser');


app.get('/authors', Author.getAll);

app.get('/authors/:id', Author.findById);

app.post('/authors', Author.createAuthor);


app.get('/books', async (req, res) => {
    const { author_id } = req.query
    if (author_id) {
        const books = await Books.getByAuthorId(Number(author_id))
        res.status(200).json(books)
    } else {
        const books = await Books.getAll()
        res.status(200).json(books)
    }
})

app.get('/books/:id', async (req, res) => {
    const { id } = req.params
    const book = await Books.getBookById(Number(id))
    if (!book) {
        res.status(404).json({ message: 'Not found' })
    } else {
        res.status(200).json(book)
    }
})

app.post('/books', async (req, res) => {
    const { title, author_id } = req.body
    if (!title || title.length < 3) {
        res.status(400).json({ message: 'Dados inválidos' })
    } if (!author_id || !Books.bookIsValid, Number(author_id)) {
        res.status(400).json({ message: 'Dados de autor inválidos' })
    } else {
        await Books.creatNewbook(title, Number(author_id))
        res.status(200).json({ message: 'Livro criado com sucesso!' })
    }
})

app.post('/user', async (req, res) => {
    const { firstName, lastName, email, password } = req.body
    if (Users.validUser(firstName, lastName, email, password)) {
        await Users.createNewUser(firstName, lastName, email, password)
        res.status(201).json({
            id: 1,
            firstName: firstName,
            lastName: lastName,
            email: email,
        })
    } else {
        res.status(400).json({
            message: 'erro ao criar o usuário'
        })
    }
})

app.get('/user', async (req, res) => {
    const users = await Users.getAllUser()
    res.status(200).json(users)
})

app.get('/user/:id', async (req, res) => {
    const { id } = req.params
    console.log(id)
    const user = await Users.getuserbyId(Number(id))
    console.log(user)
    if (!user[0]) {
        res.status(404).json({ "message": "User not Found" })
    } else {
        res.status(200).json(user[0])
    }
})

app.put('/user/:id', validUserx, async (req, res) => {
    const { firstName, lastName, email, password } = req.body
    const { id } = req.params
    const checkUser = await Users.checkIfUserExists(Number(id))
    if (!checkUser[0]) {
        res.status(404).json({ "message": "User not Found" })
    } else {
        await Users.editUser(firstName, lastName, email, id)
        res.status(200).json({
            id: id,
            firstName,
            lastName,
            email,
        })
    }
    console.log(checkUser[0])


})

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    console.log(`Ouvindo a porta ${PORT}`);

    const [result] = await connection.execute('SELECT 1');
    if (result) {
        console.log('MySQL connection OK');
    }
});