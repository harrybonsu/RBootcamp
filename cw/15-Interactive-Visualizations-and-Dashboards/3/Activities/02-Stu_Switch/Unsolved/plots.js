// Initializes the page with a default plot
function init() {
  data = [{
    x: [1,2,3,4,5],
    y: [1,2,4,8,16]
  }]
  Plotly.newPlot('plot', data)
}

// Call updatePlotly() when a change takes place to the DOM
d3.selectAll('body').on('change', updatePlotly)

// This function is called when a dropdown menu item is selected
function updatePlotly() {
  var selectData = d3.select('#selDataset').node().value;
  console.log(selectData)

  switch(selectData) {
    case 'dataset1':
      x = [1, 2, 3, 4, 5];
      y = [1, 2, 4, 8, 16];
      break;
    case 'dataset2':
      x = [10, 20, 30, 40, 50];
      y = [1, 10, 100, 1000, 10000];
      break;
    case 'dataset3':
      x = [100, 200, 300, 400, 500];
      y = [10, 100, 50, 10, 0];
      break;
    default:
      console.log('No such data')
  }
  Plotly.restyle('plot', 'x', [x])
  Plotly.restyle('plot', 'y', [y])
}
init();