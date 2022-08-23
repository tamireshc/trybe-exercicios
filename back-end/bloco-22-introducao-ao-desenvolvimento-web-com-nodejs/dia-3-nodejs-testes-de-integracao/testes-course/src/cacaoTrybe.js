const fs = require('fs').promises
const { join } = require('path')

const path = 'files/cacaoTrybeFile.json';


const readcacaoTrybeFile = async () => {
    try {
        const contentFile = await fs.readFile(join(__dirname, path), 'utf-8')
        return JSON.parse(contentFile)
    } catch (error) {
        console.error('Erro ao abrir o arquivo', error.message)
        return null;
    }
}

const writeCacaoTrybe = async (data) => {
    console.log(data)
    try {
        await fs.writeFile(join(__dirname, path), JSON.stringify(data))
    } catch (error) {
        return console.log('Erro ao salvar o arquivo');
    }
}

const getAllChocolates = async () => {
    const cacaoTrybe = await readcacaoTrybeFile()
    return cacaoTrybe.chocolates;

}

const getChocolateById = async (id) => {
    const cacaoTrybe = await readcacaoTrybeFile()
    const chocolateById = cacaoTrybe.chocolates.filter((item) => item.id === id)
    return chocolateById
}

const getChocolatesByBrand = async (brandId) => {
    const cacaoTrybe = await readcacaoTrybeFile()
    const chocolateByBrandId = cacaoTrybe.chocolates.filter((item) => item.brandId === brandId)
    return chocolateByBrandId
}

// const getChocolatesByBrand = async (brandId) => {
//     const cacaoTrybe = await readcacaoTrybeFile()
//     return cacaoTrybe.chocolates
//         .filter((chocolate) => chocolate.brandId === brandId);
// };

const getTotalChocolates = async () => {
    const cacaoTrybe = await readcacaoTrybeFile()
    return cacaoTrybe.chocolates.length
}

const getChocolateByName = async (name) => {
    const cacaoTrybe = await readcacaoTrybeFile()
    const result = cacaoTrybe.chocolates.filter((item) => item.name.includes(name))
    // console.log(result[0])
    if (result[0]) {
        return result
    } else {
        return 'error'
    }
}

const createChocolate = async ({ name, brandId }) => {
    const data = await readcacaoTrybeFile()
    const newChocolate = {
        id: data.nextChocolateId,
        name,
        brandId
    }
    data.chocolates.push(newChocolate)
    data.nextChocolateId = data.nextChocolateId + 1
    await writeCacaoTrybe(data)
    return newChocolate
}

const deleteChocolate = async (id) => {
    const cacaoTrybe = await readcacaoTrybeFile()
    const newData = cacaoTrybe.chocolates.filter((item) => item.id !== id)
    await writeCacaoTrybe(newData)
    return newData
}

module.exports = {
    getAllChocolates,
    getChocolateById,
    getChocolatesByBrand,
    getTotalChocolates,
    getChocolateByName,
    createChocolate,
    deleteChocolate
}