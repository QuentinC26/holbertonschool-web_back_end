const NewArray = [
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 2, firstName: 'James', location: 'Columbia' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' }
]

NewArray.map(getListStudentIds);

export default function getListStudentIds(NewArray) {
  return [NewArray.id];
}