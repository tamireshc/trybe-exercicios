const snakeize = require('snakeize');
const camelize = require('camelize');
const connection = require('./connection');

const addNewCar = async (car) => {
    const columns = Object.keys(snakeize(car))
        .map((key) => `${key}`)
        .join(', ');

    const placeholders = Object.keys(car)
        .map((_key) => '?')
        .join(', ');

    const [{ insertId }] = await connection.execute(
        `INSERT INTO trybecardb.cars (${columns}) VALUES (${placeholders})`,
        [...Object.values(car)],
    );

    return insertId;
};

const findCarById = async (id) => {
    const [car] = await connection.execute(
        'SELECT * FROM trybecardb.cars WHERE id = ?', [id],
    );
    return camelize(car[0]);
};

module.exports = {
    addNewCar,
    findCarById,
};