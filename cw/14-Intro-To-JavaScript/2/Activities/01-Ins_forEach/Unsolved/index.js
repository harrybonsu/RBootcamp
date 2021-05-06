// Array of student names
var students = ["Johnny", "Tyler", "Bodhi", "Pappas"];

// This function will be called for each element in the array
function printName(name) {
  console.log(name);
}

for (var i = 0; i<students.length; i++)
  printName(students[i])

// forEach loop
students.forEach(printName)

// anonymous function
students.forEach(function (name) {
  console.log(name);
});
