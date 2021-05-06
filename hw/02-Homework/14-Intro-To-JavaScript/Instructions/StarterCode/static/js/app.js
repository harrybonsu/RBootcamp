// from data.js
var tableData = data;
//console.log(tableData);

// Selecting the table body
var tbody = d3.select("table")
tbody.attr("table table-striped")

// Loop Through `data` and console.log each weather report object
tableData.forEach(function(ufoSightings) {
    //console.log(ufoSightings);
    var row = tbody.append('tr')
    Object.entries(ufoSightings).forEach(function([key, value]) {
    //console.log(key, value);
    var cell = row.append('td');
    cell.text(value);
    

    });
})



