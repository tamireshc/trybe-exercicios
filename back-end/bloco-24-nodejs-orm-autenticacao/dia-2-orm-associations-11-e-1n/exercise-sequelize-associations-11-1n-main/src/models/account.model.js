module.exports = (sequelize, DataTypes) => {
    const Account = sequelize.define('Account', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        email: DataTypes.STRING,
        password: DataTypes.STRING,

    },
        {
            timestamps: false,

        }
    );

    Account.associate = (models) => {
        Account.hasOne(models.Profile,
            { foreignKey: 'accountId', as: 'Profiles' });

        Account.hasMany(models.Comment,
            { foreignKey: 'accountId', as: 'Comments' });
    };

    return Account;
};