const http = require('http');

var url = 'http://www.pythonchallenge.com/pc/def/linkedlist.php?nothing=12345';

http.get(url, res => {
	res.setEncoding("utf8")
	res.on('data', data => {
		console.log(data);
	});
});