const { Book } = require('../models')

const getAll = async () => {
	const books = await Book.findAll()
	//console.log(books)
	return books
}

const getById = async (id) => {
	const book = await Book.findByPk(id)
	if (!book) {
		return { type: 'NOT FOUND', message: "Book not found" }
	}
	return { type: null, message: book }
}

const create = async (title, author, pageQuantity) => {
	const result = await Book.create({ title, author, pageQuantity })
	return { type: null, message: result }
}

const update = async (title, author, pageQuantity, id) => {
	const hasBookForEdit = await Book.findByPk(id)
	if (!hasBookForEdit) {
		return { type: 'NOT FOUND', message: "Book not found" }
	}
	const [result] = await Book.update(
		{ title, author, pageQuantity },
		{ where: { id } },
	);
	console.log(result)
	return { type: null, message: result }
}

const remove = async (id) => {
	const hasBookForEdit = await Book.findByPk(id)
	if (!hasBookForEdit) {
		return { type: 'NOT FOUND', message: "Book not found" }
	}
	const result = await Book.destroy(
		{ where: { id } },
	);
	return { type: null, message: result }

}

module.exports = {
	getAll,
	getById,
	create,
	update,
	remove,
}