//- Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

const sum = (...args) => {
  return args.reduce((a, b) => a + b);
};

console.log(sum(1, 2, 3, 4, 5));
