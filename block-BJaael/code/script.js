function randomNo(max) {
  return Math.floor(Math.random() * max);
}
function getRandomColor() {
  let hexaChar = [
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
    let randomNumber = randomNo(16);
    color += hexaChar[randomNumber];
  }
  return color;
}

let parentBox = document.querySelector(".box");
// let conta = document.querySelector("conatiner");
// conta.classList.add("flex");
for (let i = 0; i <= 500; i++) {
  let div = document.createElement("div");
  div.classList.add("box");

  let h3 = document.createElement("h3");
  h3.innerText = randomNo(500);

  div.append(h3);
  parentBox.append(div);
}
let allBox = document.querySelectorAll(".box");

function handleMouseMove() {
  allBox.forEach((box) => {
    box.style.backgroundColor = getRandomColor();
    box.querySelector("h3").innerText = randomNo(500);
  });
}
parentBox.addEventListener("mousemove", handleMouseMove);
