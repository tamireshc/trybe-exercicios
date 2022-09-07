const driverService = require('../services/driver.sevice');
const errorMap = require('../utils/errorMap');

const openTravel = async (_req, res) => {
    const { type, message } = await driverService.getWaitingDriverTravels();

    // Linha de código responsável por gerar uma resposta em caso de erro no
    // processamento do componente de software da camada `Service`
    if (type) return res.status(errorMap.mapError(type)).json(message);

    res.status(200).json(message);
};
const getDriver = async (req, res) => {
    const { message } = await driverService.getDrivers();
    res.status(200).json(message);
};

const createDriver = async (req, res) => {
    const { name, carIds } = req.body;
    const { type, message } = await driverService.createDriver(name, carIds);
    if (type) { return res.status(errorMap.mapError(type)).json(message); }
    res.status(201).json(message);
};

const travelAssign = async (req, res) => {
    const { travelId, driverId } = req.params;
    const { type, message } = await driverService.travelAssign({
        travelId,
        driverId,
    });
    if (type) return res.status(errorMap.mapError(type)).json(message);

    res.status(200).json(message);
};

const startTravel = async (req, res) => {
    const { travelId, driverId } = req.params;
    const { type, message } = await driverService.startTravel({
        travelId,
        driverId,
    });
    if (type) return res.status(errorMap.mapError(type)).json(message);

    res.status(200).json(message);
};

const endTravel = async (req, res) => {
    const { travelId, driverId } = req.params;
    const { type, message } = await driverService.endTravel({
        travelId,
        driverId,
    });
    if (type) return res.status(errorMap.mapError(type)).json(message);

    res.status(200).json(message);
};

const findDriverById = async (req, res) => {
    const { id } = req.params;
    const { type, message } = await driverService.findDriverById(Number(id));
    if (type) return res.status(errorMap.mapError(type)).json(message);

    res.status(200).json(message);
};

module.exports = {
    openTravel,
    getDriver,
    createDriver,
    travelAssign,
    startTravel,
    endTravel,
    findDriverById,

};