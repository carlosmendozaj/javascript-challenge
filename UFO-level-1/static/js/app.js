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

// Complete the event handler function for the form
function runEnter() {

    var htmlTable = d3.select("#ufo-table");
    var tbody = d3.select("tbody")
    tbody.html("");
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    var datetimeSearchCriteria = inputElement.property("value")
    
    var filterResults = tableData.filter(ufoSighting =>
        ufoSighting.datetime === datetimeSearchCriteria
        );

    filterResults.forEach((ufoSighting) => {
    console.log(ufoSighting);
    row = tbody.append("tr");
    Object.values(ufoSighting).forEach(value => row.append("td").text(value));
    })

    }