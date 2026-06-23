import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  newTask = '';

  todos: Todo[] = [
    {
      id: 1,
      title: 'Estudar Angular',
      completed: false
    }
  ];

  addTask(): void {

    const title = this.newTask.trim();

    if (!title) {
      return;
    }

    this.todos.push({
      id: Date.now(),
      title,
      completed: false
    });

    this.newTask = '';
  }

  deleteTask(id: number): void {
    this.todos = this.todos.filter(t => t.id !== id);
  }

  toggle(task: Todo): void {
    task.completed = !task.completed;
  }
}