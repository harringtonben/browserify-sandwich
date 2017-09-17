"use strict";

const jsonCheese = require("./data");


let sandwichCheeses = [];

const getCheeses = function() {
	return sandwichCheeses;
};

const addCheeseToSandwich = function(event) {
	let cheeses = jsonCheese.gimmeCheeses();
	
	if (event.target.parentNode.childNodes[5].childNodes[3].checked === true) {
		sandwichCheeses.push(cheeses[0]);
	} if (event.target.parentNode.childNodes[5].childNodes[7].checked === true) {
		sandwichCheeses.push(cheeses[1]);
	} if (event.target.parentNode.childNodes[5].childNodes[11].checked === true) {
		sandwichCheeses.push(cheeses[2]);
	} if (event.target.parentNode.childNodes[5].childNodes[15].checked === true) {
		sandwichCheeses.push(cheeses[3]);
	} 
};

const resetSandwichCheeses = function() {
	sandwichCheeses = [];
};

module.exports = {getCheeses, addCheeseToSandwich, resetSandwichCheeses};