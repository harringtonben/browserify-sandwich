"use strict";

const loadBread = (onBreadLoad, onBreadError) => {
	const breadLoader = new XMLHttpRequest();
	breadLoader.addEventListener("error", onBreadError);
	breadLoader.addEventListener("load", onBreadLoad);
	breadLoader.open("GET", "../data/bread.json");
	breadLoader.send();
};

const loadCheese = (onCheeseLoad, onCheeseError) => {
	const cheeseLoader = new XMLHttpRequest();
	cheeseLoader.addEventListener("error", onCheeseError);
	cheeseLoader.addEventListener("load", onCheeseLoad);
	cheeseLoader.open("GET", "../data/cheese.json");
	cheeseLoader.send();
};

const loadCondiments = (onCondimentLoad, onCondimentError) => {
	const condimentLoader = new XMLHttpRequest();
	condimentLoader.addEventListener("error", onCondimentError);
	condimentLoader.addEventListener("load", onCondimentLoad);
	condimentLoader.open("GET", "../data/condiments.json");
	condimentLoader.send();
};

const loadMeat = (onMeatLoad, onMeatError) => {
	const meatLoader = new XMLHttpRequest();
	meatLoader.addEventListener("error", onMeatError);
	meatLoader.addEventListener("load", onMeatLoad);
	meatLoader.open("GET", "../data/meat.json");
	meatLoader.send();
};

const loadVeggies = (onVeggieLoad, onVeggieError) => {
	const veggieLoader = new XMLHttpRequest();
	veggieLoader.addEventListener("error", onVeggieError);
	veggieLoader.addEventListener("load", onVeggieLoad);
	veggieLoader.open("GET", "../data/veggies.json");
	veggieLoader.send();
};

module.exports = {loadBread, loadCheese, loadCondiments, loadMeat, loadVeggies};