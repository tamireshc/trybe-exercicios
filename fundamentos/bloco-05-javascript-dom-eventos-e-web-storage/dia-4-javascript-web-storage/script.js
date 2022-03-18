let fundo = document.getElementById("fundo");
let corTexto = document.getElementById("cor");
let tamanhoTexto = document.getElementById("linha");
let espacamentoLinha = document.getElementById("tamanho");
let fonte = document.getElementById("fonte");
let btn = document.getElementById("btn");
let body = document.querySelector("body");

btn.addEventListener("click", setValue);
btn.addEventListener("click", getStyles);

function setValue() {
  if (
    fundo.value === "" ||
    corTexto.value === "" ||
    tamanhoTexto.value === "" ||
    espacamentoLinha.value === "" ||
    fonte.value === ""
  ) {
    alert("Preencha todos os valores");
  } else {
    localStorage.setItem("background", fundo.value);
    localStorage.setItem("color", corTexto.value);
    localStorage.setItem("fontSize", tamanhoTexto.value);
    localStorage.setItem("letterSpacing", espacamentoLinha.value);
    localStorage.setItem("font", fonte.value);
  }
}

function getStyles() {
  body.style.backgroundColor = localStorage.getItem("background");
  body.style.color = localStorage.getItem("color");
  body.style.fontSize = localStorage.getItem("fontSize") + "px";
  body.style.letterSpacing = localStorage.getItem("letterSpacing") + "px";
  body.style.fontFamily = localStorage.getItem("font");
}

window.onload = function () {
  if (window.localStorage.length > 0) {
    getStyles();
  }
};
