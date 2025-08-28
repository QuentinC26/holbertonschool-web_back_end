export default function updateStudentGradeByCity(StudentsList, city, newGrades) {
  return StudentsList
    .filter((student) => student.location === city)
    .map((student) => {
      const Grades = newGrades.find((gde) => gde.studentId === student.id); //gde = grade
      return {
        ...student,
        grade: Grades ? Grades.grade:'N/A',
      };
    });
}
