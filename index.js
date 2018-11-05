/*
 * Primary file for the API
 *
 *
 */

 // Dependencies
 const http = require('http');
 const url = require('url');

 // The server should respond to all requests with a string
const server = http.createServer(function(req, res){

	// Get the URL and parse it
	const parsedUrl = url.parse(req.url, true);
	console.log('parsedUrl: '+JSON.stringify(parsedUrl));

	// Get the path
	const path = parsedUrl.pathname;
	console.log('path: '+path);
	const trimmedPath = path.replace(/^\/+|\/+$/g, '');

	// Send the response
	res.end('Hello World\n');

	// Log the request path
	console.log('Request received on path: '+trimmedPath);
});


 // Start the server, and have it listen on port 3000
const port = 3000;
server.listen(port, function(){
	console.log('Server listening on port '+port);
});