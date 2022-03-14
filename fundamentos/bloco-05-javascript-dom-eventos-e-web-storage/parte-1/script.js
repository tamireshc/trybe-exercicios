document.getElementsByTagName("h1")[0].style.backgroundColor = "#03B069";

document.getElementsByTagName("body")[0].style.backgroundColor = "#f9f9f9";
console.log(document.querySelectorAll(".emergency-tasks div"));

let emergencyTasksDivs = document.querySelectorAll(".emergency-tasks div");

for (let i = 0; i < emergencyTasksDivs.length; i += 1) {
  emergencyTasksDivs[i].style.backgroundColor = "#FE9E85";
}

let emergencyTasksH3 = document.querySelectorAll(".emergency-tasks h3");

for (let i = 0; i < emergencyTasksH3.length; i += 1) {
  emergencyTasksH3[i].style.backgroundColor = "#A500F3";
}

let noEmergencyTasksDivs = document.querySelectorAll(".no-emergency-tasks div");

for (let i = 0; i < noEmergencyTasksDivs.length; i += 1) {
  noEmergencyTasksDivs[i].style.backgroundColor = "#F9DB5E";
}

let noEmergencyTasksH3 = document.querySelectorAll(".no-emergency-tasks h3");

for (let i = 0; i < noEmergencyTasksH3.length; i += 1) {
  noEmergencyTasksH3[i].style.backgroundColor = "black";
}
