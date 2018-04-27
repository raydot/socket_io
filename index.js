/* https://socket.io/get-started/chat/ */

var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');
var publicPath = path.resolve(__dirname);
/* 	The socket.io page is not clear about the need to explicitly declare
	all of the above. The example puts the CSS in a <style> tag in the
	HTML header.
*/

app.use(express.static(publicPath));

app.get('/', function(req, res) {
	//res.send('<h1>Dave rules!</h1>');
	res.sendFile(__dirname + '/index.html');
});

//app.use(express.static(__dirname + '/styles'));

http.listen(3000, function() {
	console.log('*:3000 is alive!');
});