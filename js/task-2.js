const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector(`#ingredients`);
ingredientsList.style.listStyle = `none`;
ingredients.forEach(elem => {
  const ingredientsItem = document.createElement(`li`);
//добавили свойство
ingredientsItem.textContent = elem;
//встроили созданное своство
ingredientsList.append(ingredientsItem);
console.log(ingredientsItem);
}
)