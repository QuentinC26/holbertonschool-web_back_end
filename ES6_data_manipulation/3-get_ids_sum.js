export default function getStudentIdsSum(SumAllStudents) {
    return SumAllStudents.reduce(SumStudents => Math.round(Number(SumStudents.id)))
}