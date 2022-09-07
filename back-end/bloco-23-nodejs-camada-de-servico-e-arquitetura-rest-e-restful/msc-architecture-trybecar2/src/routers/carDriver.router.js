const express = require('express');

const router = express.Router();
const driverCarModel = require('../models/driver_car.model');

router.post('/', async (req, res) => {
    const { driverId, carId } = req.body;
    const result = await driverCarModel.insert(driverId, carId);
    res.status(200).json(result);
});

module.exports = router;
