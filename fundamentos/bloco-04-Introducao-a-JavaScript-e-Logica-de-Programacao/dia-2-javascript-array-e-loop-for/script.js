let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

for (let i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]);
}
// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado

let soma = numbers.reduce((a, b) => a + b);
console.log(soma);

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let mediaAritimética = soma / numbers.length;
console.log(mediaAritimética);

// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (mediaAritimética > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}

//! Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let maiorValor = numbers[0];
for (i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > maiorValor) {
    maiorValor = numbers[i];
  }
}
console.log("maior valor é ", maiorValor);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let odd = numbers.filter((n) => n % 2 !== 0);
console.log(odd);

//! Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let menorValor = numbers[0];

for (i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < menorValor) {
    menorValor = numbers[i];
  }
}
console.log("menor valor é", menorValor);

// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let array1 = [];
for (i = 1; i <= 25; i += 1) {
  array1.push(i);
}
console.log(array1);

// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

for (i = 0; i < array1.length; i += 1) {
  let divisao = array1[i] / 2;
  console.log(divisao);
}
