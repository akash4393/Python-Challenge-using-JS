const http = require('http');

var count = 0;
var urlBase = 'http://www.pythonchallenge.com/pc/def/linkedlist.php?nothing=';
//var nextQuery = '12345'; //initial condition
var nextQuery = '8022'; //new program start point after 'Yes. Divide by two and keep going.' response
var url = urlBase + nextQuery;
var resBody;

var resFunction = function (res) {
	res.setEncoding("utf8")
	if(count >= 399){
		res.on('data', data => {
			console.log(data);
			return 1;
		})
	}
	res.on('data', data => {
		var exp = new RegExp("[nothing]{7}\\s[is]{2}\\s[0-9]{1,5}", 'g');
		var nothingIsString = exp.exec(data);
		if(!nothingIsString){
			console.log(data);
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
		url = urlBase + nextQuery;
		count+=1;
		return http.get(url, resFunction)
	});
}
http.get(url, resFunction);