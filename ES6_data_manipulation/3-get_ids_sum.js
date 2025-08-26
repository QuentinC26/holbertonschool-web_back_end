export default function getStudentIdsSum(SumAllStudents) {
    return SumAllStudents.reduce((total, students) => total + students.id, 0);
}
