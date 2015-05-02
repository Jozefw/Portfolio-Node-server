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

// we are extending the servers start function by passing in the router function as a param from our index router
// handle is being passed as the cb
function start( routeParam, handle ) {
	function onRequest(request, response) {
		console.log('request recieved');
		var pathname = url.parse(request.url).pathname;

		routeParam( handle, pathname );
		console.log("Request for pathname " + pathname + " recieved");
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

