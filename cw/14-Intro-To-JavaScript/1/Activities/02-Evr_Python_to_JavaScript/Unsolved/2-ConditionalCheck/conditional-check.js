var x = 1;
var y = 10;

// Checks if one value is equal to another
if (x === y){
    console.log("both numbers are equal")
}
// Checks if one value is NOT equal to another
if (x !== y){
    console.log("x is not equal to y")
}
// Checks if one value is less than another
if (x < y){
    console.log("y is greater than x")
}
// Checks if one value is greater than another
if (x > y){
    console.log("x is greater than y")
}
// Checks if a value is less than or equal to another
if (x <= y) {
    console.log("x is less than or equal to y")
}
// Checks for two conditions to be met using &&
if (x === 1 && y === 10) {
    console.log("both values are true")
}
// Checks if either of two conditions is met using ||
if (x < 45 || y < 5) {
    console.log("One or the other statements were true")
}
// if-else if-else
if (y < 5) {
    console.log("x is less than 10 and y is less than 5")
}
else if (y === 5) {
    console.log("x is less than 10 an y is equal to 5")
}
else {
    console.log("x is less than 10 and y is greater than 5")
}
// Nested if statements
if (x < 10){
    if (y < 5){
        console.log("x is less than 10 and y is less than 5")
    }
    else if (y === 5) {
        console.log("x is less than 10 an y is equal to 5")
    }
    else {
        console.log("x is less than 10 and y is greater than 5")  
    }
}