import { StudentEntity } from "../entities";
import { studentRepository } from "../repositories/student.repository";

export const deleteStudentUseCase = async (studentId: number): Promise<boolean> => {
  return await studentRepository.delete(studentId);
};
