const http = require('http');

const server = http.createServer((req, res) => {
  // Log your name to the console when the server is accessed
  console.log("Gaurav");

  // Send a response to the browser
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, your name has been logged!\n');
});

// Listen on port 4000
server.listen(4000, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:4000/');
});
