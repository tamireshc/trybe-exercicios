const { User } = require('../models/index');

const getUser = async (username) => {
    const user = await User.findOne({
        where: { username },
    });

    return user;
};

const createUser = async (username, password) => {
    const hasThisUser = await User.findOne({
        where: { username },
    });

    if (hasThisUser) {
        return { type: 'USER_ALREDY_EXISTS', message: "user already exists" }
    }

    const numberAleatory = Math.floor(Math.random() * 100)
    console.log(numberAleatory)

    const newUser = await User.create({ username, password, admin: numberAleatory > 50 ? true : false })
    console.log('newUser', newUser)
    return { type: null, message: newUser }



}

module.exports = {
    getUser,
    createUser,
};