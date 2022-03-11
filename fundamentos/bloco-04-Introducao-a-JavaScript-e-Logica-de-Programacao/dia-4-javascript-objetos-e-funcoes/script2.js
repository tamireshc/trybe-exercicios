//? Parte II - Funções

// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function checkPalindromo(word) {
  let arrayWord = [];
  arrayWord = word.split("");
  let cloneArrayWord = [...arrayWord];
  let reverseArrayWord = [];
  reverseArrayWord = cloneArrayWord.reverse();
  let stringReverseArrayWord = reverseArrayWord.join("");

  if (word == stringReverseArrayWord) {
    return true;
  }

  return false;
}
console.log(checkPalindromo("arara"));
console.log(checkPalindromo("tamires"));

//2 Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

let arrayTeste = [2, 3, 6, 7, 10, 1];

function biggerNumberArray(array) {
  let biggerNumber = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > biggerNumber) {
      biggerNumber = array[i];
    } else {
      biggerNumber = biggerNumber;
    }
  }
  let biggerIndex = array.findIndex((n) => n == biggerNumber);
  return biggerIndex;
}

console.log(biggerNumberArray(arrayTeste));

//3 Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6

let arrayTeste2 = [2, 4, 6, 7, 10, 0, -3];

function lowerNumberArray(array) {
  let lowerNumber = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < lowerNumber) {
      lowerNumber = array[i];
    } else {
      lowerNumber = lowerNumber;
    }
  }
  let lowerIndex = array.findIndex((n) => n == lowerNumber);
  return lowerIndex;
}

console.log(lowerNumberArray(arrayTeste2));

//4  Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .

let arrayTeste3 = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"];

function biggerWordLength(array) {
  let biggerWord = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > biggerWord.length) {
      biggerWord = array[i];
    } else {
      biggerWord = biggerWord;
    }
  }

  return biggerWord;
}

console.log(biggerWordLength(arrayTeste3));

//! 5 Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .

arrayTeste4 = [2, 3, 2, 5, 8, 2, 3];

function numberMostRepeat(array) {
  let arrayRepetitionAmount = [];
  let number = 0;
  for (let i = 0; i < array.length; i++) {
    for (let x = 0; x < array.length; x++) {
      if (array[i] === array[x]) {
        number++;
      } else {
        number = number;
      }
    }
  }
  return number;
}

console.log(numberMostRepeat(arrayTeste4));

// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5 .
// Valor esperado no retorno da função: 1+2+3+4+5 = 15

function sumRegressive(number) {
  let somatorio = [];
  for (let i = 1; i <= number; i++) {
    somatorio.push(i);
  }
  let finalSum = somatorio.reduce((a, b) => a + b);
  return finalSum;
}

console.log(sumRegressive(5));

// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be') ;
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan') ;
// Retorno esperado: false

function endsWith(string, stringEnd) {
  let sameEnd = string.endsWith(stringEnd);
  return sameEnd;
}

console.log(endsWith("trybe", "be"));
console.log(endsWith("tamires", "ami"));
