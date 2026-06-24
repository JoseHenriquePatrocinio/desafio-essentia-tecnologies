import { Request, Response } from "express";
import { TodoService } from "../services/todo.service";

const service = new TodoService();

export class TodoController {
  async getAll(req: Request, res: Response) {
    const data = await service.findAll();
    res.json(data);
  }

  async create(req: Request, res: Response) {
    const todo = await service.create(req.body);
    res.json(todo);
  }

  async update(req: Request, res: Response) {
    await service.update(Number(req.params.id), req.body);
    res.sendStatus(204);
  }

  async soft_delete(req: Request, res: Response) {
    await service.delete(Number(req.params.id));
    res.sendStatus(204);
  }
}