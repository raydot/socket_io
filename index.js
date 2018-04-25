

var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res) {
	res.send('<h1>Dave rules!</h1>');
});

http.listen(3000, function() {
	console.log('*:3000 is alive!');
});