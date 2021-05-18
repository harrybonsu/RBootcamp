// Part 1
// Generating an SVG
var svg = d3.select("body").append("svg");
svg.attr("width", "300")
    .attr("height", "300")



// Part 2
// Binding the SVG to data
var radius = [60, 40, 20]

var circles = svg.selectAll("circle");

circles.data(radius)
    .enter()
    .append("circle")
    .attr("cx", 200)
    .attr("cy", 200)
    .attr("r", function(d){
        return d;
    })
    .attr("stroke", "red")
    .attr("stroke-width", "5")

