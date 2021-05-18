
function buildPlot(otu_sample) {
    d3.json('samples.json').then((data) => {
        var samples = data.samples;
        var resultsArray = samples.filter(obj => obj.id == otu_sample);
        var results = resultsArray[0]

        var sample_values = results.sample_values
        var otu_ids = results.otu_ids
        var otu_labels = results.otu_labels


        // Create a horizontal bar chart with a dropdown menu to display the 
        //top 10 OTUs found in that individual.

        var trace1 =
        {
            x: sample_values.slice(0, 10).reverse(),
            y: otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(),
            text: otu_labels.slice(0, 10).reverse(),
            type: "bar",
            orientation: "h"

        };

        barData = [trace1]

        var layout = {
            title: "Top 10 Operational Taxonomic Units Found",
            margin: { t: 30, l: 150 }
        };

        Plotly.newPlot("bar", barData, layout);

        // Create a bubble chart that displays each sample.

        var LayoutBubble = {
            margin: { t: 0 },
            xaxis: { title: "OTU ID" },
            hovermode: "closest",
        };

        var trace2 =
        {
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: "markers",
            marker: {
                color: otu_ids,
                size: sample_values,
            }
        };

        bubbleData = [trace2]

        Plotly.newPlot("bubble", bubbleData, LayoutBubble);

    });
}

// Display the sample metadata, i.e., an individual's demographic information.

function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
        var metadata = data.metadata;
        var resultsarray = metadata.filter(sampleobject =>
            sampleobject.id == sample);
        var result = resultsarray[0]
        var panel = d3.select("#sample-metadata");
        panel.html("");
        Object.entries(result).forEach(([key, value]) => {
            panel.append("h6").text(`${key}: ${value}`);
        });

    });
}

function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#selDataset");

    // Use the list of sample names to populate the select options
    d3.json("samples.json").then((data) => {
        var sampleNames = data.names;
        sampleNames.forEach((sample) => {
            selector
                .append("option")
                .text(sample)
                .property("value", sample);
        });

        // Use the first sample from the list to build the initial plots
        const firstSample = sampleNames[0];
        buildPlot(firstSample);
        buildMetadata(firstSample);
    });
}

function optionChanged(newSample) {
    // Fetch new data each time a new sample is selected
    buildPlot(newSample);
    buildMetadata(newSample);
}

// Initialize the page
init();