// Use D3 fetch to read the JSON file
// The data from the JSON file is arbitrarily named importedData as the argument
d3.json("./data/samples.json").then((data) => {
    populate_dropdown(data.names);
    
    console.log(data)
});

function populate_dropdown(names){   // This functions populates the dropdown menu
  var options = d3.select("#selDataset");
    names.forEach((name)=>{  
      var option = options.append("option")
      option.text(name).property("value",name)
  });
}

function plot_bar(data){

}