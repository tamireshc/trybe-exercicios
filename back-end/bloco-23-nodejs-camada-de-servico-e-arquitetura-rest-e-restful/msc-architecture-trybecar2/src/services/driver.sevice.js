const Joi = require('joi');
const travelModel = require('../models/travel.model');
const driverModel = require('../models/driver.model');

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

//continuar a 3

const schema = Joi.object({
    name: Joi.string().min(3).required(),
    carIds: Joi.array(),
});

const createDriver = async (name, carIds) => {
    const { error } = schema.validate(name, carIds);
    if (error) return { type: 'INVALID_VALUE', message: error.message };
    const result = await driverModel.createdNewDriver(name, carIds);
    return { type: null, message: result };
};

module.exports = {
    getWaitingDriverTravels,
    getDrivers,
    createDriver,
};