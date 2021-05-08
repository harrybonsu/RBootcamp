// from data.js
var tableData = data;

// Selecting the table body
var table = d3.select("table")
var tbody = d3.select("tbody")
tbody.attr("table table-striped")

// Looping Through `data` and appending a table to the web page with new 
//rows of data for each UFO sighting.

tableData.forEach(function(ufoSightings) {
    var row = tbody.append('tr')
    Object.entries(ufoSightings).forEach(function([key, value]) {
    var cell = row.append('td');
    cell.text(value);

    });
});

// Using the date form to listen for events to search through the 'date/time' 
// column for user input

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form")

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    d3.select('tbody').remove();

    table.append('tbody')
    var tbody = d3.select('tbody')

    // Select the input element and get the raw HTML node
    var inputField = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputField.property("value");

    if (inputValue === "") {
        tableData.forEach(function(ufoSightings) {
            var row = tbody.append('tr')
            Object.entries(ufoSightings).forEach(function([key, value]) {
            var cell = row.append('td');
            cell.text(value);
        
            });
        });
    }
    else {
        var filteredData = tableData.filter(sightings => sightings.datetime === inputValue);
   
        filteredData.forEach(function(ufoSightings) {
            var row = tbody.append('tr')
            Object.entries(ufoSightings).forEach(function([key, value]) {
            var cell = row.append('td');
            cell.text(value);
            
            });
        });
        };  
}





