// 3 - A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

const { it, expect } = require('@jest/globals');
const myFizzBuzz = require('./myFizzBuzz');

it('Se ao testar um número divisível por 3 e 5 obtemos "fizzbuzz"', () => {
  expect(myFizzBuzz(15)).toBe('fizzbuzz');
});

it('Se ao testar um número divisível por 3  obtemos "fizz"', () => {
  expect(myFizzBuzz(3)).toBe('fizz');
});

it('Se ao testar um número divisível por 5  obtemos "buzz"', () => {
  expect(myFizzBuzz(25)).toBe('buzz');
});

it('Se ao testar um número  não divisível por 3 e 5 obtemos o próprio número', () => {
  expect(myFizzBuzz(11)).toBe(11);
});

it('Se ao testar um valor que não é um número obtemos "false"', () => {
  expect(myFizzBuzz('x')).toBe(false);
});
