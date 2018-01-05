//Author: Akash Singh

//Node Dependencies
// >npm install compressjs

//const compressjs = require('compressjs');
//const bz2 = compressjs.Bzip2;
const fs = require('fs');
const http = require('http');
eval(fs.readFileSync(__dirname + '/bzip2.js') + '');
//console.log(bz2);
http.get("http://www.pythonchallenge.com/pc/def/integrity.html", res => {
	res.setEncoding('utf8');
	res.on('data', processSource);
});

var processSource = function(source) {
	var userPassString = source.substr(source.indexOf("<!--"), source.indexOf("-->"));
	//console.log(userPassString);
	var userNameString = userPassString.substr(userPassString.indexOf("un"), userPassString.indexOf("pw"));
	var passwordString = userPassString.substr(userPassString.indexOf("pw"), userPassString.lastIndexOf("'"));
	//Used ugly trial and error method to trim the string (definitely not happy with this)
	userNameString = userNameString.substr(5, (userNameString.length - 12));
	passwordString = passwordString.substr(5, (passwordString.length-11));
	console.log("username string = " + userNameString);
	console.log("password string = " + passwordString);
	/*var test = new Buffer(passwordString);
	var compressedPasswordString = new Uint8Array(test);
	console.log(compressedPasswordString);
	var decompressedPasswordString = bzip2.simple(bzip2.array(compressedPasswordString));*/
	
}

//----------------------------------!!!!------------------------------------//
//Write to file and create bzip2 file for each then open that and decompress//
//----------------------------------!!!!------------------------------------//