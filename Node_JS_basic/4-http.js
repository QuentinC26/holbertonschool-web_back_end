const http = require('http');

app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
})

  .listen(1245);

module.exports = app;
