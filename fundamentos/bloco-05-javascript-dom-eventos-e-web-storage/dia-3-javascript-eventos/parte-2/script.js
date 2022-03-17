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

let buttonsDiv = document.querySelector(".buttons-container");

function hollidayBtn(string) {
  let buttonBtn = document.createElement("button");
  buttonBtn.innerText = string;
  buttonsDiv.appendChild(buttonBtn);
}

hollidayBtn("Feriados");

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

function fridayBtn(string) {
  let frydayButton = document.createElement("button");
  frydayButton.innerText = string;
  buttonsDiv.appendChild(frydayButton);
}
fridayBtn("Sexta-feira");

let buttonFriday = document.querySelector(".buttons-container").lastChild;
//! voltar
buttonFriday.addEventListener("click", fridayColor);

let fryday = [4, 11, 15, 25];

function fridayColor() {
  let fridays = document.querySelectorAll(".friday");
  for (let i = 0; i < fridays.length; i++) {
    if (fridays[i].innerText === "sextou") {
      for (let x = 0; x < fryday.length; x++) {
        fridays[i].innerText = fryday[x];
      }
    } else {
      fridays[i].innerText = "sextou";
    }
  }
}

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

let taskDiv = document.querySelector(".my-tasks");
let btnAdd = document.querySelector("#btn-add");
let input = document.querySelector("#task-input");

btnAdd.addEventListener("click", addtask);

function addtask(task) {
  addColorTask("green");
  let spamTag = document.createElement("span");
  let br = document.createElement("br");
  spamTag.innerText = input.value;
  taskDiv.appendChild(spamTag);
  spamTag.appendChild(br);
}

function addColorTask(color) {
  let divTask = document.createElement("div");
  divTask.className = "task";
  divTask.style.backgroundColor = color;
  taskDiv.appendChild(divTask);
}
//!voltar exercicio 9
let taskDivDaDiv = document.getElementsByClassName("task");

for (let i = 0; i < taskDivDaDiv.length; i++) {
  if (taskDivDaDiv.length !== 0) {
    taskDivDaDiv[i].addEventListener("click", addClassTaskSelected);
  }
}

function addClassTaskSelected() {
  console.log("oi");
}

for (let i = 0; i < days.length; i++) {
  days[i].addEventListener("click", addColorDay);
}

function addColorDay(event) {
  event.target.style.color = getComputedStyle(taskDivDaDiv, "background-color");
}
