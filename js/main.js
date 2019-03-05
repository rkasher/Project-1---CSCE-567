/* 
* Roy Kasher and Conor Babin
* Project 1
* CSCE  567
* Main js
*/

//reading in data

var margin = { left:80, right:20, top:50, bottom:100 };
var height = 500 - margin.top - margin.bottom, 
    width = 800 - margin.left - margin.right;

//scale for filling colors
var color = d3.scaleOrdinal(d3.schemePastel1);

// creating svg
var svg = d3.select("#chart-area")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", "translate(" + margin.left + 
            ", " + margin.top + ")");

// Scales
var xScale = d3.scaleLinear()
    .domain([1,26])
    .range([0, width]);
var yScale = d3.scaleLinear()
    .domain([0,35])
    .range([height, 0]);

// Labels
var xLabel = svg.append("text")
    .attr("y", height + 50)
    .attr("x", width / 2)
    .attr("font-size", "20px")
    .attr("text-anchor", "middle")
    .text("Game");
var yLabel = svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", -40)
    .attr("x", -170)
    .attr("font-size", "20px")
    .attr("text-anchor", "middle")
    .text("points");

// X Axis
var xAxisCall = d3.axisBottom(xScale);
svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height +")")
    .call(xAxisCall);

// Y Axis
var yAxisCall = d3.axisLeft(yScale);
svg.append("g")
    .attr("class", "y axis")
    .call(yAxisCall);

// define the area
var areaLawson = d3.area()
    .curve(d3.curveMonotoneX)
    .x(function(d) { 
	    console.log(d.game);
	    console.log(xScale(d.game));
	    return xScale(d.game); })
    .y1(function(d) { return yScale(d.lawson); })
    .y0(height);

var areaSilva = d3.area()
    .curve(d3.curveMonotoneX)
    .x(function(d) { 
	    console.log(d.game);
	    console.log(xScale(d.game));
	    return xScale(d.game); })
    .y1(function(d) { return yScale(d.silva); })
    .y0(height);

var areaGravett = d3.area()
    .curve(d3.curveMonotoneX)
    .x(function(d) { 
	    console.log(d.game);
	    console.log(xScale(d.game));
	    return xScale(d.game); })
    .y1(function(d) { return yScale(d.gravett); })
    .y0(height);

var areaCampbell = d3.area()
    .curve(d3.curveMonotoneX)
    .x(function(d) { 
	    console.log(d.game);
	    console.log(xScale(d.game));
	    return xScale(d.game); })
    .y1(function(d) { return yScale(d.campbell); })
    .y0(height);

var areaKotsar = d3.area()
    .curve(d3.curveMonotoneX)
    .x(function(d) { return xScale(d.game); })
    .y1(function(d) { return yScale(d.kotsar); })
    .y0(height);





d3.csv("data/data.csv").then(function(data){


var campbell = [];
var lawson = [];
var gravett = [];
var kotsar = [];
var silva = [];
var team = [];

data.map(function(d){
	campbell.push(+d.campbell);
	lawson.push(+d.lawson);
	gravett.push(+d.gravett);
	kotsar.push(+d.kotsar);
	silva.push(+d.silva);
	team.push(d.team);
});

svg.append("text")
        .attr("x", (width / 2))             
        .attr("y", 0 - (margin.top / 2))
        .attr("text-anchor", "middle")  
        .style("font-size", "20px")   
        .text("South Carolina Basketball Starting 5");


// add the area
svg.append("path")
       .data([data])
       .attr("class", "area")
       .attr("d", areaLawson)
       .attr("fill", "blue");

svg.append("path")
       .data([data])
       .attr("class", "area")
       .attr("d", areaSilva)
       .attr("fill", "red");

svg.append("path")
       .data([data])
       .attr("class", "area")
       .attr("d", areaGravett)
       .attr("fill", "green");

svg.append("path")
       .data([data])
       .attr("class", "area")
       .attr("d", areaKotsar)
       .attr("fill", "purple");

svg.append("path")
       .data([data])
       .attr("class", "area")
       .attr("d", areaCampbell)
       .attr("fill", "yellow");




});