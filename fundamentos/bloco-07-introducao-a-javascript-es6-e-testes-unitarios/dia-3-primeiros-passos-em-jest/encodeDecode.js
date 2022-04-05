function encode(string) {
  let arrayString = string.split('');
  let arrayStringJoin = '';
  for (let i = 0; i < arrayString.length; i += 1) {
    if (arrayString[i] === 'a') {
      arrayString[i] = 1;
    } else if (arrayString[i] === 'e') {
      arrayString[i] = 2;
    } else if (arrayString[i] === 'i') {
      arrayString[i] = 3;
    } else if (arrayString[i] === 'o') {
      arrayString[i] = 4;
    } else if (arrayString[i] === 'u') {
      arrayString[i] = 5;
    }
  }
  arrayStringJoin = arrayString.join('');
  return arrayStringJoin;
}

function decode(string) {
  let arrayString = string.split('');
  let arrayStringJoin = '';
  for (let i = 0; i < arrayString.length; i += 1) {
    if (arrayString[i] === '1') {
      arrayString[i] = 'a';
    } else if (arrayString[i] === '2') {
      arrayString[i] = 'e';
    } else if (arrayString[i] === '3') {
      arrayString[i] = 'i';
    } else if (arrayString[i] === '4') {
      arrayString[i] = 'o';
    } else if (arrayString[i] === '5') {
      arrayString[i] = 'u';
    }
  }
  arrayStringJoin = arrayString.join('');
  return arrayStringJoin;
}

module.exports = { encode, decode };
