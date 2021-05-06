// The new student and grade to add to the table
var newGrade = ["Wash", 79];

// Use D3 to select the table
var my_table = d3.select('table')
// Use d3 to create a bootstrap striped table
// http://getbootstrap.com/docs/3.3/css/#tables-striped
my_table.attr('class', "table table-striped")

// Use D3 to select the table body
var my_tbody = d3.select('tbody')

// Append one table row `tr` to the table body
var my_row = my_tbody.append('tr')

// Append one cell for the student name
my_row.append('td').text(newGrade[0])

// Append one cell for the student grade
my_row.append('td').text(newGrade[1])