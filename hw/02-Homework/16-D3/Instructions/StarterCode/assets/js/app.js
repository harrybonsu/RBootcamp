// @TODO: YOUR CODE HERE!
// Define SVG area dimensions
var svgWidth = 960;
var svgHeight = 660;

// Define the chart's margins as an object
var chartMargin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 30
};

// Define dimensions of the chart area
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// Select body, append SVG area to it, and set the dimensions
var svg = d3.select("#scatter")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

// Append a group to the SVG area and shift ('translate') it to the right and to the bottom
var chartGroup = svg.append("g")
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

//initial Parameters
var chosenXAxis = "poverty";
var chosenYAxis = "healthcare";

// Load data data.csv
d3.csv('./assets/data/data.csv').then(function (newsData) {
    console.log(newsData)
    newsData.forEach(function (d) {
        d.healthcare = parseInt(d.healthcare)
        d.poverty = parseInt(d.poverty)

    });
    // Configure a band scale for the horizontal axis with a padding of 0.1 (10%)
    var xBandScale = d3.scaleLinear()
    .domain([d3.min(newsData, d => d[chosenXAxis]) * 0.8,
        d3.max(newsData, d => d[chosenXAxis]) * 1.2])
    .range([0, chartWidth]);

    // Create a linear scale for the vertical axis.
    var yLinearScale = d3.scaleLinear()
    .domain([d3.min(newsData, d => d[chosenYAxis]) * 0.8,
        d3.max(newsData, d => d[chosenYAxis]) * 1.2])
    .range([chartHeight, 0]);

    // Create two new functions passing our scales in as arguments
    // These will be used to create the chart's axes
    var bottomAxis = d3.axisBottom(xBandScale);
    var leftAxis = d3.axisLeft(yLinearScale);

    // Append two SVG group elements to the chartGroup area,
    // and create the bottom and left axes inside of them
    chartGroup.append("g")
        .call(leftAxis);

    chartGroup.append("g")
        .attr("transform", `translate(0, ${chartHeight})`)
        .call(bottomAxis);

    // Create one SVG rectangle per piece of tvData
    // Use the linear and band scales to position each rectangle within the chart
    circlesGroup = chartGroup.selectAll("circle")
        .data(newsData)
        .enter()
        .append("circle")
        .classed("stateCircle", true)
        .attr("cx", d => xBandScale(d[chosenXAxis]))
        .attr("cy", d => yLinearScale(d[chosenYAxis]))
        .attr("r", 14)
        .attr("opacity", ".8");

    //append initial text
    chartGroup.selectAll(".stateText")
        .data(newsData)
        .enter()
        .append("text")
        .classed("stateText", true)
        .attr("x", d => xBandScale(d[chosenXAxis]))
        .attr("y", d => yLinearScale(d[chosenYAxis]))
        .attr("dy", 3)
        .attr("font-size", "10px")
        .text(function(d){return d.abbr});



}).catch(function (error) {
    console.log(error);
});
