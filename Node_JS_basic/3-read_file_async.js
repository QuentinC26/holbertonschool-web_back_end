const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const thedata = await fs.promises.readFile(path, 'utf8');
    const line = thedata.trim().split('\n');
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
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
