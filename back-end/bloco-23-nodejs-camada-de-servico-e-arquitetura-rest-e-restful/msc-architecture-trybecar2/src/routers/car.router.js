const express = require('express');
const carController = require('../controllers/car.controller');

const router = express.Router();

router.post('/', carController.createCar);

router.get('/:id', carController.findCarById);

module.exports = router;