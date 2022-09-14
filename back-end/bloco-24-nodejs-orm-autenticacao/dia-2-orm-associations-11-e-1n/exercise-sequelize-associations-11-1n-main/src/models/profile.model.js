module.exports = (sequelize, DataTypes) => {
    const Profile = sequelize.define('Profile', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        phone: DataTypes.STRING,
        accountId: { type: DataTypes.INTEGER, foreignKey: true },

    },
        {
            timestamps: false,
            tableName: 'Profiles',
            underscored: true,
        }
    );

    Profile.associate = (models) => {
        Profile.belongsTo(models.Account,
            { foreignKey: 'accountId', as: 'Accounts' });
    };

    return Profile;
};