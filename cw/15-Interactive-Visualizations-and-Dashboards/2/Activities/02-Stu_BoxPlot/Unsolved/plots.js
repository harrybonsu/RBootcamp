var trace1 = {
  y: temps.newyork,
  name: "New York",
  type: "box"
  };
  
  var trace2 = {
    y: temps.houston,
    name: "Houston",
    type: "box"
  };
  
  var data = [trace1, trace2];
  
  var layout = {
    title: "Temperature in New York and Houston, 2014-2015",
    yaxis: {title: "Temparatures in F"}
  };
  
  // Plot the chart to a div tag with id "plot"

  Plotly.newPlot("plot", data, layout)