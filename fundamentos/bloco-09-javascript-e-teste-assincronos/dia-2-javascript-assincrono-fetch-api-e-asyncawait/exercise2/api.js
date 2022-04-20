const API_URL = `https://api.coincap.io/v2/assets`;
const pValues = document.getElementById('cryptoValues');

createElement = (text) => {
  const li = document.createElement('li');
  li.innerHTML = text;
  pValues.appendChild(li);
};

const getUSDConverter = async () => {
  const fecthAPI = await fetch(
    `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json`
  );
  const response = await fecthAPI.json();
  const data = await response;
  console.log(data);
  console.log(data.usd.brl);
  return data.usd.brl;
};

const getCryptoValues = async () => {
  const fetchAPI = await fetch(API_URL);
  const response = await fetchAPI.json();
  const data = await response;
  let result = [];
  for (let i = 0; i < 10; i += 1) {
    result.push(data.data[i]);
  }
  const conversor = await getUSDConverter();
  console.log(result);
  result.map((item) =>
    createElement(`${item.name}
        (${item.symbol}) : R$
      ${(Number(item.priceUsd) * conversor).toFixed(2)}`)
  );
};

getCryptoValues();

getUSDConverter();
