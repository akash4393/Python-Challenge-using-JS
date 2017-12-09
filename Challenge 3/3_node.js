const fs = require('fs');

var outputString = "Solution: \n";
var inputString = fs.readFileSync(__dirname + '/input_file.txt', 'utf-8');
var lookForChar = function(char){
	if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90 || char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)
	outputString+=char
}

inputStringArr.forEach(lookForChar);
console.log(outputString);