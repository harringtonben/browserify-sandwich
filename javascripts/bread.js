"use strict";
	
const jsonBreads = require("./data.js");

let breads = jsonBreads.getBreads();
let sandwichBreads = [];

const getBreads = () => {
	return sandwichBreads;
};

const addBreadToSandwich = (event) => {
	console.log(event);
	if (event.target.parentNode.childNodes[1].childNodes[3].checked === true) {
		sandwichBreads.push(breads[0]);
	} if (event.target.parentNode.childNodes[1].childNodes[7].checked === true) {
		sandwichBreads.push(breads[1]);
	} if (event.target.parentNode.childNodes[1].childNodes[11].checked === true) {
		sandwichBreads.push(breads[2]);
	} if (event.target.parentNode.childNodes[1].childNodes[15].checked === true) {
		sandwichBreads.push(breads[3]);
	} 
};

const resetSandwichBreads = () => {
	sandwichBreads = [];
};



module.exports = getBreads;

