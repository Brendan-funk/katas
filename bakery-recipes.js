
const chooseRecipe = function(bakeryA, bakeryB, recipes) {

  //loop through recipies
  for (let recipe of recipes) {

    //if there is one ingredient from bakery A and one from bakery B
    if (ingredientCheck(bakeryA, recipe['ingredients']) && ingredientCheck(bakeryB, recipe['ingredients'])) {

      //return the recipe name
      return recipe['name'];
    }
  }
  //otherwise print error
  return "Sorry no recipes match";
};

//check if a bakery has an ingredient
const ingredientCheck = function(bakery,ingredients) {

  //loop through ingredients from the bakery
  for (let ing of bakery) {

    //loop through the recipe ingredients
    for (let ingredient of ingredients) {

      //if they match
      if (ingredient === ing) {
        
        //return true
        return true;
      }
    }
  }
  //otherwise return false
  return false;
};


//test cases


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
