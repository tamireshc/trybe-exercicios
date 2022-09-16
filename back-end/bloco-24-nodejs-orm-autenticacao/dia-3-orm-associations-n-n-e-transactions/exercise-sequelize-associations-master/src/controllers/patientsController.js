const patientService = require('../services/patientsService');

const listAllPatientsWhithPlan = async (req, res) => {
    try {
        const result = await patientService.listAllPatientsWhithPlan();
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

const listAllPatientsWhithSurgeries = async (req, res) => {
    try {
        const result = await patientService.listAllPatientsWhithSurgeries();
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

const createNewpatient = async (req, res) => {
    const { fullname, planId } = req.body;

    try {
        await patientService.createNewpatient(fullname, planId);
        res.status(201).json('patient created');
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

const listAllPatientsWhithSurgeriesExcludeDoctor = async (req, res) => {
    try {
        const result = await patientService.listAllPatientsWhithSurgeriesExcludeDoctor();
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = {
    listAllPatientsWhithPlan,
    listAllPatientsWhithSurgeries,
    createNewpatient,
    listAllPatientsWhithSurgeriesExcludeDoctor,
};