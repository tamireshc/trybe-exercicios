const fs = require('fs').promises
const { join } = require('path')

const path = 'activities.json';

const readEcoturismoJsonFile = async () => {
    try {
        const contentFile = await fs.readFile(join(__dirname, path), 'utf-8')
        return JSON.parse(contentFile)
    } catch (error) {
        console.error('Erro ao abrir o arquivo', error.message)
        return null;
    }
}

const writeEcoturismoJsonFile = async (data) => {
    try {
        await fs.writeFile(join(__dirname, path), JSON.stringify(data))
    } catch (error) {
        return console.log('Erro ao salvar o arquivo');
    }
}

const createActivitie = async ({ name, price, description }) => {
    const data = await readEcoturismoJsonFile()
    //console.log(data)
    const newActivitie = {
        id: data.nextId,
        name,
        price,
        description
    }
    data.activities.push(newActivitie)
    data.nextId = data.nextId + 1
    await writeEcoturismoJsonFile(data)
    return newActivitie
}

const createUser = async ({ Email, first_name, password, phone_number }) => {
    const data = await readEcoturismoJsonFile()
    //console.log(data)
    const newUser = {
        id: data.nextUser,
        Email,
        first_name,
        password,
        phone_number
    }
    data.users.push(newUser)
    data.nextUser = data.nextUser + 1
    await writeEcoturismoJsonFile(data)
    return newUser
}

module.exports = {
    createActivitie,
    createUser
}