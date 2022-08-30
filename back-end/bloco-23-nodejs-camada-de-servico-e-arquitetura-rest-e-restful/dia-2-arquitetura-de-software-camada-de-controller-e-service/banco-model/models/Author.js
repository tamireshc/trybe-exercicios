// models/Author.js

const connection = require('./connection');

const serialize = (authorData) => ({
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name
});

const getNewAuthor = ({ id, firstName, middleName, lastName }) => {

    // Note que `Boolean` é uma função que recebe um parâmetro e retorna true ou false
    // nesse caso, se middle_name for `undefined` ou uma string vazia o retorno será `false`
    const fullName = [firstName, middleName, lastName]
        .filter(Boolean)
        .join(' ');

    return {
        id,
        firstName,
        middleName,
        lastName,
        fullName,
    };
};

const findByName = async (firstName, middleName, lastName) => {
    // Determinamos se devemos buscar com ou sem o nome do meio
    let query = `
      SELECT id, first_name, middle_name, last_name 
      FROM model_example.authors
    `;

    if (middleName) {
        query += 'WHERE first_name = ? AND middle_name = ? AND last_name = ?';
    } else {
        query += 'WHERE first_name = ? AND last_name = ?';
    }

    const params = middleName ? [firstName, middleName, lastName] : [firstName, lastName];

    // Executamos a consulta e retornamos o resultado
    const [authorData] = await connection.execute(query, params);

    // Caso nenhum author seja encontrado, devolvemos null
    if (authorData.length === 0) return null;

    // Caso contrário, retornamos o author encontrado
    return serialize(authorData);
};

const getAll = async () => {
    const [authors] = await connection.execute(
        'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
    );
    return authors.map(serialize).map(getNewAuthor);
    ;
};

const findById = async (id) => {
    const [author] = await connection.execute(
        'SELECT first_name, middle_name, last_name FROM model_example.authors WHERE id=?', [id]
    )
    console.log(author)
    return serialize(author[0])
}

const createAuthor = async (firstName, middleName, lastName) =>
    connection.execute('INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)',
        [firstName, middleName, lastName]
    )




module.exports = {
    getAll,
    findById,
    createAuthor,
    findByName,
};