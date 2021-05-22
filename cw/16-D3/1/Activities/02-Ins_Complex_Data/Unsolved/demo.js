var unirest = require("unirest");

var req = unirest("GET", "https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague");

req.query({
	"matchday": "1"
});

req.headers({
	"x-rapidapi-key": "b31f7c49e2mshe4cd8cf100a2b61p14bf3djsn02de50c2e6c0",
	"x-rapidapi-host": "heisenbug-premier-league-live-scores-v1.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});

console.log(req)