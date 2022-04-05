// Implemente a função hydrate a partir dos testes abaixo. Experimente refatorar a função que você criou para o projeto Playground Function! É importante nunca alterar os testes ou as variáveis já escritas no código .

function hydrate(string) {
  let regex = /\d+/g;
  let matches = string.match(regex);
  let numbers = [];
  let number = 0;
  for (let i = 0; i < matches.length; i += 1) {
    number = parseInt(matches[i]);
    numbers.push(number);
  }
  let sumOfCups = numbers.reduce((a, b) => a + b);
  if (sumOfCups === 1) {
    return `${sumOfCups} copo de água`;
  }
  return `${sumOfCups} copos de água`;
}

module.exports = hydrate;
