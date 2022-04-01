const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    ifScope = `${ifScope}  ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
    console.log(elseScope);
  }
  // console.log(`${ifScope}o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
};

testingScope(true);

// ! Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const maiorNumero = (n) => {
  let result;
  for (let i = 0; i < n.length; i += 1) {
    result = n[i + 1] > n[i] ? n[i + 1] : n[i];
    return `o maior numero é ${result}`;
  }
};

console.log(maiorNumero(oddsAndEvens));

console.log(oddsAndEvens); // será necessário alterar essa linha 😉

// Crie uma função que receba um número e retorne seu fatorial.
const fatorial = (n) => {
  let result = 1;
  for (let i = 1; i <= n; i += 1) {
    result = result * [i];
  }
  return result;
};

console.log(fatorial(4));

// Crie uma função que receba uma frase e retorne qual a maior palavra.

const frase = 'Antônio foi no banheiro e não sabemos o que aconteceu';

const maiorPalavra = (palavra) => {
  let fraseArray = [];
  fraseArray = palavra.split(' ');
  let result;
  for (let i = 0; i < fraseArray.length - 1; i += 1) {
    result =
      fraseArray[i].length > fraseArray[i + 1].length
        ? fraseArray[i]
        : fraseArray[i + 1];
  }
  return result;
};

console.log(maiorPalavra(frase));

const btn = document.getElementById('btn');
const contador = document.getElementById('contador');

// Crie uma página que contenha:
// Um botão ao qual será associado um event listener ;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

let clicks = 0;

const clickCount = () => {
  clicks += 1;
  console.log(clicks);
  contador.innerText = clicks;
};

btn.addEventListener('click', clickCount);

const frase2 = '"Tryber x aqui!"';

const trocaPalavra = (palavra, termo1, termo2) => {
  let fraseArray = [];
  fraseArray = palavra.split(' ');

  for (let i = 0; i < fraseArray.length; i += 1) {
    if (fraseArray[i].includes(termo1)) {
      fraseArray;
    }
  }
  return result;
};

console.log(trocaPalavra(frase2, 'x', 'Bebeto'));
