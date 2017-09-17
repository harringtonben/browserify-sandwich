"use strict";

const ingredients = require("./data");
// const breads = require("./bread");
const xhr = require("./xhr");
// const sammy = require("./sandwichmaker");
const breads = require("./bread");
const meats = require("./meat");
const cheese = require("./cheese");
const veggies = require("./veggies");
const condiments = require("./condiments");
const writeToDom = require("./domhandler");

ingredients.initializer();


let submitSandwich = document.getElementById("submit");
submitSandwich.addEventListener("click", function(event) {
	breads.addBreadToSandwich(event);
	meats.addMeatToSandwich(event);
	cheese.addCheeseToSandwich(event);
	veggies.addVeggieToSandwich(event);
	condiments.addCondimentToSandwich(event);
	writeToDom.buildMySandwich();
});

let clearSandwich = document.getElementById("clear");
clearSandwich.addEventListener("click", function() {
	breads.resetSandwichBreads();
	meats.resetSandwichMeats();
	cheese.resetSandwichCheeses();
	veggies.resetSandwichVeggies();
	condiments.resetSandwichCondiments();
	writeToDom.clearMySandwich();
});

console.log("main.js is working");



