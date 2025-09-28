const http = require('http');
const fs = require('fs');
const path = process.argv[2];

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const data = fs.readFileSync(path, { encoding: 'utf8', flag: 'r' });
        const line = data.trim().split('\n');
        const FirstList = [];
        const CSList = [];
        const SWEList = [];
        for (const lineItem of line) {
          const separatorOne = lineItem.split(',');
          FirstList.push(separatorOne);
        }
        FirstList.shift();
        for (const NewIndex of FirstList) {
          if (NewIndex[3] === 'CS') {
            CSList.push(` ${NewIndex[0]}`);
          }
          if (NewIndex[3] === 'SWE') {
            SWEList.push(` ${NewIndex[0]}`);
          }
        }
        console.log(`Number of students: ${(FirstList.length)}`);
        console.log(`Number of students in CS: ${(CSList.length)}. List:${(CSList)}`);
        console.log(`Number of students in SWE: ${(SWEList.length)}. List:${(SWEList)}`);
  } else {
  throw new Error('Cannot load the database')
}})

  .listen(1245);

module.exports = app;
