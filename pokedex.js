//import fetch from "node-fetch";

// Load the readline library
const readline = require("readline");
// Setup readline to listen on the stdin stream
const rl = readline.createInterface(process.stdin, process.stdout);
//setup the response
const response = "";


//The start to all API fetch requests:
//https://pokeapi.co/api/v2/
const apiSetup = 'https://pokeapi.co/api/v2/';

const number = 0;

function showMenu(){
	console.log("***************************************");
	console.log("1: Search Pokemon");
	console.log("2: Search Move");
	console.log("3: Search Item");
	console.log("***************************************");
	rl.question("Please enter command number: ", (number) => {

	if (number == 1){	
		prompt(searchPoke)
	}

	else if (number == 2){
		prompt(searchMove);
	}

	else if (number == 3){
		prompt(searchItem);
	}

	else{
		console.log("Try again BOZO!");
		showMenu();
	}});
}

function prompt(cb){	
	rl.question("Please enter search term: \n", (term) => { 
		cb(term);
	});
}

function searchPoke(term){
	//first fetch
	fetch(apiSetup + "pokemon/" + term)
	//then store the response json
	.then(
		(response) => { return response.json(); }
	//then call print on the json
	).then(
		(data) =>
		{
			printPoke(data);	
		}
	);
}

function printPoke(json){
	//print name, weight, height, base experience, and all moves
	console.log("Name: " + json.name);
	console.log("Weight: " + json.weight);
	console.log("Height: " + json.height);
	console.log("Base Experience: " + json.base_experience);
	//print all moves	
	for (let i = 0; i < json.moves.length; i++){
		console.log("Moves: " + json.moves[i].move.name);
	}
	//repeat
	run();
}

function searchItem(term){
	//first fetch
	fetch(apiSetup + "item/" + term)
	//then store the response json
	.then(
		(response) => { return response.json(); }
	//then call print on the json
	).then(
		(data) =>
		{
			printItem(data);
		})
}

function printItem(json){
	//print name, ...
	console.log("Name: " + json.name);
	console.log("Category: " + json.category.name);
	console.log("Attributes: " + json.attributes[0].name + ", " + json.attributes[1].name + ", " + json.attributes[2].name);
	console.log("Cost: " + json.cost);
	//repeat
	run();
}

function searchMove(term){
	//first fetch
	fetch(apiSetup + "move/" + term)
	//then store the response json
	.then(
		(response) => { return response.json(); }
	//then call print on the json
	).then(
		(data) =>
		{
			printMove(data);
		})
}

function printMove(json){
	//print name, type, power, pp, and priority
	console.log("Name: " + json.name);
	console.log("Type: " + json.type.name);
	console.log("Power: " + json.power);
	console.log("PP: " + json.pp);
	console.log("Priority: " + json.priority);
	//repeat
	run();
}

function run(){
	showMenu();
}
run();
