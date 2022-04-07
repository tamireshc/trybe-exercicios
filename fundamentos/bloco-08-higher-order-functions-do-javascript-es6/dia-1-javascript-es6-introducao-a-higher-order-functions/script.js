// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const person = (name) => {
  const nameAjust = name.split(' ').join('_');
  return { email: `${nameAjust}@trybe.com ` };
};
//console.log(person('tamires'));

const newEmployees = (func) => {
  const employees = {
    id1: func('tamires sousa'),
    id2: func('Luiza Drumond'),
    id3: func('Carla Paiva'),
  };
  return employees;
};

console.log(newEmployees(person));

// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou")

const checkNumber = (number, sort) => {
  if (number === sort) {
    return true;
  } else {
    return false;
  }
};

const lotteryResult = (number, func) => {
  const numberSort = Math.floor(Math.random() * 5 + 1);
  const result = func(number, numberSort);
  if (result === true) {
    return 'Parabéns você ganhou';
  } else {
    return 'Tente novamente';
  }
};

console.log(lotteryResult(5, checkNumber));

// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const checkTest = (answres, student) => {
  let result = 0;
  for (let i = 0; i < answres.length; i += 1) {
    if (answres[i] === student[i]) {
      result += 1;
    } else if (student[i] === 'N.A') {
      result = result;
    } else {
      result -= 0.5;
    }
  }
  return result;
};

const testResult = (gabarito, testEstudante, func) => {
  return checkTest(gabarito, testEstudante);
};

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(testResult(RIGHT_ANSWERS, STUDENT_ANSWERS, checkTest));
