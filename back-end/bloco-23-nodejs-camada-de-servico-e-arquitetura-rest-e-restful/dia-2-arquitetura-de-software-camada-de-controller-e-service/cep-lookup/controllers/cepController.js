const Cep = require('../services/cepService')
const axios = require('axios').default;

const findCepOnExternalApi = async (cep) => {
    const cepNumber = cep.replace('-', '')
    const checkCep = await axios.get(`https://viacep.com.br/ws/${cepNumber}/json/`);
    // const data = await checkCep.json()
    console.log(checkCep.data)
    return checkCep.data
}


const getdataByCep = async (req, res) => {
    const { cep } = req.params
    const data = await Cep.getDatacep(cep)
    if (!data) {
        const checkCep = await findCepOnExternalApi(cep)
        if (checkCep.erro) {
            res.status(404).json({ "error": { "code": "notFound", "message": "CEP não existe na api externa" } })
        } else {
            const cepNumber = checkCep.cep.replace('-', '')

            console.log(cepNumber, checkCep.logradouro, checkCep.bairro, checkCep.localidade, checkCep.uf)
            await Cep.postCep(cepNumber, checkCep.logradouro, checkCep.bairro, checkCep.localidade, checkCep.uf)
            await Cep.postBairro(checkCep.bairro, checkCep.localidade, checkCep.uf)
            res.status(404).json({ "error": { "code": "notFound", "message": "CEP não encontrado e foi cadastrado" } })
        }
    } else {
        res.status(200).json(data[0])
    }
}

// cepNumber, logradouro, bairro, localidade, uf

// {
//     cep: '34006-053',
//     logradouro: 'Rua Ministro Orozimbo Nonato',
//     complemento: '',
//     bairro: 'Vila da Serra',
//     localidade: 'Nova Lima',
//     uf: 'MG',
//     ibge: '3144805',
//     gia: '',
//     ddd: '31',
//     siafi: '4895'
//   }

const postCep = async (req, res) => {
    const { cep, logradouro, bairro, localidade, uf } = req.body
    console.log('cep', cep)
    const data = await Cep.getDatacep(cep)
    if (data) {
        res.status(409).json({ "error": { "code": "alreadyExists", "message": "CEP já existente" } })
    } else {
        const cepNumber = cep.replace('-', '')
        await Cep.postCep(cepNumber, logradouro, bairro, localidade, uf)
        res.status(201).json({ cep, logradouro, bairro, localidade, uf })
    }


}

module.exports = {
    getdataByCep,
    postCep,
}