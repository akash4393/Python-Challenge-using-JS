//Author: Akash Singh

let count = 0;
let tempVal;
let init = "1";
let outputString = "";

let numberOfIterations = 30; //number of elements to calculate
let i = 1;

while (i<=numberOfIterations) {
	tempVal = init.charAt(0);
	count = 0;
	outputString = "";
	for (let i = 0; i < init.length; i++) {
		if (tempVal === init.charAt(i)) {
			count += 1;
		}
		else if (tempVal !== init.charAt(i)) {
			outputString += count.toString() + tempVal;
			tempVal = init.charAt(i);
			count = 1;
		}
	}
	outputString += count.toString() + tempVal;
	init = outputString;
	//console.log(outputString);
	if (i === 30) {
		console.log(outputString.length);
	}
	i++;
}