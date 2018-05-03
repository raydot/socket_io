/* https://socket.io/get-started/chat/ */

var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');
var publicPath = path.resolve(__dirname);
var io = require('socket.io')(http);

/* 	The socket.io page is not clear about the need to explicitly declare
	all of the above. The example puts the CSS in a <style> tag in the
	HTML header.  This form links to an external file.
*/

app.use(express.static(publicPath));

app.get('/', function(req, res) {
	//res.send('<h1>Dave rules!</h1>');
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	console.log('Another user connected!');

	//node will let you send 'custom' events using emit
	socket.on('cmsg', function(msg) {
		/*	this will send to *everyone*
			Use 'broadcast' to control who it gets sent to
		*/
		
		//test it:
		//console.log('message: ' + msg);
		io.emit('cmsg', msg);
	});

	socket.on('disconnect', function() {
		console.log('Another user disconnected!');
	});
});


http.listen(3000, function() {
	console.log('*:3000 is alive!');
});

