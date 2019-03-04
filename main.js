/* 
* Roy Kasher and Conor Babin
* Project 1
* CSCE  567
* Main js
*/

//reading in data

d3.csv("/Project 1 - CSCE 567/data.csv").then(function(data){

//console.log(data[0]);

var campbell = [];
var lawson = [];
var gravett = [];
var kotsar = [];
var silva = [];

d3.csv("data.csv", function(csv){
	csv.map(function(d){
	campbell.push(d.campbell);
	lawson.push(+d.lawson);
	gravett.push(+d.gravett);
	kotsar.push(+d.kotsar);
	silva.push(+d.silva);

console.log("Tre Campbell: " campbell);
console.log("AJ Lawson: " lawson);
console.log("Hassani Gravett: " gravett);
console.log("Maik Kotsar: " kotsar);
console.log("Chris Silva: " silva);


//drawing chart area
var svg = d3.select("#chart-area").append("svg")
	.attr("width", 500)
	.attr("height", 500);

});
