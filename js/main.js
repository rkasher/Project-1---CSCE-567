/* 
* Roy Kasher and Conor Babin
* Project 1
* CSCE  567
* Main js
*/



//margins
var margin = { left:80, right:20, top:-30, bottom:100 };
var height = 470 - margin.top - margin.bottom, 
    width = 800 - margin.left - margin.right;

//scale for filling colors
var color = d3.scaleOrdinal(d3.schemePastel1);

// creating svg
var svg = d3.select("#chart-area")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
	.attr("y", 200)
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
    .text("Games");
var yLabel = svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", -40)
    .attr("x", -170)
    .attr("font-size", "20px")
    .attr("text-anchor", "middle")
    .text("Points Per Game");

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
	    return xScale(d.game); })
    .y1(function(d) { return yScale(d.lawson); })
    .y0(height);

var areaSilva = d3.area()
    .curve(d3.curveMonotoneX)
    .x(function(d) { 
	    return xScale(d.game); })
    .y1(function(d) { return yScale(d.silva); })
    .y0(height);

var areaGravett = d3.area()
    .curve(d3.curveMonotoneX)
    .x(function(d) { 
	    return xScale(d.game); })
    .y1(function(d) { return yScale(d.gravett); })
    .y0(height);

var areaCampbell = d3.area()
    .curve(d3.curveMonotoneX)
    .x(function(d) { 
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


// add the areas	
svg.append("path")
       .data([data])
       .attr("class", "Sarea")
       .attr("d", areaSilva)
       .attr("fill", "#ED3027")
       .on("mouseout", function(d){
	    d3.select(".Garea").attr("opacity", 100);
	    d3.select(".Carea").attr("opacity", 100);
	    d3.select(".Karea").attr("opacity", 100);
	    d3.select(".Larea").attr("opacity", 100);
	    d3.select("#points").attr("value", "73.3");
	    d3.select("#rebounds").attr("value", "36.3");
	    d3.select("#assists").attr("value", "12.9");
       })
       .on("mouseover", function(d){
	    d3.select(".Garea").attr("opacity", 0);
	    d3.select(".Carea").attr("opacity", 0);
	    d3.select(".Karea").attr("opacity", 0);
	    d3.select(".Larea").attr("opacity", 0);
	    d3.select("#points").attr("value", "14.0");
	    d3.select("#rebounds").attr("value", "7.0");
	    d3.select("#assists").attr("value", "1.0");
       });

svg.append("path")
       .data([data])
       .attr("class", "Larea")
       .attr("d", areaLawson)
       .attr("fill", "#656566")
       .on("mouseout", function(d){
	    d3.select(".Garea").attr("opacity", 100);
	    d3.select(".Sarea").attr("opacity", 100);
	    d3.select(".Karea").attr("opacity", 100);
	    d3.select(".Carea").attr("opacity", 100);
	    d3.select("#points").attr("value", "73.3");
	    d3.select("#rebounds").attr("value", "36.3");
	    d3.select("#assists").attr("value", "12.9");
       })
       .on("mouseover", function(d){
	    d3.select(".Garea").attr("opacity", 0);
	    d3.select(".Sarea").attr("opacity", 0);
	    d3.select(".Karea").attr("opacity", 0);
	    d3.select(".Carea").attr("opacity", 0);
	    d3.select("#points").attr("value", "14.2");
	    d3.select("#rebounds").attr("value", "4.6");
	    d3.select("#assists").attr("value", "3.0");
       });

svg.append("path")
       .data([data])
       .attr("class", "Garea")
       .attr("d", areaGravett)
       .attr("fill", "#A70800")
       .on("mouseout", function(d){
	    d3.select(".Carea").attr("opacity", 100);
	    d3.select(".Sarea").attr("opacity", 100);
	    d3.select(".Karea").attr("opacity", 100);
	    d3.select(".Larea").attr("opacity", 100);
	    d3.select("#points").attr("value", "73.3");
	    d3.select("#rebounds").attr("value", "36.3");
	    d3.select("#assists").attr("value", "12.9");
       })
       .on("mouseover", function(d){
	    d3.select(".Carea").attr("opacity", 0);
	    d3.select(".Sarea").attr("opacity", 0);
	    d3.select(".Karea").attr("opacity", 0);
	    d3.select(".Larea").attr("opacity", 0);
	    d3.select("#points").attr("value", "11.3");
	    d3.select("#rebounds").attr("value", "3.7");
	    d3.select("#assists").attr("value", "2.3");
       });

svg.append("path")
       .data([data])
       .attr("class", "Karea")
       .attr("d", areaKotsar)
       .attr("fill", "#000000")
       .on("mouseout", function(d){
	    d3.select(".Garea").attr("opacity", 100);
	    d3.select(".Sarea").attr("opacity", 100);
	    d3.select(".Carea").attr("opacity", 100);
	    d3.select(".Larea").attr("opacity", 100);
	    d3.select("#points").attr("value", "73.3");
	    d3.select("#rebounds").attr("value", "36.3");
	    d3.select("#assists").attr("value", "12.9");
       })
       .on("mouseover", function(d){
	    d3.select(".Garea").attr("opacity", 0);
	    d3.select(".Sarea").attr("opacity", 0);
	    d3.select(".Carea").attr("opacity", 0);
	    d3.select(".Larea").attr("opacity", 0);
	    d3.select("#points").attr("value", "6.9");
	    d3.select("#rebounds").attr("value", "4.3");
	    d3.select("#assists").attr("value", "1.0");
       });

svg.append("path")
       .data([data])
       .attr("class", "Carea")
       .attr("d", areaCampbell)
       .attr("fill", "#560400")
       .on("mouseout", function(d){
	    d3.select(".Garea").attr("opacity", 100);
	    d3.select(".Sarea").attr("opacity", 100);
	    d3.select(".Karea").attr("opacity", 100);
	    d3.select(".Larea").attr("opacity", 100);
	    d3.select("#points").attr("value", "73.3");
	    d3.select("#rebounds").attr("value", "36.3");
	    d3.select("#assists").attr("value", "12.9");
       })
       .on("mouseover", function(d){
	    d3.select(".Garea").attr("opacity", 0);
	    d3.select(".Sarea").attr("opacity", 0);
	    d3.select(".Karea").attr("opacity", 0);
	    d3.select(".Larea").attr("opacity", 0);
	    d3.select("#points").attr("value", "7.1");
	    d3.select("#rebounds").attr("value", "1.8");
	    d3.select("#assists").attr("value", "2.5");
       });


});
