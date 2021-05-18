// Data which we will be using to build our chart
var booksReadThisYear = [15, 20, 25, 15, 20];

// Append the SVG wrapper to the page, set its height and width, and create a variable which references it
var svg = d3.select("#svg-area")
  .append("svg")
  .attr("height", "600")
  .attr("width", "400");

// Append a rectangle and set its height in relation to the booksReadThisYear value


  svg.selectAll('rect')
    .data(booksReadThisYear)
    .enter()
    .append('rect')
    .classed("bar", true)
    .attr("width", 50)
    .attr("height", function (d){
    return d*15;
    })
    .attr("x", function(d,i) {
      return i*50;
    })
    .attr("y", function(d) {
      return 600-d*20
    })
    