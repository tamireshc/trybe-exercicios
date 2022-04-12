const arrays = [['1', '2', '3'], [true], [4, 5, 6]];
//1 - Dada uma matriz, transforme em um array.

function flatten(array) {
  const reducer = (a, b) => `${a} ${b}`;
  const itens = array.reduce(reducer);
  const test = itens.split(' ');
  // const itensAJust = itens.replace(/,/g, '');
  return test;
}

console.log(flatten(arrays));
