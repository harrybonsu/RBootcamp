// The Stages of JavaScript
var theStagesOfJS = ["confidence", "sadness", "confusion", "realization", "debugging", "satisfaction"];

// Challenge Activity
var princesses = [
  { name: "Rapunzel", age: 18 },
  { name: "Mulan", age: 16 },
  { name: "Anna", age: 18 },
  { name: "Moana", age: 16 }
];

// Log the name of each princess, follow by a colon, followed by their age
// Hint: use forEach
princesses.forEach(function (info, index) {
  console.log(index+1, info)
})
// Create an array of just the names from the princesses array
// Hint: use map

var PrincessesNames = princesses.map(function (princess) {
    return(princess.name)
})
console.log(PrincessesNames)