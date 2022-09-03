const express = require('express');
require('dotenv').config();
const { passengerService, driverService } = require('./services');
const carService = require('./services/car.service');

const connection = require('./models/connection');
const travelModel = require('./models/travel.model');
const driverModel = require('./models/driver.model');
const carModel = require('./models/car.model');
const driverCarModel = require('./models/driver_car.model');
// const passengerModel = require('./models/passenger.model');

const app = express();

app.use(express.json());

// const WAITING_DRIVER = 1;
const DRIVER_ON_THE_WAY = 2;
const TRAVEL_IN_PROGRESS = 3;
const TRAVEL_FINISHED = 4;

app.post('/passengers/:passengerId/request/travel', async (req, res) => {
  const { passengerId } = req.params;
  const { startingAddress, endingAddress, waypoints } = req.body;

  const travel = await passengerService.requestTravel(passengerId, startingAddress,
    endingAddress, waypoints);
  return res.status(201).json(travel);

  // res.status(500).json({ message: 'Ocorreu um erro' });
});

app.get('/drivers/open/travels', async (_req, res) => {
  const result = await driverService.getWaitingDriverTravels();
  res.status(200).json(result);
});

app.put('/drivers/:driverId/travels/:travelId/assign', async (req, res) => {
  const { travelId, driverId } = req.params;

  await travelModel.updateById(travelId, { driverId, travelStatusId: DRIVER_ON_THE_WAY });
  const travel = await travelModel.findById(travelId);

  res.status(200).json(travel);
});

app.put('/drivers/:driverId/travels/:travelId/start', async (req, res) => {
  const { travelId, driverId } = req.params;
  await travelModel.updateById(travelId, { driverId, travelStatusId: TRAVEL_IN_PROGRESS });
  const result = await travelModel.findById(travelId);
  res.status(200).json(result);
});

app.put('/drivers/:driverId/travels/:travelId/end', async (req, res) => {
  const { travelId, driverId } = req.params;
  await travelModel.updateById(travelId, { driverId, travelStatusId: TRAVEL_FINISHED });
  const result = await travelModel.findById(travelId);
  res.status(200).json(result);
});

app.get('/drivers', async (req, res) => {
  const result = await driverService.getDrivers();
  console.log(result);
  res.status(200).json(result);
});

app.get('/drivers/:id', async (req, res) => {
  const { id } = req.params;
  const driver = await driverModel.findDriverById(Number(id));
  res.status(200).json(driver);
});

app.post('/drivers', async (req, res) => {
  const { name, carIds } = req.body;
  const result = await driverService.createDriver(name, carIds);
  res.status(201).json(result);
});

app.post('/cars', async (req, res) => {
  const car = req.body;
  const result = await carService.createCar(car);
  console.log(result);
  res.status(201).json(result);
});

app.get('/cars/:id', async (req, res) => {
  const { id } = req.params;
  const result = await carModel.findCarById(Number(id));
  res.status(200).json(result);
});

app.post('/driverCar', async (req, res) => {
  const { driverId, carId } = req.body;
  const result = await driverCarModel.insert(driverId, carId);
  res.status(200).json(result);
});

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
