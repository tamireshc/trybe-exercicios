const aleatoryNumber = () => Math.random() * 100;

const toUpercaseFunction = (string) => string.toUpperCase()

const firstCaracterOfString = (string) => {
  const arrayString = string.split("")
  return arrayString[ 0 ]

}

const concatTwoStrins = (stringOne, stringTwo) => {
  const concat = stringOne + stringTwo
  return concat

}

console.log(concatTwoStrins('tamres', "nois"))

const fetchDogsApi = async () => {
  try {
    const fetchDog = await fetch('https://dog.ceo/api/breeds/image/random');
    const fecthJson = await fetchDog.json()
    console.log(fecthJson.status)
    return fecthJson.status
  } catch (error) {
    console.log(`Algo deu errado :( \n${error}`);
  }

}

console.log(fetchDogsApi())
module.exports = { aleatoryNumber, toUpercaseFunction, firstCaracterOfString, concatTwoStrins, fetchDogsApi }