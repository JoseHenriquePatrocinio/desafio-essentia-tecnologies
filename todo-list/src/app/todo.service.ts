import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export type Todo = {
  id: number;
  title: string;
  active: boolean;
  done: boolean;
};

@Injectable({ providedIn: 'root' })
export class TodoService {

  private api = 'http://localhost:3000/api/todos';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.api);
  }

  create(title: string): Observable<Todo> {
    return this.http.post<Todo>(this.api, { title });
  }

  delete(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }

  update(todo: Todo) {
    return this.http.put(`${this.api}/${todo.id}`, todo);
  }
}