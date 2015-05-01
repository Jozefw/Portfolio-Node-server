// var http = require('http');
// http.createServer(function(request,response){
// 	response.writeHead(200,{
// 		"Content-Type": 'text/plain'});
// 	response.write('here is your server');
// 	response.end();

// }).listen(8080);

var http = require('http');
// the url module can be used to extract differnt parts of the url
// like the path and the query string
var url =require('url');

function start() {
	function onRequest(request, response) {
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