export default function getStudentsByLocation(JustLocation, city) {
  return JustLocation.filter(NewLocation => NewLocation.location === city);
}
