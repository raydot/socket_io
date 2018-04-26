var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');

//app.use(express.static(__dirname + '/public'));
//app.use(express.static(path.join(__dirname + '/styles'))); //allows html file to reference stylesheet "helloworld.css" that is stored in ./css directory

var publicPath = path.resolve(__dirname);
app.use(express.static(publicPath));

app.get('/', function(req, res) {
	//res.send('<h1>Dave rules!</h1>');
	res.sendFile(__dirname + '/index.html');
});

//app.use(express.static(__dirname + '/styles'));

http.listen(3000, function() {
	console.log('*:3000 is alive!');
});