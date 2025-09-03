function countStudents(path) {
  try {
    const fs = require('fs');
    const data = fs.readFileSync(path, { encoding: 'utf8', flag: 'r' });
    const line = data.trim().split("\n");
    TestList = [];
    FinalList = [];
    CSList = [];
    SWEList = [];
    for (index in line) {
        const separatorOne = line[index].split(",");
        TestList.push(separatorOne);
    }
    TestList.shift()
    for (indexTwo in TestList) {
       if (TestList[indexTwo][3] === 'CS') {
          CSList.push(TestList[indexTwo][0]);
       }
       if (TestList[indexTwo][3] === 'SWE') {
          SWEList.push(TestList[indexTwo][0]);
       } 
    }
    console.log(`Number of students: ${(TestList.length)}`);
    console.log(`Number of students in CS: ${(CSList.length)}. List: ${(CSList)}`);
    console.log(`Number of students in SWE: ${(SWEList.length)}. List: ${(SWEList)}`);
  }
  catch(err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
