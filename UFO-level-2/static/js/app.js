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
var button = d3.select("#filter-btn");
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
form.on("click", function() {
    tableData.forEach((element) => {
        var row = tbody.append("tr");
        Object.entries(element).forEach(([key,value]) => {
            row.append("td").text(value);
        })
    });;
  }); 

  function runFilter(){
    d3.event.preventDefault();
    var dateForm = dateFormIn.property("value"); 
    var cityForm = cityFormIn.property("value"); 
    var stateForm = stateFormIn.property("value"); 
    var countryForm = countryFormIn.property("value"); 
    var shapeForm = shapeFormIn.property("value");

    var filteredData = tableData.filter(date => 
        date.datetime === dateForm || 
        date.datetime === datetimeForm &&
        date.city === cityForm ||
        date.state === stateForm ||
        date.country === countryForm ||
        date.shape === shapeForm) ||

        filteredData.forEach(function(element) {
            var row = tbody.append("tr");
            Object.entries(element).forEach(([key,value]) => {
                row.append("td").text(value);
            })
        })
    
        }