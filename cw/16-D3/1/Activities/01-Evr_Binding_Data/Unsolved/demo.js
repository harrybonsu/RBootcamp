
// 1-.each()
d3.select('ul').selectAll('li')
    .each(function(d,i) {
        console.log('element', this);
        console.log('data', d);
        console.log('index', i);
    });


// 2-.data()
// Access elements' data
// returns an array of undefined items


// Assign data to elements in the selector object
// not enough
var arr = [50, 55];

d3.select('ul').selectAll('li').data(arr);

d3.select('ul').selectAll('li')
    .each(function(d,i) {
        console.log('element', this);
        console.log('data', d);
        console.log('index', i);
    });

// just right
var arr = [50, 55, 53];

d3.select('ul').selectAll('li').data(arr);

d3.select('ul').selectAll('li')
    .each(function(d,i) {
        console.log('element', this);
        console.log('data', d);
        console.log('index', i);
    });
// too many
var arr = [50, 55, 53, 56, 68];


// trying to reassign with not enough
var arr = [1, 2];



// 3-Multiple Methods



// Modify the returned data
var arr = [50, 55, 53];

d3.select('ul').selectAll('li')
    .data(arr)
    .text(function (d) {
        return d;
    });

// 4-.enter()
// New data points are ignored here
var arr = [50, 55, 53, 56, 68];

d3.select('ul').selectAll('li')
    .data(arr)
    .enter()
    .append('li')
    .text(function (d) {
        return d;
    });


// append affects existing elements = FAIL!
var arr = [50, 55, 53, 56, 68];

// Use `enter` to create new elements
var arr = [50, 55, 53, 56, 68];
// First, update existing elements

// Second, create new elements for extra data points

// 5-.exit()
// Finally, what if we remove an item?
var arr = [50, 55];
