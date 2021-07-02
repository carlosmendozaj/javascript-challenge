// from data.js
var tableData = data;

// YOUR CODE HERE!

// SELECT tbody
var tbody = d3.select("tbody");

tableData.forEach((element) => {
    var row = tbody.append("tr");
    Object.entries(element).forEach(([key,value]) => {
        row.append("td").text(value);
    })
});


// Filter the button:
var  button = d3.select("#filter-btn");
var form = d3.select("#reset-btn");

// Forms:
var form = d3.select("form");
var dateForm = d3.select("#datetime");
var cityForm = d3.select("#city");
var stateForm = d3.select("#state");
var countryForm = d3.select("#country");
var shapeForm = d3.select("#shape");

// Event Handlers
button.on("click", runFilter);
dateForm.on("submit", runFilter);
cityForm.on("submit", runFilter);
stateForm.on("submit", runFilter);
countryForm.on("submit", runFilter);
shapeForm.on("submit", runFilter);
form.on("click", function(){
    var new_row = tbody.append("tr");
        Object.entries(item).forEach(([key, value]) => {
            new_row.append("td").text(value);
})
});

