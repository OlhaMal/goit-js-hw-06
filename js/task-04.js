let counterValue = 0;

const displayCounterEl = document.querySelector("#value");
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

console.log(displayCounterEl);
console.log(incrementBtn);
console.log(decrementBtn);

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  displayCounterEl.textContent = counterValue;
});

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  displayCounterEl.textContent = counterValue;
});
