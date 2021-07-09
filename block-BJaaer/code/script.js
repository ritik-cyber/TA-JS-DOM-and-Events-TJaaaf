let form = document.querySelector("form");

// function handleSumbit(event) {
//   event.preventDefault();
//   console.log(event.target.elements.name.value);
// }

let userData = {};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let elements = event.target.elements;

  userData.text = elements.text.value;
  userData.email = elements.email.value;
  userData.gender = elements.gender.value;
  //   userData.email = elements.email.value;
  userData.email = elements.email.value;
  userData.drone = elements.drone.value;
  //   userData.drone = elements.drone.value;
  userData.terms = elements.terms.checked;

  console.log(userData);
});
