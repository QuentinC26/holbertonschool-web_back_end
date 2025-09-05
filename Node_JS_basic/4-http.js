const http = require('http');

http.createServer((req, app) => {
  app.writeHead(200, { 'Content-Type': 'text/plain' });
  app.end('Hello Holberton School!');
})

  .listen(1245);
