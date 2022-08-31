const Cep = require('../models/cepModel')

const getDatacep = async (cep) => {
    const cepNumber = cep.replace('-', '')
    // console.log(cepNumber)
    const data = await Cep.getDataCep(cepNumber)
    if (!data[0]) {
        return false
    } else {
        return data
    }
}

const postCep = async (cepNumber, logradouro, bairro, localidade, uf) => {
    await Cep.postCep(cepNumber, logradouro, bairro, localidade, uf)
}

const postBairro = async (bairro, localidade, uf) => {
    await Cep.postBairro(bairro, localidade, uf)
}

module.exports = {
    getDatacep,
    postCep,
    postBairro,

}