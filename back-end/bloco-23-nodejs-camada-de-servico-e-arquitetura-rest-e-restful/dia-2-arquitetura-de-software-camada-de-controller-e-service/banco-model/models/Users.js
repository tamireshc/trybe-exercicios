const connection = require('./connection')

const createNewUser = async (first_name, last_name, email, password) => {
    await connection.execute(
        'INSERT INTO model_example.users (first_name, last_name, email, password) VALUES (?,?,?,?)',
        [first_name, last_name, email, password]
    )
}

const validUser = (first_name, last_name, email, password) => {
    if (!first_name, !last_name, !email, !password) {
        return false
    } if (typeof password !== 'string') {
        return false
    } if (password.length < 7) {
        return false
    }
    else {
        return true
    }
}

const getAllUser = async () => {
    const [users] = await connection.execute(
        'SELECT * from model_example.users'
    )
    return users
}

const getuserbyId = async (id) => {
    const [user] = await connection.execute(
        'SELECT * FROM model_example.users WHERE id = ?', [id]
    )
    return user
}

const checkIfUserExists = async (id) => {
    const [user] = await connection.execute(
        'SELECT id FROM model_example.users WHERE id = ?', [id]
    )
    console.log(user)
    return user

}

const editUser = async (first_name, last_name, email, id) => {
    await connection.execute(
        'UPDATE users SET first_name = ?, last_name = ?, email = ? WHERE id = ? ',
        [first_name, last_name, email, id]
    )
}

module.exports = {
    createNewUser,
    validUser,
    getAllUser,
    getuserbyId,
    checkIfUserExists,
    editUser,

}