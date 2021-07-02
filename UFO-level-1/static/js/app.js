// from data.js
var tableData = data;

// YOUR CODE HERE!

// Select tbody
var tbody = d3.select("tbody");

// button
var button = d3.select("#filter-btn");

var form = d3.select("#datetime");

button.on("click", runEnter);
form.on("submit",runEnter);


tableData.forEach((ufoSightings) => {
  row = tbody.append("tr");
  Object.values(ufoSightings).forEach(value => row.append("td").text(value));
});

// Filter
function runEnter() {

  d3.event.preventDefault();
    
  // Variables input
  var inputVal = form.property("value");

  // Use form to filter by date
  var filteredData=  tableData.filter(ufoDate => ufoDate.datetime === inputVal);
  console.log(filteredData);

  // Clear tbody 
  tbody.html("")

  filteredData.forEach(UFOSightings => {

  // Appennd able rows 
   var row = tbody.append("tr");
  Object.entries(UFOSightings).forEach(([key, value]) => {
  
  // Append for table data 
  var cell = row.append("td");
  
  // Add values 
  cell.text(value);
    })

});
};
