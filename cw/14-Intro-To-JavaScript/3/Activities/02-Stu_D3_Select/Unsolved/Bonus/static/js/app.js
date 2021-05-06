// Use D3 to select the table
var my_table = d3.select('table')

// Use D3 to select the table body
var my_tbody = d3.select('tbody')

// Use D3 to set the table class to `table table-striped`
my_table.attr('class', 'table table-striped')
// BONUS: Dynamic table
// Loop through an array of grades and build the entire table body from scratch
var grades = [["Malcolm", 80], ["Zoe", 85], ["Kaylee", 99], ["Simon", 99], ["Wash", 79]];

for (var i=0; i<grades.length; i++) {
    my_row = my_tbody.append('tr');
    my_row.append('td').text(grades[i][0]);
    my_row.append('td').text(grades[i][1])
};