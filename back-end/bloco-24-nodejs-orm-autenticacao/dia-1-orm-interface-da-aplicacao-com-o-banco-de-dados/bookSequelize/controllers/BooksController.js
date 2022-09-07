const express = require('express');
const BooksService = require('../services/BooksService');
const router = express.Router();

router.get('/', async (req, res) => {
    const { type, message } = await BooksService.getAll();
    if (type) { return res.status(400).json(message) }
    res.status(200).json(message)
})

router.get('/:id', async (req, res) => {
    console.log('getid')
    const { id } = req.params
    const { type, message } = await BooksService.getById(Number(id));
    if (type) { return res.status(404).json(message) }
    res.status(200).json(message)
})

router.post('/', async (req, res) => {
    const { title, author, pageQuantity } = req.body
    const { type, message } = await BooksService.create(title, author, pageQuantity)
    if (type) { return res.status(400).json(message) }
    res.status(200).json(message)
})

router.put('/:id', async (req, res) => {
    const { id } = req.params
    const { title, author, pageQuantity } = req.body
    const { type, message } = await BooksService.update(title, author, pageQuantity, Number(id))
    if (type) { return res.status(400).json(message) }
    res.status(200).json(`Book id ${message} updated!`)
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const { type, message } = await BooksService.remove(Number(id))
    if (type) { return res.status(400).json(message) }
    res.status(200).json(`Book delete!`)
})

module.exports = router