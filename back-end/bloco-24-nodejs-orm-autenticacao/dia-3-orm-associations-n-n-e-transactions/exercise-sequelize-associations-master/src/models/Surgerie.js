module.exports = (sequelize, DataTypes) => {
    const Surgerie = sequelize.define('Surgerie', {
        surgeryId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        specialty: DataTypes.STRING,
        doctor: DataTypes.STRING,
    },
        {
            timestamps: false,
            tableName: 'Surgeries',
            underscored: true,
        });

    return Surgerie;
};