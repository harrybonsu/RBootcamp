// Create the Traces
var trace1 = {
  x: data.organ,
  y: data.survival.map(val => Math.sqrt(val)),
  type: "box"
  };
  
  // Create the data array for the plot
  var data = [trace1];
  
  // Define the plot layout

  
  // Plot the chart to a div tag with id "plot"

  Pyplot.newPlot("plot", data);