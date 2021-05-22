d3.csv("./hours-of-tv-watched.csv").then(function(tvData) {
    // console.log(tvData)

    var name = tvData.map(data => data.name)
    console.log(name)

    var hrs = tvData.map(data => parseInt(data.hours))
    console.log(hrs)
})