const jpickle = require('jpickle')
const fs = require('fs');

var inputString = fs.readFileSync(__dirname + '/input_file.txt', 'utf-8');
var unpickle = jpickle.loads(inputString);

console.log(unpickle[0]);
console.log(unpickle[1]);

var displayBanner = function(unpickle){
	unpickle.forEach(outerArrayElement => {
		outerArrayElement.forEach(innerArrayElement => {
			for(var i=0; i<innerArrayElement[1]; i++){
				process.stdout.write(innerArrayElement[0]);
			}
		});
		process.stdout.write("\n");
	});
}

displayBanner(unpickle);