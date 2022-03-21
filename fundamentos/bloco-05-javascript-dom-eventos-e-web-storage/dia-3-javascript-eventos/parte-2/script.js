function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

// * Exercício 1:
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.

const daysList = document.querySelector("#days");

function createDaysOncalender() {
  for (let i = 0; i < dezDaysList.length; i++) {
    let liDays = document.createElement("li");
    liDays.innerText = dezDaysList[i];
    if (dezDaysList[i] == 24 || dezDaysList[i] == 31) {
      liDays.className = "day holiday";
    } else if (
      dezDaysList[i] == 4 ||
      dezDaysList[i] == 11 ||
      dezDaysList[i] == 18
    ) {
      liDays.className = "day friday";
    } else if (dezDaysList[i] == 25) {
      liDays.className = "day holiday friday";
    } else {
      liDays.className = "day";
    }
    daysList.appendChild(liDays);
  }
}
createDaysOncalender();

//* Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".

let buttonsDiv = document.querySelector(".buttons-container");

function hollidayBtn(string) {
  let buttonBtn = document.createElement("button");
  buttonBtn.innerText = string;
  buttonsDiv.appendChild(buttonBtn);
}

hollidayBtn("Feriados");

// ! Exercício 3: para projeto
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .

function hollidayColor() {
  let hollidays = document.querySelectorAll(".holiday");
  for (let i = 0; i < hollidays.length; i++) {
    if (hollidays[i].style.backgroundColor === "red") {
      hollidays[i].style.backgroundColor = "rgb(238,238,238)";
    } else {
      hollidays[i].style.backgroundColor = "red";
    }
  }
}
let buttonHolliday = document.querySelector(".buttons-container button");

buttonHolliday.addEventListener("click", hollidayColor);

// * Exercício 4:
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".

function fridayBtn(string) {
  let frydayButton = document.createElement("button");
  frydayButton.innerText = string;
  buttonsDiv.appendChild(frydayButton);
}
fridayBtn("Sexta-feira");

let buttonFriday = document.querySelector(".buttons-container").lastChild;
//* Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.

buttonFriday.addEventListener("click", fridayColor);

let fryday = [4, 11, 15, 25];

function fridayColor() {
  let fridays = document.querySelectorAll(".friday");
  for (let i = 0; i < fridays.length; i++) {
    if (fridays[i].innerText === "sextou") {
      fridays[i].innerText = fryday[i];
    } else {
      fridays[i].innerText = "sextou";
    }
  }
}
// * Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

let days = document.querySelectorAll(".day");

for (let i = 0; i < days.length; i++) {
  days[i].addEventListener("mouseover", zoom);
}
function zoom(event) {
  event.target.style.transform = "scale(1.5)";
}
for (let i = 0; i < days.length; i++) {
  days[i].addEventListener("mouseleave", zoomDown);
}
function zoomDown(event) {
  event.target.style.transform = "scale(1.0)";
}
//* Exercício 7:
// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.

let taskDiv = document.querySelector(".my-tasks");
let btnAdd = document.querySelector("#btn-add");
let input = document.querySelector("#task-input");

btnAdd.addEventListener("click", addtask);

function addtask() {
  addColorTask("green");
  let spamTag = document.createElement("span");
  let br = document.createElement("br");
  spamTag.innerText = input.value;
  taskDiv.appendChild(spamTag);
  spamTag.appendChild(br);
  input.value = "";
}
//* Exercício 8:
// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task

function addColorTask(color) {
  let divTask = document.createElement("div");
  divTask.className = "task";
  divTask.style.backgroundColor = color;
  taskDiv.appendChild(divTask);
}
//!voltarExercício 9 - para projeto
// Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
//Referencia de como colocar eventos em elementos criados dinamicamente
//https://usefulangle.com/post/138/pure-javascript-event-handler-dynamic-element

taskDiv.addEventListener("click", function (event) {
  if (event.target.classList.contains("task")) {
    event.target.classList.toggle("selected");
  }
});

for (let i = 0; i < days.length; i++) {
  days[i].addEventListener("click", addColorDay);
}
let selected = document.getElementsByClassName("selected");

function addColorDay(event) {
  console.log(event.target);
  console.log(selected);
  if (selected.length !== 0) {
    event.target.style.color = window.getComputedStyle(
      selected[0]
    ).backgroundColor;
  }
}

//Bônus:

// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto
// "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".

let inputAppointment = document.getElementById("task-input-appointment");
let buttonAppointment = document.getElementById("btn-add-appointment");
let taskAppointment = document.querySelector(".task-list-appointment");

buttonAppointment.addEventListener("click", addAppointment);

document.addEventListener("keypress", function (event) {
  if (event.key === "Enter" && inputAppointment.value.length > 0) {
    let divAppointment = document.createElement("div");
    divAppointment.innerText = inputAppointment.value;
    taskAppointment.appendChild(divAppointment);
    inputAppointment.value = "";
  }
});

function addAppointment() {
  if (inputAppointment.value.length > 0) {
    let divAppointment = document.createElement("div");
    divAppointment.innerText = inputAppointment.value;
    taskAppointment.appendChild(divAppointment);
    inputAppointment.value = "";
  } else {
    alert("Insira um compromisso");
  }
}
