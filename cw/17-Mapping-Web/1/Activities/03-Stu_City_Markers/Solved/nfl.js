// Function to determine marker size based on population
// function markerSize(population) {
//     return population / 40;
//   }


// Create base layers

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
var myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5,
    layers: [streetmap, darkmap]
});

// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(baseMaps).addTo(myMap);

  // An array containing all of the information needed to create city and state markers
  var locations = [
    {
        "type": "FeatureCollection",
        "features": [
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -74.074444,
                        40.813611
                    ]
                },
                "properties": {
                    "League": "NFL",
                    "Team": "New York Giants",
                    "Lat": 40.813611,
                    "Long": -74.074444,
                    "Stadium": "MetLife Stadium",
                    "Conference": "NFC"
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -74.074444,
                        40.813611
                    ]
                },
                "properties": {
                    "League": "NFL",
                    "Team": "New York Jets",
                    "Lat": 40.813611,
                    "Long": -74.074444,
                    "Stadium": "MetLife Stadium",
                    "Conference": "AFC"
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -88.062222,
                        44.501389
                    ]
                },
                "properties": {
                    "League": "NFL",
                    "Team": "Green Bay Packers",
                    "Lat": 44.501389,
                    "Long": -88.062222,
                    "Stadium": "Lambeau Field",
                    "Conference": "NFC"
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.092778,
                        32.747778
                    ]
                },
                "properties": {
                    "League": "NFL",
                    "Team": "Dallas Cowboys",
                    "Lat": 32.747778,
                    "Long": -97.092778,
                    "Stadium": "AT&T Stadium",
                    "Conference": "NFC"
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -76.864444,
                        38.907778
                    ]
                },
                "properties": {
                    "League": "NFL",
                    "Team": "Washington Redskins",
                    "Lat": 38.907778,
                    "Long": -76.864444,
                    "Stadium": "FedEx Field",
                    "Conference": "NFC"
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -94.483889,
                        39.048889
                    ]
                },
                "properties": {
                    "League": "NFL",
                    "Team": "Kansas City Chiefs",
                    "Lat": 39.048889,
                    "Long": -94.483889,
                    "Stadium": "Arrowhead Stadium",
                    "Conference": "AFC"
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -105.02,
                        39.743889
                    ]
                },
                "properties": {
                    "League": "NFL",
                    "Team": "Denver Broncos",
                    "Lat": 39.743889,
                    "Long": -105.02,
                    "Stadium": "Sports Authority Field at Mile High",
                    "Conference": "AFC"
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -80.238889,
                        25.958056
                    ]
                },
                "properties": {
                    "League": "NFL",
                    "Team": "Miami Dolphins",
                    "Lat": 25.958056,
                    "Long": -80.238889,
                    "Stadium": "Hard Rock Stadium",
                    "Conference": "AFC"
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -80.852778,
                        35.225833
                    ]
                },
                "properties": {
                    "League": "NFL",
                    "Team": "Carolia Panthers",
                    "Lat": 35.225833,
                    "Long": -80.852778,
                    "Stadium": "Bank of America Stadium",
                    "Conference": "NFC"
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -90.081111,
                        29.950833
                    ]
                },
                "properties": {
                    "League": "NFL",
                    "Team": "New Orleans Saints",
                    "Lat": 29.950833,
                    "Long": -90.081111,
                    "Stadium": "Mercedes-Benz Superdome",
                    "Conference": "NFC"
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.699444,
                        41.506111
                    ]
                },
                "properties": {
                    "League": "NFL",
                    "Team": "Cleveland Browns",
                    "Lat": 41.506111,
                    "Long": -81.699444,
                    "Stadium": "FirstEnergy Stadium",
                    "Conference": "AFC"
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -78.786944,
                        42.773611
                    ]
                },
                "properties": {
                    "League": "NFL",
                    "Team": "Buffalo Bills",
                    "Lat": 42.773611,
                    "Long": -78.786944,
                    "Stadium": "Ralph Wilson Stadium",
                    "Conference": "AFC"
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -86.771389,
                        36.166389
                    ]
                },
                "properties": {
                    "League": "NFL",
                    "Team": "Tennessee Titans",
                    "Lat": 36.166389,
                    "Long": -86.771389,
                    "Stadium": "Nissan Stadium",
                    "Conference": "AFC"
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -71.26344,
                        42.090944
                    ]
                },
                "properties": {
                    "League": "NFL",
                    "Team": "New England Patriots",
                    "Lat": 42.090944,
                    "Long": -71.26344,
                    "Stadium": "Gillette Stadium",
                    "Conference": "AFC"
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -75.1675,
                        39.900833
                    ]
                },
                "properties": {
                    "League": "NFL",
                    "Team": "Philadelphia Eagles",
                    "Lat": 39.900833,
                    "Long": -75.1675,
                    "Stadium": "Lincoln Financial Field",
                    "Conference": "NFC"
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -121.97,
                        37.403
                    ]
                },
                "properties": {
                    "League": "NFL",
                    "Team": "San Francisco 49ers",
                    "Lat": 37.403,
                    "Long": 121.97,
                    "Stadium": "Levis Stadium",
                    "Conference": "NFC"
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.6375,
                        30.323889
                    ]
                },
                "properties": {
                    "League": "NFL",
                    "Team": "Jacksonville Jaguars",
                    "Lat": 30.323889,
                    "Long": -81.6375,
                    "Stadium": "EverBank Field",
                    "Conference": "AFC"
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.331667,
                        47.595278
                    ]
                },
                "properties": {
                    "League": "NFL",
                    "Team": "Seattle Seahawks",
                    "Lat": 47.595278,
                    "Long": -122.331667,
                    "Stadium": "CenturyLink Field",
                    "Conference": "NFC"
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -82.503333,
                        27.975833
                    ]
                },
                "properties": {
                    "League": "NFL",
                    "Team": "Tampa Bay Buccaneers",
                    "Lat": 27.975833,
                    "Long": -82.503333,
                    "Stadium": "Raymond James Stadium",
                    "Conference": "NFC"
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -84.516039,
                        39.095444
                    ]
                },
                "properties": {
                    "League": "NFL",
                    "Team": "Cincinnati Bengals",
                    "Lat": 39.095444,
                    "Long": -84.516039,
                    "Stadium": "Paul Brown Stadium",
                    "Conference": "AFC"
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -80.015833,
                        40.446667
                    ]
                },
                "properties": {
                    "League": "NFL",
                    "Team": "Pittsburgh Steelers",
                    "Lat": 40.446667,
                    "Long": -80.015833,
                    "Stadium": "Heinz Field",
                    "Conference": "AFC"
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -83.045556,
                        42.34
                    ]
                },
                "properties": {
                    "League": "NFL",
                    "Team": "Detroit Lions",
                    "Lat": 42.34,
                    "Long": -83.045556,
                    "Stadium": "Ford Field",
                    "Conference": "NFC"
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -112.2625,
                        33.5275
                    ]
                },
                "properties": {
                    "League": "NFL",
                    "Team": "Arizona Cardinals",
                    "Lat": 33.5275,
                    "Long": -112.2625,
                    "Stadium": "University of Phoenix Stadium",
                    "Conference": "NFC"
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -86.163806,
                        39.760056
                    ]
                },
                "properties": {
                    "League": "NFL",
                    "Team": "Indianapolis Colts",
                    "Lat": 39.760056,
                    "Long": -86.163806,
                    "Stadium": "Lucas Oil Stadium",
                    "Conference": "AFC"
                },
                "type": "Feature"
            },
            {
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.200556,
                        37.751667
                    ]
                },
                "properties": {
                    "League": "NFL",
                    "Team": "Oakland Raiders",
                    "Lat": 37.751667,
                    "Long": -122.200556,
                    "Stadium": "Oakland Alameda Coliseum",
                    "Conference": "AFC"
                },
                "type": "Feature"
            },
            {
                "type": "Feature",
                "properties": {
                    "League": "NFL",
                    "Team": "Atlanta Falcons",
                    "Lat": 33.7552,
                    "Long": -84.4009,
                    "Stadium": "Mercedes-Benz Stadium",
                    "Conference": "NFC"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -84.40092086791992,
                        33.755173286674825
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "League": "NFL",
                    "Team": "Houston Texans",
                    "Lat": 29.6849,
                    "Long": -95.4109,
                    "Stadium": "NRG Stadium",
                    "Conference": "AFC"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -95.41093826293944,
                        29.684883725361402
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "League": "NFL",
                    "Team": "Baltimore Ravens",
                    "Lat": 39.2781,
                    "Long": -76.6227,
                    "Stadium": "M&T Bank Stadium",
                    "Conference": "AFC"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -76.62272930145264,
                        39.2781117405251
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "League": "NFL",
                    "Team": "Los Angeles Chargers",
                    "Lat": 33.8644,
                    "Long": -118.2611,
                    "Stadium": "StubHub Center",
                    "Conference": "AFC"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -118.26112747192383,
                        33.86435779106245
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Stadium": "Los Angeles Memorial Coliseum",
                    "Long": "-118.2880",
                    "Lat": "34.0140",
                    "Team": "Los Angeles Rams",
                    "League": "NFL",
                    "Conference": "NFC"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -118.28801393508911,
                        34.01404531318551
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "League": "NFL",
                    "Team": "Chicago Bears",
                    "Lat": 41.8623,
                    "Long": -87.6167,
                    "Stadium": "Soldier Field",
                    "Conference": "NFC"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -87.61673927307127,
                        41.86230603839001
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "League": "NFL",
                    "Team": "Minnesota Vikings",
                    "Lat": 44.9735,
                    "Long": -93.2575,
                    "Stadium": "U.S. Bank Stadium",
                    "Conference": "NFC"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -93.25753211975098,
                        44.973527022296835
                    ]
                }
            }
        ]
    }
];

// Define arrays to hold created city and state markers
//var stadiumMarkers = [];

// Loop through locations and create city and state markers
for (var i = 0; i < locations.length; i++) {
    // Setting the marker radius for the state by passing population into the markerSize function
    console.log(locations);
    
    L.marker([locations[i].features[i].geometry.coordinates], {
            draggable: true,
            title: locations[i].features[i].properties.Team
        }).addTo(myMap);
}