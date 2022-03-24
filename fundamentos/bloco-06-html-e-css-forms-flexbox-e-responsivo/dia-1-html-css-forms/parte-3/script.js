const btnSubmit = document.getElementById("btn");
const btnClear = document.getElementById("clear-btn");
const allInput = document.getElementsByTagName("input");
const textArea = document.getElementById("reason-textarea");

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
