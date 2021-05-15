// Filter the data for movies with an IMDb rating greater than 8.9
//  and then graph each title on the x-axis and the respective metascore on the y-axis.

// 1. Use the filter method to create a custom filtering function
//  that returns the movies with a rating greater than 8.9

function filterMovieRatings(movie) {
    //Add your code
    return movie.imdbRating > 8.9;
  }
  
  // 2. Use filter() to pass the function as its argument
  var filteredmovies = topMovies.filter(filterMovieRatings)
 
  //  Check to make sure your are filtering your movies.
  console.log(filteredmovies);
  
  // 3. Use the map method with the arrow function to return all the filtered movie titles.
  titles = filteredmovies.map(movie => movie.title)
  
  //  Check your filtered movie titles
  console.log(titles);
  
  // 4. Use the map method with the arrow function to return all the filtered movie metascores.
  movieScore = filteredmovies.map(movie => movie.metascore);
  
  //  Check your filtered metascores.
  console.log(movieScore);
  
  // 5. Create your trace.
var trace = {
  x: titles,
  y: movieScore,
  type: 'bar'
};
  
  // 6. Create the data array for our plot
  var data = [trace]
  
  // 7. Define our plot layout
 var layout = {
   title: 'Movies Vs. Metascore',
   xaxis: {title: 'Movie Title'},
   yaxis: {title: 'Movie Scores'}
 };
  
  // 8. Plot the chart to a div tag with id "bar-plot"
  Plotly.newPlot('bar-plot', data, layout);

  