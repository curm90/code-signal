function groupingDishes(dishes) {
  const ingredients = {};
  const result = [];

  for (const dish of dishes) {
    for (let i = 1; i < dish.length; i++) {
      if (ingredients[dish[i]]) {
        ingredients[dish[i]].push(dish[0]);
      } else {
        ingredients[dish[i]] = [dish[0]];
      }
    }
  }

  for (const i in ingredients) {
    if (Object.hasOwnProperty.call(ingredients, i)) {
      if (ingredients[i].length > 1) {
        result.push([i, ...ingredients[i].sort()]);
      }
    }
  }

  return result.sort((a, b) => (a[0] < b[0] ? -1 : a[0] > b[0]));
}

console.log(
  groupingDishes([
    ['Salad', 'Tomato', 'Cucumber', 'Salad', 'Sauce'],
    ['Pizza', 'Tomato', 'Sausage', 'Sauce', 'Dough'],
    ['Quesadilla', 'Chicken', 'Cheese', 'Sauce'],
    ['Sandwich', 'Salad', 'Bread', 'Tomato', 'Cheese'],
  ]),
  [
    ['Cheese', 'Quesadilla', 'Sandwich'],
    ['Salad', 'Salad', 'Sandwich'],
    ['Sauce', 'Pizza', 'Quesadilla', 'Salad'],
    ['Tomato', 'Pizza', 'Salad', 'Sandwich'],
  ]
);
