const Joi = require('joi');
const travelModel = require('../models/travel.model');
const driverModel = require('../models/driver.model');
const carModel = require('../models/car.model');

const WAITING_DRIVER = 1;
// const DRIVER_ON_THE_WAY = 2;
// const TRAVEL_IN_PROGRESS = 3;
// const TRAVEL_FINISHED = 4;

const getWaitingDriverTravels = async () => {
    const [result] = await travelModel.findAllByStatus(WAITING_DRIVER);
    return { type: null, message: result };
};

const getDrivers = async () => {
    const result = await driverModel.listAllDrivers();
    return { type: null, message: result };
};

// continuar a 3

const getcarsById = async (carIds) => {
    const cars = [];
    for (let i = 0; i < carIds.length; i += 1) {
        const car = await carModel.findCarById(carIds[i]);
        cars.push(car);
    }
    // console.log(cars);
    return cars;
};

const schemaName = Joi.object({
    name: Joi.string().min(3).required(),
});
const schemaCarIds = Joi.array().items(Joi.object());

const valideIds = async (carIds, namex) => {
    const carsResult = await getcarsById(carIds);
    console.log(carsResult);
    const { error } = schemaCarIds.validate(carsResult);
    console.log(error);
    if (error) return { type: 'INVALID_ID', message: error.message };
    const resultId = await driverModel.createdNewDriver(namex);
    const { id, name } = await driverModel.findDriverById(resultId);
    return {
        type: null,
        message: {
            id, name, cars: carsResult,
        },
    };
};

const createDriver = async (namex, carIds) => {
    if (namex && !carIds) {
        const { error } = schemaName.validate({ namex });
        if (error) return { type: 'INVALID_VALUE', message: error.message };
        const result = await driverModel.createdNewDriver(namex);
        return { type: null, message: result };
    }
    if (carIds) {
        return valideIds(carIds, namex);
    }
};

module.exports = {
    getWaitingDriverTravels,
    getDrivers,
    createDriver,
};