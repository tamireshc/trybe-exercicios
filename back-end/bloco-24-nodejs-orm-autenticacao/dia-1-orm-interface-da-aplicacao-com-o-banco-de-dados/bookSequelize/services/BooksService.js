const { Book } = require('../models');

const getAll = async () => {
    try {
        const books = await Book.findAll();
        return { type: null, message: books }
    } catch (error) {
        return { type: 'error', message: 'request error' }
    }
}

const getById = async (id) => {
    try {
        const book = await Book.findByPk(id)
        if (book) {
            return { type: null, message: book }
        }
        return { type: 'not found', message: 'Book not found' }
    } catch (error) {
        return { type: 'error', message: 'request error' }
    }
}

const create = async (title, author, pageQuantity) => {
    try {
        const newBook = await Book.create({ title, author, pageQuantity })
        return { type: null, message: newBook }
    } catch (error) {
        return { type: 'error', message: 'request error' }
    }
}

const update = async (title, author, pageQuantity, id) => {
    try {
        const [updateBook] = await Book.update({ title, author, pageQuantity },
            { where: { id } })
        return { type: null, message: updateBook }
    } catch (error) {
        return { type: 'error', message: 'request error' }
    }
}

const remove = async (id) => {
    try {
        const book = await Book.findByPk(id)
        if (book) {
            const deleteBook = await Book.destroy(
                { where: { id } },
            );
            console.log(deleteBook)
            return { type: null, message: deleteBook }
        }
        return { type: 'not found', message: 'Book not found' }
    } catch (error) {
        return { type: 'error', message: 'request error' }
    }
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
}