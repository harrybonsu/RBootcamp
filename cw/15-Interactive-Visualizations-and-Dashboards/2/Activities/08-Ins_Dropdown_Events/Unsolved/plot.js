// Initializes the page with a default plot
function init() {
    data = [{
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16] }];
  
    Plotly.newPlot("plot", data);
  }
  
d3.selectAll("#selDataset").on("change", updatePlotly);

function updatePlotly() {
  var ddmenu = d3.select("#selDataset")
  var dataset = ddmenu.property('value');
  console.log(dataset)
  var x = [];
  var y = [];

  if (dataset === 'DataSet1') {
    x = [1, 2, 3, 4, 5];
    y = [1, 2, 4, 8, 16];
  }
  else if (dataset === 'DataSet2') {
    x = [10, 20, 30, 40, 50];
    y = [1, 10, 100, 1000, 10000];
  }

  Plotly.restyle("plot", "x", [x]);
  Plotly.restyle("plot", "y", [y]);
  
}

init();