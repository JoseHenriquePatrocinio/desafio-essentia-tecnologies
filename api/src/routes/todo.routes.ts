import { Router } from "express";
import { TodoController } from "../controllers/todo.controller";

const router = Router();
const controller = new TodoController();

router.get("/todos", controller.getAll.bind(controller));
router.post("/todos", controller.create.bind(controller));
router.put("/todos/:id", controller.update.bind(controller));
router.delete("/todos/:id", controller.soft_delete.bind(controller));

export default router;