let vounterValue = 0;

const button = document.querySelectorAll(`button`);
const value = document.getElementById(`value`);
const decrementBtn = button[0];
const incrementBtn = button[1];

const decrement = () => (value.textContent = vounterValue -= 1);
const increment = () => (value.textContent = vounterValue += 1);

decrementBtn.addEventListener(`click`, decrement);
incrementBtn.addEventListener(`click`, increment);