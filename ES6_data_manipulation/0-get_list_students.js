export default function getListStudents(id, firstName, location) {
  const Array = [
    {
    'id': 1,
    'firstname': 'Guillaume',
    'location': 'San Francisco'
    },
    {
    'id': 2,
    'firstname': 'James',
    'location': 'Columbia'
    },
    {
    'id': 5,
    'firstname': 'Serena',
    'location': 'San Francisco'
    }
  ]
  id = Array[0];
  firstName = Array[1];
  location = Array[2];
  const NewArray = [id, firstName, location]
  return NewArray;
}
