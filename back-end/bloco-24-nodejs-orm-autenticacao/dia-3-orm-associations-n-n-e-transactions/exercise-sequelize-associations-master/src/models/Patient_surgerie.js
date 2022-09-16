module.exports = (sequelize, _DataTypes) => {
    const PatientSurgeries = sequelize.define('PatientSurgeries',
        {},
        {
            timestamps: false,
            underscored: true,
            tableName: 'Patient_surgeries'
        },
    );

    PatientSurgeries.associate = (models) => {
        models.Patient.belongsToMany(models.Surgerie, {
            as: 'Surgeries',
            through: PatientSurgeries,
            foreignKey: 'patientId',
            otherKey: 'surgeryId',
        });
        models.Surgerie.belongsToMany(models.Patient, {
            as: 'Patients',
            through: PatientSurgeries,
            foreignKey: 'surgeryId',
            otherKey: 'patientId',
        });
    };

    return PatientSurgeries;
};