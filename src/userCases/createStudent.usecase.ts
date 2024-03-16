import { StudentEntity } from "../entities";
import { StudentRepository } from "../repositories/student.repository";

export const createStudentUseCase = async (student: StudentEntity): Promise<StudentEntity | null> => {
  return await StudentRepository.create(student);
};
