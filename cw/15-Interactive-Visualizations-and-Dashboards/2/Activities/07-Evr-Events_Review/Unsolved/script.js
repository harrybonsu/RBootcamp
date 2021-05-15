// Use D3 to create an event handler
d3.selectAll("body").on('change', updatePage)

function updatePage() {
  // Use D3 to select the dropdown menu
  
  // Assign the dropdown menu item ID to a variable
  
  // Assign the dropdown menu option to a variable
  
  var ddmenuSelected = d3.selectAll('#selectOption').node().value;

  console.log(ddmenuSelected)
 
}
