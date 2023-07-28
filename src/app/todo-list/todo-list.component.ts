import { Router } from '@angular/router';
import { TodosService } from '../todos.service';
import { Todo } from './../todo';
import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  newTodo: Partial<Todo> = { title: '', completed: false };
  todos: Todo[] = [];
  message: string = '';
  isLoading: boolean = true;

  constructor(private todoSvc: TodosService, private router: Router) {
    // Simulate a delay of two seconds before loading the page
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  ngOnInit() {
    this.fetchTodos();
  }

  fetchTodos() {
    this.todoSvc.get().then((todos) => {
      this.todos = todos;
      this.checkTodoStatus();
    });
  }

  createTodo() {
    console.log('New Todo:', this.newTodo);
    this.message = 'Todo added';
    this.todos.push(this.newTodo as Todo);
    this.newTodo = { title: '', completed: false };
    this.checkTodoStatus();
  }

  markAsCompleted(todo: Todo) {
    todo.completed = true;
    console.log(todo);
    this.todoSvc.addCompletedTodo(todo);

    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
    this.checkTodoStatus();
  }

  checkTodoStatus() {
    if (this.todos.length === 0) {
      this.message = 'Ops, you have no todos';
    } else {
      this.message = '';
    }
  }
}
