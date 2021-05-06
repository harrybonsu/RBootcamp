// An array of objects
var roster = [{
    name: "Doug",
    position: "Quarterback",
    madeTeam: true
  },
  {
    name: "Antonio",
    position: "Tight End",
    madeTeam: true
  },
  {
    name: "Nick",
    position: "Kicker",
    madeTeam: false
  },
  {
    name: "Ereck",
    position: "Offensive Live",
    madeTeam: false
  },
  {
    name: "AJ",
    position: "Line Backer",
    madeTeam: true
  }
  ];
  
  // Create a custom function to return players who made the team
  function playerlist(player) {
    return player.madeTeam;
  }
  
  // Call the custom function with filter()
 var teamlist = roster.filter(playerlist);
  
  // Display the results
  console.log(teamlist)
  
  // Determine how many players made the cut, and how many did not
  console.log(roster.length)
  console.log(teamlist.length)
  
  // Display the results
console.log(roster.length - teamlist.length)
  