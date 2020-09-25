// from data.js
var tableData = data;


// YOUR CODE HERE!
console.log(tableData);

var tbody = d3.select("tbody");

//Appends a table to web page and then adds new rows of data for each UFO sighting

   tableData.forEach((UFO) => {
        var row = tbody.append("tr");
        Object.entries(UFO).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });

//Search through the `date/time` column to find rows that match user input

// Select the filter button
var button = d3.select("#filter-btn")

//Event handler
button.on("click", newDate) 

function newDate(){
  d3.select("tbody").html("");

// Prevent the page from refreshing
  d3.event.preventDefault();

// Get the value property of the input element
  var inputDate = d3.select("#datetime").property("value");
  console.log(inputDate);

  var filterData = tableData.filter(UFO => UFO.datetime === inputDate);
  console.log(filterData);

  //Display filtered table
  filterData.forEach((UFO) => {
    var row = tbody.append("tr");
    Object.entries(UFO).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

};