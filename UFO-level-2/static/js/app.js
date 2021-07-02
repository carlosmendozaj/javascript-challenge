// from data.js
var tableData = data;

// YOUR CODE HERE!

// SELECT tbody
var tbody = d3.select("tbody");


tableData.forEach((ufoSightings) => {
    row = tbody.append("tr");
    Object.values(ufoSightings).forEach(value => row.append("td").text(value));
  });

  
// Filters:

