import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private url: string = "http://localhost:3000/todos"; // Aggiungi '/todos' alla fine dell'URL
  private todos: Todo[] = [];
  private completedTodos: Todo[] = [];

  constructor() { }

  get(): Promise<Todo[]> {
    return fetch(this.url).then(res => res.json());
  }

  create(todo: Partial<Todo>): Promise<Todo> {
    return fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    }).then(res => res.json());
  }

  delete(todo:Todo){
    return fetch (this.url + '/'+ todo.id,{
      method: 'DELETE'
    }).then(res=> res.json())
  }


  getCompletedTodos(): Todo[] {
    return this.completedTodos;
  }


  addCompletedTodo(todo: Todo) {
    this.completedTodos.push(todo);
  }
}
