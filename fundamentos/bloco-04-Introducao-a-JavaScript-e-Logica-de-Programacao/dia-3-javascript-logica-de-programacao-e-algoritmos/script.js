//* algorítimo para fatorial de 10

// 1 crie um laço de repeticao que percorra de 1 até 10
// 2 crie uma variavel que vai guardar o valor dos numeros mutiplicados
// 3 cria o codigo que vai multiplicar a variavel que quarda o numero pelos numeros do loop
// 4 retorne o valor final da variavel

let fatorial = 1;

for (let i = 1; i <= 10; i++) {
  fatorial = fatorial * i;
}
console.log(fatorial);

//*algorítimo para inverter uma palavra
//1 crie a variavel que armazena a palavra
//2 crie a variavel que ira armazenar o inverso da palavra
//3transforme a palvra em um array com o split
//4 multiplique a array criada da palavra pelo método reverse
//5 junte a array com o metodo join
//4 armazene o resultado na variavel de armazenamento

let palavra = "tryber";
let palavraInvertida = "";

let arrayPalavra = palavra.split("");
console.log(arrayPalavra);
let arrayPalavraInvertida = arrayPalavra.reverse();
console.log(arrayPalavraInvertida);
palavraInvertida = arrayPalavraInvertida.join("");
console.log(palavraInvertida, typeof palavraInvertida);

//*algorítimo para rerornar a maior palavra de um array
//crie um loop for que passa por todos os elementos da array
//crie uma variavel que vai armazenar o maior valor
//crie a condicional if else de comparacao
//retorne o maior valor
//crie um llop for que procura na array o index da palavra de maiortamanho

let array = ["java", "python", "javascript", "html", "css"];

let maiorValor = 0;
let index;

for (let i = 0; i < array.length; i++) {
  if (maiorValor < array[i].length) {
    maiorValor = array[i].length;
  } else {
    maiorValor = maiorValor;
  }
}
for (let i = 0; i < array.length; i++) {
  index = array.findIndex((n) => n.length === maiorValor);
}
console.log(maiorValor, index);

let array2 = ["java", "python", "javascript", "html", "css"];

let menorValor = array2[0].length;
let index2;

for (let i = 0; i < array2.length; i++) {
  if (menorValor > array2[i].length) {
    menorValor = array2[i].length;
  } else {
    menorValor = menorValor;
  }
}
for (let i = 0; i < array2.length; i++) {
  index2 = array2.findIndex((n) => n.length === menorValor);
}
console.log(menorValor, index2);

//Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50

let numerosPrimos = [2, 3, 5, 7];

for (let i = 2; i <= 50; i++) {
  if (
    i / 1 == i &&
    i / i == 1 &&
    i % 2 != 0 &&
    i % 3 !== 0 &&
    i % 5 !== 0 &&
    i % 7 !== 0
  ) {
    numerosPrimos.push(i);
  }
}
let maiorValorPrimo = Math.max(...numerosPrimos);
console.log(numerosPrimos, maiorValorPrimo);
