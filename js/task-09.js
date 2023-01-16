function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const bodyEl = document.querySelector('body')
const changeTextEl = document.querySelector('.color')

changeColorBtn.addEventListener('click', () => {
let color = getRandomHexColor();
changeTextEl.textContent = color;
bodyEl.style.backgroundColor = color;
})