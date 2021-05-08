// from data.js
var tableData = data;
//console.log(tableData);

// Selecting the table body
var tbody = d3.select("tbody")
tbody.attr("table table-striped")

// Looping Through `data` and appending a table to the web page with new 
//rows of data for each UFO sighting.

//var insertData = (dataInput) => {

tableData.forEach(function(ufoSightings) {
    var row = tbody.append('tr')
    Object.entries(ufoSightings).forEach(function([key, value]) {
    //console.log(key, value);
    var cell = row.append('td');
    cell.text(value);

    });
});
//}
//insertData(tableData)

// Using the date form to listen for events to search through the 'date/time' 
// column for user input

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form")

// Select the reset button
var resetbtn = d3.select("#reset-btn");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    //tbody.remove()

    // Select the input element and get the raw HTML node
    var inputField = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputField.property("value");
    console.log(inputValue)

    var filteredData = tableData.filter(sightings => sightings.datetime === inputValue);
    console.log(filteredData)
   
    filteredData.forEach(function(ufoSightings) {
        //console.log(ufoSightings);
        var row = tbody.append('tr')
        Object.entries(ufoSightings).forEach(function([key, value]) {
        //console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
        
        });
    });
}
/*document.getElementById(".form-control").reset();
resetbtn.on("click", () => {
    tbody.html("");
    
    insertData(tableData)
    console.log("Table reset")
});


*/


