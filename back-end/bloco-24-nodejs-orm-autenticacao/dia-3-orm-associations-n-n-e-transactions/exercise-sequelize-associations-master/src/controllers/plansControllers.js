const plansService = require('../services/plansService');

const listPatientsForPlan = async (req, res) => {
    const { id } = req.params;
    try {
        const { type, message } = await plansService.listPatientsForPlan(id);
        if (type) {
            return res.status(400).json(message);
        }
        return res.status(200).json(message);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = {
    listPatientsForPlan,
};