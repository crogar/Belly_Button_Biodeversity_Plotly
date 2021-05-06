d3.json("./data/samples.json").then((sample_data) => {
    // console.log(data)
    var wfreq = sample_data.metadata.map(result => result.wfreq)
    for(var i=0;i<wfreq.length;i++){
        // console.log(wfreq[i])
        if (wfreq[i] === null){ wfreq[i] = 0}
    }
    for(var i=0;i<wfreq.length;i++){
        console.log(wfreq[i])

    }
    var data = [
        {
          domain: { x: [0, 1], y: [0, 1] },
          value: 6,
          title: { text: "Speed" },
          type: "indicator",
          mode: "gauge+number",
          gauge: {
            axis: { range: [null, 9] },
            steps: [
              { range: [0, 3], color: "lightgray" },
              { range: [3, 6], color: "gray" }
            ],
            threshold: {
              line: { color: "red", width: 4 },
              thickness: 0.75,
              value: 6
            }
          }
        }
      ];
      
      var layout = { width: 600, height: 450, margin: { t: 0, b: 0 } };
      Plotly.newPlot('gauge', data, layout);
      
});