export default function getStudentsByLocation(JustLocation) {
  return JustLocation.filter(NewLocation => NewLocation.location === 'San Francisco');
}
