const UserModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
    },
        {
            timestamps: false,
            tableName: 'Users',
            underscored: true,
        });

    return User;
};

module.exports = UserModel;