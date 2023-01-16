const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

const makeListItemsElements = ingredients => {
  return ingredients.map( ingredient => {
        const item = document.createElement("li");
        item.textContent = ingredient;
        item.classList.add("item");
        return item})
}

const items = makeListItemsElements(ingredients);


// const itemArray = ingredients.map(ingredient => {
//     const item = document.createElement("li");
//     item.textContent = ingredient;
//     item.classList.add("item");
//     return item});



// ingredients.forEach((ingredient) => {
//   const item = document.createElement("li");
//   item.textContent = ingredient;
//   item.classList.add("item");
//   itemArray.push(item);
// });

listEl.append(...items);
