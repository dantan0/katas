const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  for (let recipe of recipes) {
    // two scenarios
    if (checkIngredient(recipe.ingredients[0], bakeryA) && checkIngredient(recipe.ingredients[1], bakeryB)) {
      return recipe.name;
    }
    if (checkIngredient(recipe.ingredients[0], bakeryB) && checkIngredient(recipe.ingredients[1], bakeryA)) {
      return recipe.name;
    }
  }
}

// helper function
const checkIngredient = function(checkedIngredient, bakery) {
  for (let ingredient of bakery) {
    if (ingredient === checkedIngredient) {
      return true;
    }
  }
  return false;
}

// test case 1
let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

// test case 2
bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));