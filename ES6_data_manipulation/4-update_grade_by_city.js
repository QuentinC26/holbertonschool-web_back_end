export default function updateStudentGradeByCity(StudentsList, city, newGrades) {
  return StudentsList
    .filter((Students) => Students.location === city)
    .map((Students) => {
      const Grades = newGrades.find((gde) => gde.studentId === StudentsList.id); 'gde = grade'
      return {
        ...Students,
        grade: Grades
      }
    }
  )
}
