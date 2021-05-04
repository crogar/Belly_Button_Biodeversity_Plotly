// Use D3 fetch to read the JSON file
d3.json("./data/samples.json").then((data) => {
    populate_dropdown(data.names);
    plot_bar(data.samples[0])
    plot_buble(data.samples[0])
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

function plot_buble(subject){
  var data = [
    trace1 = {
      x: subject.otu_ids,
      y: subject.sample_values,
      text: subject.otu_labels,
      mode: 'markers',
      marker: {
        color: subject.otu_ids,
        size: subject.sample_values,
        colorscale: "Earth"
      }
    }];
  var layout = {
    title: 'Bacterias Cultures Per sample',
    xaxis: {title:"OTU ID"}
  };
  
  Plotly.newPlot('bubble', data, layout);
}
