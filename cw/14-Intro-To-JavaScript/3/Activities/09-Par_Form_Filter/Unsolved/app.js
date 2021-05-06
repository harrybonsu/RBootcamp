// Assign the data from `data.js` to a descriptive variable
var people = data;
//console.log(people)

// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#patient-form-input")

  // Get the value property of the input element
  var inputText = inputElement.property("value");
  console.log(inputText)

  // Use the form input to filter the data by blood type
  var outputData = people.filter(person => person.bloodType === inputText);
  console.log(outputData)
  // BONUS: Calculate summary statistics for the age field of the filtered data
  var ageData = outputData.map(person => person.age);
  console.log(ageData)

  // First, create an array with just the age values

  // Next, use math.js to calculate the mean, median, mode, var, and std of the ages

  // Finally, add the summary stats to the `ul` tag
};
