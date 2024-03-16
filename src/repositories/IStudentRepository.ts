import { StudentEntity } from "../entities";

export interface IStudentRepository {
  create(student: StudentEntity): Promise<StudentEntity | null>;
  getAll(): Promise<StudentEntity[]>;
  getById(studentId: number): Promise<StudentEntity | null>;
  update(studentId: number, updateStudent: StudentEntity): Promise<StudentEntity | null>;
  delete(studentId: number): Promise<boolean>;
}
