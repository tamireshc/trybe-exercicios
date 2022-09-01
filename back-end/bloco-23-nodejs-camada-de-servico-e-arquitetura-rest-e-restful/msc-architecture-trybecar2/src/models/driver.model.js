const connection = require('./connection');

const listAllDrivers = async () => {
    const [drivers] = await connection.execute(
        'SELECT * FROM trybecardb.drivers',
    );
    return drivers;
};

const findDriverById = async (id) => {
    const [driver] = await connection.execute(
        'SELECT * FROM trybecardb.drivers WHERE id = ?', [id],
    );
    return driver[0];
};

const createdNewDriver = async (name) => {
    const [{ insertId }] = await connection.execute(
        'INSERT INTO trybecardb.drivers (name) VALUES(?)', [name],
    );

    return insertId;
};

module.exports = {
    listAllDrivers,
    findDriverById,
    createdNewDriver,
};