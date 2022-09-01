const connection = require('./connection');

const insert = async (driverId, carId) => {
  const [{ affectedRows }] = await connection.execute(
    'INSERT INTO drivers_cars (driver_id, car_id) VALUE (?, ?)',
    [driverId, carId],
  );

  return affectedRows;
};

module.exports = {
  insert,
};
