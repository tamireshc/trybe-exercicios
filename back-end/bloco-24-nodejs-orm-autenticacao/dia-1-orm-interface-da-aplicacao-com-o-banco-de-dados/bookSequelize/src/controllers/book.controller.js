const BookService = require('../services/book.service')

const getAll = async (req, res) => {
  try {
    const books = await BookService.getAll()
    console.log(books)
    return res.status(200).json(books)
  } catch (error) {
    res.status(500).json({ message: 'Algo deu errado' })
  }
}

const getById = async (req, res) => {
  const { id } = req.params
  const { type, message } = await BookService.getById(Number(id))
  if (type) {
    return res.status(404).json(message)
  }
  res.status(200).json(message)

}

const create = async (req, res) => {
  const { title, author, pageQuantity } = req.body
  try {
    const { message } = await BookService.create(title, author, pageQuantity)
    return res.status(201).json(message)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

const update = async (req, res) => {
  try {
    const { id } = req.params
    const { title, author, pageQuantity } = req.body
    const { type, message } = await BookService.update(title, author, pageQuantity, id)
    if (type) {
      return res.status(404).json(message)
    }
    return res.status(200).json(message)
  } catch (error) {
    res.status(500).json({ message: 'Algo deu errado' })
  }
}

const remove = async (req, res) => {
  try {
    const { id } = req.params
    const { type, message } = await BookService.remove(Number(id))
    if (type) {
      return res.status(404).json(message)
    }
    return res.status(200).json(message)
  } catch (error) {
    res.status(500).json({ message: 'Algo deu errado' })
  }

}


module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
}