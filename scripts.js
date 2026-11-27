const itemForm = document.querySelector("form");
const itemInput = document.querySelector("#item");
const itemList = document.querySelector("ul");
const removalAlert = document.querySelector(".alert");
const closeAlertButton = removalAlert.querySelector("button");

function createListItem(itemName) {
  const listItem = document.createElement("li");
  const checkbox = document.createElement("input");
  const itemText = document.createElement("span");
  const deleteButton = document.createElement("button");
  const trashIcon = document.createElement("img");

  checkbox.type = "checkbox";
  checkbox.className = "input-checkbox";

  itemText.textContent = itemName;

  trashIcon.src = "./assets/trach.svg";
  trashIcon.alt = "Remover item";

  deleteButton.type = "button";
  deleteButton.append(trashIcon);
  deleteButton.addEventListener("click", () => {
    listItem.remove();
    removalAlert.classList.remove("hiden");
  });

  listItem.append(checkbox, itemText, deleteButton);

  return listItem;
}

closeAlertButton.addEventListener("click", () => {
  removalAlert.classList.add("hiden");
});

function handleFormSubmit(event) {
  event.preventDefault();

  const itemName = itemInput.value.trim();

  if (itemName === "") {
    alert("Digite um item");
    return;
  }

  itemList.append(createListItem(itemName));
  itemInput.value = "";
}

itemForm.addEventListener("submit", handleFormSubmit);
