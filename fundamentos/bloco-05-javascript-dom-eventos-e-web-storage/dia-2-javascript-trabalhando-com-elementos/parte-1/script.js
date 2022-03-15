//Acesse o elemento elementoOndeVoceEsta .
let elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let pai = elementoOndeVoceEsta.parentElement;
pai.style.color = "red";

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
let primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
primeiroFilhoDoFilho.innerHTML = "primeiroFilhoDoFilho";

// Acesse o primeiroFilho a partir de pai .
let primeiroFilho = pai.firstElementChild;

// Acesse o primeiroFilho a partir de pai .
let primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
let test = elementoOndeVoceEsta.nextSibling;

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
let terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

// Agora acesse o terceiroFilho a partir de pai .
let terceiroFilho2 = pai.lastElementChild.previousElementSibling;

// Crie um irmão para elementoOndeVoceEsta .
let irmaoElementoOndeVoceEsta = document.createElement("section");
irmaoElementoOndeVoceEsta.id = "irmaoElementoOndeVoceEsta";
pai.appendChild(irmaoElementoOndeVoceEsta);
// Crie um filho para elementoOndeVoceEsta .
let filhoElementoOndeVoceEsta = document.createElement("section");
filhoElementoOndeVoceEsta.id = "filhoElementoOndeVoceEsta";
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);
// Crie um filho para primeiroFilhoDoFilho .
let filhoPrimeiroFilhoDoFilho = document.createElement("section");
filhoPrimeiroFilhoDoFilho.id = "filhoPrimeiroFilhoDoFilho";
primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);

// A partir desse filho criado, acesse terceiroFilho .

let terceiroFilho3 =
  primeiroFilho.parentElement.lastElementChild.previousElementSibling
    .previousElementSibling;

// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .

for (let i = pai.childNodes.length - 1; i >= 0; i -= 1) {
  let currentChildren = pai.childNodes[i];
  if (currentChildren.id !== "elementoOndeVoceEsta") {
    currentChildren.remove();
  }
}
