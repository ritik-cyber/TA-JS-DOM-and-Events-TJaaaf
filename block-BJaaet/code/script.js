let input = document.querySelector('input[type="text"]');
let rootEle = document.querySelector(".movie-list");
let allMOvies = [{ name: "tiatinic", watched: false }];

let allMovies = input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    // console.log(event.target.value);

    allMOvies.push({ name: "tiatinic", watched: false });
    event.target.value = "";
    createLayoutUi();
  }
});

function createLayoutUi() {
  rootEle.innerHTML = "";
  allMOvies.forEach((movie, i) => {
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.type = "checkbox";
    input.id = i;
    input.checked = movie.watched;
    let label = document.createElement("label");
    label.id = i;
    label.innerText = movie.name;
    let span = document.createElement("span");
    span.innerText = "X";
    span.addEventListener("click", (event) => {
      event.target.parentElement.remove();
    });

    li.append(input, label, span);
    rootEle.append(li);
  });
}
createLayoutUi();
