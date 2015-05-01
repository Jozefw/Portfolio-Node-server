var http = require('http');
http.createServer(function(request,response){
	response.writeHead(200,{
		"Content-Type": 'text/plain'});
	response.write('here is your server');
	response.end();

}).listen(8080);

var http = require('http');

function start() {
	function onRequest() {
		console.log('request recieved');
		response.writeHead(200,{
			'Content-Type': 'text/plain',

		});
		response.write("hello there");
		response.end();
	}
	http.createServer(onRequest).listen(8080);
	console.log("server started");
}

exports.start = start;