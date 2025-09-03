const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, { encoding: 'utf8', flag: 'r' });
    const line = data.trim().split('\n');
    const FirstList = [];
    const CSList = [];
    const SWEList = [];
    for (const index in line) {
      const separatorOne = line[index].split(',');
      FirstList.push(separatorOne);
    }
    FirstList.shift();
    for (const indexTwo in FirstList) {
      if (FirstList[indexTwo][3] === 'CS') {
        CSList.push(FirstList[indexTwo][0]);
      }
      if (FirstList[indexTwo][3] === 'SWE') {
        SWEList.push(FirstList[indexTwo][0]);
      }
    }
    console.log(`Number of students: ${(FirstList.length)}`);
    console.log(`Number of students in CS: ${(CSList.length)}. List: ${(CSList)}`);
    console.log(`Number of students in SWE: ${(SWEList.length)}. List: ${(SWEList)}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
