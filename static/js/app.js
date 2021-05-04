// Use D3 fetch to read the JSON file
// The data from the JSON file is arbitrarily named importedData as the argument
d3.json("./data/samples.json").then((data) => {
    populate_dropdown(data.names);
    top_ten_otus = data.samples[0];
    plot_bar(top_ten_otus)
    // console.log(data)
});

function populate_dropdown(names){   // This functions populates the dropdown menu
  var options = d3.select("#selDataset");
    names.forEach((name)=>{  
      var option = options.append("option")
      option.text(name).property("value",name)
  });
}

function plot_bar(subject){
    console.log(subject);
    var y_labels = subject.otu_ids.slice(0,10).map(otu_id=>`OTU ${otu_id}`);
    var x_vals = subject.sample_values.slice(0,10);
    var hover_vals = subject.otu_labels.slice(0,10);
    console.log(hover_vals)
    // // Create the data array for our plot
    var data = [
       trace = {     // Create your trace.
        x: x_vals.reverse(),
        y: y_labels.reverse(),
        text: hover_vals.reverse(),
        type: "bar",
        orientation:"h",}
    ];
    // Define the plot layout
    var layout = {
      title: "Top-10 Bacteria Cultures Found",
    };
      // Plot the chart to a div tag with id "bar-plot"
    Plotly.newPlot("bar", data, layout);
}

function plot_buble(){

}
