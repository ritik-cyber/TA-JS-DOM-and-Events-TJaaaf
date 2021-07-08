let display = document.querySelector(".display");
let allBtn = document.querySelectorAll("button");

let intialValue = 0;
display.innerText = intialValue;

function handleBtnClick(event) {
  if (event.target.classList.contains("equal")) {
    display.innerText = eval(display.innerText);
    return;
  }
  if (event.target.classList.contains("clear")) {
    display.innerText = intialValue;
    return;
  }
  if (display.innerText == intialValue) {
    display.innerText = event.target.innerText;
  } else {
    display.innerText += event.target.innerText;
  }
}

allBtn.forEach((btn) => btn.addEventListener("click", handleBtnClick));
