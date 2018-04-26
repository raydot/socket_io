var app = require('express')();
var http = require('http').Server(app);

//app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname + '/styles'))); //allows html file to reference stylesheet "helloworld.css" that is stored in ./css directory



app.get('/', function(req, res) {
	//res.send('<h1>Dave rules!</h1>');
	res.sendFile(__dirname + '/index.html');
});

//app.use(express.static(__dirname + '/public'));

http.listen(3000, function() {
	console.log('*:3000 is alive!');
});