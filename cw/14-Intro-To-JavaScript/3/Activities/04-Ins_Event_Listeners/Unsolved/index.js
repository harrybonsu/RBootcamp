// Getting a reference to the button on the page with the id property set to `click-me`
var button = d3.select("#click-me")

// Getting a reference to the input element on the page with the id property set to 'input-field'
var inputField = d3.select("#input-field")

// This function is triggered when the button is clicked
function handleClick() {
  console.log("someone clicked ....")
  
  
  // We can use d3 to see the object that dispatched the event
  
}

// We can use the `on` function in d3 to attach an event to the handler function
button.on("click", handleClick)

// You can also define the click handler inline


// Event handlers are just normal functions that can do anything you want
button.on("click", function() {
  d3.select(".giphy-me").html("<img src='https://gph.to/2Krfn0w' alt='giphy'>");
});

// Input fields can trigger a change event when new text is entered.
inputField.on("change", function() {
  console.log("from Inline")
  var newText = d3.event.target.value;
  console.log(newText);
});
