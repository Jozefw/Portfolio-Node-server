// we need to require the server.js file to have acces to the start method that we get on the exports method
var server = require('./server');

// here router is a function
var router = require('./router');

// here you are calling the start method on the server module and passing in the router module (with the route method) as a param
server.start(router.route);