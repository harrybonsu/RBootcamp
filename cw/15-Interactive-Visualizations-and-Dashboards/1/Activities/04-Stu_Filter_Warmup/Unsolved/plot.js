// @TODO: Complete the Following Steps

// Filter the top 15 cities with a population increase greater than 15,000
//  and then graph each city on the x-axis and the respective population on the y-axis.

// 1. Use the filter method to create a custom filtering function
//  that returns the cities with a population increase greater than 15,000.

function filterCities(city) {
    //Add your code
    return parseInt(city.Increase_from_2016) > 15000
  }
  
  // 2. Use filter() to pass the function as its argument
 var cities = top15Cities.filter(filterCities)
  
  //  Check to make sure your filtered your cities.
  console.log(cities);
  
  // 3. Use the map method with the arrow function to return all the filtered cities.
 var cityName = top15Cities.map(city => city.City);
 
  //  Check your filtered cities
  console.log(cityName);
  
  // 4. Use the map method with the arrow function to return all the filtered cities population.
  var population = top15Cities.map(city => city.population)

  //  Check the populations of your filtered cities
 console.log(population);
  
  // 5. Create your trace.
  var trace1 = {
    x: cityName,
    y: population,
    type: "bar"
  },

  
  // 6. Create the data array for our plot
  data = [trace1];
  
  // 7. Define our plot layout
  var layout = {
    title: "Top Cities",
    xaxis: {title: "Cities"},
    yaxis: {title: "Population"}
  }

  // 8. Plot the chart to a div tag with id "bar-plot"
  Plotly.newPlot("bar-plot", data, layout)
  