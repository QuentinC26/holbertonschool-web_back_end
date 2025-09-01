function displayMessage() {
  const http = require('http');
  http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello NodeJS!');
  }).listen(8080);
}

module.exports = displayMessage; 
