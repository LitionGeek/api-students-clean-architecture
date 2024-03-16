import { StudentEntity } from "../entities";
import { StudentRepository } from "../repositories/student.repository";

export class StudentUseCases {
  constructor(private readonly studentRepository: StudentRepository) {}

  createStudentUseCase = async (student: StudentEntity): Promise<StudentEntity | null> => {
    return await this.studentRepository.create(student);
  };

  getStudentUseCase = async (studentId: number): Promise<StudentEntity | null> => {
    return await this.studentRepository.getById(studentId);
  };

  deleteStudentUseCase = async (studentId: number): Promise<boolean> => {
    return await this.studentRepository.delete(studentId);
  };

  listStudentUseCase = async (): Promise<StudentEntity[]> => {
    return await this.studentRepository.getAll();
  };

  updateStudentUseCase = async (studentId: number, newStudentData: StudentEntity): Promise<StudentEntity | null> => {
    const exist = await this.studentRepository.getById(studentId);
    if (!exist) return null;
    const updatedStudent = { ...exist, ...newStudentData };
    return await this.studentRepository.update(studentId, updatedStudent);
  };
}
