// Select the text of an HTML element
var text1 = d3.select(".text1").text()
console.log(text1)

var text2 = d3.select("#text2").text()
console.log(text2)

// Modify the text of an HTML element
var text1 = d3.select(".text1").text("I have been modified")

// Capture the HTML of a selection
var my_html = d3.select(".my-link").html()
console.log(my_html)

// Select an element's child element
// An object is returned
var my_link_anchor = d3.select(".my-link>a")
console.log(my_link_anchor)

// // Capture the child element's href attribute
console.log(my_link_anchor.attr("href"));


// Change an element's attribute https://python.org
my_link_anchor.attr("href", "https://python.org")

//Use chaining to join methods, change URL to https://nytimes.com
my_link_anchor.attr("href", "https://nytimes.com").text("Go to NY Times")

// Select all list items, then change their font color
d3.selectAll("li").style("color", 'red')

// Create a new element
d3.select('ul').append('li')

// Use chaining to create a new element and set its text
d3.select('ul').append('li').text('item 5').style("color", 'red')