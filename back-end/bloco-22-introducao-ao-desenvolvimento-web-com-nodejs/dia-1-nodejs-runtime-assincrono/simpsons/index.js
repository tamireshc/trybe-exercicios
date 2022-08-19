
const readline = require('readline-sync')
const fs = require('fs')


// Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.
const simpsons = require('./simpsons.json')

const allCharactersFunction =  () => {
    const response = simpsons.map((item) => console.log(`${item.id} - ${item.name}`) )
    return(response)
}
// Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".

// const id = readline.question('qual é o id do personagem?')

const dataCharacter =  () => {
  const character = simpsons.filter((item) => item.id === id);
  if(character[0] === undefined){
    return console.log("id não encontrado")
  }else{
    return console.log(character);
  }
};

// const doFile  = async  () => {
//     await dataCharacter()
// }

// doFile()

// Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

const removeCaracters = () => {
  const result = simpsons.filter((i)=> i.id !== '6' &&  i.id !== '10')
  const resultJson = JSON.stringify(result)
  // console.log(result)
  fs.writeFileSync('./simpsons.json', resultJson)
  
}

removeCaracters()

// Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.

const newFileSimpson = () => {
    const result = simpsons.filter((item) => item.id === '1' || item.id === '4')
    console.log(result)
    fs.writeFileSync('simpsonFamily.json', JSON.stringify(result))
}

newFileSimpson()

// Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.

const simpsonFamily = require('./simpsonFamily.json')
const { parse } = require('path')

const addNelson = () => {
  //{"id":"8","name":"Nelson Muntz"}
  const nelson = simpsons.filter((item)=> item.name === "Nelson Muntz")
  const newSimpsonFile = [...simpsonFamily, nelson[0]]
  fs.writeFileSync('./simpsonFamily.json', JSON.stringify(newSimpsonFile))
  // console.log(fs.readFileSync('./simpsonFamily.json', 'utf-8'))
}

addNelson()

//Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.


const changeNelsonToMaggie =  () => {
 const convert = fs.readFileSync('./simpsonFamily.json', 'utf-8')
 let convertido = JSON.parse(convert)

 const index = JSON.parse(convert).findIndex((item) => item.name === "Nelson Muntz")
 convertido[index].name = "Maggie Simpson" 
 fs.writeFileSync('./simpsonFamily.json', JSON.stringify(convertido))
 


}

changeNelsonToMaggie()