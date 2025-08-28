export default function hasValuesFromArray(set, array) {
  return array.every(thearray => set.has(thearray));
}
