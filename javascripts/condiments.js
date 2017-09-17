"use strict";

const jsonCondiments = require("./data");


let sandwichCondiments = [];

const getCondiments = function() {
	return sandwichCondiments;
};

const addCondimentToSandwich = function(event) {
	let condiments = jsonCondiments.gimmeCondiments();
	
	if (event.target.parentNode.childNodes[9].childNodes[3].checked === true) {
		sandwichCondiments.push(condiments[0]);
	} if (event.target.parentNode.childNodes[9].childNodes[7].checked === true) {
		sandwichCondiments.push(condiments[1]);
	} if (event.target.parentNode.childNodes[9].childNodes[11].checked === true) {
		sandwichCondiments.push(condiments[2]);
	} if (event.target.parentNode.childNodes[9].childNodes[15].checked === true) {
		sandwichCondiments.push(condiments[3]);
	} 
};

const resetSandwichCondiments = function() {
	sandwichCondiments = [];
};

module.exports = {getCondiments, addCondimentToSandwich, resetSandwichCondiments};