const addItem = document.querySelector("form");
const nameItem = document.querySelector("#item").value;
const listItens = document.querySelector("ul");

addItem.addEventListener("submit", (event) => {
  event.preventDefault()
  console.log(nameItem);
});

