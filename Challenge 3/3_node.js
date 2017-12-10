const fs = require('fs');

var outputString = "Solution: \n";
var inputString = fs.readFileSync(__dirname + '/input_file.txt', 'utf-8');
var lookForPattern = function(char){
	var exp = new RegExp("[a-z][A-Z]{3}[a-z][A-Z]{3}[a-z]", "g");
	var match;
	while(match = exp.exec(char)){
		outputString+=match[0].charAt(4);
	}
}

lookForPattern(inputString);
console.log(outputString);