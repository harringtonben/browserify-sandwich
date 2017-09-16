"use strict";

const jsonCondiments = require("./data");

const condiments = jsonCondiments.getCondiments();
let sandwichCondiments = [];

const getCondiments = function() {
	return sandwichCondiments;
};

const addCondimentToSandwich = function(event) {
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

module.exports = getCondiments;