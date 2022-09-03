const Joi = require('joi');
const carModel = require('../models/car.model');

const schemaCreateCar = Joi.object({
    model: Joi.string().min(3).required(),
    color: Joi.string().min(2).required(),
    licensePlate: Joi.string().min(7).max(7).required(),

});

const createCar = async ({ model, color, licensePlate }) => {
    const { error } = schemaCreateCar.validate({ model, color, licensePlate });
    if (error) {
        return {
            type: 'INVALID_VALUE',
            message: error.message,
        };
    }
    const insertId = await carModel.addNewCar({ model, color, licensePlate });
    const dataCarCreated = await carModel.findCarById(insertId);
    return { type: null, message: dataCarCreated };
};

module.exports = {
    createCar,
};