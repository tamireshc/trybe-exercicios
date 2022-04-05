// 1 - A função sum(a, b) retorna a soma do parâmetro a com o b
// Teste se o retorno de sum(4, 5) é 9
// Teste se o retorno de sum(0, 0) é 0
// Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
// Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

const { it, expect } = require('@jest/globals');
const sum = require('./sum');

it('Retorno da soma de 4 com 5 é 9', () => {
  expect(sum(4, 5)).toBe(9);
});

it('se o retorno da soma de 0 com 0 é zero', () => {
  expect(sum(0, 0)).toBe(0);
});

it('se a funçao lança um erro quando o valor de um parametro não for um número', () => {
  expect(() => {
    sum(4, '5');
  }).toThrow();
});

it('se a mensagem de erro é "parameters must be numbers"', () => {
  expect(() => {
    sum(4, '5');
  }).toThrowError(new Error('parameters must be numbers'));
});
