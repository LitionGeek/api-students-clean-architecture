import { Request, Response } from "express";
import { StudentRepository } from "../repositories/student.repository";
import { StudentEntity } from "../../domain/entities";
import { StudentUseCases } from "../../application/use_Cases";

export class StudentController {
  constructor(
    private readonly studentRepository: StudentRepository,
    private readonly createStudentUseCase: StudentUseCases
  ) {}

  create = (req: Request, res: Response) => {
    const student = new StudentEntity(
      0,
      req.body.name,
      req.body.nationality,
      req.body.career,
      req.body.password,
      req.body.phone,
      req.body.age
    );

    this.createStudentUseCase
      .createStudentUseCase(student)
      .then((student) => res.json(student))
      .catch((err) => res.status(400).json(err));
  };

  getStudentList = (req: Request, res: Response) => {
    this.createStudentUseCase
      .listStudentUseCase()
      .then((students) => res.json(students))
      .catch((err) => res.status(400).json(err));
  };

  getStudent = (req: Request, res: Response) => {
    const { id } = req.params;
    const studentId = parseInt(id);
    this.createStudentUseCase
      .getStudentUseCase(studentId)
      .then((student) => res.json(student))
      .catch((err) => res.status(400).json(err));
  };

  update = (req: Request, res: Response) => {
    const { id } = req.params;
    const studentId = parseInt(id);
    const student = new StudentEntity(
      0,
      req.body.name,
      req.body.nationality,
      req.body.career,
      req.body.password,
      req.body.phone,
      req.body.age
    );

    this.createStudentUseCase
      .updateStudentUseCase(studentId, student)
      .then((student) => res.json(student))
      .catch((err) => res.status(400).json(err));
  };

  delete = (req: Request, res: Response) => {
    const { id } = req.params;
    const studentId = parseInt(id);
    this.studentRepository
      .delete(studentId)
      .then((student) => res.json({ deleted: student }))
      .catch((err) => res.status(400).json(err));
  };
}
