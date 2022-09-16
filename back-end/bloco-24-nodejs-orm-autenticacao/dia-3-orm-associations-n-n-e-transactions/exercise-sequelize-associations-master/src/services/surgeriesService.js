const { Surgerie, Patient } = require('../models');

const listSurgerieForDoctor = async (doctor) => {
    // console.log('doctor', doctor, typeof doctor);
    const hasThisDoctor = await Surgerie.findOne({
        where: { doctor },
    });
    if (!hasThisDoctor) {
        return { type: 'NOT_FOUND', message: 'doctor not found' };
    }
    const result = await Surgerie.findOne({
        where: { doctor },
        include: [{ model: Patient, as: 'Patients', through: { attributes: [] } }],
    });
    return { type: null, message: result };
};

module.exports = {
    listSurgerieForDoctor,
};