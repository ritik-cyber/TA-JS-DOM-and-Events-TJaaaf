let firstBox = document.querySelector(".first");
let secondBox = document.querySelector(".second");

function generateRandomColor() {
  let hexChar = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];

  let color = "#";

  for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * 16);
    color = color + hexChar[randomNumber];
  }
  return color;
}
function handleClik() {
  let firstTime = generateRandomColor();
  firstBox.style.backgroundColor = firstTime;
}
function handleClikMouse() {
  let firstTime = generateRandomColor();
  secondBox.style.backgroundColor = firstTime;
}

firstBox.addEventListener("click", handleClik);
secondBox.addEventListener("mousemove", handleClikMouse);
