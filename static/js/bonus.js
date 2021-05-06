function gauge_plot(subjec_sample){
    var value = subjec_sample.wfreq;
    console.log(value)
    var data = [
    {
      domain: { x: [0, 2], y: [0, 2] },
      value: value,
      title: { text: "<b>Belly Button Washing Frequency</b> <br> Scrubs per Week" },
      type: "indicator",
      mode: "gauge+number",
      gauge: {
        axis: { range: [0, 9] },
        steps: [
          { range: [0, 1], color: "rgba(64, 119, 119,0.2)" },
          { range: [1, 2], color: "rgba(64, 119, 119,0.3)" },
          { range: [2, 3], color: "rgba(64, 119, 119,0.4)" },
          { range: [3, 4], color: "rgba(64, 119, 119,0.5)" }, 
          { range: [4, 5], color: "rgba(64, 119, 119,0.6)" },
          { range: [5, 6], color: "rgba(64, 119, 119,0.7)" },
          { range: [6, 7], color: "rgba(64, 119, 119,0.8)" },
          { range: [7, 8], color: "rgba(64, 119, 119, 0.9)" },
          { range: [8, 9], color: "rgba(64, 119, 119,1)" },
        ],
        threshold: {
          line: { color: "red", width: 4 },
          thickness: 0.75,
          value: value
        }
      }
    }
  ];
  
  var layout = { width: 600, height: 450, margin: { t: 0, b: 0 } };
  Plotly.newPlot('gauge', data, layout);  
}