// Use D3 fetch to read the JSON file
d3.json("./data/samples.json").then((data) => {
    populate_dropdown(data.names);
    plot_bar(data.samples[0])   // Where data.samples[0] represents the first subject in our dataset
    plot_buble(data.samples[0])
    display_sample_metada(data.metadata[0])   // Where data.metada[0] represents the first subject's metadata in our dataset
});

function populate_dropdown(names){   // This functions populates the dropdown menu
  var options = d3.select("#selDataset");
    names.forEach((name)=>{  
      var option = options.append("option")
      option.text(name).property("value",name)
  });
}

function plot_bar(subject){
    var y_labels = subject.otu_ids.slice(0,10).map(otu_id=>`OTU ${otu_id}`);
    var x_vals = subject.sample_values.slice(0,10);
    var hover_vals = subject.otu_labels.slice(0,10);
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

// Display the sample Metadata 
function display_sample_metada(sample){
  var subject_info = d3.select("#sample-metadata").html("")
  Object.entries(sample).forEach(([key, value]) => {
    var pgh = subject_info.append("p").text(`${key}:${value}`).style("font-weight", 600);
  });
}

function optionChanged(subject_id){
  d3.json("./data/samples.json").then((data) => {
    var filtered_metadata = data.metadata.filter((subject)=> subject.id == subject_id)
    var filtered_sample = data.samples.filter((subject)=> subject.id == subject_id)
    // plot_bar(filtered_sample)   // Where data.samples[0] represents the first subject in our dataset
    // plot_buble(filtered_sample)
    display_sample_metada(filtered_metadata[0])   // Where data.metada[0] represents the first subject's metadata in our dataset
});
}