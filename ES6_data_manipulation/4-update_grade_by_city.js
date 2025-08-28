export default function updateStudentGradeByCity(StudentsList, city, newGrades) {
  return StudentsList
    .filter((Students) => Students.location === city)
    .map((Students) => {
      const Grades = newGrades.find((gde) => gde.studentId === Students.id); //gde = grade
      return {
        ...Students,
        grade: Grades ? Grades.grade:'N/A',
      };
    });
}
