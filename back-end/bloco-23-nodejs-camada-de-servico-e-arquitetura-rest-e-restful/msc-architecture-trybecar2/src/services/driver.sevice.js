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

const schemaFormatCarIds = Joi.array();

const schemaCarIds = Joi.array().items(Joi.object());

const valideIds = async (carIds, namex) => {
    const carsResult = await getcarsById(carIds);
    console.log(carsResult);
    const { error } = schemaCarIds.validate(carsResult);
    if (error) {
        return {
            type: 'CAR_NOT_FOUND',
            message: 'Some car is not found',
        };
    }
    const resultId = await driverModel.createdNewDriver(namex);
    const { id, name } = await driverModel.findDriverById(resultId);
    return {
        type: null,
        message: {
            id, name, cars: carsResult,
        },
    };
};

const valideName = async (name) => {
    const { error } = schemaName.validate({ name });
    if (error) return { type: 'INVALID_VALUE', message: error.message };
    const result = await driverModel.createdNewDriver(name);
    return { type: null, message: result };
};

const createDriver = async (name, carIds) => {
    if (name && !carIds) {
        return valideName(name);
    }
    if (carIds) {
        const { error } = schemaFormatCarIds.validate(carIds);
        if (error) {
            return {
                type: 'INVALID_VALUE',
                message: error.message,
            };
        }
        return valideIds(carIds, name);
    }
};

module.exports = {
    getWaitingDriverTravels,
    getDrivers,
    createDriver,
    getcarsById,
};