function countStudents(path) {
  const fs = require('fs');
  const data = fs.readFileSync(path, { encoding: 'utf8', flag: 'r' })
  if (path !== 'database.csv') {
    throw new Error('Cannot load the database')
  }
  const line = data.split("\n");
  console.log(`Number of students: ${(line.length) - 2}`)
  const CS_list = [];
  const SWE_list = [];
  if (line === 'CS') {
    CS_list.push(line)
    console.log(CS_list)
  }
  if (line === 'SWE') {
    SWE_list.push(line)
    console.log(SWE_list)
  }
  console.log(`Number of students in ${data.field}: ${line.length}. List: ${data.firstname}`)
  console.log(`Number of students in ${data.field}: ${line.length}. List: ${data.firstname}`)
}

module.exports = countStudents;
