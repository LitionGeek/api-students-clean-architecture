import { StudentEntity } from "../entities";
import { studentRepository } from "../repositories/student.repository";

export const listStudentUseCase = async (): Promise<StudentEntity[]> => {
  return await studentRepository.getAll();
};
