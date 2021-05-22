// Creating map object
var myMap = L.map("map", {
    center: [40.7128, -74.0059],
    zoom: 11
  });
  
  // Adding tile layer
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);
  
  // Use this link to get the geojson data.
  var link = "static/data/nyc.geojson";

function pickColor(borough) {
    switch (borough) {
        case "Bronx":
            return "yellow";
        case "Manhattan":
            return "green";
        case "Brooklyn":
            return "Red";
        case "Staten Island":
            return "purple";
        case "Queens":
            return "Blue";
        default:
            return "brown"
    }
}

d3.json(link).then(function (data) {
    L.geoJson(data, {
        style: function (feature) {
            return {
                color: "white",
                fillColor: pickColor(feature.properties.borough),
                fillOpacity: 0.5
            }
        },
        onEachFeature: function (feature, layer) {
            layer.on({

                mouseOVer: function(event) {
                    layer = event.target;
                    layer.setStyle({
                        fillOpacity: 0.9
                    });
                },
                mouseOut: function(event) {
                    layer = event.target;
                    layer.setStyle({
                        fillOpacity: 0.5
                    });
                },
        
        }).addTo(myMap);
    }
})
})