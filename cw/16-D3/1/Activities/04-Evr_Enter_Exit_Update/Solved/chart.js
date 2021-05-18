var austinTemps = [76, 59, 100, 25];

function barChart(data) {

    var exsObject = d3.select("#content")
        .selectAll(".temps")
        .data(data);

    exsObject.enter()
        .append("div")
        .classed("temps", true)
        .merge(exsObject)
        .style("height", function (d) {
            return d + "px";
        });

    exsObject.exit().remove();
}

barChart(austinTemps);