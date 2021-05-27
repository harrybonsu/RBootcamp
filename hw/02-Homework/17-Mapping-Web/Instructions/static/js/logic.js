var earthQuakeUrl = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson'

// // Perform a GET request to the query URL
// d3.json(earthQuakeUrl).then(function (data) {
//     // Once we get a response, send the data.features object to the createFeatures function
//     console.log(data);
// });
// Streetmap Layer
var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
});

var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "dark-v10",
    accessToken: API_KEY
});


// Create a baseMaps object
var baseMaps = {
    "Street Map": streetmap,
    "Dark Map": darkmap
};


// Define a map object
var myMap = L.map("mapid", {
    center: [37.09, -95.71],
    zoom: 5,
    layers: [streetmap, darkmap]
});

// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(baseMaps).addTo(myMap);
  
  // Use this link to get the geojson data.
  // var link = "static/data/stadiums.geojson";
  
  // Grabbing our GeoJSON data..
  d3.json(earthQuakeUrl).then(function(data) {
    // Creating a geoJSON layer with the retrieved data
    console.log(data);
    L.geoJson(data, {
     
      // Called on each feature
      onEachFeature: function(feature, layer) {
        layer.bindPopup("<h2>" + feature.properties.mag + "</h2> <hr> <h3> Stadium: " + 
        feature.properties.place + "</h3> <h3> Conference: " + feature.properties.time + "</h3>" + 
        "<img src='static/images/New York Giants.gif' width='100px' />");
        
      }
    }).addTo(myMap);
  });

