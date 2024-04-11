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
	rl.question("Please enter command number: ", (number) => {
	console.log(number);

	switch(number){
		case 1:	
			prompt(searchPoke);
		break;
		case 2:	
			prompt(searchMove);
		break;
		case 3:	
			prompt(searchItem);
		break;
		}
	});
}

function prompt(cb){	
	rl.question("Please enter search term: \n", (term) => { 
		cb(term);
	});
}

function searchPoke(term){
	//first fetch
	fetch(`apiSetup + "pokemon/" + term`)
	//then store the response json
	.then(
		(response) =>
		response.json()
	//then call print on the json
	).then(
		(data) =>
		printPoke(data)
	);
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
}
run();
