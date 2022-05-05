const API_URL = 'https://icanhazdadjoke.com/';
const containerJoke = document.querySelector('#jokeContainer');
const teste = document.getElementById('teste');

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => (containerJoke.innerHTML = data.joke));
};

window.onload = () => fetchJoke();
