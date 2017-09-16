"use strict";

let breadArray = [];
let meatArray = [];
let cheeseArray = [];
let condimentArray = [];
let veggieArray = [];

const loadIngredients = require("./xhr");

const errorFunction = ()=> {
	console.log("No sandwich for you buddy.");
};

const onBreadLoad = function() {
	breadArray = JSON.parse(this.responseText).bread;
	// console.log({breadArray});
	loadIngredients.loadMeat(onMeatLoad, errorFunction);
};

const onMeatLoad = function() {
	meatArray = JSON.parse(this.responseText).meat;
	// console.log({meatArray});
	loadIngredients.loadCheese(onCheeseLoad, errorFunction);
};

const onCheeseLoad = function() {
	cheeseArray = JSON.parse(this.responseText).cheese;
	// console.log({cheeseArray});
	loadIngredients.loadVeggies(onVeggieLoad, errorFunction);
};

const onVeggieLoad = function() {
	veggieArray = JSON.parse(this.responseText).veggies;
	// console.log({veggieArray});
	loadIngredients.loadCondiments(onCondimentLoad, errorFunction);
};

const onCondimentLoad = function() {
	condimentArray = JSON.parse(this.responseText).condiments;
	// console.log({condimentArray});
};

const initializer = function() {
	loadIngredients.loadBread(onBreadLoad, errorFunction);
};

const gimmeBreads = ()=> {
	return breadArray;
};

const gimmeMeats = ()=> {
	return meatArray;
};

const gimmeCheeses = ()=> {
	return cheeseArray;
};

const gimmeVeggies = ()=> {
	return veggieArray;
};

const gimmeCondiments = ()=> {
	return condimentArray;
};

module.exports = {initializer, gimmeBreads, gimmeMeats, gimmeCheeses, gimmeVeggies, gimmeCondiments};