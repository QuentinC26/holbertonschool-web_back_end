export default function appendToEachArrayValue(array, appendString) {
  const thelist = [];
  for (const values of array) {
    thelist.push(appendString + values);
  }
  return thelist;
}
