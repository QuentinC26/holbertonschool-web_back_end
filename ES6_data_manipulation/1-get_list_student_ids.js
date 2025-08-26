export default function getListStudentIds(NewArray) {
  if (!Array.isArray(NewArray)) {
    return [];
  }
  return NewArray.map(NewId => NewId.id)
}
