//Author: Akash Singh

//Node Dependencies
// >npm install compressjs

const compressjs = require('compressjs');
const bz2 = compressjs.Bzip2;
const http = require('http');


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
	var compressedPasswordString = new Buffer(passwordString, "utf8");
	console.log(compressedPasswordString);
	var decompressedPasswordString = bz2.decompressFile(compressedPasswordString);

}