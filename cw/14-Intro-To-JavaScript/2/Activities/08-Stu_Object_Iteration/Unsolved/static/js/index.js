var recipes = [
  { dish: "Fried fish", spice: "Dorrigo" },
  { dish: "Crab Rangoon", spice: "Akudjura" },
  { dish: "Pickled Okra", spice: "Chili pepper" },
  { dish: "Macaroni salad", spice: "Pepper" },
  { dish: "Apple butter", spice: "Avens" },
  { dish: "Pepperoni Pizza", spice: "Asafoetida" },
  { dish: "Hog fry", spice: "Peppermint" },
  { dish: "Corn chowder", spice: "Akudjura" },
  { dish: "Home fries", spice: "Celery leaf" },
  { dish: "Hot chicken", spice: "Boldo" }];

// Create empty arrays to store the dish and spice values
var dishes = [];
var spices = [];

// Iterate through each recipe object
recipes.forEach((recipe)=> {
  Object.entries(recipe).forEach(([k,v]) => {

if (k ==='dish') {
    dishes.push(v);
}
else {
    spices.push(v);
    }
  });
});

console.log(dishes);
console.log(spices);

// BONUS - Use map to build both arrays of dish and spice values
var dishlist = recipes.map(var1 => var1.dish)
var spicelist = recipes.map(var2 => var2.spice)

console.log(dishlist);
console.log(spicelist);