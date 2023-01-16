function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("#controls input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", () => createBoxes(inputEl.value));
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const addElements = [];
  for (let i = 0; i < amount; i += 1) {
    const newElement = document.createElement("div");
    newElement.style.height = `${30 + 10 * i}px`;
    newElement.style.width = `${30 + 10 * i}px`;
    newElement.style.backgroundColor = getRandomHexColor();
    addElements.push(newElement);
  }
  boxes.append(...addElements);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
