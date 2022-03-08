// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
Adição(a + b);
Subtração(a - b);
Multiplicação(a * b);
Divisão(a / b);
Módulo(a % b);
const a = 1;
const b = 2;

const soma = a + b;
const subtracao = a - b;
const multiplicacao = a * b;
const divisao = a / b;
const modulo = a % b;

console.log(soma, subtracao, multiplicacao, divisao, modulo);

// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
const c = 8;
const d = 10;

if (c > d) {
  console.log(c);
} else {
  console.log(d);
}
// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const e = 12;
const f = 10;
const g = 8;

if (e > f && e > g) {
  console.log(e);
} else if (f > e && f > g) {
  console.log(f);
} else {
  console.log(g);
}
// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const h = 8.9;

if (h < 0) {
  console.log("negative");
} else if (h > 0) {
  console.log("positive");
} else {
  console.log("zero");
}
// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const angle1 = 43;
const angle2 = 60;
const angle3 = 80;
const somaAngulos = angle1 + angle2 + angle3;

if (somaAngulos == 180 && angle1 > 0 && angle2 > 0 && angle3 > 0) {
  console.log(true);
} else {
  console.log(false);
}

// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

const pecaXadrez = "raInha";

const pecaXadrezParaTeste = pecaXadrez.toUpperCase();
console.log(pecaXadrezParaTeste);

switch (pecaXadrezParaTeste) {
  case "PEAO":
    console.log("se move para frente");
    break;

  case "BISPO":
    console.log("se move nas diagonais");
    break;

  case "TORRE":
    console.log("se move em linha reta horizontamente e verticalmente");
    break;

  case "CAVALO":
    console.log(
      " O cavalo é a única peça do tabuleiro que pode pular sobre outras peças. O cavalo move-se por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto. O movimento do cavalo forma um “L”. O cavalo sempre termina seu movimento em uma casa de cor oposta à inicial. "
    );
    break;

  case "RAINHA":
    console.log(
      "pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente."
    );
    break;

  case "REI":
    console.log(
      "O rei pode se mover para qualquer casa adjacente. Assim, ele pode mover-se uma casa em qualquer direção: horizontalmente, verticalmente ou diagonalmente. Ele não pode se mover para uma casa ocupada por uma peça da mesma cor."
    );

  default:
    console.log("não é peca de xadrex");
}
// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

const nota = 40;

if (nota >= 90 && nota <= 100) {
  console.log("A");
} else if (nota >= 80 && nota < 90) {
  console.log("B");
} else if (nota >= 70 && nota < 80) {
  console.log("C");
} else if (nota >= 60 && nota < 70) {
  console.log("D");
} else if (nota >= 50 && nota < 60) {
  console.log("E");
} else if (nota < 50 && nota >= 0) {
  console.log("F");
} else {
  console.log("o valor inserido não é valido, digite um valor entre 0 e 100");
}

// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false

const num1 = 5;
const num2 = 7;
const num3 = 99;

const num1RestoDivisaoPor2 = num1 % 2;
const num2RestoDivisaoPor2 = num2 % 2;
const num3RestoDivisaoPor2 = num3 % 2;

if (
  num1RestoDivisaoPor2 == 0 ||
  num2RestoDivisaoPor2 == 0 ||
  num3RestoDivisaoPor2 == 0
) {
  console.log(true);
} else {
  console.log(false);
}

// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

const numA = 3;
const numB = 7;
const numC = 99;

const numARestoDivisaoPor2 = numA % 2;
const numBRestoDivisaoPor2 = numB % 2;
const numCRestoDivisaoPor2 = numC % 2;

if (
  numARestoDivisaoPor2 == 0 ||
  numBRestoDivisaoPor2 == 0 ||
  numCRestoDivisaoPor2 == 0
) {
  console.log(false);
} else {
  console.log(true);
}
// Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)

const valorProduto = 10;
const custoProdutoFinal = valorProduto * 1.2;
const valorVendaproduto = 20;
const lucro = (valorVendaproduto - custoProdutoFinal) * 0.8 * 1000;

// 11. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

const salarioBruto = 3000;
let descontoINSS = "";
let descontoIR = "";

if (salarioBruto <= 1556.94 && salarioBruto > 0) {
  descontoINSS = salarioBruto * 0.08;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  descontoINSS = salarioBruto * 0.09;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  descontoINSS = salarioBruto * 0.11;
} else if (salarioBruto >= 5189.82) {
  descontoINSS = salarioBruto - 570.88;
} else {
  console.log("insira um valor válido");
}

const salarioBase = salarioBruto - descontoINSS;

if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
  descontoIR = salarioBase * 0.075 - 142.8;
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
  descontoIR = salarioBase * 0.15 - 354.8;
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
  descontoIR = salarioBase * 0.225 - 636.13;
} else if (salarioBase >= 4664.68) {
  descontoIR = salarioBase * 0.275 - 869.36;
} else if (salarioBase <= 1903.98 && salarioBase > 0) {
  descontoIR = 0;
} else {
  console.log("insira um valor válido");
}

let salarioLiquido = salarioBase - descontoIR;

console.log(salarioLiquido, descontoINSS, descontoIR);
