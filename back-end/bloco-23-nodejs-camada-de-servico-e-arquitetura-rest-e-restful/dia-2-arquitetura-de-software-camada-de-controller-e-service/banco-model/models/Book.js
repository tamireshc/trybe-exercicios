const connection = require('./connection');

const getAll = async () => {
    const [books] = await connection.execute(
        ' SELECT * FROM model_example.books;',
    )
    return books.map((item) => ({
        id: item.id,
        title: item.title,
        authorId: item.author_id,
    }))

}

const getByAuthorId = async (id) => {
    const [books] = await connection.execute(
        'SELECT * FROM model_example.books WHERE author_id=?', [id]
    )
    return books.map((item) => ({
        id: item.id,
        title: item.title,
        authorId: item.author_id,
    }))
}

const getBookById = async (id) => {
    const [book] = await connection.execute(
        'SELECT * FROM model_example.books WHERE id = ?', [id]
    )
    console.log(book)
    return book.map((item) => ({
        id: item.id,
        title: item.title,
        authorId: item.author_id,
    }))[0]
}

const creatNewbook = async (title, author_id) => {
    await connection.execute(
        'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
        [title, author_id]
    )
}

const bookIsValid = async (author_id) => {
    const [hasAuthorId] = await connection.execute(
        'SELECT id FROM model_example.authors WHERE id=?',
        [author_id]
    )
    console.log(hasAuthorId[0])

    if (hasAuthorId[0]) {
        return true
    } else {
        return false
    }
}

module.exports = {
    getAll,
    getByAuthorId,
    getBookById,
    creatNewbook,
    bookIsValid,
};