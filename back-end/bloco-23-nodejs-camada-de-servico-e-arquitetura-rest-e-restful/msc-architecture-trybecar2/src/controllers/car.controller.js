const carService = require('../services/car.service');
const errorMap = require('../utils/errorMap');

const createCar = async (req, res) => {
    const car = req.body;
    const { type, message } = await carService.createCar(car);
    if (type) { return res.status(errorMap.mapError(type)).json(message); }
    res.status(201).json(message);
};

const findCarById = async (req, res) => {
    const { id } = req.params;
    const { type, message } = await carService.findCarById(Number(id));
    if (type) { return res.status(errorMap.mapError(type)).json(message); }
    res.status(200).json(message);
};

module.exports = {
    createCar,
    findCarById,
};