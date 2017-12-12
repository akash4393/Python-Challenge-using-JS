const fs = require('fs');
const JSZip = require('jszip');

var basePath = __dirname + '/channel/';
var fileType = '.txt';
var nextQuery = '90052'; //initial condition
var path = basePath + nextQuery + fileType;

var processFileText = function (error, fileText) {
	var exp = new RegExp("[nothing]{7}\\s[is]{2}\\s[0-9]{1,5}", 'g');
	var nothingIsString = exp.exec(fileText);
	if(!nothingIsString){
		console.log(fileText);
		return 1;
	}
	var expNumber = new RegExp("[0-9]{1,5}", 'g');
	var resBodyNumber = expNumber.exec(nothingIsString[0]);
	if(!resBodyNumber){
		console.log(data);
		return 1;
	}
	var resBody = resBodyNumber[0];
	nextQuery = resBody;
	path = basePath + nextQuery + fileType;
	var zipFileName = nextQuery + ".txt"
	fs.readFile(__dirname + "/channel.zip", function(err, data) {
    if (err) throw err;
    JSZip.loadAsync(data).then(function (zip) {
        process.stdout.write(zip.files[zipFileName].comment);
    });
});
	return fs.readFile(path, 'utf8', processFileText);
}
var fileText = fs.readFile(path, 'utf8', processFileText);

