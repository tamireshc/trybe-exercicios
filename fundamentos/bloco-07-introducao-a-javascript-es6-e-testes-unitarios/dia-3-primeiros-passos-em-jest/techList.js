// 5 - A função techList recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. Para cada tecnologia no array a função cria, em ordem alfabética, um objeto com a seguinte estrutura:
// {
//   tech: 'nomeTecnologia',
//   name: name,
// }
// Implemente a função techList a partir dos testes abaixo. Experimente refatorar a função que você criou para esse projeto! É importante nunca alterar os testes ou as variáveis já escritas no código .

function techList(array, name) {
  let arraySort = array.sort();
  let arrayOfObject = [];

  if (array.length === 0) {
    return 'Vazio!';
  }

  for (let i = 0; i < arraySort.length; i += 1) {
    arrayOfObject.push({ tech: arraySort[i], name: name });
  }

  return arrayOfObject;
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

module.exports = techList;
