/* 
* Roy Kasher and Conor Babin
* Project 1
* CSCE  567
* Main js
*/

// set the dimensions and margins of the graph
var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;


// set the ranges
var x = d3.scaleLinear()
	.domain([1,26])
	.range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

// define the area
var area = d3.area()
    .x(function(d) { return x(d.team); })
    .y0(height)
    .y1(function(d) { return y(d.lawson); });

// define the line
var valueline = d3.line()
    .x(function(d) { return x(d.team); })
    .y(function(d) { return y(d.lawson); });

// append the svg obgect to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// get the data
d3.csv("data/data.csv").then(function(data) {

	console.log(data);

var campbell = [];
var lawson = [];
var gravett = [];
var kotsar = [];
var silva = [];
var team = [];
var game = [];


data.map(function(d){
	campbell.push(+d.campbell);
	lawson.push(+d.lawson);
	gravett.push(+d.gravett);
	kotsar.push(+d.kotsar);
	silva.push(+d.silva);
	team.push(d.team);
	game.push(+d.game);
});


  // scale the range of the data
  y.domain([0, d3.max(data, function(d) { return d.lawson; })]);

  // add the area
    svg.append("path")
       .data(data)
       .attr("class", "area")
       .attr("d", area);

  // add the valueline path.
  svg.append("path")
      .data(data)
      .attr("class", "line")
      .attr("d", valueline);

  // add the X Axis
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  // add the Y Axis
  svg.append("g")
      .call(d3.axisLeft(y));

});
