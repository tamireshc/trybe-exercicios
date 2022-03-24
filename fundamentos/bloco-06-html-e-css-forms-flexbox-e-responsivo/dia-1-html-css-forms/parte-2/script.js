const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function eventForA(event) {
  event.preventDefault();
}

HREF_LINK.addEventListener("click", eventForA);

function eventForCheckbox(event) {
  event.preventDefault();
}

INPUT_CHECKBOX.addEventListener("click", eventForCheckbox);

function eventForInput(event) {
  if (event.key !== "a") {
    event.preventDefault();
  }
}

INPUT_TEXT.addEventListener("keypress", eventForInput);
