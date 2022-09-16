const surgerieService = require('../services/surgeriesService');

const listSurgerieForDoctor = async (req, res) => {
    const { name } = req.params;

    const ajustName = name.replace(/%20/g, ' ');
    try {
        const { type, message } = await surgerieService.listSurgerieForDoctor(ajustName);
        if (type) {
            return res.status(400).json(message);
        }
        return res.status(200).json(message);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = {
    listSurgerieForDoctor,
};