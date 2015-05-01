var http = requiree('http'),
http.createServer(function(request,response){
	response.writeHead(200,{
		"Content-Type": 'text/plain',

	});
	response.write('here is your server');
	response.end();

}).listen(8080);