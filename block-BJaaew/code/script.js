let select = document.querySelector(".people");
let rootTags = document.querySelector(".tags");
let search = document.querySelector(".search");

let allPeople = got.houses.reduce((acc, cv) => {
  acc = acc.concat(cv.people);
  return acc;
}, []);

let allTags = got.houses.map((house) => house.name);
let activeHouse = "";

function createCard(data = []) {
  select.innerHTML = "";
  data.forEach((people) => {
    let li = document.createElement("li");
    let img = document.createElement("img");
    img.alt = people.name;
    img.src = people.image;
    let h2 = document.createElement("h2");
    h2.innerText = people.name;
    let p = document.createElement("p");
    p.innerText = people.description;
    let button = document.createElement("button");
    button.innerText = "know more";
    li.append(img, h2, p, button);
    select.append(li);
  });
}

function createTagsUI(tags = []) {
  rootTags.innerHTML = "";
  tags.forEach((tag) => {
    let li = document.createElement("li");
    li.innerText = tag;
    li.addEventListener("click", () => {
      activeHouse = tag;
      let peopleOfTheHouse =
        got.houses.find((house) => house.name === tag).people || [];
      createCard(peopleOfTheHouse);
    });
    rootTags.append(li);
  });
}

function handleSaerch(event) {
  let searchText = event.target.value;
  let filteredPeople = allPeople.filter((p) =>
    p.name.toLowerCase().includes(searchText.toLowerCase())
  );
  createCard(filteredPeople);
}
search.addEventListener("input", handleSaerch);

createCard(allPeople);
createTagsUI(allTags);
