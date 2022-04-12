const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

//5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

function containsA(array, acc) {
  const arrayToLowerCase = array.map((item) => item.toLowerCase());
  const arrayToString = arrayToLowerCase.reduce((a, b) => a + b);
  const newArray = arrayToString.split('');
  const count = (acc, b) => (b === 'a' ? (acc += 1) : acc);
  const result = newArray.reduce(count, acc);
  return result;
}

console.log(containsA(names, 0));
