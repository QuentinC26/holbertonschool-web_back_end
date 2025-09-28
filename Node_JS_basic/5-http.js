const http = require('http');
const fs = require('fs');

const filePath = process.argv[2];

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const data = fs.readFileSync(filePath, { encoding: 'utf8', flag: 'r' });
      const lines = data.trim().split('\n');
      const students = [];
      const csStudents = [];
      const sweStudents = [];

      lines.shift();

      for (const line of lines) {
        const student = line.split(',');
        students.push(student);
      }

      for (const student of students) {
        if (student[3] === 'CS') {
          csStudents.push(` ${student[0]}`);
        } else if (student[3] === 'SWE') {
          sweStudents.push(` ${student[0]}`);
        }
      }

      console.log(`Number of students: ${students.length}`);
      console.log(`Number of students in CS: ${csStudents.length}. List:${csStudents}`);
      console.log(`Number of students in SWE: ${sweStudents.length}. List:${sweStudents}`);

      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('This is the list of students');
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Cannot load the database');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

app.listen(1245);

module.exports = app;
