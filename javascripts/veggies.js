"use strict";

const veggies = [{ingredient: "Lettuce", price: 0.50},{ingredient: "pickles", price: 0.50},{ingredient: "Tomato", price: 0.50}, {ingredient: "Onions", price: 0.50}, {ingredient: "Veggies are for losers", price: 0}];
	let sandwichVeggies = [];
	
const getVeggies = function() {
	return sandwichVeggies;
};

const addVeggieToSandwich = function(event) {
	if (event.target.parentNode.childNodes[7].childNodes[3].checked === true) {
		sandwichVeggies.push(veggies[0]);
	} if (event.target.parentNode.childNodes[7].childNodes[7].checked === true) {
		sandwichVeggies.push(veggies[1]);
	} if (event.target.parentNode.childNodes[7].childNodes[11].checked === true) {
		sandwichVeggies.push(veggies[2]);
	} if (event.target.parentNode.childNodes[7].childNodes[15].checked === true) {
		sandwichVeggies.push(veggies[3]);
	} 
};

const resetSandwichVeggies = function() {
	sandwichVeggies = [];
};

module.exports = getVeggies;