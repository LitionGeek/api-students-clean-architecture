import { Router } from "express";
import { StudentRoutes } from "../routes/student.routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();
    router.use("/api/v1/student", StudentRoutes.routes);

    return router;
  }
}
