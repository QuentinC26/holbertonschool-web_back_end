export default function appendToEachArrayValue(array, appendString) {
  const thelist = [];
  for (const index of array) {
    thelist[0] = appendString + array[0];
    thelist[1] = appendString + array[1];
    thelist[2] = appendString + array[2];
  }
  return thelist;
}
