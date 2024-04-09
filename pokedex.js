// Load the readline library
const readline = require("readline");
// Setup readline to listen on the stdin stream
const rl = readline.createInterface(process.stdin, process.stdout);
//setup the response
const response = "";


//The start to all API fetch requests:
//https://pokeapi.co/api/v2/
const apiSetup = "https://pokeapi.co/api/v2/";

const number = 0;

function showMenu(){
	console.log("***************************************");
	console.log("1: Search Pokemon");
	console.log("2: Search Move");
	console.log("3: Search Item");
	console.log("***************************************");
}

function prompt(cb){
	rl.question("Please enter command number: ", (number) => {
	switch (number){
		case 1:	
			rl.question("Please enter Pokemon Name: ", (response));
			searchPoke(response)
		break;
		case 2:	
			rl.question("Please enter Pokemon Move: ", (response));
			searchMove(response);
		break;
		case 3:	
			rl.question("Please enter Item Name: ", (response));
			searchItem(response);
		break;
	}}
)};

function searchPoke(term){
	printPoke(fetch(`apiSetup + "pokemon/" + term`));
}

function printPoke(json){
	(json) => {
		console.log(json);
	}	
}

function searchItem(term){

}

function printItem(json){
	(json) => {
		console.log(json);
	}	
}

function searchMove(term){

}

function printMove(json){
	(json) => {
		console.log(json);
	}	
}

function run(){
	showMenu();
	rl.question("Please enter command number: ", (number)).then(
		console.log(number);
		prompt(number);
	);
}

run();
