const connection = require('./connection');

const insert = (task) => connection.execute(
    `INSERT INTO tasks
    (nome,descricao ) VALUES(?,?)`,
    [task.nome, task.descricao],
);

const findAll = () => connection.execute('SELECT * FROM tasks');

module.exports = {
    insert,
    findAll,
};