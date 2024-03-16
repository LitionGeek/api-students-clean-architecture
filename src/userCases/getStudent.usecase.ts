import { StudentEntity } from "../entities";
import { studentRepository } from "../repositories/student.repository";

export const getStudentUseCase = async (studentId: number): Promise<StudentEntity | null> => {
  return await studentRepository.getAllById(studentId);
};
