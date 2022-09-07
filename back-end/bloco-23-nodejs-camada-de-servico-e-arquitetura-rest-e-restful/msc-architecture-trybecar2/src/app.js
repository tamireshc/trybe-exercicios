const express = require('express');
require('dotenv').config();
const { passengerRoutes, driverRoutes, carRoutes, carDriverRoutes } = require('./routers');

const connection = require('./models/connection');

const app = express();

app.use(express.json());

// const WAITING_DRIVER = 1;
// const DRIVER_ON_THE_WAY = 2;
// const TRAVEL_IN_PROGRESS = 3;
// const TRAVEL_FINISHED = 4;

app.use('/passengers', passengerRoutes);
app.use('/drivers', driverRoutes);
app.use('/cars', carRoutes);
app.use('/driverCar', carDriverRoutes);

const PORT = process.env.PORT || 3002;

app.listen(PORT, async () => {
  console.log(`API TrybeCar está sendo executada na porta ${PORT}`);

  // O código abaixo é para testarmos a comunicação com o MySQL
  const [result] = await connection.execute('SELECT 1');
  if (result) {
    console.log('MySQL connection OK');
  }
});

module.exports = app;
