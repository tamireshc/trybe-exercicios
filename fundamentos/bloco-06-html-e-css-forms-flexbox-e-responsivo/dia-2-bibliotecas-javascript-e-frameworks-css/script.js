const btnSubmit = document.getElementById("btn");
const btnClear = document.getElementById("clear-btn");
const allInput = document.getElementsByTagName("input");
const textArea = document.getElementById("reason-textarea");
const inputdate = document.getElementById("date-input");

function preventSubmit(event) {
  event.preventDefault();
}

btnSubmit.addEventListener("click", preventSubmit);

function clearAll(event) {
  event.preventDefault();
  for (let i = 0; i < allInput.length; i += 1) {
    allInput[i].value = "";
    allInput[i].checked = false;
  }
  textArea.value = "";
}

btnClear.addEventListener("click", clearAll);

document.getElementById("date-input").DatePickerX.init({
  format: "MM /dd/yyyy",
  mondayFirst: false,
  titleFormatDay: "dd MM, yyyy",
  weekDayLabels: ["seg", "Ter", "qua", "qui", "sex", "Sab", "Dom"],
  singleMonthLabels: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  todayButton: true,
  todayButtonLabel: "hoje",
  clearButtonLabel: "limpar",
});
import JustValidate from "just-validate";

const validation = new JustValidate("#form");

validation
  .addField("#name", [
    {
      rule: "minLength",
      value: 3,
    },
    {
      rule: "maxLength",
      value: 30,
    },
  ])
  .addField("#email-input", [
    {
      rule: "required",
      errorMessage: "Email is required",
    },
    {
      rule: "email",
      errorMessage: "Email is invalid!",
    },
  ]);
