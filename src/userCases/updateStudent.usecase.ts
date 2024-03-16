import { StudentEntity } from "../entities";
import { studentRepository } from "../repositories/student.repository";

export const updateStudentUseCase = async (
  studentId: number,
  newStudentData: StudentEntity
): Promise<StudentEntity | null> => {
  const exist = await studentRepository.getAllById(studentId);
  if (!exist) {
    return null;
  }
  const updatedStudent = { ...exist, ...newStudentData };
  return await studentRepository.update(studentId, updatedStudent);
};
