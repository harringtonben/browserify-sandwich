"use strict";

let mySandwich = [];

const breads = require("./bread");
const meats = require("./meat");
const cheese = require("./cheese");
const veggies = require("./veggies");
const condiments = require("./condiments");


const buildMySandwich = (sandwichStuff) => {
let sammyBreads = breads.getBreads();
let sammyMeats = meats.getMeats();
let sammyCheeses = cheese.getCheeses();
let sammyVeggies = veggies.getVeggies();
let sammyCondiments = condiments.getCondiments();


let sandwichBuild = mySandwich.concat(sammyBreads, sammyMeats, sammyCheeses, sammyVeggies, sammyCondiments);
console.log({sandwichBuild});
makeMySandwich(sandwichBuild);
};

const makeMySandwich = (sandwich) => {

let sandwichStrang = `<h1>Here is your order</h1>`;
let sandwichFinalPrice = 0;
for (let i=0; i<sandwich.length; i++) {
	sandwichFinalPrice += sandwich[i].price;
}

for (let i=0; i<sandwich.length; i++) {	
	sandwichStrang += `<h4>${sandwich[i].ingredient} $${sandwich[i].price}</h4>`;
}

let sandwichPriceRounded = parseFloat(sandwichFinalPrice).toFixed(2);

sandwichStrang += `<h4>Your final price: $${sandwichPriceRounded}</h4>`;

document.getElementById("finalsandwich").innerHTML = sandwichStrang;
};


const clearMySandwich = () => {
	document.getElementById("finalsandwich").innerHTML = ``;
	mySandwich = [];
};

module.exports = {makeMySandwich, buildMySandwich, clearMySandwich};
