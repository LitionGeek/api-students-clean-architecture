import { Router } from "express";
import { StudentController } from "../controllers";
import { StudentRepository } from "../repositories/student.repository";
import { StudentUseCases } from "../../application/use_Cases";

export class StudentRoutes {
  static get routes(): Router {
    const router = Router();
    const repo = new StudentRepository();
    const useCase = new StudentUseCases(repo);
    const controller = new StudentController(repo, useCase);
    router.post("/", controller.create);
    router.get("/", controller.getStudentList);
    router.get("/:id", controller.getStudent);
    router.put("/", controller.update);
    router.delete("/:id", controller.delete);

    return router;
  }
}
