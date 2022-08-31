const connection = require('./connection');


const getDataCep = async (cep) => {
    const [data] = await connection.execute(
        'SELECT * FROM cep_lookup.ceps WHERE cep = ?', [cep]
    )
    // console.log(data)
    return data
}

const postCep = async (cepNumber, logradouro, bairro, localidade, uf) => {
    await connection.execute(
        'INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf) VALUES(?,?,?,?,?)',
        [cepNumber, logradouro, bairro, localidade, uf]
    )

}

const postBairro = async (bairro, localidade, uf) => {
    await connection.execute(
        'INSERT INTO cep_lookup2.bairros ( bairro, localidade, uf) VALUES(?,?,?)',
        [bairro, localidade, uf]
    )
}

module.exports = {
    getDataCep,
    postCep,
    postBairro,
}