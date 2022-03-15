// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
let tagBody = document.getElementsByTagName("body")[0];
let h1 = document.createElement("h1");
h1.innerText = "Exercício 5.2 - JavaScript DOM como filho da tag body";
tagBody.appendChild(h1);
// Adicione a tag main com a classe main-content como filho da tag body ;
let main = document.createElement("main");
main.className = "main-content";
tagBody.appendChild(main);
// Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
let tagSection = document.createElement("section");
tagSection.className = "center-content";
main.appendChild(tagSection);
// Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let tagP = document.createElement("p");
tagP.innerText = "Estudando criaçao de elementos";
tagSection.appendChild(tagP);
// Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
let tagSection2 = document.createElement("section");
tagSection2.className = "left-content";
main.appendChild(tagSection2);
// Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
let tagSection3 = document.createElement("section");
tagSection3.className = "right-content";
main.appendChild(tagSection3);
// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
let img = document.createElement("img");
img.className = "small-image";
img.src = "https://picsum.photos/200";
tagSection2.appendChild(img);
// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
let tagUl = document.createElement("ul");
tagSection3.appendChild(tagUl);
let listValues = [
  "um",
  "dois",
  "tres",
  "quatro",
  "cinco",
  " seis",
  "sete",
  "oito",
  "nove",
  "dez",
];
for (i = 0; i < listValues.length; i++) {
  let tagLi = document.createElement("li");
  tagLi.innerHTML = listValues[i];
  tagUl.appendChild(tagLi);
}
// Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.
// Adicione a classe description nas 3 tags h3 criadas;

for (let i = 0; i < 3; i++) {
  let tagH3 = document.createElement("h3");
  main.appendChild(tagH3);
  tagH3.className = "description";
}

// Adicione a classe title na tag h1 criada;
h1.className = "title";

// Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
main.removeChild(tagSection2);
// Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;

tagSection3.style.marginRight = "auto";

// Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
let teste = tagSection.parentElement;
tagSection.parentElement.style.backgroundColor = "green";
// Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.

let ul = document.getElementsByTagName("ul")[0];
let liValueDez = ul.lastChild;
let liValueNove = liValueDez.previousElementSibling;

ul.removeChild(liValueDez);
ul.removeChild(liValueNove);
