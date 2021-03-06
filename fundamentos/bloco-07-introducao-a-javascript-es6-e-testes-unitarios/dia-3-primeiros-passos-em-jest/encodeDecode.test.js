// 4 - Para as funções encode e decode crie os seguintes testes em Jest:
// Teste se encode e decode são funções;
// Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
// Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente;
// Teste se as demais letras/números não são convertidos para cada caso;
// Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.

const { it, expect } = require('@jest/globals');
const { encode, decode } = require('./encodeDecode');

it('Se encode é uma função', () => {
  expect(typeof encode).toBe('function');
});

it('Se decode é uma função', () => {
  expect(typeof decode).toBe('function');
});

it('Teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
  expect(encode('aeiou')).toBe('12345');
});

it('Teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente', () => {
  expect(decode('12345')).toBe('aeiou');
});

it('Teste se b não é convertido em um número ', () => {
  expect(encode('b')).not.toBe(typeof number);
});

it('Teste se 1 não é convertido em um string ', () => {
  expect(decode('6')).not.toBe(typeof string);
});

it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro. ', () => {
  expect(decode('12345').length).toBe(5);
});
