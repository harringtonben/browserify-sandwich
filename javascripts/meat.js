"use strict";

const jsonMeat = require("./data");

const meats = jsonMeat.gimmeMeats();
let sandwichMeats = [];

const getMeats = function() {
	return sandwichMeats;
};

const addMeatToSandwich = function(event) {
	if (event.target.parentNode.childNodes[3].childNodes[3].checked === true) {
		sandwichMeats.push(meats[0]);
	} if (event.target.parentNode.childNodes[3].childNodes[7].checked === true) {
		sandwichMeats.push(meats[1]);
	} if (event.target.parentNode.childNodes[3].childNodes[11].checked === true) {
		sandwichMeats.push(meats[2]);
	} if (event.target.parentNode.childNodes[3].childNodes[15].checked === true) {
		sandwichMeats.push(meats[3]);
	} if (event.target.parentNode.childNodes[3].childNodes[19].checked === true) {
		sandwichMeats.push(meats[4]);
	}
};

const resetSandwichMeats = function() {
	sandwichMeats = [];
};

module.exports = {getMeats, addMeatToSandwich, resetSandwichMeats};