
const number;

function showMenu(){
	console.log("***************************************");
	console.log("1: Search Pokemon");
	console.log("2: Search Move");
	console.log("3: Search Item");
	console.log("***************************************");
}

function prompt(cb){
	rl.question("Please enter command number: ", (number))
	switch (number){
		case 1:	
			rl.question("Please enter Pokemon Name: ", (response))
		break;
		case 2:	
			rl.question("Please enter Pokemon Move: ", (response))
		break;
		case 3:	
			rl.question("Please enter Item Name: ", (response))
		break;
	}
}

function searchPoke(term){
	
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
	showMenu() => {
		prompt();
		}
}
