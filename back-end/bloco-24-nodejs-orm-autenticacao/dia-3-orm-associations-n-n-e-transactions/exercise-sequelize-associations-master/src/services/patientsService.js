const { Patient, Plan, Surgerie } = require('../models');

const listAllPatientsWhithPlan = async () => {
    const result = await Patient.findAll({
        include: { model: Plan, as: 'Plans' },
    });

    return result;
};

const listAllPatientsWhithSurgeries = async () => {
    const result = await Patient.findAll({
        include: { model: Surgerie, as: 'Surgeries', through: { attributes: [] } },
    });

    return result;
};

const createNewpatient = async (fullname, planId) => {
    const result = await Patient.create({ fullname, planId });
    return result;
};

const listAllPatientsWhithSurgeriesExcludeDoctor = async () => {
    const result = await Patient.findAll({
        include: {
            model: Surgerie,
            as: 'Surgeries',
            attributes: { exclude: ['doctor'] },
            through: { attributes: [] },
        },
    });

    return result;
};
module.exports = {
    listAllPatientsWhithPlan,
    listAllPatientsWhithSurgeries,
    createNewpatient,
    listAllPatientsWhithSurgeriesExcludeDoctor,
};