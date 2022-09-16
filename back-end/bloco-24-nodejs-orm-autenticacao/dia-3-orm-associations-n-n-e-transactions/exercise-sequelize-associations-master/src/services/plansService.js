const { Plan, Patient } = require('../models');

const listPatientsForPlan = async (planId) => {
    const hasThisPlan = await Plan.findByPk(planId);

    if (!hasThisPlan) {
        return { type: 'NOT_FOUND', message: 'plan not found' };
    }
    const result = await Plan.findAll({
        where: { planId },
        include: [{ model: Patient, as: 'Patients' }],
    });
    return { type: null, message: result };
};

module.exports = {
    listPatientsForPlan,
};