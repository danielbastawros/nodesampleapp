// Load the express module.
var http = require('http')
var PORT = 6000

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello Daniel Bastawros\n');


}).listen(PORT);

// Console will print the message
console.log('Server running at http://127.0.0.1:'+PORT+'/');

