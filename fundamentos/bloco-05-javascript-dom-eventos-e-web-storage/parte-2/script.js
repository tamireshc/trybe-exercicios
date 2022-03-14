/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
        1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
        2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
        3. Crie uma função que mude a cor do quadrado vermelho para branco.
        4. Crie uma função que corrija o texto da tag <h1>.
        5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
        6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

//1.
function changeText() {
  let paragraph = document.getElementsByTagName("p")[1];
  paragraph.innerText =
    "Me vejo trabalhando como desenvolvedora morando na praia ";
}
changeText();

//2.
function changeColorMainToGreen() {
  let main = document.getElementsByTagName("main")[0];
  main.style.backgroundColor = "rgb(76,164,109)";
}
changeColorMainToGreen();
//3.
function changeColorCenterSquare() {
  let centerSquare = document.getElementsByClassName("center-content")[0];
  centerSquare.style.backgroundColor = "white";
}
changeColorCenterSquare();

//4.
function correctTitle() {
  let siteTitle = document.getElementsByTagName("h1")[0];
  siteTitle.innerText = "Exercício 5.1 - JavaScript";
}
correctTitle();
//5.
let tagP = document.getElementsByTagName("p");
function toUpperCaseTagsP() {
  for (let i = 0; i < tagP.length; i += 1) {
    tagP[i].innerText = tagP[i].innerText.toUpperCase();
  }
}
toUpperCaseTagsP();
function showInnerTextTagPOnConsole() {
  for (let i = 0; i < tagP.length; i += 1) {
    console.log(tagP[i].innerText);
  }
}

showInnerTextTagPOnConsole();
