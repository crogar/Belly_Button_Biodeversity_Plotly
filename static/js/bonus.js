function optionChanged(subject_id){
  d3.json("./data/samples.json").then((sample_data) => {
    // console.log(data)
    var wfreq = sample_data.metadata.map(result => result.wfreq)
    var max_value = Math.max( ...wfreq ); 
    for(var i=0;i<wfreq.length;i++){
        if (wfreq[i] === null){ wfreq[i] = 0}
    }
    console.log(parseInt(subject_id))

    
    var subject_wfreq = wfreq[parseInt(subject_id)];
  
    var data = [
        {
          domain: { x: [0, 2], y: [0, 2] },
          value: wfreq[56],
          title: { text: "WashFrequency" },
          type: "indicator",
          mode: "gauge+number",
          gauge: {
            axis: { range: [0, max_value] },
            steps: [
              { range: [0, 1], color: "lightgray" },
              { range: [1, 2], color: "gray" },
              { range: [2, 3], color: "gray" },
              { range: [3, 4], color: "gray" },
              { range: [4, 5], color: "gray" },
              { range: [5, 6], color: "gray" },
              { range: [6, 7], color: "gray" },
              { range: [7, 8], color: "gray" },
              { range: [8, 9], color: "gray" },
            ],
            threshold: {
              line: { color: "red", width: 4 },
              thickness: 0.75,
              value: subject_wfreq
            }
          }
        }
      ];
      
      var layout = { width: 600, height: 450, margin: { t: 0, b: 0 } };
      Plotly.newPlot('gauge', data, layout);   
});
}