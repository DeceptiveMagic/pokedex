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
	console.log(number);

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
		(response) => { console.log("WTF?"); return response.json(); }
	//then call print on the json
	).then(
		(data) =>
		{
			printPoke(data);
		})
}

function printPoke(json){
	console.log(json);
	run();
}

function searchItem(term){
	//first fetch
	fetch(apiSetup + "item/" + term)
	//then store the response json
	.then(
		(response) => { console.log("WTF?"); return response.json(); }
	//then call print on the json
	).then(
		(data) =>
		{
			printPoke(data);
		})
}

function printItem(json){
	(json) => {
		console.log(json);
	}	
}

function searchMove(term){
	//first fetch
	fetch(apiSetup + "move/" + term)
	//then store the response json
	.then(
		(response) => { console.log("WTF?"); return response.json(); }
	//then call print on the json
	).then(
		(data) =>
		{
			printPoke(data);
		})
}

function printMove(json){
	(json) => {
		console.log(json);
	}	
}

function run(){
	showMenu();
}
run();
