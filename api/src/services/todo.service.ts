import { db } from "../config/db";
import { Todo } from "../models/todo.model";

export class TodoService {
  async findAll() {
    const [rows] = await db.query("SELECT * FROM todos");
    return rows;
  }

  async create(todo: Todo) {
    const [result]: any = await db.query(
      "INSERT INTO todos (title, done) VALUES (?, ?)",
      [todo.title, false]
    );
    return { id: result.insertId, ...todo };
  }

  async update(id: number, todo: Partial<Todo>) {
    const [[current]]: any = await db.query(
      "SELECT * FROM todos WHERE id = ?",
      [id]
    );
  
    await db.query(
      "UPDATE todos SET title = ?, done = ?, active = ? WHERE id = ?",
      [
        todo.title ?? current.title,
        todo.done ?? current.done,
        true,
        id,
      ]
    );
  }

  async delete(id: number) {
    await db.query(
      "UPDATE todos SET active = ? WHERE id = ?",
      [false, id]
    );
  }

}