export default function updateStudentGradeByCity(StudentsList, city, newGrades) {
  const FilterList = StudentsList.filter(Students => Students.location === city)
  const MappedList = FilterList.map(Filter => Filter)
  return {
    'id': MappedList.id,
    'FirstName': MappedList.firstName,
    'location': MappedList.location,
    'grade': newGrades.grade
  }
}
