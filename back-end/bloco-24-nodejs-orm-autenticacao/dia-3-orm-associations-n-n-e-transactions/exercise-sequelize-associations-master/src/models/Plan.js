module.exports = (sequelize, DataTypes) => {
    const Plan = sequelize.define('Plan', {
        planId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        coverage: DataTypes.STRING,
        price: DataTypes.DOUBLE,
    },
        {
            timestamps: false,
            tableName: 'Plans',
            underscored: true,
        });

    Plan.associate = (models) => {
        Plan.hasOne(models.Patient,
            { foreignKey: 'planId', as: 'Patients' });
    };

    return Plan;
};