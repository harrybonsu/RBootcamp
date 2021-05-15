// Sort the data by Greek search results
var sortedData = data.sort((a, b)=> b.greekSearchResults - a.greekSearchResults);
console.log(sortedData)
// Slice the first 10 objects for plotting
var sliceData = sortedData.slice(0,10)
console.log(sliceData)

// Reverse the array to accommodate Plotly's defaults
reversedArray = sliceData.reverse()

// Trace1 for the Greek Data
var trace1 = {
    x: reversedArray.map(obj=> obj.greekSearchResults),
    y: reversedArray.map(obj=> obj.greekName),
    type: "bar",
    orientation: 'h'
}
// data
var data = [trace1]

// Apply the group bar mode to the layout
var layout = {
    title: "Top Ten Greek gods",
    xaxis: {title: "Greek Name"},
    yaxis: {title: "Search Results"}
}
// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout)
