const UserModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        admin: DataTypes.BOOLEAN,
    },
        {
            timestamps: false,
            tableName: 'Users',
            underscored: true,
        });

    return User;
};

module.exports = UserModel;