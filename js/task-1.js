// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories,
// найдет и выведет в консоль текст заголовка элемента (тега h2) 
// и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4


// let list = document.getElementById(`categories`);
// let list_2 = document.querySelector(`#categories`);//node list
// let categoriesList = document.getElementsByClassName(`categories-list`)//html collection . array like object
// console.log(Array.from(categoriesList));
// console.log([...categoriesList]);
// console.log(list_2.length);
// console.log(list);
// console.log(categoriesList.length);

let list = document.querySelector(`#categories`);
// console.log(list);
let list3 = document.querySelectorAll(`#categories li.item`)
let categoriesCount = list3.length;
// console.log(`В списке ${categoriesCount} категории.`);

list3.forEach((elem, i) => {
  let h2 = document.querySelectorAll(`h2`)
  console.log(`Категория: ${h2[i].textContent}`);
  let li = document.querySelectorAll(`li.item ul`);
  console.log(`Количество элементов: ${li[i].children.length}`);
}
)
