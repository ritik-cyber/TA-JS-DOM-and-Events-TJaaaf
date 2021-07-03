let allBox = document.querySelector(".box");

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
    let randomNumber = Math.floor(Math.random() * 16);
    color += hexaChar[randomNumber];
  }
  return color;
}
function handleClick() {
  allBox.forEach((box) => {
    return;
  });
}

allBox.addEventListener("mousemove", handleClick);
