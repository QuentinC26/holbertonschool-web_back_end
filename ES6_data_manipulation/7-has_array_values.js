export default function hasValuesFromArray(set, array) {
  return array.every(set => set in array);
}
